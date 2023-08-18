import { Button, Collapse, CollapseProps, InputNumber } from 'antd';
import { useState } from 'react';
import { RandomWalkCode } from '@/data/code/arima';
import ResetBtn from '../../common/reset-btn';
import CapTitle from '../../common/cap-title';
import LabelText from '../../../share/label-text';
import DataDisplay from '../../common/data-display';
import ImageDisplay from '../../common/image-display';

export default function RandomWalk() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData1, setRandomData1] = useState<Array<number>>([]);
  const [randomData2, setRandomData2] = useState<Array<number>>([]);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);

  const [randomWalk1, setRandomWalk1] = useState<Array<number>>([]);
  const [randomWalk2, setRandomWalk2] = useState<Array<number>>([]);

  const [chartData, setChartData] = useState<any[]>([]);
  const [beginNum, setBeginNum] = useState<number | null>(0);

  const handleGen = () => {
    if (!randomNum) return;

    const data1 = [];
    for (let i = 0; i < randomNum; i++) {
      data1.push(Math.floor(Math.random() * 1000));
    }
    setRandomData1(data1);

    const data2 = [];
    for (let i = 0; i < randomNum; i++) {
      data2.push(Math.floor(Math.random() * 1000));
    }
    setRandomData2(data2);
  };

  const handleGenWalk = () => {
    if (!randomData1.length) return;

    const data1: Array<number> = [];
    let sum = 0;
    randomData1.forEach((item) => {
      sum += item;
      data1.push(sum);
    });
    data1[0] = beginNum || 0;
    setRandomWalk1(data1);

    const data2: Array<number> = [];
    randomData2.forEach((item) => {
      sum += item;
      data2.push(sum);
    });

    data2[0] = beginNum || 0;
    setRandomWalk2(data2);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `${randomNum}个随机数据`,
      children: (
        <DataDisplay
          displayData={[
            { title: '随机序列1', data: randomData1 },
            { title: '随机序列2', data: randomData1 },
          ]}
        />
      ),
    },
  ];

  const randomWorkCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `${randomNum}个随机游走序列`,
      children: (
        <DataDisplay
          displayData={[
            { title: '游走序列1', data: randomWalk1 },
            { title: '游走序列2', data: randomWalk2 },
          ]}
        />
      ),
    },
  ];

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `随机游走图形`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleDraw = () => {
    setChartData([
      {
        name: '随机游走图形',
      },
    ]);
  };

  const handleReset = () => {
    setRandomData1([]);
    setRandomData2([]);
    setRandomWalk1([]);
    setRandomWalk2([]);
    setChartData([]);
    setRandomNum(1000);
    setRandomSeed(5);
    setBeginNum(0);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="生成随机数列(两组)" code={RandomWalkCode[0]} />
        <LabelText label="长度" className="mr-2" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />

        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData1.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} />
            <CapTitle className="my-2" index={2} title="根据随机数列累加生成游走序列(两组)" code={RandomWalkCode[0]} />

            <LabelText label="设置第一项起始值" tip="为 0 可以从原点开始" className="mr-2" />
            <InputNumber id="beginNum" min={0} value={beginNum} onChange={(e) => setBeginNum(e || null)} />

            <Button type="primary" className="ml-5" onClick={handleGenWalk}>
              累加生成游走序列
            </Button>
          </>
        ) : null}

        {randomWalk1.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomWorkCon} />
            <CapTitle className="my-2" index={3} title="绘制随机游走图形" code={RandomWalkCode[1]} />
            <Button onClick={handleDraw} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData ? <Collapse className="mt-4" defaultActiveKey="1" items={chartCon} /> : null}
      </div>
    </div>
  );
}
