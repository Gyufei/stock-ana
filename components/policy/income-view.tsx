'use client';

import Highcharts from 'highcharts/highstock';
import IncomeChartHeader from './income-chart-header';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import { Radio } from 'antd';
import { chartOptions } from '@/lib/chart-options/income-view';
import StockChart from '../stock-chart';
import dayjs from 'dayjs';

export default function IncomeView() {
  const { data: incomeView } = useSWR(
    // '/api/local?file=income-view',
    'http://localhost:8080/avgAndRsi2?code=600480&&n=14&&money= 10000.0&beginDate=2000-01-01&endDate=2010-01-01',
    fetcher
  );

  const [stockOptions, setStockOptions] = useState(chartOptions);

  function initChart() {
    Highcharts.setOptions({
      lang: {
        loading: '数据加载中...',
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
      const chartDataMap = incomeView.backTestMap;

      let chartData: Array<Record<string, any>> = [];
      for (const date in chartDataMap) {
        chartData.push({
          date,
          ...chartDataMap[date],
        });
      }

      const newSeries = series.map((s: any) => {
        if (s.name === '策略收益') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.algo_profit]);
        }
        if (s.name === '基准收益') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.benchmark_profit]);
        }
        if (s.name === '超额收益') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.excess_income]);
        }
        if (s.name === '当日盈亏') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.profit_and_loss]);
        }
        if (s.name === '当日买入') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), Math.random() * 1000]);
        }
        if (s.name === '当日卖出') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), Math.random() * 1000]);
        }

        return s;
      });

      return {
        series: newSeries,
      } as any;
    });
  }, [incomeView]);

  const onAxisOptionChange = (_value: string) => {};

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
