import { useState } from 'react';
import { Button, InputNumber, Select } from 'antd';

import ResetBtn from '../../../common/reset-btn';
import CapTitle from '../../../common/cap-title';

import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';

import ResultDisplay from '../../../common/result-display';
import ImageConfig, { IImageConfig } from '@/components/lesson/common/image-config';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '../../state';

export default function LnIncome2Chart() {
  const title = 'lnIncome_2时序图';
  const { chartData, handleDraw, resetChartData, errorText, setErrorText } = useChartImage(5, title);
  const originColOptions = useAtomValue(originColOptionsAtom);

  const [imageConfig, setImageConfig] = useState<IImageConfig>({
    x: '季度',
    y: '对数营业收入的二阶差分',
    title: '对数营业收入的二阶差分趋势',
    lnCol: '营业收入',
    yMax: 3,
    yMin: -3,
  });

  const handleReset = () => {
    resetChartData();
    setErrorText(null);
    setImageConfig({
      x: '季度',
      y: '对数营业收入的二阶差分',
      title: '对数营业收入的二阶差分趋势',
      lnCol: '营业收入',
      yMax: 3,
      yMin: -3,
    });
  };

  return (
    <div>
      <ResetBtn className="mt-2" onClick={handleReset} />
      <div className="border-y py-2 ">
        <CapTitle className="mb-2" index={2} title="绘制二阶差分时序图" code={ArimaDataAnaCode[5]} />
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
