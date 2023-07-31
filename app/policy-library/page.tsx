'use client';

import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { Tree, DatePicker, InputNumber, Select, Button } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import Highcharts from 'highcharts/highstock';
import Link from 'next/link';

import './index.css';
import fetcher from '@/lib/fetcher';
import dateUtils from '@/lib/dateUtil';
import { chartOptions } from '@/lib/chart-options/policy-basic';
import StockChart from '@/components/stock-chart';

const { DirectoryTree } = Tree;
const { RangePicker } = DatePicker;

export default function PolicyLibrary() {
  const [currentPolicy, setCurrentPolicy] = useState<string>('');

  const { data: policies } = useSWR('/api/local?file=policy', fetcher);
  const { data: policyIncome } = useSWR('/api/local?file=policy-income', fetcher);

  const [stockOptions, setStockOptions] = useState<Highcharts.Options>(chartOptions);
  useEffect(() => {
    if (!policyIncome) return;

    setStockOptions((so) => {
      const series = so.series || [];
      const newSeries = series.map((s: any) => {
        const pIData = policyIncome.find((pI: any) => pI.name === s.name);
        if (pIData) {
          s.data = pIData.data;
        }

        return s;
      });

      return {
        series: newSeries,
      };
    });
  }, [policyIncome]);

  const treeData: DataNode[] = useMemo(() => {
    return (policies || []).map((item: any, index: number) => {
      return {
        icon: <i className="fa-solid fa-folder"></i>,
        title: item.title,
        key: index,
        children: item.children.map((child: any, childIndex: number) => {
          return {
            icon: <i className="fa-solid fa-file"></i>,
            title: child.title,
            key: `${index}-${childIndex}`,
            isLeaf: true,
          };
        }),
      };
    });
  }, [policies]);

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    if (info.node.isLeaf) {
      setCurrentPolicy(info.node.title as string);
    }
  };

  return (
    <div className="h-full flex justify-between items-stretch gap-x-3">
      <div
        className="flex flex-col bg-white w-[220px] p-3 overflow-y-auto overflow-x-hidden min-h-full"
        style={{
          maxHeight: 'calc(100vh - 93px)',
        }}
      >
        <div className="border-b p-1">策略目录</div>
        <div className="pt-1">
          <DirectoryTree showIcon={true} onSelect={onSelect} treeData={treeData} />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white ">
        <div className="flex items-center h-10 border-b p-2 font-bold">{currentPolicy || ''}</div>
      </div>
      <div className="flex flex-col flex-1 justify-between items-stretch gap-y-3">
        <div className="bg-white h-[300px] flex flex-col">
          <div className="h-[50px] flex items-center justify-between px-3 border-b">
            <div className="flex gap-x-3">
              <RangePicker disabled />
              <InputNumber disabled prefix="￥" />
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
            <StockChart highcharts={Highcharts} options={stockOptions} />
          </div>
        </div>
        <div className="flex flex-1 bg-white justify-center items-center">
          <div className="flex flex-col gap-y-5 items-center">
            <i className="fa-solid fa-boxes-stacked text-5xl"></i>
            <div className="text-3xl font-semibold">暂无内容</div>
          </div>
        </div>
      </div>
    </div>
  );
}
