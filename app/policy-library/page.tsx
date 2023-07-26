'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Tree, DatePicker, InputNumber, Select, Button } from 'antd';
import useSWR from 'swr';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import fetcher from '@/lib/fetcher';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import HighChartsIndicators from 'highcharts/indicators/indicators';
import HighChartsPivotPoints from 'highcharts/indicators/pivot-points';
import HighChartsMacd from 'highcharts/indicators/macd';

HighChartsIndicators(Highcharts);
HighChartsPivotPoints(Highcharts);
HighChartsMacd(Highcharts);

const { RangePicker } = DatePicker;

// import HighchartsExporting from 'highcharts/modules/exporting';
// if (typeof Highcharts === 'object') {
//   HighchartsExporting(Highcharts);
// }

import './index.css';
import dateUtils from '@/lib/dateUtil';
import { Newsreader } from 'next/font/google';

const { DirectoryTree } = Tree;

export default function PolicyLibrary() {
  const { data: policies } = useSWR('/api/policy', fetcher);

  const { data: policyIncome } = useSWR('/api/policy-income', fetcher);

  const [stockOptions, setStockOptions] = useState<Highcharts.Options>({
    chart: {
      height: '200px',
    },
    colors: ['#aa4643', '#4572a7', '#89a54e', '#80699b', '#18a5ca'],
    credits: {
      text: '智能会计平台',
      href: '',
    },
    rangeSelector: {
      enabled: !1,
    },
    yAxis: [
      {
        id: 'yieldRate',
        labels: {
          align: 'right',
          x: -3,
          formatter: function () {
            return this.value + '%';
          },
          step: 5,
        },
        title: {
          text: '收益走势',
        },
        opposite: !0,
        tickAmount: 10,
        plotLines: [
          {
            value: 0,
            width: 2,
            color: '#000',
          },
        ],
      },
      {
        id: 'selfDefined',
        labels: {
          align: 'right',
          x: -3,
          step: 5,
        },
        title: {
          text: '自定义画图',
        },
        tickAmount: 10,
        height: '0%',
        offset: 0,
        opposite: !0,
        visible: !1,
      },
    ],
    xAxis: [
      {
        labels: {
          enabled: !1,
        },
        startOnTick: !0,
        endOnTick: !0,
        gridLineWidth: 1,
        dateTimeLabelFormats: {
          millisecond: '%Y%m%d',
          second: '%Y%m%d',
          minute: '%Y%m%d',
          hour: '%Y%m%d',
          day: '%Y%m%d',
          week: '%Y%m%d',
          month: '%Y%m%d',
          year: '%Y%m%d',
        },
        tickLength: 0,
        tickWidth: 0,
      },
    ],
    navigator: {
      margin: 2,
      height: 20,
      maskInside: !1,
    },
    tooltip: {
      shared: !0,
      valueDecimals: 2,
      followPointer: !0,
      formatter: function () {
        var t = this.points,
          e = [],
          n = Highcharts.dateFormat('%Y-%m-%d', this.x),
          i = dateUtils.getWeekByDay(n);

        e.push(
          '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' + n + '  ' + i + '</span> <span></b><br/>'
        );
        (this.points || []).forEach(function (n) {
          if (!n) return !1;
          '基准收益' == n.series.name
            ? e.push(
                '<span style="color:' +
                  n.color +
                  '; line-height: 18px;">基准收益：<span style="font-weight:700">' +
                  Number(n.y).toFixed(2) +
                  '%</span></span><br>'
              )
            : '策略收益' == n.series.name
            ? e.push(
                '<span style="color:' +
                  n.color +
                  '; line-height: 18px;">策略收益：<span style="font-weight:700">' +
                  Number(n.y).toFixed(2) +
                  '%</span></span><br>'
              )
            : e.push(
                '<span style="color:' +
                  n.color +
                  '; line-height: 18px;">' +
                  n.series.name +
                  '：<span style="font-weight:700">' +
                  Number(n.y).toFixed(2) +
                  '</span></span><br>'
              );
        });

        return e.join('');
      },
    },
    series: [
      {
        name: '策略收益',
        type: 'spline',
        data: [],
      },
      {
        fillOpacity: 0.2,
        name: '基准收益',
        type: 'area',
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (!policyIncome) return;
    const series = stockOptions.series || [];
    const newSeries = series.map((s: any) => {
      const pIData = policyIncome.find((pI: any) => pI.name === s.name);
      if (pIData) {
        s.data = pIData.data;
      }

      return s;
    });

    setStockOptions({
      series: newSeries,
    });
  }, [policyIncome]);

  const treeData: DataNode[] = useMemo(() => {
    console.log('data', policies, typeof policies);
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

  const [currentPolicy, setCurrentPolicy] = useState<string>('');

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
    if (info.node.isLeaf) {
      setCurrentPolicy(info.node.title as string);
    }
  };

  return (
    <div className="h-full flex justify-between items-stretch gap-x-3 px-3 py-3">
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
        <div className="bg-white flex flex-col">
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
              回测详情
            </Button>
          </div>
          <div className="flex-1">
            <HighchartsReact highcharts={Highcharts} options={stockOptions} constructorType={'stockChart'} />
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
