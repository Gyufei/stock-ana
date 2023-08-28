import { Button, InputNumber } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';
import { useLessonPoster } from '@/lib/http/lesson-poster';
import { useFetchError } from '@/lib/hook/use-fetch-error';

export default function SmoothTimeSeries() {
  const { lessonPoster } = useLessonPoster();
  const title = '白噪声数据的折线图';
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomData, setRandomData] = useState<Array<number>>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        if (!randomNum) return;

        const res = await lessonPoster('desc/1', {
          size: randomNum,
        });
        setRandomData(res);
      }),
    [randomNum]
  );

  const handleDraw = useMemo(() => 
    catchErrorWrapper(
      async () => {
        const res = await lessonPoster('desc/2');

        setChartData([
          {
            src: res.image
          },
        ]);
      }
    ), [randomData]
  );

  const handleReset = () => {
    setRandomNum(1000);
    setRandomData([]);
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
          title={title}
          tip="白噪声是一种具有均值为零、方差为一的随机信号，通常用于模拟随机性或噪声"
        />
        <LabelText label="长度" tip="服从标准正态分布的随机数" />
        <InputNumber id="randomNum" min={1} value={randomNum} onChange={(e) => setRandomNum(e || null)} />

        <Button type="primary" className="ml-5 mb-2" onClick={handleGen}>
          生成随机数
        </Button>

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

        {randomData.length > 0 ? (
          <>
            <ResultDisplay
              title={`${randomNum}个随机数据`}
              type="json"
              data={[
                {
                  data: randomData,
                },
              ]}
            />
            <CapTitle className="my-2" index={2} title="绘制白噪声折线图" />
            <Button onClick={() => handleDraw()} type="primary">
              绘制
            </Button>
          </>
        ) : null}

        {chartData.length ? <ResultDisplay type="image" data={chartData} title="白噪声数据的折线图" /> : null}
      </div>
    </div>
  );
}
