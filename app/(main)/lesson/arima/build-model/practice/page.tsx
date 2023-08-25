'use client';

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Provider, useAtomValue } from 'jotai';

import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

import CapTitle from '@/components/share/cap-title';
import DataPrepare from '@/components/lesson/arima/common/data-prepare';
import { filesAtom } from '@/lib/states/lesson-arima-state';
import BuildModel from '@/components/lesson/arima/build-model/build-model';
import { useOriginData } from '@/lib/hook/use-lesson-global-state';
import CommonBtn from '@/components/share/common-btn-group';

function ArimaDataAnaBase() {
  useOriginData('preprocessing/1');
  const files = useAtomValue(filesAtom);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-lime-900" title="数据准备" code={ArimaDataAnaCode[0]} />,
      children: <DataPrepare />,
    },
    {
      key: '2',
      label: <CapTitle className="text-lime-900" title="数据预处理" />,
      children: <BuildModel />,
    },
  ];

  return (
    <div className="h-screen p-4">
      <div className="flex items-center mb-4">
        <div className="flex flex-col flex-1">
          <div className="text-gray-600 text-lg">建立ARIMA模型-课堂练习</div>
          <div className="text-sm p-2 pl-0 flex-1">
            根据给定的数据集
            <a href={files[0].link} download>
              {' '}
              {files[0].name}
            </a>
            , 学习企业营业收入预测的 <code>ARIMA(p,d,q)</code> 建模过程和预测方法
          </div>
        </div>
        <CommonBtn />
      </div>
      <Collapse defaultActiveKey="1" accordion items={items} />
    </div>
  );
}

export default function ArimaDataAna() {
  return (
    <Provider>
      <ArimaDataAnaBase />
    </Provider>
  );
}
