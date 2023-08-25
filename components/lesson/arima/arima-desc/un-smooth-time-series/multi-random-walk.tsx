import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';

import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import dataPoster from '@/lib/http/data-process-poster';

export default function MultiRandomWalk() {
  const title = '生成随机整数数组';
  const [nWalks, setNWalks] = useState<number | null>(8);
  const [nStep, setNSteps] = useState<number | null>(500);

  const [res, setRes] = useState<any>(null);
  const [randomData, setRandomData] = useState<Array<Array<number>>>([]);
  const [stepData, setStepData] = useState<Array<Array<number>>>([]);
  const [randomWalk, setRandomWalk] = useState<Array<Array<number>>>([]);

  const [chartData, setChartData] = useState<any[]>([]);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/8', {
          nwalks: nWalks,
          nsteps: nStep,
        });
        setRes(res);
        setRandomData(res.draws);
      }),
    []
  );

  const handleGenStep = () => {
    if (!randomData.length) return;
    setStepData(res.steps);
  };

  const handleGenWalk = () => {
    if (!stepData.length) return;

    setRandomWalk(res.walks);
  };

  const handleDraw = () => {
    if (!randomWalk.length) return;
    setChartData([
      {
        src: res.fig.image,
      },
    ]);
  };

  const handleReset = () => {
    setRes(null);
    setNWalks(8);
    setNSteps(500);
    setRandomData([]);
    setStepData([]);
    setRandomWalk([]);
    setChartData([]);
    setErrorText(null);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="my-2" index={1} title="生成随机整数数组" tip="生成一个大小为[次数, 步数]的随机整数数组，每个元素取值为0或1" />
        <LabelText label="游走次数" />
        <InputNumber id="randomNum" min={1} value={nWalks} onChange={(e) => setNWalks(e || null)} />
        <LabelText label="游走步数" className="mx-2" />
        <InputNumber id="randomNum" min={1} value={nStep} onChange={(e) => setNSteps(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数组
        </Button>

        {randomData.length ? (
          <>
            <ResultDisplay
              type="json"
              data={[
                {
                  data: randomData,
                },
              ]}
              title="随机数组"
            />

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
            <ResultDisplay
              type="json"
              title="获取步长之后的随机数组"
              data={[
                {
                  data: stepData,
                },
              ]}
            />
            <CapTitle className="my-2" index={3} title="累加生成游走序列" tip="对每一次游走的步长进行累积求和" />
            <Button type="primary" onClick={handleGenWalk}>
              生成游走序列
            </Button>
          </>
        ) : null}

        {randomWalk.length ? (
          <>
            <ResultDisplay
              type="json"
              title="游走序列"
              data={[
                {
                  data: randomWalk,
                },
              ]}
            />

            <CapTitle className="my-2" index={4} title="绘制多个随机游走图形" tip="遍历每一次游走，将游走序列绘制在图上" />
            <Button onClick={() => handleDraw()} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData?.length ? <ResultDisplay type="image" data={chartData} title="多个随机游走图形" /> : null}

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
      </div>
    </div>
  );
}
