import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';
import { RandomWalkCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';
import dataPoster from '@/lib/http/data-process-poster';
import { useFetchError } from '@/lib/hook/use-fetch-error';

export default function RandomWalk() {
  const title = '生成随机数列(两组)';
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData1, setRandomData1] = useState<Array<number>>([]);
  const [randomData2, setRandomData2] = useState<Array<number>>([]);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);

  const [chartData, setChartData] = useState<any[]>([]);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        if (!randomNum) return;

        const res = await dataPoster('desc/3', {
          size: randomNum,
          seed: randomSeed,
        });
        setRandomData1(res[0]);
        setRandomData2(res[1]);
      }),
    [randomNum, randomSeed]
  );

  const handleDraw = catchErrorWrapper(async () => {
    const res = await dataPoster('desc/4');
    setChartData([
      {
        src: res.image
      },
    ]);
  });

  const handleReset = () => {
    setRandomData1([]);
    setRandomData2([]);
    setChartData([]);
    setRandomNum(1000);
    setRandomSeed(5);
    setErrorText(null);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="根据随机数列累加生成游走序列(两组)" code={RandomWalkCode[0]} />
        <LabelText label="长度" className="mr-2" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />

        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {randomData1.length ? (
          <>
            <ResultDisplay
              title={`${randomNum}个随机数据`}
              type="json"
              data={[
                { title: '随机序列1', data: randomData1 },
                { title: '随机序列2', data: randomData2 },
              ]}
            />
            <CapTitle className="my-2" index={3} title="绘制随机游走图形" code={RandomWalkCode[1]} />
            <Button onClick={() => handleDraw()} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title={title}
            data={[
              {
                error: errorText,
              },
            ]}
          />
        )}

        {chartData?.length ? <ResultDisplay title="随机游走图形" type="image" data={chartData} /> : null}
      </div>
    </div>
  );
}
