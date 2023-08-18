'use client';
import { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import useSWRMutation from 'swr/mutation';

import StrategySelect from '@/components/share/strategy-select';
import DatasetSelect from '@/components/share/dataset-select';
import StrategyOptions from '@/components/share/strategy-options';

import { useStrategy } from '@/lib/hook/use-strategy';
import { useDataToTable } from '@/lib/hook/use-data-to-table';
import { PathMap } from '@/lib/path-map';
import fetcher from '@/lib/fetcher';
import { chartOptions } from '@/lib/chart-options/classification';
import NormalChart from '@/components/share/normal-chart';
import CommonField from '@/components/generic/common-field';

export default function Classification() {
  const [selectedDataSetId, setSelectedDataSetId] = useState<string>('');
  const [selectedDataSet, setSelectedDataSet] = useState<Record<string, any>>({});
  const { content, columns } = useDataToTable(selectedDataSet?.content || []);

  const [chartOpts, setChartOpts] = useState(chartOptions);
  const {
    id: selectedStrategyId,
    obj: selectedStrategy,
    handleSelect: handleSelectStrategy,

    parameters: strategyParameter,
    params: strategyParams,
    handleParamChange: handleParamChange,
  } = useStrategy();

  const [features, setFeatures] = useState<string[]>([]);
  const [target, setTarget] = useState<string>();

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
    };

    const url = `${PathMap.AiIndex}/${methodPath}/`;

    const res = await fetcher(url, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return res;
  };

  const { data: algoResult, trigger: triggerAlgo, isMutating: algoRunning } = useSWRMutation(selectedStrategyId, algoFetcher);
  const accuracy = algoResult?.accuracy ? `${(algoResult.accuracy * 100).toFixed(2)}%` : '';

  useEffect(() => {
    if (!algoResult) return;

    const series0 = {
      name: '分类1',
      data: algoResult.data1.map((item: any[]) => {
        const itemMap: Record<string, any> = {
          name: '',
          value: 222,
          data: item[1],
        };
        return itemMap;
      }),
    };

    const series1 = {
      name: '分类2',
      data: algoResult.data2.map((item: any[]) => {
        const itemMap: Record<string, any> = {
          name: '',
          value: 111,
          data: item[1],
        };
        return itemMap;
      }),
    };

    setChartOpts({
      title: {
        text: '分类结果',
      },
      tooltip: {
        formatter:
          // eslint-disable-next-line no-unused-vars
          function (this: any) {
            if (!features || !this.point.data) return this.point.name;
            return features
              .map((feature, i) => {
                return `<b>${feature}:</b> ${this.point.data?.[i]}`;
              })
              .join('<br/>');
          },
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
              <div className="mr-2">选择分类算法:</div>
              <StrategySelect
                strategyType={4}
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
              <div className="flex items-center bg-green-600 p-2 m-2 rounded-lg">
                <div className="text-sm mr-4">分类准确率:</div>
                <div className="text-2xl">{accuracy}</div>
              </div>
              <div className="h-[400px]">
                <NormalChart loading={algoRunning} options={chartOpts} />
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
