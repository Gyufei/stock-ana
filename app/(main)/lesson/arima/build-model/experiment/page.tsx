'use client';

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useAtomValue } from 'jotai';

import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

import CapTitle from '@/components/share/cap-title';
import DataPrepare from '@/components/lesson/arima/common/data-prepare';
import { filesAtom } from '@/lib/states/lesson-arima-state';
import BuildModel from '@/components/lesson/arima/build-model/build-model';
import { useInitLessonOriginData } from '@/lib/hook/use-init-lesson-origin-data';
import CommonBtn from '@/components/share/common-btn-group';
import { useInitLessonId } from '@/lib/hook/use-init-lesson-id';
import { useInitLessonFiles } from '@/lib/hook/use-init-lesson-files';
import { useInitLessonComments } from '@/lib/hook/use-init-lesson-comment';

export default function ArimaDataAna() {
  useInitLessonId(1, 3);
  useInitLessonOriginData('preprocessing/1');
  useInitLessonFiles([
    {
      name: '格力电器营业收入.xlsx',
      link: '/file/格力电器营业收入.xlsx',
      type: 'file',
    },
  ]);
  useInitLessonComments();

  const files = useAtomValue(filesAtom);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-lime-900 text-lg" title="数据准备" code={ArimaDataAnaCode[0]} />,
      children: <DataPrepare />,
    },
    {
      key: '2',
      label: <CapTitle className="text-lime-900 text-lg" title="数据预处理" />,
      children: <BuildModel />,
    },
  ];

  return (
    <div className="h-fit min-h-screen p-4">
      <div className="flex items-center mb-4">
        <div className="flex flex-col flex-1">
          <div className="text-gray-600 text-lg">建立ARIMA模型-课程实验</div>
          <div className="text-sm p-2 pl-0 flex-1">
            根据给定的数据集
            <a href={files?.[0]?.link} download>
              {files?.[0]?.name}
            </a>
            , 学习企业营业收入预测的 <code>ARIMA(p,d,q)</code> 建模过程和预测方法
          </div>
        </div>
        <CommonBtn />
      </div>
      <Collapse defaultActiveKey="1" accordion ghost items={items} />
    </div>
  );
}
