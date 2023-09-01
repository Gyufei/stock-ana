import { Button, DatePicker, InputNumber, Select } from 'antd';
import { useState } from 'react';

import { ArmaModelCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import TooltipBtn from '@/components/share/tooltip-btn';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import dayjs from 'dayjs';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function ArmaModel() {
  const [randomNum, setRandomNum] = useState<number | null>(510);
  const [randomSeed, setRandomSeed] = useState<number | null>(12345);
  const [fitDate, setFitDate] = useState<dayjs.Dayjs | null>(dayjs('1980-01-01'));
  const freqOptions = [
    { label: '日', value: 'D' },
    { label: '月', value: 'M' },
    { label: '季度', value: 'Q-JAN' },
    { label: '周', value: 'W' },
    { label: '年', value: 'Y' },
  ];
  const [freq, setFreq] = useState('M');

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;

  const { data: timeSeriesData, trigger: handleGenAction, reset: reset1 } = usePosterData('desc/18', errorHandler);
  const handleGen = () => {
    if (!randomNum || !randomSeed) return;
    handleGenAction({
      size: randomNum,
      seed: randomSeed,
    });
  };

  const { data: fitData, trigger: handleFitAction, reset: reset2 } = usePosterData('desc/19', errorHandler);
  const handleFit = async () => {
    if (!fitDate || !freq) return;
    handleFitAction({
      date: fitDate?.format('YYYY-MM-DD'),
      freq,
    });
  };

  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs('2019-06-30'));
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs('2022-10-31'));

  const {
    data: timeChartData,
    trigger: handleDraw1Action,
    reset: reset3,
  } = usePosterData('desc/20', errorHandler, {
    title: '预测图',
    resCallback: (res) => res.image,
  });
  const handleDraw1 = async () => {
    if (!startDate || !endDate) return;
    handleDraw1Action({
      start: startDate?.format('YYYY-MM-DD'),
      end: endDate?.format('YYYY-MM-DD'),
    });
  };

  const [delayNums, setDelayNums] = useState<number | null>(30);

  const {
    data: acfData,
    trigger: handleDraw12Action,
    reset: reset4,
  } = usePosterData('desc/21', errorHandler, {
    title: '绘制时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图',
    resCallback: (res) => res.image,
  });

  const handleDraw2 = async () => {
    if (!delayNums) return;
    handleDraw12Action({
      size: delayNums,
    });
  };

  const handleReset = () => {
    setRandomNum(100);
    setRandomSeed(0);
    setStartDate(dayjs('2019-06-30'));
    setEndDate(dayjs('2022-10-31'));
    setFreq('M');
    setDelayNums(30);
    reset1();
    reset2();
    reset3();
    reset4();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="生成时间序列" code={ArmaModelCode[0]} />
        <LabelText label="长度" className="mr-2" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />
        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {timeSeriesData ? (
          <>
            <ResultDisplay
              keyName="var18"
              type="json"
              title={`${randomNum}时间序列`}
              data={[
                {
                  title: '时间序列',
                  data: timeSeriesData,
                },
              ]}
            />
            <CapTitle className="my-2" index={2} title="进行拟合" tip="创建 ARMA 模型对象,获取拟合结果对象" code={ArmaModelCode[1]} />
            <LabelText label="起始时间" tip="指定拟合起始时间" className="mx-2" />
            <DatePicker value={fitDate} onChange={(val) => setFitDate(val)} />
            <LabelText className="ml-2" label="设置时间周期" />
            <Select style={{ width: 150 }} value={freq} onChange={setFreq} options={freqOptions} />
            <br />
            <Button className="mt-2" type="primary" onClick={() => handleFit()}>
              拟合
            </Button>
          </>
        ) : null}

        {fitData ? (
          <>
            <ResultDisplay
              keyName="var19"
              title="拟合结果的摘要信息"
              type="json"
              data={[
                {
                  data: fitData,
                },
              ]}
            ></ResultDisplay>
            <CapTitle className="my-2" index={3} title="绘制预测图" code={ArmaModelCode[2]} />
            <LabelText label="起始时间" tip="指定预测起始时间" className="mx-2" />
            <DatePicker value={startDate} onChange={(val) => setStartDate(val)} />

            <LabelText label="结束时间" tip="指定预测结束时间" className="mx-2" />
            <DatePicker value={endDate} onChange={(val) => setEndDate(val)} />

            <br />
            <TooltipBtn onClick={handleDraw1} type="primary" tip="">
              绘制
            </TooltipBtn>
          </>
        ) : null}

        {timeChartData && !errorText ? (
          <>
            <ResultDisplay keyName="var20" type="image" title="预测图" data={[timeChartData]} />
            <CapTitle className="my-2" index={4} title="绘制时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图" code={ArmaModelCode[3]} />
            <LabelText label="滞后值个数" className="mr-2" />
            <InputNumber id="randomNum" min={1} value={delayNums} onChange={(e) => setDelayNums(e || null)} />
            <br />

            <TooltipBtn onClick={handleDraw2} type="primary" tip="时间序列数据的时序图、ACF、PACF、QQ图和PP图">
              绘制
            </TooltipBtn>
          </>
        ) : null}

        {acfData ? (
          <ResultDisplay keyName="var21" type="image" title="时间序列数据的时序图、ACF、PACF、QQ图和PP图" data={[acfData]} />
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
