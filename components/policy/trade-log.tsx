import fetcher from '@/lib/fetcher';
import Table, { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWR from 'swr';
import { DatePicker } from 'antd';
import { formatDecimal } from '@/lib/numUtil';

const { RangePicker } = DatePicker;

interface DataType {
  key: string | number;
  date: string;
  time: string;
  code: string;
  name: string;
  opera: string;
  price: number;
  count: number;
  sum: number;
  margin: number | null;
  rate: number | null;
}

const OpMap = {
  OPEN_SHORT: '开空',
  OPEN_LONG: '开多',
  CLOSE_SHORT: '平空',
  CLOSE_LONG: '平多',
  BUY: '买入',
  SALE: '卖出',
  CLOSE_BUY: '平仓买入',
  CLOSE_SALE: '平仓卖出',
  OPEN_BUY: '开仓买入',
};

export default function TradeLog() {
  const [tablePage, setTablePage] = useState(1);
  const [searchDates, setSearchDates] = useState<any>([null, null]);

  const tradeFetch = async (url: string) => {
    const response = await fetcher(url);
    const data = response.data.map((item: any, index: number) => {
      const [date, time] = item.trade_date.split(' ');
      const opera = OpMap[item.operation_type as keyof typeof OpMap];
      const price = Number(item.trade_price).toFixed(2);
      const sum = Number(item.trade_value).toFixed(2);
      const c = isNaN(item.commissions) ? 0 : item.commissions;
      const d = isNaN(item.cost) ? 0 : item.cost;
      const rate = Number(c) + Number(d);

      return {
        key: index,
        date,
        time,
        code: item.asset_code,
        name: item.stock_name,
        type: item.operation_type,
        opera,
        price,
        count: item.trade_amount,
        sum,
        margin: item?.margin || null,
        rate,
      };
    });
    const total = response.total;

    return {
      data,
      total,
    };
  };

  const rowClassName = (record: DataType, index: number) => {
    return tradeData[index].date !== tradeData[index + 1]?.date ? 'border-b-[18px] border-b-[#f1f5f9]' : '';
  };

  const disabledDate: any = (date: any, partial: any) => {};

  const fetchUrl = () => {
    if (searchDates[0] && searchDates[1]) {
      return `/api/local?file=trade-log&page=${1}&start=${searchDates[0]}&end=${searchDates[1]}`;
    } else {
      return `/api/local?file=trade-log&page=${1}`;
    }
  };

  const { data, isLoading } = useSWR(fetchUrl(), tradeFetch);
  const tradeData: Array<DataType> = data?.data || [];
  const tradeDataTotal: number = data?.total || 0;

  const columns: ColumnsType<DataType> = [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      width: '6%',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: '8%',
    },
    {
      title: '代码/名称',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: DataType) => {
        return `${record.code} ${name}`;
      },
      width: '8%',
    },
    {
      title: '买卖操作',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        if (type === 'BUY') {
          return <div className="text-red-500">{OpMap[type]}</div>;
        } else if (type === 'SALE') {
          return <div className="text-green-500">{OpMap[type]}</div>;
        } else {
          return <div>开仓买入</div>;
        }
      },
      width: '8%',
    },
    {
      title: '成交价',
      dataIndex: 'price',
      key: 'price',
      width: '8%',
    },
    {
      title: '成交数量',
      dataIndex: 'count',
      key: 'count',
      width: '8%',
    },
    {
      title: '成交金额',
      dataIndex: 'sum',
      key: 'sum',
      width: '8%',
    },
    {
      title: '保证金',
      dataIndex: 'margin',
      key: 'margin',
      render: (margin: number | null) => {
        return formatDecimal(margin);
      },
      width: '8%',
    },
    {
      title: '费率',
      dataIndex: 'rate',
      key: 'rate',
      render: (rate: number | null) => {
        return formatDecimal(rate);
      },
      width: '8%',
    },
    {
      title: '',
      dataIndex: 'rate',
      key: 'rate',
      render: (rate: number | null) => {
        return null;
      },
      width: '22%',
    },
  ];

  return (
    <div className="relative flex w-full h-full flex-col justify-stretch p-3">
      <RangePicker
        value={searchDates}
        onChange={setSearchDates}
        disabledTime={disabledDate}
        className="absolute top-[20px] right-[120px] w-[200px] z-10"
      />
      <Table
        className="trade-log-table"
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
