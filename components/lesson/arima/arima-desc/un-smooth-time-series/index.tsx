import { Collapse, CollapseProps } from 'antd';

import { ExRandomWalkCode, MultiRandomWalkCode, RandomWalkCode } from '@/data/code/arima';
import MultiRandomWalk from './multi-random-walk';
import RandomWalk from './random-walk';
import ExRandomWalk from './ex-random-walk';
import CapTitle from '@/components/share/cap-title';

export default function UnSmoothTimeSeries() {
  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: <CapTitle className="text-blue-700" title="随机游走" tip="示例使用：y(t)=y(t-1)+ε(t)" code={RandomWalkCode} />,
      children: <RandomWalk />,
    },
    {
      key: '2',
      label: <CapTitle className="text-blue-700" title="多个随机游走" code={MultiRandomWalkCode} />,
      children: <MultiRandomWalk />,
    },
    {
      key: '3',
      label: <CapTitle className="text-blue-700" title="带漂移项的随机游走实验" code={ExRandomWalkCode} />,
      children: <ExRandomWalk />,
    },
  ];

  return <Collapse accordion className="mt-4" defaultActiveKey="1" items={randomDataCon} />;
}
