'use client';

import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import CapTitle from './common/cap-title';
import SmoothTimeSeries from './smooth-time-series';
import UnSmoothTimeSeries from './un-smooth-time-series';
import ArpModel from './arp-model';

import { SmoothTimeSeriesCode } from '@/data/code/arima';
import MaModel from './ma-model';

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

  return <Collapse defaultActiveKey="1" accordion items={items} />;
}
