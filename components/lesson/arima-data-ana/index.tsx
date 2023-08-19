'use client';
import React, { createContext } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import CapTitle from '../common/cap-title';
import DataPrepare from './data-prepare';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import DataPre from './data-pre';

interface DataContextProps {
  originData: Array<Record<string, any>>;
  setOriginData: (_d: Array<Record<string, any>>) => void;
}

export const DataContext = createContext<DataContextProps>({
  originData: [],
  setOriginData: (_d) => {},
});

export default function ArimaDataAna() {
  const [originData, setOriginData] = React.useState<DataContextProps['originData']>([]);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-lime-900" title="数据准备" code={ArimaDataAnaCode[0]} />,
      children: <DataPrepare />,
    },
    {
      key: '2',
      label: <CapTitle className="text-lime-900" title="数据预处理" />,
      children: <DataPre />,
    },
  ];

  return (
    <DataContext.Provider
      value={{
        originData,
        setOriginData,
      }}
    >
      <div className="h-[calc(100vh-120px)]">
        <div className="text-sm text-center p-2">
          根据给定的数据集
          <a href="/file/格力电器营业收入.xlsx">格力电器营业收入.xlsx </a>, 学习企业营业收入预测的 <code>ARIMA(p,d,q)</code>{' '}
          建模过程和预测方法
        </div>
        <Collapse defaultActiveKey="1" accordion items={items} />
      </div>
    </DataContext.Provider>
  );
}