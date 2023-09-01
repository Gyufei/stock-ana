import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';

import { RandomWalkCode } from '@/data/code/arima';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';

import { useFetchError } from '@/lib/hook/use-fetch-error';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function RandomWalk() {
  const title = '生成随机数列(两组)';
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;

  const { data: randomDataObj, trigger: handleGenAction, reset: reset1 } = usePosterData('desc/3', errorHandler);
  const {
    data: chartData,
    trigger: handleDraw,
    reset: reset2,
  } = usePosterData('desc/4', errorHandler, {
    title,
    resCallback: (res) => res.image,
  });

  const randomData1 = useMemo(() => randomDataObj?.data?.[0] || [], [randomDataObj]);
  const randomData2 = useMemo(() => randomDataObj?.data?.[1] || [], [randomDataObj]);

  const handleGen = () => {
    if (!randomNum || !randomSeed) return;

    handleGenAction({
      size: randomNum,
      seed: randomSeed,
    });
  };

  const handleReset = () => {
    setRandomNum(1000);
    setRandomSeed(5);
    reset1();
    reset2();
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

        {randomDataObj?.data ? (
          <>
            <ResultDisplay
              keyName="var3"
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
                data: errorText,
              },
            ]}
          />
        )}

        {chartData ? <ResultDisplay keyName="var4" title="随机游走图形" type="image" data={[chartData]} /> : null}
      </div>
    </div>
  );
}
