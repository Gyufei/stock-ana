import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';

import { MaCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useLessonPoster } from '@/lib/http/lesson-poster';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';

export default function ArpModel() {
  const { lessonPoster } = useLessonPoster();
  const [chartData, setChartData] = useState<any[]>([]);
  const [timeSNum, setTimeSNum] = useState<number | null>(200);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleDraw = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await lessonPoster('desc/17', {
          size: timeSNum,
        });

        setChartData((val: Array<any>) => {
          const newImg = {
            // title: 'AR模型的预测值和残差',
            name: '残差分布图',
            src: res.image,
          };

          const newVal = val.filter((item: any) => item.name !== newImg.name);
          return [...newVal, newImg];
        });
      }),
    []
  );

  const handleReset = () => {
    setChartData([]);
    setErrorText(null);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="模拟MA(1)过程" code={[MaCode[0], MaCode[1], MaCode[2]]} />
        <LabelText label="时间序列长度" className="mr-2" />
        <InputNumber id="timeSNum" min={100} value={timeSNum} onChange={(e) => setTimeSNum(e || null)} />
        <br />
        <Button type="primary" onClick={() => handleDraw()}>
          模拟
        </Button>
        {chartData.length && !errorText ? <ResultDisplay type="image" data={chartData} title="滞后时序图" /> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title="时间序列数据的时序图、ACF、PACF、QQ图和 PP图"
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
