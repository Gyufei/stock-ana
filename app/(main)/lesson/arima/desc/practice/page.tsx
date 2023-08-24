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

export default function ArimaDesc() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-lime-900" title="平稳时间序列" code={SmoothTimeSeriesCode} />,
      children: <SmoothTimeSeries />,
    },
    {
      key: '2',
      label: <CapTitle className="text-lime-900" title="非平稳时间序列" />,
      children: <UnSmoothTimeSeries />,
    },
    {
      key: '3',
      label: <CapTitle className="text-lime-900" title="模拟AR(P)模型" tip="AR（1）" />,
      children: <ArpModel />,
    },
    {
      key: '4',
      label: <CapTitle className="text-lime-900" title="模拟MA(q)模型" tip="模拟一个MA(1)过程：y(t)=α+ε(t)+β1*ε(t-1) α=0 β1=0.6" />,
      children: <MaModel />,
    },
  ];

  return (
    <div className="h-screen p-4">
      <div className="text-gray-600 text-lg mb-4">ARIMA模型介绍-课堂练习</div>
      <Collapse defaultActiveKey="1" accordion items={items} />
    </div>
  );
}
