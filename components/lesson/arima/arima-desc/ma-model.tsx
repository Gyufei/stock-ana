import { Button, InputNumber } from 'antd';
import { useState } from 'react';

import { MaCode } from '@/data/code/arima';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function ArpModel() {
  const title = '时间序列数据的时序图、ACF、PACF、QQ图和 PP图';
  const [timeSNum, setTimeSNum] = useState<number | null>(200);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;

  const {
    data: chartData,
    trigger: handleDraw,
    reset,
  } = usePosterData('desc/17', errorHandler, {
    resCallback: (res) => res.image,
  });

  const handleReset = () => {
    reset();
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
        {chartData && !errorText ? <ResultDisplay keyName='var17' type="image" data={[chartData]} title="滞后时序图" /> : null}

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
