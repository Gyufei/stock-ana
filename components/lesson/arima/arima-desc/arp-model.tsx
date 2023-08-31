import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';

import { ArpCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import TooltipBtn from '@/components/share/tooltip-btn';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function ArpModel() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomSeed, setRandomSeed] = useState<number | null>(12345);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;

  const { data: res, trigger: handleGenAction } = usePosterData('desc/8', errorHandler);
  const handleGen = () => {
    if (!randomNum || !randomSeed) return;
    handleGenAction({
      size: randomNum,
      seed: randomSeed,
    });
  };
  const noiseData = useMemo(() => res?.data.noise || [], [res]);
  const whiteNoiseData = useMemo(() => res?.data.wnoise || [], [res]);

  const { data: ar1Data, trigger: handleGenAr1Action } = usePosterData('desc/9', errorHandler);
  const handleGenAr1 = () => {
    if (!randomNum) return;
    handleGenAr1Action({
      size: randomNum,
    });
  };

  const { trigger: handleTimeDraw1Action } = usePosterData('desc/10', errorHandler, {
    title: '时间序列的滞后图(延迟为1)',
    tip: '延迟为1的时间序列图，即前一个时间步之间的散点图',
    resCallback: (res) => res.image,
  });
  const { trigger: handleTimeDraw2Action } = usePosterData('desc/11', errorHandler, {
    title: '时间序列的滞后图(延迟为i + 1)',
    tip: '第i个子图上绘制延迟为i+1的时间序列滞后图',
    resCallback: (res) => res.image,
  });
  const [timeChartData, setTimeChartData] = useState<any[]>([]);
  const handleTimeDraw1 = async () => {
    const res = await handleTimeDraw1Action();

    setTimeChartData((val: Array<string>) => {
      const filteredVal = val.filter((item: any) => item.title !== res.title);
      return [...filteredVal, res];
    });
  };
  const handleTimeDraw2 = async () => {
    const res = await handleTimeDraw2Action();

    setTimeChartData((val: Array<string>) => {
      const filteredVal = val.filter((item: any) => item.title !== res.title);
      return [...filteredVal, res];
    });
  };

  const { trigger: handleRelDraw1Action } = usePosterData('desc/12', errorHandler, {
    title: '时间序列的自相关图',
    tip: '自相关图，用于展示时间序列数据之间的自相关性, 横轴是滞后阶数，纵轴是自相关系数',
    resCallback: (res) => res.image,
  });
  const { trigger: handleRelDraw2Action } = usePosterData('desc/13', errorHandler, {
    title: '时间序列的自相关图和偏自相关图',
    resCallback: (res) => res.image,
  });
  const [relChartData, setRelChartData] = useState<any[]>([]);
  const handleRelDraw1 = async () => {
    const res = await handleRelDraw1Action();

    setRelChartData((val: Array<string>) => {
      const newVal = val.filter((item: any) => item.title !== res.title);
      return [...newVal, res];
    });
  };
  const handleRelDraw2 = async () => {
    const res = await handleRelDraw2Action();

    setRelChartData((val: Array<string>) => {
      const newVal = val.filter((item: any) => item.title !== res.title);
      return [...newVal, res];
    });
  };

  const { data: residualData, trigger: handleCalcResidual } = usePosterData('desc/14', errorHandler);

  const { data: residualChartData, trigger: handleResidualDraw } = usePosterData('desc/15', errorHandler, {
    title: 'AR模型的预测值和残差',
    resCallback: (res) => res.image,
  });

  const { data: residualDisChartData, trigger: handleResidualDisDraw } = usePosterData('desc/16', errorHandler, {
    title: '残差分布图',
    resCallback: (res) => res.image,
  });

  const handleReset = () => {
    setRandomNum(100);
    setRandomSeed(0);
    setTimeChartData([]);
    setRelChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="生成随机数列" code={ArpCode[0]} />
        <LabelText label="长度" className="mr-2" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />
        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {whiteNoiseData.length ? (
          <>
            <ResultDisplay
              keyName="var5"
              type="json"
              title={`${randomNum}个随机数据`}
              data={[
                {
                  title: '随机序列',
                  data: noiseData,
                },
                {
                  title: '白噪声序列',
                  tip: '对随机数进行白噪声化处理，将其标准化为均值为 0，标准差为 1 的白噪声数组',
                  data: whiteNoiseData,
                },
              ]}
            />
            <CapTitle className="my-2" index={2} title="生成AR1序列" tip="生成AR(1)线性序列:y(t)=0.5y(t-1)+ε(t)" code={ArpCode[1]} />
            <Button type="primary" onClick={handleGenAr1}>
              生成AR1序列
            </Button>
          </>
        ) : null}

        {ar1Data ? (
          <ResultDisplay
            keyName="var6"
            title="AR(1)序列"
            type="json"
            data={[
              {
                data: ar1Data,
              },
            ]}
          ></ResultDisplay>
        ) : null}

        {ar1Data ? (
          <>
            <CapTitle className="my-2" index={3} title="绘制滞后时序图" code={[ArpCode[2], ArpCode[3]]} />
            <TooltipBtn onClick={handleTimeDraw1} type="primary" tip="延迟为1的时间序列图，即前一个时间步之间的散点图">
              绘制(延迟为1)
            </TooltipBtn>
            <TooltipBtn className="mx-2" onClick={handleTimeDraw2} type="primary" tip="第i个子图上绘制延迟为i+1的时间序列滞后图">
              绘制(延迟为i+1)
            </TooltipBtn>

            {timeChartData.length ? <ResultDisplay keyName="png5" type="image" title="滞后序列图" data={timeChartData} /> : null}
          </>
        ) : null}

        {ar1Data ? (
          <>
            <CapTitle className="my-2" index={4} title="绘制自相关与偏自相关图" code={[ArpCode[4], ArpCode[5]]} />
            <TooltipBtn onClick={handleRelDraw1} type="primary" tip="使用pandas库的autocorrelation_plot函数,">
              绘制(方法1)
            </TooltipBtn>
            <TooltipBtn className="mx-2" onClick={handleRelDraw2} type="primary" tip="使用statsmodels库的plot_acf, plot_pacf函数">
              绘制(方法2)
            </TooltipBtn>

            {relChartData.length ? <ResultDisplay keyName="png7" type="image" title="自相关与偏自相关图" data={relChartData} /> : null}
          </>
        ) : null}

        {ar1Data ? (
          <>
            <CapTitle className="my-2" index={5} title="AR(1)模型拟合" tip="1阶AR模型拟合（OLS）" code={[ArpCode[6], ArpCode[7]]} />
            <TooltipBtn onClick={handleCalcResidual} type="primary" tip="残差是观测值与预测值之间的差异">
              计算残差
            </TooltipBtn>

            {residualData ? <ResultDisplay keyName="var7" type="json" title="残差序列" data={[residualData]} /> : null}

            <br />
            <Button className="mt-2" type="primary" onClick={handleResidualDraw}>
              绘制残差
            </Button>

            {residualChartData ? <ResultDisplay keyName="png8" type="image" title="残差" data={[residualChartData]}></ResultDisplay> : null}
          </>
        ) : null}

        {ar1Data ? (
          <>
            <CapTitle className="my-2" index={6} title="查看残差分布" code={ArpCode[8]} />
            <Button type="primary" onClick={() => handleResidualDisDraw()}>
              绘制残差分布
            </Button>
            {residualDisChartData ? (
              <ResultDisplay keyName="png9" type="image" title="残差" data={[residualDisChartData]}></ResultDisplay>
            ) : null}
          </>
        ) : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title="AR(1)模型拟合"
            data={[
              {
                data: errorText,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
