import { Alert, Button, Select } from 'antd';
import ResetBtn from '../../common/reset-btn';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '../../common/result-display';
import { useState } from 'react';
import ImageConfig, { IImageConfig } from '../../common/image-config';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '../state';

export default function LnSeriesChart() {
  const title = '对数营业收入（lnIncome）的时序图';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const { chartData, handleDraw, resetChartData, errorText, setErrorText } = useChartImage(3, title);

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
    setErrorText(null);
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

        {chartData.length && !errorText ? (
          <>
            <ResultDisplay data={chartData} type="image" title={title} />
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
                error: errorText,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
