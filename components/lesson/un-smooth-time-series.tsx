import { Button, Collapse, CollapseProps, InputNumber, Tooltip, Image } from 'antd';
import { useState } from 'react';

export default function UnSmoothTimeSeries() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData1, setRandomData1] = useState<Array<number>>([]);
  const [randomData2, setRandomData2] = useState<Array<number>>([]);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);

  const [randomWalk1, setRandomWalk1] = useState<Array<number>>([]);
  const [randomWalk2, setRandomWalk2] = useState<Array<number>>([]);

  const [lineChart, setLineChart] = useState<string>('');
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
    if (!randomData1) return;

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
        <div className="p-6 border mb-4 w-full flex gap-x-2">
          <div className="flex-1 break-words w-1/2 border p-4 h-[200px] overflow-y-auto">{JSON.stringify(randomData1)}</div>
          <div className="flex-1 break-words w-1/2 border p-4 h-[200px] overflow-y-auto">{JSON.stringify(randomData2)}</div>
        </div>
      ),
    },
  ];

  const randomWorkCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `${randomNum}个随机游走序列`,
      children: (
        <div className="p-6 border mb-4 w-full flex gap-x-2">
          <div className="flex-1 break-words w-1/2 border p-4 h-[200px] overflow-y-auto">{JSON.stringify(randomWalk1)}</div>
          <div className="flex-1 break-words w-1/2 border p-4 h-[200px] overflow-y-auto">{JSON.stringify(randomWalk2)}</div>
        </div>
      ),
    },
  ];

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `折线图`,
      children: (
        <div>
          <Image src="/img/随机游走图形.png" width={500} height={200} alt="白噪声数据的折线图" />
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
    setRandomData1([]);
    setRandomData2([]);
    setRandomWalk1([]);
    setRandomWalk2([]);
    setLineChart('');
    setRandomNum(1000);
    setRandomSeed(5);
    setBeginNum(0);
  };

  return (
    <div>
      <div className="mb-2 text-xs">
        <Tooltip title="示例使用：y(t)=y(t-1)+ε(t)">
          <span>随机游走</span>
          <i className="mx-1 fa-solid fa-circle-info"></i>
        </Tooltip>

        <Button onClick={handleReset} className="ml-5">
          重置
        </Button>
      </div>
      <div className="border-y py-2">
        <div className="mb-2 font-bold">1. 生成随机数列(两组)</div>
        <label htmlFor="randomNum" className="mr-2">
          生成个数:
        </label>
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />
        <label htmlFor="randomNum" className="mx-2">
          <Tooltip title="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性">
            随机数种子:
            <i className="mx-1 fa-solid fa-circle-info"></i>
          </Tooltip>
        </label>
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData1.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} />
            <div>
              <div className="my-2 font-bold">2. 根据随机数列累加生成游走序列(两组)</div>
              <label htmlFor="randomNum" className="mr-2">
                <Tooltip title="为 0 可以从原点开始">
                  设置第一项起始值:
                  <i className="mx-1 fa-solid fa-circle-info"></i>
                </Tooltip>
              </label>
              <InputNumber id="beginNum" min={0} value={beginNum} onChange={(e) => setBeginNum(e || null)} />
              <Button type="primary" className="ml-5" onClick={handleGenWalk}>
                累加生成游走序列
              </Button>

              {randomWalk1.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomWorkCon} /> : null}
            </div>
          </>
        ) : null}

        {randomData1.length && randomWalk1.length ? (
          <>
            <div className="my-2 font-bold">3. 绘制折线图</div>

            <label htmlFor="chartHeight" className="mr-2">
              折线图高(英寸):
            </label>
            <InputNumber id="chartHeight" min={1} value={chartHeight} onChange={(e) => setChartHeight(e || null)} />

            <label htmlFor="chartWidth" className="mx-2">
              折线图宽(英寸):
            </label>
            <InputNumber id="chartWidth" min={1} value={chartWidth} onChange={(e) => setChartWidth(e || null)} />

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
