import { Button, InputNumber } from 'antd';
import { useState } from 'react';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';

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

        <Button type="primary" className="ml-5 mb-2" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData.length > 0 ? (
          <>
            <ResultDisplay
              title={`${randomNum}个随机数据`}
              type="json"
              data={[
                {
                  data: randomData,
                },
              ]}
            />
            <CapTitle className="my-2" index={2} title="绘制白噪声折线图" />
            <Button onClick={() => handleDraw()} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData.length ? <ResultDisplay type="image" data={chartData} title="白噪声数据的折线图" /> : null}
      </div>
    </div>
  );
}
