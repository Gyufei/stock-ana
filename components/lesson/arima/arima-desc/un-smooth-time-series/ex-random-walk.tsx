import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';
import { ExRandomWalkCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';
import dataPoster from '@/lib/http/data-process-poster';
import { useFetchError } from '@/lib/hook/use-fetch-error';

export default function ExRandomWalk() {
  const [randomNum, setRandomNum] = useState<number | null>(50);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);
  const [exNum, setExNum] = useState<number | null>(0.2);

  const [res, setRes] = useState<any>(null);

  const [noiseData, setNoiseData] = useState<Array<number>>([]);
  const [randomWalk1, setRandomWalk1] = useState<Array<number>>([]);
  const [randomWalk2, setRandomWalk2] = useState<Array<number>>([]);

  const [refWalk1, setRefWalk1] = useState<Array<number>>([]);
  const [refWalk2, setRefWalk2] = useState<Array<number>>([]);

  const [chartData, setChartData] = useState<any[]>([]);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleGenNoise = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/6', {
          size: randomNum,
          seed: randomSeed,
          ex_num: exNum,
        });
        setRes(res);
        setNoiseData(res.y);
      }),
    [randomNum, randomSeed, exNum]
  );

  const handleGenWalk = () => {
    setRandomWalk1(res.y1);
    setRandomWalk2(res.y2);
    setRefWalk1(res.l1);
    setRefWalk2(res.l2);
  };

  const handleDraw = useMemo(
    () => catchErrorWrapper(async () => {
      const res = await dataPoster('desc/7');

      setChartData([
        {
          src: res.image,
        },
      ]);
    }),
    []
  );

  const handleReset = () => {
    setRes(null);
    setRandomNum(1000);
    setRandomSeed(5);
    setExNum(0.2);
    setNoiseData([]);
    setRandomWalk1([]);
    setRandomWalk2([]);
    setRefWalk1([]);
    setRefWalk2([]);
    setChartData([]);
    setErrorText(null);
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

        <LabelText label="漂移项" tip="每一步将累积并偏移漂移项值" className="mx-2" />
        <InputNumber id="exNum" min={0} value={exNum} onChange={(e) => setExNum(e || null)} />

        <Button type="primary" className="ml-5" onClick={handleGenNoise}>
          生成噪声项
        </Button>

        {noiseData.length && !errorText ? (
          <>
            <ResultDisplay
              type="json"
              title="噪声序列"
              data={[
                {
                  data: noiseData,
                },
              ]}
            />
            <CapTitle className="my-2" index={2} title="生成带漂移项的随机游走序列和漂移参考线序列 (正负两组)" />

            <Button type="primary" onClick={handleGenWalk}>
              累加生成随机游走序列
            </Button>
          </>
        ) : null}

        {randomWalk1.length && !errorText ? (
          <>
            <ResultDisplay
              type="json"
              title={`${randomNum}个随机游走序列`}
              data={[
                { title: '正漂移随机序列', tip: `每一步将噪声序列项累积并加上漂移项${exNum}`, data: randomWalk1 },
                { title: '负漂移随机序列', tip: `每一步将噪声序列项累积并加上漂移项 -${exNum}`, data: randomWalk2 },
                { title: '正漂移参考线序列', tip: `初始值为 ${exNum}，等差为${exNum}的数组，用于绘制正序列的漂移参考线`, data: refWalk1 },
                {
                  title: '负漂移参考线序列',
                  tip: `初始值为 -${exNum}，等差为 -${exNum} 的数组，用于绘制正序列的漂移参考线`,
                  data: refWalk2,
                },
              ]}
            />

            <CapTitle className="my-2" index={3} title="绘制带漂移项的随机游走时序图" code={ExRandomWalkCode[1]} />
            <Button onClick={() => handleDraw()} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData.length && !errorText ? <ResultDisplay type="image" data={chartData} title="带漂移项的随机游走时序图" /> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title="带漂移项的随机游走"
            data={[
              {
                error: errorText,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
