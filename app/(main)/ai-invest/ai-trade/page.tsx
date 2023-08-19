'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useSWRMutation from 'swr/mutation';
import { Button, Tabs, DatePicker, Input, InputNumber, Select } from 'antd';

import fetcher from '@/lib/fetcher';
import { WithHost } from '@/lib/path-map';
import { useStrategy } from '@/lib/hook/use-strategy';

import IncomeView from '@/components/policy/income-view';
import TradeLog from '@/components/policy/trade-log';
import HistoryGain from '@/components/policy/history-gains';
import StrategySelect from '@/components/share/strategy-select';
import DatasetSelect from '@/components/share/dataset-select';

export default function AiTrade() {
  const [selectedDataSetId, setSelectedDatasetId] = useState<string>('');
  const [stockOptions, setStockOptions] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);

  const { id: selectedStrategyId, obj: selectStrategy, handleSelect: handleSelectStrategy } = useStrategy();

  const handleSelectDataset = (id: string, obj: Record<string, any>) => {
    setSelectedDatasetId(id);
    setStockOptions(obj.content);
  };

  const [backTestParams, setBackTestParams] = useState<{
    money: number | null;
    beginDate: string | null;
    endDate: string | null;
    runTime: number | null;
  }>({
    runTime: null,
    money: null,
    beginDate: null,
    endDate: null,
  });

  const tradeByStrategy = async (_key: string) => {
    const method = selectStrategy?.method;
    if (!method) {
      return;
    }

    const url = WithHost(`/${method}`);

    const timeBegin = new Date().getTime();

    const searchParams = new URLSearchParams();

    searchParams.append('code', selectedStocks.join(','));

    if (tN) {
      searchParams.append('n', tN.toString());
    }
    if (tMoney) {
      searchParams.append('money', tMoney.toString());
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
      money: tMoney,
      beginDate,
      endDate,
    });

    return res;
  };

  const [tN, setTN] = useState<number | null>(14);
  const [tFee, setTFee] = useState<number | null>(0);
  const [tMoney, setTMoney] = useState<number | null>(10000);
  const [tBeginDate, setTBeginDate] = useState<any>(dayjs('2001-01-01'));
  const [tEndDate, setTEndDate] = useState<any>(dayjs('2010-01-01'));
  const [tBuyPoint, setTBuyPoint] = useState<string | null>(null);
  const [tSellPoint, setTSellPoint] = useState<string | null>(null);
  const [tMaxRollback, setTMaxRollback] = useState<number | null>(null);

  const { data: tradeData, trigger: tradeTrigger, isMutating: picking } = useSWRMutation('trade', tradeByStrategy);

  const itemsOrigin = [
    {
      label: '收益概览',
      key: '1',
      children: <IncomeView tradeData={tradeData} />,
    },
    {
      label: '交易明细',
      key: '2',
      children: <TradeLog tradeData={tradeData} />,
    },
    {
      label: '历史持仓',
      key: '3',
      children: <HistoryGain tradeData={tradeData} />,
    },
  ];

  const [tabItems, setTableItems] = useState(itemsOrigin);

  useEffect(() => {
    setTableItems(itemsOrigin);
  }, [tradeData]);

  return (
    <div className="flex flex-col h-[800px]">
      <div className="flex border-b justify-between border-x px-2">
        <div className="flex flex-col pb-2 px-2">
          <div className="flex items-center gap-x-10 mt-2">
            <div className="flex items-center">
              <div className="mr-2">选择股票集:</div>
              <DatasetSelect
                datasetType={2}
                value={selectedDataSetId}
                onChange={(id, obj) => handleSelectDataset(id, obj)}
                style={{ width: 220 }}
              />
            </div>
            {selectedDataSetId && (
              <div className="flex items-center">
                <div className="mr-2">选择股票:</div>
                <Select
                  mode="multiple"
                  value={selectedStocks as any}
                  onChange={(e) => setSelectedStocks(e)}
                  style={{ width: 220 }}
                  options={stockOptions}
                  fieldNames={{ label: 'name', value: 'code' }}
                />
              </div>
            )}
            <div className="flex items-center">
              <div className="mr-2">选择策略:</div>
              <StrategySelect strategyType={2} style={{ width: 220 }} value={selectedStrategyId} onChange={handleSelectStrategy} />
            </div>
          </div>
          <div className="flex items-center flex-wrap mt-4 gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">调仓周期:</div>
              <div className="flex items-center gap-x-1">
                <InputNumber value={tN} onChange={(e) => setTN(e)} />
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
                <InputNumber value={tMoney} onChange={(e) => setTMoney(e)} />
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
            disabled={!selectedDataSetId || !selectedStrategyId || !selectedStocks.length}
            type="primary"
            className="bg-primary"
          >
            确定
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-stretch w-full h-full">
        <div className="flex flex-col justify-stretch rounded border-b">
          <div className="flex items-center gap-x-4 bg-white py-5 px-2 text-sm">
            <div>
              回测日期：{backTestParams.beginDate || 'xxxx'} 至 {backTestParams.endDate || 'xxxx'}
            </div>
            <div>|</div>
            <div> 资金：{backTestParams.money || 'xxxx'} </div>
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
