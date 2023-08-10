'use client';
import { useEffect, useState } from 'react';
import { Button, InputNumber, Select } from 'antd';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { PathMap } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import Grid from '@/components/grid';
import { StrategySelect } from '@/components/ai-invest/strategy-select';

export default function AiPickStock() {
  const { data: dataSet } = useSWR('/api/dataset', fetcher);

  const [selectedDataSetId, setSelectedDataSetId] = useState<string>('');
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('');
  const [selectStrategy, setSelectStrategy] = useState<any>(null);

  const strategyParameter = selectStrategy?.parameter ? JSON.parse(selectStrategy.parameter) : {};
  const strategyParameterKeys = Object.keys(strategyParameter);
  const strategyOptions = strategyParameterKeys.map((key) => ({ label: strategyParameter[key], value: key }));

  const handleSelectStrategy = (id: string, obj: Record<string, any>) => {
    setSelectedStrategyId(id);
    setSelectStrategy(obj);
  };

  const [strategyParams, setStrategyParams] = useState<{
    [key: string]: {
      min: number;
      max: number;
    };
  }>({});

  useEffect(() => {
    const newParams = {} as any;
    for (const k of strategyParameterKeys) {
      newParams[k] = {
        min: null,
        max: null,
      };
    }
    setStrategyParams(newParams);
  }, [selectedStrategyId]);

  const handleParamChange = (key: string, type: 'min' | 'max') => (value: number) => {
    setStrategyParams((prev) => {
      return {
        ...prev,
        [key]: {
          ...prev[key],
          [type]: value,
        },
      };
    });
  };

  const pickStockFetcher = async (url: string) => {
    const res = await fetcher(url, {
      method: 'POST',
      body: JSON.stringify({
        dataSetId: selectedDataSetId,
        strategyId: selectedStrategyId,
        parameter: strategyParams,
      }),
    });

    return res;
  };

  const { trigger: pickTrigger, isMutating: picking } = useSWRMutation(`${PathMap.pickStock}`, pickStockFetcher);

  const saveStockFetcher = async (url: string, { arg }: any) => {
    const res = await fetcher(`${PathMap.saveDataSet}`, {
      method: 'POST',
      body: JSON.stringify({
        title: arg.title,
        data: arg.data,
      }),
    });

    return res;
  };

  const { trigger: saveTrigger } = useSWRMutation(`${PathMap.saveStocks}`, saveStockFetcher);

  return (
    <div className="flex flex-col h-[850px]">
      <div className="flex justify-between border-b px-3 border-x">
        <div className="flex flex-col pt-2">
          <div className="flex items-center gap-x-10 mb-2">
            <div className="flex items-center">
              <div className="mr-2">选择数据集:</div>
              <Select
                style={{ width: 220 }}
                value={selectedDataSetId}
                onChange={setSelectedDataSetId}
                options={dataSet}
                fieldNames={{ label: 'name', value: 'id' }}
              />
            </div>
            <div className="flex items-center">
              <div className="mr-2">选择策略:</div>
              <StrategySelect style={{ width: 220 }} value={selectedStrategyId} onChange={(id, obj) => handleSelectStrategy(id, obj)} />
            </div>
          </div>
          {strategyOptions.length > 0 && (
            <div className="flex items-center my-4 gap-x-8">
              {strategyOptions.map((item) => (
                <div key={item.value} className="flex items-center">
                  <div className="mr-2 text-slate-500 text-sm">{item.label}:</div>
                  <div className="flex items-center gap-x-1">
                    <InputNumber min={0} max={100} onChange={() => handleParamChange(item.value, 'min')} />-
                    <InputNumber min={0} max={100} onChange={() => handleParamChange(item.value, 'max')} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center border-l px-10">
          <Button loading={picking} onClick={() => pickTrigger()} disabled={!selectedDataSetId || !selectedStrategyId} type="primary">
            确定
          </Button>
        </div>
      </div>

      <Grid data={[]} saveData={saveTrigger} />
    </div>
  );
}
