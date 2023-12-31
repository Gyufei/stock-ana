'use client';

import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import CapTitle from '@/components/share/cap-title';
import SmoothTimeSeries from '@/components/lesson/arima/arima-desc/smooth-time-series';
import UnSmoothTimeSeries from '@/components/lesson/arima/arima-desc/un-smooth-time-series';
import ArpModel from '@/components/lesson/arima/arima-desc/arp-model';
import MaModel from '@/components/lesson/arima/arima-desc/ma-model';

import { SmoothTimeSeriesCode } from '@/data/code/arima';
import ArmaModel from '@/components/lesson/arima/arima-desc/arma-model';
import CommonBtn from '@/components/share/common-btn-group';
import { useInitLessonId } from '@/lib/hook/use-init-lesson-id';
import { useInitLessonFiles } from '@/lib/hook/use-init-lesson-files';
import { useInitLessonComments } from '@/lib/hook/use-init-lesson-comment';

export default function ArimaDesc() {
  useInitLessonId(1, 1);
  useInitLessonFiles();
  useInitLessonComments();

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-lime-900 text-lg " title="平稳时间序列" code={SmoothTimeSeriesCode} />,
      children: <SmoothTimeSeries />,
    },
    {
      key: '2',
      label: <CapTitle className="text-lime-900 text-lg" title="非平稳时间序列" />,
      children: <UnSmoothTimeSeries />,
    },
    {
      key: '3',
      label: <CapTitle className="text-lime-900 text-lg" title="模拟AR(P)模型" tip="AR（1）" />,
      children: <ArpModel />,
    },
    {
      key: '4',
      label: <CapTitle className="text-lime-900 text-lg" title="模拟MA(q)模型" tip="模拟一个MA(1)过程：y(t)=α+ε(t)+β1*ε(t-1) α=0 β1=0.6" />,
      children: <MaModel />,
    },
    {
      key: '5',
      label: <CapTitle className="text-lime-900 text-lg" title="模拟ARMA模型" tip="模拟ARMA(2,2)过程" />,
      children: <ArmaModel />,
    },
  ];

  return (
    <div className="h-fit min-h-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600 text-lg">ARIMA模型介绍-课程实验</div>
        <CommonBtn />
      </div>
      <Collapse defaultActiveKey="1" accordion ghost items={items} />
    </div>
  );
}
