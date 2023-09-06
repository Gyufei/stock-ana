import { Alert, Button, Select } from 'antd';
import ResetBtn from '@/components/share/reset-btn';
import { usePosterData } from '@/lib/hook/use-poster-data';
import ResultDisplay from '@/components/share/result-display';
import { useState } from 'react';
import ImageConfig, { IImageConfig } from '@/components/share/image-config';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import { useFetchError } from '@/lib/hook/use-fetch-error';

export default function LnSeriesChart() {
  const title = '对数营业收入（lnIncome）的时序图';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: chartData,
    trigger: handleDraw,
    reset: resetChartData,
  } = usePosterData('preprocessing/3', errorHandler, {
    title,
    resCallback: (res) => res.image,
  });

  const [imageConfig, setImageConfig] = useState<IImageConfig>({
    x: '季度',
    y: '对数营业收入',
    title: '对数营业收入趋势',
    lnCol: '营业收入',
  });

  const handleReset = () => {
    resetChartData();
    setImageConfig({
      x: '季度',
      y: '对数营业收入',
      title: '对数营业收入趋势',
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <ImageConfig config={imageConfig} setConfig={setImageConfig}>
          <div>
            <LabelText className="w-18" label="选取对数列" />
            <Select
              style={{ width: 150 }}
              value={imageConfig.lnCol}
              onChange={(val) => {
                setImageConfig({ ...imageConfig, lnCol: val });
              }}
              options={originColOptions}
            />
          </div>
        </ImageConfig>
        <Button className="mb-2" onClick={() => handleDraw(imageConfig)} type="primary">
          绘制
        </Button>

        {chartData && !errorText ? (
          <>
            <ResultDisplay keyName="var5" data={[chartData]} type="image" title={title} />
            <Alert
              className="mt-2"
              type="info"
              showIcon
              message="分析结论"
              description="对数时序图说明：格力电器营业收入的波动性减弱，降低了异方差。"
            />
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
      </div>
    </div>
  );
}
