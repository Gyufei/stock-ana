import { PosMap } from '@/lib/constant';
import fetcher from '@/lib/fetcher';
import { formatDecimal } from '@/lib/numUtil';
import Table, { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWR from 'swr';

interface DataType {
  key: string | number;
  date: string;
  isChild: boolean;

  avgPrice?: string;
  posType?: string;
  // posDirection?: string;
  // margin?: number;
  code?: string;
  name?: string;
  closePrice?: string;
  amount?: string;
  sum?: string;
  floating?: string;
  children?: DataType[];

  asset?: string;
  cash?: string | null;
  totalProfitAndLoss?: string;
  len?: number;
}

const setPosType = function (t: keyof typeof PosMap) {
  return PosMap[t] || '--';
};

// const setPosDirection = (t: keyof typeof PosDirect) => {
//   return PosDirect[t] || '--';
// };

export default function HistoryGain() {
  const [tablePage, setTablePage] = useState(1);
  // const [searchDates, setSearchDates] = useState<any>([null, null]);

  const tradeFetch = async (url: string) => {
    const response = await fetcher(url);
    const historyRes: Array<any> = response.historicalPositionList;

    const data = historyRes.reverse().map((row: any, row_index: number) => {
      const day = row.date;
      const time = '09:30:00';

      const children = [
        {
          key: `${row_index}-${row.code}`,
          date: time,
          avgPrice: formatDecimal(row.closPrice),
          posType: 'STOCK',
          posDirection: null,
          margin: null,
          code: row.code,
          name: row.codeName,
          closePrice: formatDecimal(row.closPrice),
          amount: formatDecimal(row.value.toFixed(2)),
          sum: formatDecimal(row.num),
          floating: formatDecimal(row.count),
          isChild: true,
        },
      ];

      return {
        key: row_index,
        date: day,
        asset: formatDecimal(row.value.toFixed(2)),
        cash: null,
        totalProfitAndLoss: formatDecimal(row.count),
        len: children.length,
        isChild: false,

        children,
      };
    });
    const total = response.total;

    return {
      data,
      total,
    };
  };

  const rowClassName = (record: DataType) => {
    return record.isChild ? 'child-row' : 'border-t-[18px] border-t-[#f1f5f9]';
  };

  const { data, isLoading } = useSWR(
    // `/api/local?file=history-gains&page=${1}`,
    'http://localhost:8080/avgAndRsi2?code=600480&&n=14&&money=10000.0&beginDate=2000-01-01&endDate=2010-01-01',
    tradeFetch
  );
  const tradeData = data?.data || [];
  const tradeDataTotal = data?.total || 0;

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
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: DataType) => {
        return record.isChild ? `${record.code} ${name}` : `持有${record.len}只证券`;
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
      dataIndex: 'amount',
      key: 'amount',
      width: '7%',
      render: (amount: number, record) => {
        return record.isChild ? amount : '';
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
      dataIndex: 'sum',
      key: 'sum',
      width: '12%',
      render: (sum: number, record) => {
        return record.isChild ? sum : `总资产: ${record.asset}`;
      },
    },
    {
      title: '开仓均价',
      dataIndex: 'avgPrice',
      key: 'avgPrice',
      width: '12%',
      render: (sum: number, record) => {
        return record.isChild ? sum : `${record.cash || ''}`;
      },
    },
    {
      title: '累计盈亏',
      dataIndex: 'floating',
      key: 'floating',
      width: '14%',
      render: (floating: number, record) => {
        return record.isChild ? floating : `累计盈亏: ${record.totalProfitAndLoss}`;
      },
    },
  ];

  return (
    <div className="relative flex w-full h-full flex-col justify-stretch p-3">
      <Table
        className="history-gain-table"
        loading={isLoading}
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
        rowClassName={rowClassName}
        columns={columns}
        dataSource={tradeData}
      />
    </div>
  );
}
