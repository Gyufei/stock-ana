'use client';
import { useEffect, useState } from 'react';
import { Button, DatePicker, InputNumber, Select } from 'antd';
// import { WithHost } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import { StockSearchSelect } from '@/components/ai-invest/stock-search-select';
import { chartOptions } from '@/lib/chart-options/predict';
import NormalChart from '@/components/normal-chart';
import { StrategySelect } from '@/components/ai-invest/strategy-select';

export default function AiPredict() {
  const [chartOpts, setChartOpts] = useState(chartOptions);
  const [selectedStockId, setSelectedStockId] = useState<string>('');
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('');

  const predictFetcher = async (_key: string) => {
    const dates = [];
    for (var i = 99; i >= 0; i--) {
      var date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.getTime());
    }

    // 生成随机股价数据
    const data = [];
    for (var j = 0; j < 100; j++) {
      var price = Math.random() * 100; // 生成0到100之间的随机数
      data.push([dates[j], price]);
    }
    return data;

    // const url = WithHost(`/api/predict/${selectedStrategyId}`);
    // console.log(pBeginDate, pEndDate, pDays, pTag);
    // const res = await fetcher(url, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     stockId: selectedStockId,
    //     strategyId: selectedStrategyId,
    //   }),
    // });

    // return res;
  };

  const [pBeginDate, setPBeginDate] = useState<any>();
  const [pEndDate, setPEndDate] = useState<any>();
  const [pDays, setPDays] = useState<number | null>(null);
  const [pTag, setPTag] = useState<string>('');

  const tagsOptions = [
    {
      label: '日期',
      value: 'date',
    },
    {
      label: '收盘价',
      value: 'close',
    },
  ];

  const { data: predictData, trigger: predictTrigger, isMutating: predicting } = useSWRMutation('predict', predictFetcher);

  useEffect(() => {
    if (!predictData) return;

    setChartOpts((so: any) => {
      const series = so.series || [];
      series[0].data = predictData;

      return {
        series,
      } as any;
    });
  }, [predictData]);

  return (
    <div className="flex flex-col h-[850px]">
      <div className="flex justify-between border-b px-3 border-x">
        <div className="flex flex-col py-2">
          <div className="flex items-center gap-x-10 mb-2">
            <div className="flex items-center">
              <div className="mr-2">选择股票:</div>
              <StockSearchSelect style={{ width: 220 }} value={selectedStockId} onChange={setSelectedStockId} />
            </div>
            <div className="flex items-center">
              <div className="mr-2">选择策略:</div>
              <StrategySelect style={{ width: 220 }} value={selectedStrategyId} onChange={setSelectedStrategyId} />
            </div>
          </div>
          <div className="flex items-center flex-wrap mt-4 gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">开始日期:</div>
              <div className="flex items-center gap-x-1">
                <DatePicker value={pBeginDate as any} onChange={(e) => setPBeginDate(e as any)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">结束日期:</div>
              <div className="flex items-center gap-x-1">
                <DatePicker value={pEndDate as any} onChange={(e) => setPEndDate(e as any)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">预测天数:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={pDays} onChange={(e) => setPDays(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">特征标签:</div>
              <div className="flex items-center gap-x-1">
                <Select value={pTag} onChange={setPTag} style={{ width: 220 }} options={tagsOptions} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center border-l px-10">
          <Button loading={predicting} onClick={() => predictTrigger()} disabled={!selectedStockId || !selectedStrategyId} type="primary">
            确定
          </Button>
        </div>
      </div>

      <div className="flex w-full h-full flex-col justify-stretch p-2">
        <NormalChart loading={predicting} options={chartOpts} />
      </div>
    </div>
  );
}
