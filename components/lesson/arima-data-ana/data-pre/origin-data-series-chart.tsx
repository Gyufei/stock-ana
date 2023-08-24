import { useState } from 'react';
import { Alert, Button } from 'antd';

import { useChartImage } from '@/lib/hook/use-chart-image';
import ResetBtn from '../../common/reset-btn';
import ImageConfig, { IImageConfig } from '../../common/image-config';
import ResultDisplay from '../../common/result-display';

export default function OriginDataSeriesChart() {
  const title = '原始数据时序图';

  const { chartData, handleDraw, resetChartData, errorText } = useChartImage(2, title);

  const [imageConfig, setImageConfig] = useState<IImageConfig>({
    x: '季度',
    y: '营业收入（百万元）',
    title: '营业收入趋势',
  });

  const handleReset = () => {
    resetChartData();
    setImageConfig({
      x: '季度',
      y: '营业收入（百万元）',
      title: '营业收入趋势',
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <ImageConfig config={imageConfig} setConfig={setImageConfig} />
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
              description={`结论： 自2010年以来，格力电器营业收入整体上呈季节性上升形态，但又分三个阶段：
              第一阶段（2010-2014），对应专业化发展的黄金期，营业收入呈季节性震荡式上升趋势；
              第二阶段（2015-2019），该阶段对应于公司战略从专业化向多元化转型期，前两年其营业收入峰值均低于2013年和2014年，此后快速上升；
              第三阶段（2020-2021），该阶段对应于冠状病毒疫情期，2020年各季度营业收入均低于前两年。
              同时，图6-1也显示，随着时间推移，公司外部经营环境复杂化，格力电器季度营业收入的波动持续加大，可能存在异方差。
              因此，可以粗略推断营业收入原始序列非平稳，且存在异方差。
            `}
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
