'use client';

import { Tabs } from 'antd';
import Link from 'next/link';

export default function PolicyItem() {
  const items = [
    {
      label: '收益概览',
      key: '1',
      children: '',
    },
    {
      label: '交易明细',
      key: '2',
      children: '',
    },
    {
      label: '历史持仓',
      key: '3',
      children: '',
    },
    // {
    //   label: '输出日志',
    //   key: '4',
    //   children: <div></div>,
    // },
    {
      label: '收益',
      key: '5',
      children: <div></div>,
    },
    {
      label: 'Alpha',
      key: '6',
      children: <div></div>,
    },
    {
      label: 'Beta',
      key: '7',
      children: <div></div>,
    },
    {
      label: 'Sharpe',
      key: '8',
      children: <div></div>,
    },
    {
      label: 'Sortino',
      key: '9',
      children: <div></div>,
    },
    {
      label: 'Information Ratio',
      key: '10',
      children: <div></div>,
    },
    {
      label: 'Volatility',
      key: '11',
      children: <div></div>,
    },
    {
      label: '最大回撤',
      key: '12',
      children: <div></div>,
    },
  ];

  return (
    <div className="flex flex-col justify-stretch w-full h-full">
      <div className="flex items-center mb-3 cursor-pointer">
        <Link href="/policy-library">
          <i className="text-sm fa-solid fa-arrow-left text-primary mr-1"></i>
          <span className="text-sm text-primary">彼得林奇PEG价值选股策略</span>
        </Link>
      </div>
      <div className="flex flex-col justify-stretch rounded">
        <div className="flex items-center gap-x-4 bg-white py-5 px-2 text-sm">
          <div>回测日期：2014-01-01 至 2018-12-31</div>
          <div>|</div>
          <div> 资金：1000000 </div>
          <div>|</div>
          <div>频率：每日</div>
          <div>|</div>
          <div>总运行时长：154秒</div>
        </div>
      </div>
      <div className="flex-1 flex items-stretch">
        <Tabs
          className="policy-item-tab w-full"
          tabPosition="left"
          tabBarStyle={{
            width: '160px',
            backgroundColor: 'rgb(203 213 225)',
            paddingTop: '15px',
          }}
          items={items}
        />
      </div>
    </div>
  );
}
