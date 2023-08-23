import { Button, Select, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import dataProcessPoster from '@/lib/http/data-process-poster';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '../../common/result-display';
import { useAtomValue } from 'jotai';
import { originDataAtom } from '../state';

export default function OriginTimeSeriesData() {
  const title = '日期性序列——季度序列';

  const originData = useAtomValue(originDataAtom);

  const [timeSeriesData, setTimeSeriesData] = useState<Array<any>>([]);
  const [indexType, setIndexType] = useState<string>('');

  const [errorText, setErrorText] = useState<string>('');

  const handleGen = async () => {
    setErrorText('');

    try {
      const index = freqOptions.find((o) => o.value === freq)?.label;
      const res = await dataProcessPoster(1, {
        index,
        freq,
        start,
        end,
      });

      setTimeSeriesData(res.data);
      setIndexType(res.type);
    } catch (e: any) {
      setErrorText(e?.info || '未知错误, 请重置后重试');
    }
  };

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

  const [freq, setFreq] = useState('Q-JAN');
  const [start, setStart] = useState('2010Q1');
  const [end, setEnd] = useState('2020Q4');

  const handleReset = () => {
    setTimeSeriesData([]);
    setErrorText('');
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

        {timeSeriesData?.length > 0 || errorText ? (
          errorText ? (
            <ResultDisplay
              type="error"
              title={title}
              data={[
                {
                  text: errorText,
                },
              ]}
            />
          ) : (
            <ResultDisplay type="table" title={title} data={timeSeriesData}>
              <div className="pb-2 border-b mb-2">
                <Tooltip className="mr-2" title={`类型应是 <class 'pandas._libs.tslibs.period.Period'>`}>
                  索引类型
                  <i className="mx-1 fa-solid fa-circle-info"></i>:
                </Tooltip>
                <code>{indexType}</code>
              </div>
            </ResultDisplay>
          )
        ) : null}
      </div>
    </div>
  );
}
