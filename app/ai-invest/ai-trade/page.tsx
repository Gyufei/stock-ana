'use client';
import { useEffect, useState } from 'react';
import { Button, Tabs, DatePicker, Input, InputNumber, Select } from 'antd';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { WithHost } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import IncomeView from '@/components/policy/income-view';
import TradeLog from '@/components/policy/trade-log';
import HistoryGain from '@/components/policy/history-gains';

export default function AiTrade() {
  const { data: stockSets } = useSWR('/api/dataset', fetcher);
  const { data: strategy } = useSWR('/api/strategy', fetcher);

  const [selectedStockSetId, setSelectedStockSetId] = useState<string>('');
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('');

  const [backTestParams, setBackTestParams] = useState<{
    runTime: number | null;
    asset: number | null;
    beginDate: string | null;
    endDate: string | null;
  }>({
    runTime: null,
    asset: null,
    beginDate: null,
    endDate: null,
  });

  const stockOptions = stockSets?.find((item: Record<string, any>) => item.id === selectedStockSetId)?.stocks || [
    {
      id: '600480',
      name: '600480',
    },
  ];

  const tradeByStrategy = async (url: string) => {
    const timeBegin = new Date().getTime();

    // 'http://localhost:8080/avgAndRsi2?code=600480&&n=14&&money= 10000.0&beginDate=2000-01-01&endDate=2010-01-01',
    const searchParams = new URLSearchParams();

    searchParams.append('code', selectedStocks.join(','));
    if (tDuration) {
      searchParams.append('n', tDuration.toString());
    }
    if (tBeginAsset) {
      searchParams.append('money', tBeginAsset.toString());
    }

    const beginDate = tBeginDate.format('YYYY-MM-DD');
    const endDate = tEndDate.format('YYYY-MM-DD');
    if (beginDate) {
      searchParams.append('beginDate', beginDate);
    }
    if (endDate) {
      searchParams.append('endDate', endDate);
    }

    const query = searchParams.toString();

    const res = fetcher(`${url}?${query}`);

    const timeEnd = new Date().getTime();
    setBackTestParams({
      runTime: timeEnd - timeBegin,
      asset: tBeginAsset,
      beginDate,
      endDate,
    });

    return res;
  };

  const [tDuration, setTDuration] = useState<number | null>(null);
  const [tFee, setTFee] = useState<number | null>(null);
  const [tBeginAsset, setTBeginAsset] = useState<number | null>(null);
  const [tBeginDate, setTBeginDate] = useState<any>();
  const [tEndDate, setTEndDate] = useState<any>();
  const [tBuyPoint, setTBuyPoint] = useState<string | null>(null);
  const [tSellPoint, setTSellPoint] = useState<string | null>(null);
  const [tMaxRollback, setTMaxRollback] = useState<number | null>(null);

  const { data: tradeData, trigger: tradeTrigger, isMutating: picking } = useSWRMutation(WithHost('/avgAndRsi2'), tradeByStrategy);

  const itemsOrigin = [
    {
      label: '收益概览',
      key: '1',
      children: IncomeView({ tradeData }),
    },
    {
      label: '交易明细',
      key: '2',
      children: TradeLog({ tradeData }),
    },
    {
      label: '历史持仓',
      key: '3',
      children: HistoryGain({ tradeData }),
    },
  ];

  const [tabItems, setTableItems] = useState(itemsOrigin);

  useEffect(() => {
    setTableItems(itemsOrigin);
  }, [tradeData]);

  return (
    <div className="flex flex-col h-[850px]">
      <div className="flex border-b justify-between border-x px-2">
        <div className="flex flex-col pb-2 px-2">
          <div className="flex items-center gap-x-10 mt-2">
            <div className="flex items-center">
              <div className="mr-2">选择股票集:</div>
              <Select
                style={{ width: 220 }}
                value={selectedStockSetId}
                onChange={setSelectedStockSetId}
                options={stockSets}
                fieldNames={{ label: 'name', value: 'id' }}
              />
            </div>
            {selectedStockSetId && (
              <div className="flex items-center">
                <div className="mr-2">选择股票:</div>
                <Select
                  mode="multiple"
                  value={selectedStocks as any}
                  onChange={setSelectedStocks}
                  style={{ width: 220 }}
                  options={stockOptions}
                  fieldNames={{ label: 'name', value: 'id' }}
                />
              </div>
            )}
            <div className="flex items-center">
              <div className="mr-2">选择策略:</div>
              <Select
                value={selectedStrategyId}
                onChange={setSelectedStrategyId}
                style={{ width: 220 }}
                options={strategy}
                fieldNames={{ label: 'name', value: 'id' }}
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap mt-4 gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">调仓周期:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={tDuration} onChange={(e) => setTDuration(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">手续费:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={tFee} onChange={(e) => setTFee(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">初始资金:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={tBeginAsset} onChange={(e) => setTBeginAsset(e)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">开始日期:</div>
              <div className="flex items-center gap-x-1">
                <DatePicker value={tBeginDate as any} onChange={(e) => setTBeginDate(e as any)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">结束日期:</div>
              <div className="flex items-center gap-x-1">
                <DatePicker value={tEndDate as any} onChange={(e) => setTEndDate(e as any)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">买入时机:</div>
              <div className="flex items-center gap-x-1">
                <Input value={tBuyPoint || ''} onChange={(e) => setTBuyPoint(e.target.value)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">卖出时机:</div>
              <div className="flex items-center gap-x-1">
                <Input value={tSellPoint || ''} onChange={(e) => setTSellPoint(e.target.value)} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">最大回撤:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={tMaxRollback} onChange={(e) => setTMaxRollback(e)} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-10 justify-center items-center border-l">
          <Button
            loading={picking}
            onClick={() => tradeTrigger()}
            disabled={!selectedStockSetId || !selectedStrategyId || !selectedStocks.length}
            type="primary"
            className="bg-primary"
          >
            确定
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-stretch w-full h-full">
        <div className="flex flex-col justify-stretch rounded">
          <div className="flex items-center gap-x-4 bg-white py-5 px-2 text-sm">
            <div>
              回测日期：{backTestParams.beginDate || 'xxxx'} 至 {backTestParams.endDate || 'xxxx'}
            </div>
            <div>|</div>
            <div> 资金：{backTestParams.asset || 'xxxx'} </div>
            <div>|</div>
            <div>频率：每日</div>
            <div>|</div>
            <div>总运行时长：{backTestParams.runTime || 'xxxx'}秒</div>
          </div>
        </div>
        <div className="flex-1 flex items-stretch">
          <Tabs
            className="policy-item-tab w-full"
            tabPosition="left"
            tabBarStyle={{
              width: '160px',
              backgroundColor: 'rgb(203 213 225)',
              paddingTop: '15px',
            }}
            items={tabItems}
          />
        </div>
      </div>
    </div>
  );
}
