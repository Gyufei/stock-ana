import { Button, Collapse, CollapseProps, InputNumber } from 'antd';
import { useState } from 'react';
import { ExRandomWalkCode } from '@/data/code/arima';
import ResetBtn from './common/reset-btn';
import DataDisplay from './common/data-display';
import CapTitle from './common/cap-title';
import LabelText from './common/label-text';
import ImageDisplay from './common/image-display';

export default function ExRandomWalk() {
  const [randomNum, setRandomNum] = useState<number | null>(50);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);
  const [noiseData, setNoiseData] = useState<Array<number>>([]);

  const [exNum, setExNum] = useState<number | null>(0.2);

  const [randomWalk1, setRandomWalk1] = useState<Array<number>>([]);
  const [randomWalk2, setRandomWalk2] = useState<Array<number>>([]);

  const [refWalk1, setRefWalk1] = useState<Array<number>>([]);
  const [refWalk2, setRefWalk2] = useState<Array<number>>([]);

  const [chartData, setChartData] = useState<any[]>([]);

  const handleGenNoise = () => {
    if (!randomNum) return;

    const data = [];
    for (let i = 0; i < randomNum; i++) {
      data.push(Math.floor(Math.random() * 10));
    }
    setNoiseData(data);
  };

  const handleGenWalk = () => {
    if (!randomNum || !noiseData.length || !exNum) return;

    const data1: Array<number> = [];
    let sum = 0;
    noiseData.forEach((item) => {
      sum += item + exNum;
      data1.push(sum);
    });
    data1[0] = exNum;
    setRandomWalk1(data1);

    const data2: Array<number> = [];
    noiseData.forEach((item) => {
      sum += item - exNum;
      data2.push(sum);
    });

    data2[0] = exNum;
    setRandomWalk2(data2);

    const data3 = [];
    for (let i = 0; i < randomNum; i++) {
      data3.push((i + 1) * exNum);
    }
    setRefWalk1(data3);

    const data4 = [];
    for (let i = 0; i < randomNum; i++) {
      data4.push((i + 1) * -exNum);
    }
    setRefWalk2(data4);
  };

  const noiseDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `噪声序列`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: noiseData,
            },
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
            { title: '正漂移随机序列', tip: `每一步将噪声序列项累积并加上漂移项${exNum}`, data: randomWalk1 },
            { title: '负漂移随机序列', tip: `每一步将噪声序列项累积并加上漂移项 -${exNum}`, data: randomWalk2 },
            { title: '正漂移参考线序列', tip: `初始值为 ${exNum}，等差为${exNum}的数组，用于绘制正序列的漂移参考线`, data: refWalk1 },
            { title: '负漂移参考线序列', tip: `初始值为 -${exNum}，等差为 -${exNum} 的数组，用于绘制正序列的漂移参考线`, data: refWalk2 },
          ]}
        />
      ),
    },
  ];

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `带漂移项的随机游走时序图`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleDraw = () => {
    setChartData([
      {
        name: '带漂移项的随机游走时序图',
      },
    ]);
  };

  const handleReset = () => {
    setRandomNum(1000);
    setRandomSeed(5);
    setExNum(0.2);
    setNoiseData([]);
    setRandomWalk1([]);
    setRandomWalk2([]);
    setRefWalk1([]);
    setRefWalk2([]);
    setChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle
          className="mb-2"
          index={1}
          title="生成白噪声数列"
          tip="服从标准正态分布的随机数列，作为随机游走序列的噪声项"
          code={ExRandomWalkCode[0]}
        />
        <LabelText label="长度" />
        <InputNumber id="randomNum" min={10} value={randomNum} onChange={(e) => setRandomNum(e || null)} />

        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomSeed" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />

        <Button type="primary" className="ml-5" onClick={handleGenNoise}>
          生成噪声项
        </Button>

        {noiseData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={noiseDataCon} />
            <CapTitle className="my-2" index={2} title="生成带漂移项的随机游走序列和漂移参考线序列 (正负两组)" />
            <LabelText label="漂移项" tip="每一步将累积并偏移漂移项值" className="mx-2" />
            <InputNumber id="exNum" min={0} value={exNum} onChange={(e) => setExNum(e || null)} />

            <Button type="primary" className="ml-5" onClick={handleGenWalk}>
              累加生成随机游走序列
            </Button>
          </>
        ) : null}

        {randomWalk1.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomWorkCon} />
            <CapTitle className="my-2" index={3} title="绘制带漂移项的随机游走时序图" code={ExRandomWalkCode[1]} />
            <Button onClick={handleDraw} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={chartCon} /> : null}
      </div>
    </div>
  );
}
