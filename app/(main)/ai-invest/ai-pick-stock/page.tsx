'use client';
import { useState } from 'react';
import { Button, message } from 'antd';

import fetcher from '@/lib/fetcher';
import { PathMap } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import Grid from '@/components/share/grid';
import StrategySelect from '@/components/share/strategy-select';
import DatasetSelect from '@/components/share/dataset-select';
import { useStrategy } from '@/lib/hook/use-strategy';
import StrategyOptions from '@/components/share/strategy-options';

export default function AiPickStock() {
  const [selectedDataSetId, setSelectedDataSetId] = useState<string>('');

  const {
    id: selectedStrategyId,
    handleSelect: handleSelectStrategy,

    parameters: strategyParameter,
    params: strategyParams,
    handleParamChange: handleParamChange,
  } = useStrategy();

  const handleSelectDataset = (id: string, _obj: Record<string, any>) => {
    setSelectedDataSetId(id);
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
              <DatasetSelect
                datasetType={1}
                value={selectedDataSetId}
                onChange={(id, obj) => handleSelectDataset(id, obj)}
                style={{ width: 220 }}
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
           <StrategyOptions params={strategyParameter} value={strategyParams} onChange={handleParamChange} />
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
