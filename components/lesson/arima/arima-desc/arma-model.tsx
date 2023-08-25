import { Button, DatePicker, InputNumber, Select } from 'antd';
import { useMemo, useState } from 'react';

import { ArmaModelCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import TooltipBtn from '@/components/share/tooltip-btn';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import dataPoster from '@/lib/http/data-process-poster';
import dayjs from 'dayjs';

export default function ArmaModel() {
  const [randomNum, setRandomNum] = useState<number | null>(510);
  const [randomSeed, setRandomSeed] = useState<number | null>(12345);

  const [timeSeriesData, setTimeSeriesData] = useState<Array<number>>([]);

  const [fitDate, setFitDate] = useState<dayjs>(dayjs('1980-01-01'));
  const freqOptions = [
    { label: '日', value: 'D' },
    { label: '月', value: 'M' },
    { label: '季度', value: 'Q-JAN' },
    { label: '周', value: 'W' },
    { label: '年', value: 'Y' },
  ];
  const [freq, setFreq] = useState('M');

  const [fitData, setFitData] = useState<Array<number>>([]);

  const [timeChartData, setTimeChartData] = useState<any[]>([]);
  const [acfData, setAcfData] = useState<any[]>([]);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/18', {
          size: randomNum,
          seed: randomSeed,
        });
        setTimeSeriesData(res);
      }),
    [randomNum, randomSeed]
  );

  const handleFit = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/19', {
          date: fitDate.format('YYYY-MM-DD'),
          freq,
        });
        setFitData(res);
      }),
    [fitDate, freq]
  );

  const [startDate, setStartDate] = useState<dayjs>(dayjs('2019-06-30'));
  const [endDate, setEndDate] = useState<dayjs>(dayjs('2022-10-31'));

  const handleDraw1 = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/20', {
          start: startDate.format('YYYY-MM-DD'),
          end: endDate.format('YYYY-MM-DD'),
        });

        setTimeChartData((val: Array<string>) => {
          const newImg = {
            title: '预测图',
            src: res.image,
          };

          const newVal = val.filter((item: any) => item.title !== newImg.title);
          return [...newVal, newImg];
        });
      }),
    []
  );

  const [delayNums, setDelayNums] = useState<number | null>(30);

  const handleDraw2 = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await dataPoster('desc/21', {
          size: delayNums,
        });

        setAcfData((val: Array<string>) => {
          const newImg = {
            title: '绘制时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图',
            src: res.image,
          };

          const newVal = val.filter((item: any) => item.title !== newImg.title);
          return [...newVal, newImg];
        });
      }),
    [delayNums]
  );

  const handleReset = () => {
    setRandomNum(100);
    setRandomSeed(0);
    setFitData([]);
    setTimeSeriesData([]);
    setTimeChartData([]);
    setAcfData([]);
    setErrorText(null);
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

        {timeSeriesData.length && !errorText ? (
          <>
            <ResultDisplay
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
            <Button className="mt-2" type="primary" onClick={handleFit}>
              拟合
            </Button>
          </>
        ) : null}

        {fitData.length ? (
          <>
            <ResultDisplay
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

        {timeChartData.length && !errorText ? (
          <>
            <ResultDisplay type="image" title="预测图" data={timeChartData} />
            <CapTitle className="my-2" index={4} title="绘制时间序列数据的时序图、ACF、PACF、QQ 图和 PP 图" code={ArmaModelCode[3]} />
            <LabelText label="滞后值个数" className="mr-2" />
            <InputNumber id="randomNum" min={1} value={delayNums} onChange={(e) => setDelayNums(e || null)} />
            <br />

            <TooltipBtn onClick={handleDraw2} type="primary" tip="时间序列数据的时序图、ACF、PACF、QQ图和PP图">
              绘制
            </TooltipBtn>
          </>
        ) : null}

        {acfData.length ? <ResultDisplay type="image" title="时间序列数据的时序图、ACF、PACF、QQ图和PP图" data={acfData} /> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title="AR(1)模型拟合"
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
