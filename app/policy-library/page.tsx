'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import dayjs from 'dayjs';
import { Tree, DatePicker, InputNumber, Select, Button, Tag } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import StockChart from '@/components/stock-chart';
import fetcher from '@/lib/fetcher';
import { chartOptions } from '@/lib/chart-options/policy-basic';
import { PosMap } from '@/lib/constant';

const { DirectoryTree } = Tree;
const { RangePicker } = DatePicker;

export default function PolicyLibrary() {
  const [currentPolicy, setCurrentPolicy] = useState<Record<string, any> | null>(null);

  const chartInstance = useRef<any>(null);
  const { data: policies } = useSWR('/api/local?file=policy', fetcher);

  const { data: policyIncome, isLoading: chartDataLoading } = useSWR(() => {
    if (!currentPolicy?.id) return null;

    return `/api/local?file=${currentPolicy.id}`;
  }, fetcher);

  const [stockOptions, setStockOptions] = useState(chartOptions);
  useEffect(() => {
    if (!policyIncome) return;

    const chartDataMap = policyIncome.data.profit.list;
    let chartData: Array<Record<string, any>> = [];
    for (const date in chartDataMap) {
      chartData.push({
        date,
        ...chartDataMap[date],
      });
    }

    setStockOptions((so) => {
      const series = so.series || [];
      const newSeries = series.map((s: any) => {
        if (s.name === '策略收益') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.algo_profit]);
          return s;
        }
        if (s.name === '基准收益') {
          s.data = chartData.map((d: any) => [dayjs(d.date).valueOf(), d.benchmark_profit]);
          return s;
        }

        return s;
      });

      return {
        series: newSeries,
      };
    });
  }, [policyIncome]);

  useEffect(() => {
    if (!policies) return;

    setCurrentPolicy((val) => {
      if (val) return val;

      const firstFolder = policies?.[0];
      setExpandedKeys([firstFolder.folder_id]);
      setSelectedKeys([firstFolder.children[0].id]);
      return policies?.[0].children[0];
    });
  }, [policies, currentPolicy]);

  const [expandedKeys, setExpandedKeys] = useState<Array<any>>([]);
  const [selectedKeys, setSelectedKeys] = useState<Array<any>>([]);

  const onExpand: DirectoryTreeProps['onExpand'] = (keys) => {
    const clickedKey = keys[keys.length - 1];
    if (!expandedKeys.includes(clickedKey)) {
      setExpandedKeys([clickedKey]);
    }
  };

  const treeData: DataNode[] = useMemo(() => {
    return (policies || []).map((item: any) => {
      return {
        icon: <i className="fa-solid fa-folder"></i>,
        title: item.name,
        key: item.folder_id,
        children: item.children.map((child: any) => {
          return {
            icon: <i className="fa-solid fa-file"></i>,
            title: child.name,
            key: child.id,
            isLeaf: true,
            data: child,
          };
        }),
      };
    });
  }, [policies]);

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    if (info.node.isLeaf) {
      setCurrentPolicy((info.node as any)?.data);
      setSelectedKeys(keys);
    }
  };

  const dayValue = useMemo(() => {
    if (!currentPolicy) return;
    const start = dayjs(currentPolicy?.begin_date);
    const end = dayjs(currentPolicy?.end_date);
    return [start, end] as any;
  }, [currentPolicy]);

  return (
    <div className="h-full flex justify-between items-stretch gap-x-3">
      <div
        className="flex flex-col bg-white w-[320px] p-3 overflow-y-auto overflow-x-hidden min-h-full"
        style={{
          maxHeight: 'calc(100vh - 93px)',
        }}
      >
        <div className="border-b p-1">策略目录</div>
        <div className="policy-dir pt-1">
          <DirectoryTree
            expandedKeys={expandedKeys}
            onExpand={onExpand}
            selectedKeys={selectedKeys}
            showIcon={true}
            onSelect={onSelect}
            treeData={treeData}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white ">
        <div className="flex items-center h-10 border-b p-2 font-bold">
          {currentPolicy?.name || ''}
          <Tag className="ml-4" color="cyan">
            {currentPolicy?.stock_market ? PosMap[currentPolicy?.stock_market as keyof typeof PosMap] : '--'}
          </Tag>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between items-stretch gap-y-3">
        <div className="bg-white h-[300px] flex flex-col">
          <div className="h-[50px] flex items-center justify-between px-3 border-b">
            <div className="flex gap-x-3">
              <RangePicker value={dayValue} disabled />
              <InputNumber className="w-[120px]" value={currentPolicy?.capital_base} disabled prefix="￥" />
              <Select
                disabled
                defaultValue="day"
                options={[
                  { value: 'day', label: '每日' },
                  { value: 'week', label: '每周' },
                  { value: 'year', label: '每年' },
                ]}
              />
            </div>
            <Button className="bg-primary" type="primary">
              <Link href="/policy-library/1">回测详情</Link>
            </Button>
          </div>
          <div className="flex-1">
            <StockChart loading={chartDataLoading} ref={chartInstance} options={stockOptions} />
          </div>
        </div>
        <div className="flex flex-1 relative flex-col item-stretch bg-white justify-center">
          {currentPolicy?.libresearchinfo ? (
            <>
              <div className="absolute top-0 w-[120px] bg-slate-200 px-2 py-1 text-sm">策略研究</div>
              <iframe src={currentPolicy?.libresearchinfo?.uri} width="100%" height="100%"></iframe>
            </>
          ) : (
            <div className="flex flex-col gap-y-5 items-center">
              <i className="fa-solid fa-boxes-stacked text-5xl"></i>
              <div className="text-3xl font-semibold">暂无内容</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
