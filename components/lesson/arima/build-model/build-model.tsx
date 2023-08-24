import { Collapse, CollapseProps } from 'antd';

import CapTitle from '@/components/share/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

import OriginTimeSeriesData from '../common/origin-data-series-data';
import OriginDataSeriesChart from '../common/origin-data-series-chart';
import LnSeriesChart from '../common/ln-series-chart';
import LnIncome1Chart from '../common/ln-income-1-chart';
import LnIncome2Chart from '../common/ln-income-2-chart';
import BoxCheck from '../common/box-check';
import RelLnIncome2Chart from '../common/ref-ln-income-2-chart';
import RelLnIncome1Chart from '../common/rel-ln-income-1-chart';
import RelRatio from '../common/rel-ratio';
import RelLnIncomeChart from './ref-ln-income-chart';
import QCheck from './q-check';

export default function BuildModel() {
  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <CapTitle
          className="text-blue-700"
          title="生成周期序列"
          tip="生成日期性序列——季度序列，并把该序列设置为索引列"
          code={ArimaDataAnaCode[1]}
        />
      ),
      children: <OriginTimeSeriesData />,
    },
    {
      key: '2',
      label: (
        <CapTitle
          className="text-blue-700"
          title="绘制原始数据时序图"
          tip="绘制时序图，观察营业收入数据形态，粗略判断序列平稳性"
          code={ArimaDataAnaCode[2]}
        />
      ),
      children: <OriginDataSeriesChart />,
    },
    {
      key: '3',
      label: (
        <CapTitle
          className="text-blue-700"
          title="绘制对数营业收入（lnIncome）的时序图"
          tip="为减缓异方差程度，生成对数营业收入（lnIncome）序列"
          code={ArimaDataAnaCode[3]}
        />
      ),
      children: <LnSeriesChart />,
    },
    {
      key: '4',
      label: <CapTitle className="text-blue-700" title="序列平稳化" tip="粗略判断序列平稳性，粗略识别ARIMA(p,d,q)的参数" />,
      children: (
        <>
          <LnIncome1Chart />
          <LnIncome2Chart />
        </>
      ),
    },
    {
      key: '6',
      label: <CapTitle className="text-blue-700" title="序列平稳化的统计识别与检验" />,
      children: (
        <>
          <RelRatio />
          <BoxCheck />
          <RelLnIncomeChart />
          <RelLnIncome1Chart />
          <RelLnIncome2Chart />
          <div>
            
          </div>
          <QCheck />
        </>
      ),
    },
  ];

  return <Collapse accordion className="mt-4" defaultActiveKey="1" items={randomDataCon} />;
}
