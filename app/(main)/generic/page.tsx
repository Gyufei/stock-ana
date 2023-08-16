'use client';
import { useState } from 'react';
import { Button } from 'antd';

import fetcher from '@/lib/fetcher';
import { PathMap } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import Grid from '@/components/share/grid';
import StrategySelect from '@/components/share/strategy-select';
import DatasetSelect from '@/components/share/dataset-select';
import StrategyOptions from '@/components/share/strategy-options';
import { useStrategy } from '@/lib/hook/use-strategy';

export default function Generic() {
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
                strategyType={3}
                style={{ width: 220 }}
                value={selectedStrategyId}
                onChange={(id, obj) => handleSelectStrategy(id, obj)}
              />
            </div>
          </div>
          <StrategyOptions params={strategyParameter} onChange={handleParamChange} />
        </div>

        <div className="flex items-center border-l px-10">
          <Button loading={picking} onClick={() => pickTrigger()} disabled={!selectedDataSetId || !selectedStrategyId} type="primary">
            确定
          </Button>
        </div>
      </div>

      <Grid data={pickData} />
    </div>
  );
}
