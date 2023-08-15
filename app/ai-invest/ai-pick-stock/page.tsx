'use client';
import { useEffect, useState } from 'react';
import { Button, InputNumber, Select, message } from 'antd';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { PathMap } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import Grid from '@/components/grid';
import { StrategySelect } from '@/components/ai-invest/strategy-select';

export default function AiPickStock() {
  const { data: dataSet } = useSWR('/api/dataset?type=1', fetcher);

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
      newParams[k] = null;
    }
    setStrategyParams(newParams);
  }, [selectedStrategyId]);

  const handleParamChange = (key: string, value: any) => {
    setStrategyParams((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const pickStockFetcher = async (url: string) => {
    const res = await fetcher(url, {
      method: 'POST',
      body: JSON.stringify({
        id: selectedDataSetId,
        ...strategyParams,
      }),
    });

    return res;
  };

  const { data: pickData, trigger: pickTrigger, isMutating: picking } = useSWRMutation(`${PathMap.pickStock}`, pickStockFetcher);

  const saveStockFetcher = async (url: string, { arg }: any) => {
    const res = await fetcher(`${PathMap.saveDataSet}`, {
      method: 'POST',
      body: JSON.stringify({
        name: arg.title,
        content: JSON.stringify(arg.data),
        type: 2,
      }),
    });

    message.success(`股票集${arg.title}保存成功`);

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
              <StrategySelect
                strategyType={1}
                style={{ width: 220 }}
                value={selectedStrategyId}
                onChange={(id, obj) => handleSelectStrategy(id, obj)}
              />
            </div>
          </div>
          {strategyOptions.length > 0 && (
            <div className="flex items-center my-4 gap-x-8">
              {strategyOptions.map((item) => (
                <div key={item.value} className="flex items-center">
                  <div className="mr-2 text-slate-500 text-sm">{item.label}:</div>
                  <div className="flex items-center gap-x-1">
                    <InputNumber min={0} onChange={(e) => handleParamChange(item.value, e)} />
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

      <Grid data={pickData} saveData={saveTrigger} />
    </div>
  );
}
