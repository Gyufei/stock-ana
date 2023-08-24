'use client';

import { useEffect, useState } from 'react';
import { Radio } from 'antd';

import IncomeChartHeader from './income-chart-header';
import { chartOptions } from '@/lib/chart-options/income-view';
import StockChart from '@/components/share/stock-chart';
import dayjs from 'dayjs';

export default function IncomeView({ tradeData }: any) {
  const [stockOptions, setStockOptions] = useState(chartOptions);

  useEffect(() => {
    if (!tradeData) return;

    const chartDataMap = tradeData.backTestMap;
    const chartData: Array<Record<string, any>> = [];
    for (const date in chartDataMap) {
      chartData.push({
        date,
        ...chartDataMap[date],
      });
    }

    setStockOptions((so) => {
      const series = so.series || [];
      const newSeries = series.map((s: Record<string, any>) => {
        if (s.name === '策略收益') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), day.algo_profit]);
        }
        if (s.name === '基准收益') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), day.benchmark_profit]);
        }
        if (s.name === '超额收益') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), day.excess_income]);
        }
        if (s.name === '当日盈亏') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), day.profit_and_loss]);
        }
        if (s.name === '当日买入') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), Math.random() * 500]);
        }
        if (s.name === '当日卖出') {
          s.data = chartData.map((day: Record<string, any>) => [dayjs(day.date).valueOf(), Math.random() * 500]);
        }

        return s;
      });

      return {
        series: newSeries,
      } as any;
    });
  }, [tradeData]);

  const onAxisOptionChange = (_value: string) => {};

  return (
    <div className="flex w-full h-full flex-col justify-stretch">
      <IncomeChartHeader />
      <div className="flex-1 bg-white relative">
        <Radio.Group
          className="hidden absolute right-[300px] top-3 z-10"
          defaultValue="normal"
          onChange={(e) => onAxisOptionChange(e.target.value)}
        >
          <Radio value="normal">普通轴</Radio>
          <Radio value="log">对数轴</Radio>
        </Radio.Group>
        <StockChart options={stockOptions} />
      </div>
    </div>
  );
}
