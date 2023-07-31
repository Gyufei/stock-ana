'use client';

import Highcharts from 'highcharts/highstock';
import IncomeChartHeader from './income-chart-header';
import dateUtils from '@/lib/dateUtil';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { useEffect, useRef, useState } from 'react';
import { Radio } from 'antd';
import { chartOptions } from '@/lib/chart-options/income-view';
import StockChart from '../stock-chart';

export default function IncomeView() {
  const { data: incomeView } = useSWR('/api/local?file=income-view', fetcher);

  const [stockOptions, setStockOptions] = useState(chartOptions);

  function initChart() {
    Highcharts.setOptions({
      lang: {
        loading: '数据正在加载中...',
        rangeSelectorZoom: '缩放:',
        rangeSelectorFrom: '从',
        rangeSelectorTo: '至',
      },
    });
  }
  initChart();

  useEffect(() => {
    if (!incomeView) return;

    setStockOptions((so) => {
      const series = so.series || [];
      const newSeries = series.map((s: any) => {
        const pIData = incomeView.find((pI: any) => pI.name === s.name);
        if (pIData) {
          s.data = pIData.data;
        }

        return s;
      });

      return {
        series: newSeries,
      } as any;
    });
  }, [incomeView]);

  const onAxisOptionChange = (value: string) => {};

  return (
    <div className="flex w-full h-full flex-col justify-stretch">
      <IncomeChartHeader />
      <div className="flex-1 bg-white relative">
        <Radio.Group
          className="absolute right-[300px] top-3 z-10"
          defaultValue="normal"
          onChange={(e) => onAxisOptionChange(e.target.value)}
        >
          <Radio value="normal">普通轴</Radio>
          <Radio value="log">对数轴</Radio>
        </Radio.Group>
        <StockChart highcharts={Highcharts} options={stockOptions} />
      </div>
    </div>
  );
}
