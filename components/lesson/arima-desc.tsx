'use client';

import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import SmoothTimeSeries from './smooth-time-series';
import { SmoothTimeSeriesCode1, UnSmoothTimeSeriesCode1 } from '@/data/code/arima';
import CodeDialog from '../share/code-dialog';
import UnSmoothTimeSeries from './un-smooth-time-series';

export default function ArimaDesc() {
  const [code, setCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const genExtra = () => (
    <i
      className="fa-solid fa-code"
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '平稳时间序列',
      children: <SmoothTimeSeries />,
      extra: (
        <i
          className="fa-solid fa-code"
          onClick={(event) => {
            setCode(SmoothTimeSeriesCode1);
            setShowDialog(true);
            event.stopPropagation();
          }}
        />
      ),
    },
    {
      key: '2',
      label: '非平稳时间序列',
      children: <UnSmoothTimeSeries />,
      extra: (
        <i
          className="fa-solid fa-code"
          onClick={(event) => {
            setCode(UnSmoothTimeSeriesCode1);
            setShowDialog(true);
            event.stopPropagation();
          }}
        />
      ),
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p></p>,
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse defaultActiveKey="1" accordion items={items} />
      <CodeDialog open={showDialog} setShow={setShowDialog} code={code} />
    </>
  );
}
