import { Button } from 'antd';
import { useState } from 'react';

import { MaCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';

export default function ArpModel() {
  const [chartData, setChartData] = useState<any[]>([]);

  const handleDraw = () => {
    setChartData((val: Array<string>) => {
      const newImg = {
        title: '时间序列数据的时序图、ACF、PACF、QQ图和 PP图',
        name: '时间序列数据的时序图、ACF、PACF、QQ图和 PP图1',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleReset = () => {
    setChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="模拟MA(1)过程" code={[MaCode[0], MaCode[1], MaCode[2]]} />
        <Button type="primary" onClick={() => handleDraw()}>
          模拟
        </Button>
        {chartData.length ? <ResultDisplay type="image" data={chartData} title="滞后时序图" /> : null}
      </div>
    </div>
  );
}
