import { PosMap } from '@/lib/constant';
import { formatDecimal } from '@/lib/numUtil';
import Table, { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';

interface DataType {
  key: string | number;
  date: string;
  isChild: boolean;

  avgPrice?: string;
  posType?: string;
  code?: string;
  codeName?: string;
  closePrice?: string;
  value?: string;
  num?: string;
  count?: string;
  children?: DataType[];

  len?: number;
}

const setPosType = function (t: keyof typeof PosMap) {
  return PosMap[t] || '--';
};

// const setPosDirection = (t: keyof typeof PosDirect) => {
//   return PosDirect[t] || '--';
// };

export default function HistoryGain({ tradeData }: any) {
  const [tablePage, setTablePage] = useState(1);
  // const [searchDates, setSearchDates] = useState<any>([null, null]);

  const hisData = useMemo(() => {
    return (tradeData?.historicalPositionList || []).reverse().map((row: any, row_index: number) => {
      const children = [
        {
          key: `${row_index}-${row.code}`,
          date: '09:30:00',
          code: row.code,
          name: row.codeName,
          avgPrice: formatDecimal(row.closPrice),
          closePrice: formatDecimal(row.closPrice),
          posType: 'STOCK',
          // posDirection: null,
          // margin: null,
          value: formatDecimal(row.value),
          num: formatDecimal(row.num),
          count: formatDecimal(row.count),
          isChild: true,
        },
      ];

      return {
        key: row_index,
        date: row.date,
        value: formatDecimal(row.value),
        count: formatDecimal(row.count),
        len: children.length,
        isChild: false,

        children,
      };
    });
  }, [tradeData]);

  const rowClassName = (record: DataType) => {
    return record.isChild ? 'child-row' : 'border-t-[18px] border-t-[#f1f5f9]';
  };

  const tradeDataTotal = hisData?.length || 0;

  const columns: ColumnsType<DataType> = [
    {
      title: '日期(时间)',
      dataIndex: 'date',
      key: 'date',
      width: '12%',
      render: (date: string, record: DataType) => {
        return record.isChild ? `${record.date}` : <span className="text-primary">{record.date}</span>;
      },
    },
    {
      title: '代码/名称',
      dataIndex: 'codeName',
      key: 'codeName',
      render: (cn: string, record: DataType) => {
        return record.isChild ? `${record.code} ${cn}` : `持有${record.len}只证券`;
      },
      width: '12%',
    },
    {
      title: '类型',
      dataIndex: 'posType',
      key: 'posType',
      width: '5%',
      render: (posType: any, record: DataType) => {
        return record.isChild ? setPosType(posType) : '';
      },
    },
    // {
    //   title: '方向',
    //   dataIndex: 'posDirection',
    //   key: 'posDirection',
    //   width: '5%',
    //   render: (dir: any, record) => {
    //     return record.isChild ? setPosDirection(dir) : '';
    //   },
    // },
    {
      title: '成交数量',
      dataIndex: 'count',
      key: 'count',
      width: '5%',
      render: (count: number, record) => {
        return record.isChild ? count : '';
      },
    },
    {
      title: '收盘价/结算价',
      dataIndex: 'closePrice',
      key: 'closePrice',
      width: '12%',
      render: (closePrice: number, record) => {
        return record.isChild ? closePrice : '';
      },
    },
    {
      title: '数量',
      dataIndex: 'value',
      key: 'value',
      width: '7%',
      render: (value: number, record) => {
        return record.isChild ? value : '';
      },
    },
    // {
    //   title: '保证金',
    //   dataIndex: 'margin',
    //   key: 'margin',
    //   width: '7%',
    //   render: (margin: number, record) => {
    //     return record.isChild ? margin : '';
    //   },
    // },
    {
      title: '市值',
      dataIndex: 'num',
      key: 'num',
      width: '12%',
      render: (num: number, record) => {
        return record.isChild ? num : `总资产: ${record.value}`;
      },
    },
    {
      title: '开仓均价',
      dataIndex: 'avgPrice',
      key: 'avgPrice',
      width: '12%',
      render: (avg: number, record) => {
        return record.isChild ? avg : '';
      },
    },
    {
      title: '累计盈亏',
      dataIndex: 'count',
      key: 'count',
      width: '14%',
      render: (count: number, record) => {
        return record.isChild ? count : `累计盈亏: ${count}`;
      },
    },
  ];

  return (
    <div className="relative flex w-full h-full flex-col justify-stretch p-3">
      <Table
        className="history-gain-table"
        pagination={{
          position: ['bottomCenter'],
          current: tablePage,
          total: tradeDataTotal,
          pageSize: 20,
          showSizeChanger: false,
          onChange: (p) => {
            setTablePage(p);
          },
        }}
        scroll={{ y: 455 }}
        rowClassName={rowClassName}
        columns={columns}
        dataSource={hisData}
      />
    </div>
  );
}
