import { Button, Select, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '@/components/share/reset-btn';
import { useLessonPoster } from '@/lib/http/lesson-poster';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';
import { useAtomValue } from 'jotai';
import { originDataAtom } from '@/lib/states/lesson-arima-state';
import { useFetchError } from '@/lib/hook/use-fetch-error';

export default function OriginTimeSeriesData() {
  const { lessonPoster } = useLessonPoster();
  const title = '日期性序列——季度序列';

  const originData = useAtomValue(originDataAtom);

  const [timeSeriesData, setTimeSeriesData] = useState<Array<any>>([]);
  const [indexType, setIndexType] = useState<string>('');

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const [freq, setFreq] = useState('Q-JAN');
  const [start, setStart] = useState('2010Q1');
  const [end, setEnd] = useState('2020Q4');

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const index = freqOptions.find((o) => o.value === freq)?.label;
        const res = await lessonPoster('preprocessing/1', {
          index,
          freq,
          start,
          end,
        });

        setTimeSeriesData(res.data);
        setIndexType(res.type);
      }),
    [freq, start, end]
  );

  const freqOptions = [
    { label: '日', value: 'D' },
    { label: '月', value: 'M' },
    { label: '季度', value: 'Q-JAN' },
    { label: '周', value: 'W' },
    { label: '年', value: 'Y' },
  ];

  const dateOptions = useMemo(() => {
    const dO = originData.map((o) => o['报表日期']).map((d: string) => ({ label: d, value: d }));
    return dO;
  }, [originData]);

  const handleReset = () => {
    setErrorText(null);
    setTimeSeriesData([]);
    setFreq('Q-JAN');
    setStart('2010Q1');
    setEnd('2020Q4');
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <LabelText label="设置时间周期" />
        <Select style={{ width: 150 }} value={freq} onChange={setFreq} options={freqOptions} />
        <div className="mt-2">
          <LabelText label="选择开始日期" />
          <Select style={{ width: 150 }} value={start} onChange={setStart} options={dateOptions} />
          <LabelText className="ml-2" label="选择结束日期" />
          <Select style={{ width: 150 }} value={end} onChange={setEnd} options={dateOptions} />
        </div>

        <Button type="primary" className="my-2" onClick={handleGen}>
          生成序列
        </Button>

        {timeSeriesData?.length > 0 && !errorText ? (
          <ResultDisplay type="table" title={title} data={timeSeriesData}>
            <div className="pb-2 border-b mb-2">
              <Tooltip className="mr-2" title={`类型应是 <class 'pandas._libs.tslibs.period.Period'>`}>
                索引类型
                <i className="mx-1 fa-solid fa-circle-info"></i>:
              </Tooltip>
              <code>{indexType}</code>
            </div>
          </ResultDisplay>
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
      </div>
    </div>
  );
}
