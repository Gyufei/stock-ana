import { useState } from 'react';
import { Button, InputNumber, Select } from 'antd';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';

import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';

import ResultDisplay from '@/components/share/result-display';
import ImageConfig, { IImageConfig } from '@/components/share/image-config';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';

export default function LnIncome1Chart() {
  const title = 'lnIncome_1时序图';
  const { chartData, handleDraw, resetChartData, errorText, setErrorText } = useChartImage('preprocessing/4', title);
  const originColOptions = useAtomValue(originColOptionsAtom);

  const [imageConfig, setImageConfig] = useState<IImageConfig>({
    x: '季度',
    y: '对数营业收入的一阶差分',
    title: '对数营业收入的一阶差分趋势',
    lnCol: '营业收入',
    yMax: 3,
    yMin: -3,
  });

  const handleReset = () => {
    resetChartData();
    setErrorText(null);
    setImageConfig({
      x: '季度',
      y: '对数营业收入的一阶差分',
      title: '对数营业收入的一阶差分趋势',
      lnCol: '营业收入',
      yMax: 3,
      yMin: -3,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="绘制一阶差分时序图" code={ArimaDataAnaCode[4]} />
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
            <LabelText className="w-18 ml-4" label="Y轴限定范围" />
            <InputNumber
              value={imageConfig.yMin}
              onChange={(e) =>
                setImageConfig({
                  ...imageConfig,
                  yMin: e,
                })
              }
            />
            <span className="mx-1">-</span>
            <InputNumber
              value={imageConfig.yMax}
              onChange={(e) =>
                setImageConfig({
                  ...imageConfig,
                  yMax: e,
                })
              }
            />
          </div>
        </ImageConfig>
        <Button onClick={() => handleDraw(imageConfig)} type="primary">
          绘制
        </Button>

        {chartData.length && !errorText ? <ResultDisplay data={chartData} type="image" title={title} /> : null}

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
