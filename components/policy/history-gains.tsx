import fetcher from '@/lib/fetcher';
import { formatDecimal } from '@/lib/numUtil';
import Table, { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWR from 'swr';

interface DataType {
  key: string | number;
  date: string;
  isChild: boolean;

  avgPrice?: number;
  posType?: string;
  posDirection?: string;
  margin?: number;
  code?: string;
  name?: string;
  closePrice?: number;
  amount?: number;
  sum?: number;
  floating?: number;
  children?: DataType[];

  asset?: number;
  cash?: number;
  totalProfitAndLoss?: number;
  len?: number;
}

const setPosType = function (t: string) {
  switch (t) {
    case 'METAL':
      return 'T+D';
    case 'STOCK':
      return '股票';
    case 'A':
      return '股票（旧）';
    case 'US':
      return '美股';
    case 'FOREX':
      return '外汇';
    case 'STKFUS':
      return '股票期货';
    case 'TICK':
      return '股票T+0';
    case 'FUTURES':
    case 'FUTURE':
      return '期货';
    default:
      return '--';
  }
};

const setPosDirection = (t: string) => {
  switch (t) {
    case 'LONG':
      return '多';
    case 'SHORT':
      return '空';
    default:
      return '--';
  }
};

const setPosDirectionClass = (t: string) => {
  switch (t) {
    case 'LONG':
      return 'red';
    case 'SHORT':
      return 'green';
    default:
      return '';
  }
};

export default function HistoryGain() {
  const [tablePage, setTablePage] = useState(1);
  const [searchDates, setSearchDates] = useState<any>([null, null]);

  const tradeFetch = async (url: string) => {
    const response = await fetcher(url);
    const data = response.data.map((row: any, row_index: number) => {
      const reg = new RegExp('([0-9-]+)T([0-9:]+)');
      const day = row.position_date.match(reg)[1];
      const time = row.position_date.slice(11, 19);

      const children = row.daily_position.map((child: any, c_index: number) => {
        return {
          key: `${row_index}-${c_index}`,
          date: time,
          avgPrice: formatDecimal(child.avg_price),
          posType: child.pos_type,
          posDirection: child.pos_direction,
          margin: formatDecimal(child.margin),
          code: child.asset_code,
          name: child.stock_name,
          closePrice: child.close_price,
          amount: child.pos_amount,
          sum: formatDecimal(child.pos_value.toFixed(2)),
          floating: formatDecimal(child.profit_and_loss.toFixed(2)),
          isChild: true,
        };
      });

      return {
        key: row_index,
        date: day,
        asset: row.total_asset_value.toFixed(2),
        cash: row.ending_cash.toFixed(2),
        totalProfitAndLoss: row.profit_and_loss.toFixed(2),
        len: children.length,

        children,
      };
    });
    const total = response.total;
    console.log(data);

    return {
      data,
      total,
    };
  };

  const rowClassName = (record: DataType, index: number) => {
    return record.isChild ? 'child-row' : 'border-t-[18px] border-t-[#f1f5f9]';
  };

  const { data, isLoading } = useSWR(`/api/local?file=history-gains&page=${1}`, tradeFetch);
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
      render: (posType: string, record: DataType) => {
        return record.isChild ? setPosType(posType) : '';
      },
    },
    {
      title: '方向',
      dataIndex: 'posDirection',
      key: 'posDirection',
      width: '5%',
      render: (dir: string, record) => {
        return;
        return record.isChild ? setPosDirection(dir) : '';
      },
    },
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
    {
      title: '保证金',
      dataIndex: 'margin',
      key: 'margin',
      width: '7%',
      render: (margin: number, record) => {
        return record.isChild ? margin : '';
      },
    },
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
        return record.isChild ? sum : `现金: ${record.cash}`;
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
