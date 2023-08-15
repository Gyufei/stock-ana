import { Button, Collapse, CollapseProps, InputNumber, Tooltip, Image } from 'antd';
import { useState } from 'react';

export default function SmoothTimeSeries() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData, setRandomData] = useState<Array<number>>([]);
  const [lineChart, setLineChart] = useState<string>('');

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
      children: <div className="p-6 border mb-4 break-words w-full h-[200px] overflow-y-auto">{JSON.stringify(randomData)}</div>,
    },
  ];

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `折线图`,
      children: (
        <div>
          <Image src="/img/白噪声数据的折线图.png" width={500} height={200} alt="白噪声数据的折线图" />
        </div>
      ),
    },
  ];

  const [chartWidth, setChartWidth] = useState<number | null>(12);
  const [chartHeight, setChartHeight] = useState<number | null>(6);

  const handleDraw = () => {
    if (chartHeight && chartWidth) {
      setLineChart('123');
    }
  };

  const handleReset = () => {
    setRandomNum(1000);
    setRandomData([]);
    setLineChart('');
    setChartHeight(6);
    setChartWidth(12);
  };

  return (
    <div>
      <div className="mb-2 text-xs">
        <span> 基础：白噪声 </span>
        <Button onClick={handleReset} className="ml-5">
          重置
        </Button>
      </div>
      <div className="border-y py-2">
        <div className="mb-2 font-bold">1. 生成白噪声数据</div>
        <label htmlFor="randomNum" className="mr-2">
          <Tooltip title="服从标准正态分布的随机数">
            生成个数:
            <i className="mx-1 fa-solid fa-circle-info"></i>
          </Tooltip>
        </label>
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} /> : null}

        {randomData.length > 0 ? (
          <>
            <div className="my-2 font-bold">2. 绘制折线图</div>

            <label htmlFor="randomNum" className="mr-2">
              折线图高(英寸):
            </label>
            <InputNumber id="randomNum" min={1} value={chartHeight} onChange={(e) => setChartHeight(e || null)} />
            <label htmlFor="randomNum" className="mx-2">
              折线图宽(英寸):
            </label>
            <InputNumber id="randomNum" min={1} value={chartWidth} onChange={(e) => setChartWidth(e || null)} />

            <div className="mt-4">
              <Button onClick={handleDraw} type="primary">
                绘制折线图
              </Button>
            </div>

            {lineChart && <Collapse className="mt-4" defaultActiveKey="1" items={chartCon} />}
          </>
        ) : null}
      </div>
    </div>
  );
}
