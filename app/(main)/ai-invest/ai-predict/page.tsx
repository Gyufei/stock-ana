'use client';
import { useEffect, useState } from 'react';
import { Button, InputNumber } from 'antd';
import useSWRMutation from 'swr/mutation';

import { StockSearchSelect } from '@/components/ai-invest/stock-search-select';
import { chartOptions } from '@/lib/chart-options/predict';
import NormalChart from '@/components/share/normal-chart';
import { StrategySelect } from '@/components/ai-invest/strategy-select';
import { WithAiHost } from '@/lib/path-map';
import fetcher from '@/lib/fetcher';

export default function AiPredict() {
  const [chartOpts, setChartOpts] = useState(chartOptions);
  const [selectedStockId, setSelectedStockId] = useState<string>('');
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('');

  const predictFetcher = async (_key: string) => {
    const searchParams = new URLSearchParams();

    if (selectedStockId) {
      searchParams.append('stkcd_code', selectedStockId);
    }

    if (pWindowSize) {
      searchParams.append('window_size', pWindowSize);
    }

    if (pSize) {
      searchParams.append('num', pSize);
    }

    if (pDays) {
      searchParams.append('days', pDays.toString());
    }

    const query = searchParams.toString();
    const url = WithAiHost(`/index/lstm_strategy`);
    const res = await fetcher(`${url}?${query}`);

    return res;
  };

  const [pWindowSize, setPWindowSize] = useState<any>(30);
  const [pSize, setPSize] = useState<any>(0.8);
  const [pDays, setPDays] = useState<number | null>(30);

  // const [pTag, setPTag] = useState<string>('');
  // const tagsOptions = [
  //   {
  //     label: '日期',
  //     value: 'date',
  //   },
  //   {
  //     label: '收盘价',
  //     value: 'close',
  //   },
  // ];

  const { data: predictData, trigger: predictTrigger, isMutating: predicting } = useSWRMutation('predict', predictFetcher);

  useEffect(() => {
    if (!predictData) return;

    const toFixed = (num: number) => {
      return Number(num.toFixed(2));
    };

    setChartOpts((so: any) => {
      const series = so.series || [];
      series[0].data = predictData.map((item: any) => {
        return [
          new Date(item['日期']).getTime(),
          toFixed(item['开盘价']),
          toFixed(item['最高价']),
          toFixed(item['最低价']),
          toFixed(item['收盘价']),
        ];
      });
      series[1].data = predictData.map((item: any) => {
        return [new Date(item['日期']).getTime(), toFixed(item['交易量'])];
      });

      return {
        series,
      } as any;
    });
  }, [predictData]);

  return (
    <div className="flex flex-col h-[800px]">
      <div className="flex justify-between border-b px-3 border-x">
        <div className="flex flex-col py-2">
          <div className="flex items-center gap-x-10 mb-2">
            <div className="flex items-center">
              <div className="mr-2">选择股票:</div>
              <StockSearchSelect style={{ width: 220 }} value={selectedStockId} onChange={setSelectedStockId} />
            </div>
            <div className="flex items-center">
              <div className="mr-2">选择策略:</div>
              <StrategySelect strategyType={3} style={{ width: 220 }} value={selectedStrategyId} onChange={setSelectedStrategyId} />
            </div>
          </div>
          <div className="flex items-center flex-wrap mt-4 gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">训练集大小:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber min={0} max={1} value={pSize} onChange={(e) => setPSize(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">窗口大小:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={pWindowSize} onChange={(e) => setPWindowSize(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">预测天数:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={pDays} onChange={(e) => setPDays(e)} />
              </div>
            </div>
            {/* <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">特征标签:</div>
              <div className="flex items-center gap-x-1">
                <Select value={pTag} onChange={setPTag} style={{ width: 220 }} options={tagsOptions} />
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex items-center border-l px-10">
          <Button loading={predicting} onClick={() => predictTrigger()} disabled={!selectedStockId || !selectedStrategyId} type="primary">
            确定
          </Button>
        </div>
      </div>

      <div className="flex w-full h-full flex-col justify-stretch p-2 pb-5">
        <NormalChart loading={predicting} options={chartOpts} />
      </div>
    </div>
  );
}
