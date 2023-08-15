import { useMemo } from 'react';
import Link from 'next/link';
import { Tabs } from 'antd';
import ArimaDesc from '@/components/lesson/arima-desc';

export default function Arima() {
  const items = useMemo(
    () => [
      {
        label: 'ARIMA模型介绍',
        key: 'desc',
        children: <ArimaDesc />,
      },
      {
        label: '数据预处理',
        key: 'data-pre',
      },
      {
        label: '建立ARIMA模型',
        key: 'build-model',
      },
    ],
    []
  );

  return (
    <div className="flex flex-col justify-stretch w-full h-full">
      <div className="flex items-center mb-3 cursor-pointer">
        <Link href="/lesson">
          <i className="text-sm fa-solid fa-arrow-left text-primary mr-1"></i>
          <span className="text-sm text-primary">基于ARIMA模型的营业收入预测</span>
        </Link>
      </div>
      <div>
        <Tabs defaultActiveKey="1" centered items={items} />
      </div>
    </div>
  );
}
