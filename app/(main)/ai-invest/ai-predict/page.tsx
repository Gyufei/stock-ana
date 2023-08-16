'use client';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import useSWRMutation from 'swr/mutation';

import { StockSearchSelect } from '@/components/ai-invest/stock-search-select';
import { chartOptions } from '@/lib/chart-options/predict';
import NormalChart from '@/components/share/normal-chart';
import StrategySelect from '@/components/share/strategy-select';
import { WithAiHost } from '@/lib/path-map';
import fetcher from '@/lib/fetcher';
import StrategyOptions from '@/components/share/strategy-options';
import { useStrategy } from '@/lib/hook/use-strategy';

export default function AiPredict() {
  const [chartOpts, setChartOpts] = useState(chartOptions);
  const [selectedStockId, setSelectedStockId] = useState<string>('');

  const {
    id: selectedStrategyId,
    handleSelect: handleSelectStrategy,

    parameters: strategyParameter,
    params: strategyParams,
    handleParamChange: handleParamChange,
  } = useStrategy();

  const predictFetcher = async (_key: string) => {
    const searchParams = new URLSearchParams();

    if (selectedStockId) {
      searchParams.append('stkcd_code', selectedStockId);
    }

    for (const [k, v] of Object.entries(strategyParams)) {
      if (v) {
        searchParams.append(k, v);
      }
    }

    const query = searchParams.toString();
    const url = WithAiHost(`/index/lstm_strategy`);
    const res = await fetcher(`${url}?${query}`);

    return res;
  };

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
              <StrategySelect
                strategyType={3}
                style={{ width: 220 }}
                value={selectedStrategyId}
                onChange={(val, obj) => handleSelectStrategy(val, obj)}
              />
            </div>
          </div>
          <StrategyOptions params={strategyParameter} onChange={handleParamChange} />
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
