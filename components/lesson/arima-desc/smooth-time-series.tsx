import { Button, Collapse, CollapseProps, InputNumber } from 'antd';
import { useState } from 'react';
import ResetBtn from '../common/reset-btn';
import CapTitle from '../common/cap-title';
import LabelText from '../../share/label-text';
import DataDisplay from '../common/data-display';
import ImageDisplay from '../common/image-display';

export default function SmoothTimeSeries() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData, setRandomData] = useState<Array<number>>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  const handleGen = () => {
    if (!randomNum) return;

    const data = [];
    for (let i = 0; i < randomNum; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    setRandomData(data);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `${randomNum}个随机数据`,
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

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `白噪声数据的折线图`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleDraw = () => {
    setChartData([
      {
        name: '白噪声数据的折线图',
      },
    ]);
  };

  const handleReset = () => {
    setRandomNum(1000);
    setRandomData([]);
    setChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle
          className="mb-2"
          index={1}
          title="白噪声数据的生成"
          tip="白噪声是一种具有均值为零、方差为一的随机信号，通常用于模拟随机性或噪声"
        />
        <LabelText label="长度" tip="服从标准正态分布的随机数" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />

        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData.length > 0 ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} />
            <CapTitle className="my-2" index={2} title="绘制白噪声折线图" />
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
