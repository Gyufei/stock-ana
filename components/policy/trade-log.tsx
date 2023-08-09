import fetcher from '@/lib/fetcher';
import Table, { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWR from 'swr';
import { formatDecimal } from '@/lib/numUtil';
import { OpMap } from '@/lib/constant';

// import { DatePicker } from 'antd';
// const { RangePicker } = DatePicker;

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
  // margin: number | null;
  rate: number | null;
}

export default function TradeLog() {
  const [tablePage, setTablePage] = useState(1);

  const tradeFetch = async (url: string) => {
    const response = await fetcher(url);
    if (!response) {
      return undefined;
    }

    const data = response.transactionDetailsList.map((item: any, index: number) => {
      const type = Number(item.buy) > 0 ? 'BUY' : 'SALE';
      const opera = OpMap[type as keyof typeof OpMap];
      const price = Number(item.clsPrice).toFixed(2);
      const count = Number(item.buy || item.sell).toFixed(2);

      return {
        key: index,
        date: item.date,
        time: '09:30:00',
        code: item.code,
        name: item.codeName,
        type: type,
        opera,

        price,
        count,
        sum: Number(item.money).toFixed(2),
        // margin: item?.margin || null,
        rate: item?.rate || null,
      };
    });
    const total = response.transactionDetailsList.length;

    return {
      data,
      total,
    };
  };

  // const [searchDates, setSearchDates] = useState<any>([null, null]);
  // const disabledDate: any = (_date: any, _partial: any) => {};

  const { data, isLoading } = useSWR(
    `http://localhost:8080/getAlapaBackTest?windowSize=30&code=002560&startTime=1990-7-27&endTime=2023-07-27&initCash=10000&serviceCharge=0.005`,
    tradeFetch
  );
  const tradeData: DataType[] = data?.data || [];
  const tradeDataTotal: number = data?.total || 0;

  const rowClassName = (record: DataType, index: number) => {
    return tradeData[index].date !== tradeData[index + 1]?.date ? 'border-b-[18px] border-b-[#f1f5f9]' : '';
  };

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
    // {
    //   title: '保证金',
    //   dataIndex: 'margin',
    //   key: 'margin',
    //   render: (margin: number | null) => {
    //     return formatDecimal(margin);
    //   },
    //   width: '8%',
    // },
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
      render: () => {
        return null;
      },
      width: '22%',
    },
  ];

  return (
    <div className="relative flex w-full h-full flex-col justify-stretch p-3">
      {/* <RangePicker
        value={searchDates}
        onChange={setSearchDates}
        disabledTime={disabledDate}
        className="absolute top-[20px] right-[120px] w-[200px] z-10"
      /> */}
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
