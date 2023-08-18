import { Button, Collapse, CollapseProps, InputNumber } from 'antd';
import { useState } from 'react';
import ResetBtn from './common/reset-btn';
import CapTitle from './common/cap-title';
import LabelText from '../share/label-text';
import DataDisplay from './common/data-display';
import ImageDisplay from './common/image-display';

export default function MultiRandomWalk() {
  const [times, setTimes] = useState<number | null>(8);
  const [step, setSteps] = useState<number | null>(500);
  const [randomData, setRandomData] = useState<Array<Array<number>>>([]);
  const [stepData, setStepData] = useState<Array<Array<number>>>([]);
  const [randomWalk, setRandomWalk] = useState<Array<Array<number>>>([]);

  const [chartData, setChartData] = useState<any[]>([]);

  const handleGen = () => {
    if (!times || !step) return;

    const data: Array<Array<number>> = [];

    for (let i = 0; i < times; i++) {
      const arr: Array<number> = [];
      for (let j = 0; j < step; j++) {
        arr.push(Math.random() > 0.5 ? 1 : 0);
      }
      data.push(arr);
    }

    setRandomData(data);
  };

  const handleGenStep = () => {
    if (!randomData.length) return;

    const data: Array<Array<number>> = randomData.map((arr) => {
      return arr.map((item) => {
        return item > 0 ? 1 : -1;
      });
    });

    setStepData(data);
  };

  const handleGenWalk = () => {
    if (!stepData.length) return;

    const data = stepData.map((arr) => {
      let sum = 0;
      return arr.map((item) => {
        sum = sum + item;
        return sum;
      });
    });

    setRandomWalk(data);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `随机数组`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: randomData,
            },
          ]}
        />
      ),
    },
  ];

  const stepDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `获取步长之后的随机数组`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: stepData,
            },
          ]}
        />
      ),
    },
  ];

  const randomWorkCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `游走序列`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: randomWalk,
            },
          ]}
        />
      ),
    },
  ];

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `多个随机游走图形`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleDraw = () => {
    setChartData([
      {
        name: '多个随机游走图形',
      },
    ]);
  };

  const handleReset = () => {
    setTimes(8);
    setSteps(500);
    setRandomData([]);
    setStepData([]);
    setRandomWalk([]);
    setChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="my-2" index={1} title="生成随机整数数组" tip="生成一个大小为[次数, 步数]的随机整数数组，每个元素取值为0或1" />
        <LabelText label="游走次数" />
        <InputNumber id="randomNum" min={1} value={times} onChange={(e) => setTimes(e || null)} />
        <LabelText label="游走步数" className="mx-2" />
        <InputNumber id="randomNum" min={1} value={step} onChange={(e) => setSteps(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数组
        </Button>

        {randomData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} />

            <CapTitle
              className="my-2"
              index={2}
              title="获取步长"
              tip="将上一步中大于0的元素置为1，小于等于0的元素置为-1，得到每一步的步长"
            />

            <Button type="primary" onClick={handleGenStep}>
              获取步长
            </Button>
          </>
        ) : null}

        {stepData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={stepDataCon} />
            <CapTitle className="my-2" index={3} title="累加生成游走序列" tip="对每一次游走的步长进行累积求和" />
            <Button type="primary" onClick={handleGenWalk}>
              生成游走序列
            </Button>
          </>
        ) : null}

        {randomWalk.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomWorkCon} />
            <CapTitle className="my-2" index={4} title="绘制多个随机游走图形" />
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
