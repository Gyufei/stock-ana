'use client';
import { useEffect, useState } from 'react';
import { Button, Table, Image } from 'antd';
import useSWRMutation from 'swr/mutation';

import StrategySelect from '@/components/share/strategy-select';
import DatasetSelect from '@/components/share/dataset-select';
import StrategyOptions from '@/components/share/strategy-options';

import { useStrategy } from '@/lib/hook/use-strategy';
import { useDatasetContent } from '@/lib/hook/use-dataset-content';
import { PathMap } from '@/lib/path-map';
import fetcher from '@/lib/fetcher';

import { chartOptions } from '@/lib/chart-options/regression';
import NormalChart from '@/components/share/normal-chart';
import CommonField from '@/components/generic/common-field';

export default function Classification() {
  const [selectedDataSetId, setSelectedDataSetId] = useState<string>('');
  const [selectedDataSet, setSelectedDataSet] = useState<Record<string, any>>({});
  const { content, columns } = useDatasetContent(selectedDataSet?.content || []);

  const [chartOpts, setChartOpts] = useState(chartOptions);
  const {
    id: selectedStrategyId,
    obj: selectedStrategy,
    handleSelect: handleSelectStrategy,

    parameters: strategyParameter,
    params: strategyParams,
    handleParamChange: handleParamChange,
  } = useStrategy();

  const [features, setFeatures] = useState<string[]>(['年龄', '教育', '工龄', '地址', '收入', '负债率', '信用卡负债', '其他负债']);
  const [target, setTarget] = useState<string>('违约');

  const handleSelectDataset = (id: string, obj: Record<string, any>) => {
    setSelectedDataSetId(id);
    setSelectedDataSet(obj);
  };

  const algoFetcher = async (_key: string) => {
    const methodPath = selectedStrategy.method;
    if (!methodPath) {
      return null;
    }

    const params = {
      id: selectedDataSetId,
      features,
      target,

      ...strategyParams,
      // ===
      criterion: 'poisson',
      splitter: 'best',
      max_depth: 31,
      min_samples_split: 5,
      min_samples_leaf: 5,
      max_features: 'sqrt',
      random_state: 5,
      max_leaf_nodes: 5,
      test_size: 0.01,
    };

    const url = `${PathMap.algoIndex}/${methodPath}/`;

    const res = await fetcher(url, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return res;
  };

  const { data: algoResult, trigger: triggerAlgo, isMutating: algoRunning } = useSWRMutation(selectedStrategyId, algoFetcher);

  useEffect(() => {
    if (!algoResult) return;

    const series0 = {
      data: algoResult['真实值'],
    };

    const series1 = {
      data: algoResult['预测值'],
    };

    setChartOpts({
      title: {
        text: `${selectedStrategy.name}结果`,
      },
      xAxis: {
        categories: algoResult['预测值'].map((_: number, i: number) => i + 1),
      },
      series: [series0, series1],
    } as any);
  }, [algoResult]);

  return (
    <div className="flex flex-col h-[850px]">
      <div className="flex justify-between border-b px-3 py-5 border-x">
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
              <div className="mr-2">选择回归算法:</div>
              <StrategySelect
                strategyType={5}
                style={{ width: 220 }}
                value={selectedStrategyId}
                onChange={(id, obj) => handleSelectStrategy(id, obj)}
              />
            </div>
          </div>
          {selectedDataSetId && (
            <CommonField options={columns} features={features} target={target} setFeatures={setFeatures} setTarget={setTarget} />
          )}
          <StrategyOptions params={strategyParameter} onChange={handleParamChange} />
        </div>

        <div className="flex items-center border-l px-10">
          <Button loading={algoRunning} onClick={() => triggerAlgo()} disabled={!selectedDataSetId || !selectedStrategyId} type="primary">
            确定
          </Button>
        </div>
      </div>

      <div className="w-full mt-4">
        {content ? (
          algoResult ? (
            <>
              <div className="h-[400px] flex justify-between">
                <div className="flex-1">
                  <NormalChart loading={algoRunning} options={chartOpts} />
                </div>
                {algoResult.image ? (
                  <div className="flex-1 flex justify-center">
                    <Image alt="algoResult" style={{ height: '400px' }} src={`data:image/png;base64,${algoResult.image}`} />
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <Table size="small" bordered scroll={{ x: 620 }} dataSource={content} columns={columns}></Table>
          )
        ) : null}
      </div>
    </div>
  );
}