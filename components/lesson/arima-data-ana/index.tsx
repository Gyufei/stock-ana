'use client';
import { useEffect } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Provider, useSetAtom, useAtomValue } from 'jotai';

import CapTitle from '../common/cap-title';
import DataPrepare from './data-prepare';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import DataPre from './data-pre';
import dataProcessPoster from '@/lib/http/data-process-poster';
import { filesAtom, originDataAtom } from './state';
import { DownloadBtn } from '@/components/share/download-btn';

function ArimaDataAnaBase() {
  const setOriginData = useSetAtom(originDataAtom);
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
      children: <DataPre />,
    },
  ];

  useEffect(() => {
    async function getOrigin() {
      const proData = await dataProcessPoster('processed_data');
      setOriginData(proData);
    }

    getOrigin();
  }, []);

  return (
    <div className="h-[calc(100vh-120px)]">
      <div className='flex items-center'>
        <DownloadBtn />
        <div className="text-sm text-center p-2 flex-1">
          根据给定的数据集
          <a href={files[0].link} download>
            {' '}
            {files[0].name}
          </a>
          , 学习企业营业收入预测的 <code>ARIMA(p,d,q)</code> 建模过程和预测方法
        </div>
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
