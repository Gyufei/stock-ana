import Table, { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';
import { formatDecimal } from '@/lib/numUtil';
import { OpMap } from '@/lib/constant';

// import { DatePicker } from 'antd';
// const { RangePicker } = DatePicker;

interface DataType {
  key: string | number;
  date: string;
  time: string;
  code: string;
  codeName: string;
  opera: string;
  clsPrice: number;
  count: number;
  money: number;
  // margin: number | null;
  rate: number | null;
}

export default function TradeLog({ tradeData }: any) {
  const [tablePage, setTablePage] = useState(1);

  const logData = useMemo(() => {
    const data = (tradeData?.transactionDetailsList || []).map((item: any, index: number) => {
      const type = Number(item.buy) > 0 ? 'BUY' : 'SALE';
      const opera = OpMap[type as keyof typeof OpMap];
      const count = Number(item.buy || item.sell).toFixed(2);

      return {
        key: index,
        date: item.date,
        time: '09:30:00',
        code: item.code,
        codeName: item.codeName,
        clsPrice: Number(item.clsPrice).toFixed(2),
        type,
        opera,
        count,
        money: Number(item.money).toFixed(2),
        rate: item?.rate || null,
        // margin: item?.margin || null,
      };
    });

    return data;
  }, [tradeData]);

  // const [searchDates, setSearchDates] = useState<any>([null, null]);
  // const disabledDate: any = (_date: any, _partial: any) => {};

  const logLen: number = logData.length;

  const rowClassName = (record: DataType, index: number) => {
    return logData[index].date !== logData[index + 1]?.date ? 'border-b-[18px] border-b-[#f1f5f9]' : '';
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
      dataIndex: 'codeName',
      key: 'codeName',
      render: (cn: string, record: DataType) => {
        return `${record.code} ${cn}`;
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
      dataIndex: 'clsPrice',
      key: 'clsPrice',
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
      dataIndex: 'money',
      key: 'money',
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
        pagination={{
          position: ['bottomCenter'],
          current: tablePage,
          total: logLen,
          pageSize: 20,
          showSizeChanger: false,
          onChange: (p) => {
            setTablePage(p);
          },
        }}
        rowClassName={rowClassName}
        columns={columns}
        dataSource={logData}
      />
    </div>
  );
}
