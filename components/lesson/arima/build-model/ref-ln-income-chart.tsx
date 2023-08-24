import { Button, InputNumber, Select } from 'antd';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '@/components/share/result-display';
import { useState } from 'react';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import { BuildModelCode } from '@/data/code/arima';

export default function RelLnIncomeChart() {
  const title = '对数营业收入（lnIncome）的自相关图与偏自相关图';
  const originColOptions = useAtomValue(originColOptionsAtom);
  const { chartData, handleDraw, resetChartData, errorText, setErrorText } = useChartImage('buildModel/1', title);

  const [reqParams, setReqParams] = useState({
    lnCol: '营业收入',
    nflags: 20,
  });

  const handleReset = () => {
    resetChartData();
    setErrorText('');
    setReqParams({
      lnCol: '营业收入',
      nflags: 20,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={BuildModelCode[0]} />
        <div className="mb-2">
          <LabelText className="w-18" label="选取对数列" />
          <Select
            style={{ width: 150 }}
            value={reqParams.lnCol}
            onChange={(val) => {
              setReqParams({ ...reqParams, lnCol: val });
            }}
            options={originColOptions}
          />
          <LabelText className="w-18 ml-4" label="最大滞后阶数" />
          <InputNumber
            value={reqParams.nflags}
            onChange={(e) =>
              setReqParams({
                ...reqParams,
                nflags: e || 0,
              })
            }
          />
        </div>
        <Button className="mb-2" onClick={() => handleDraw(reqParams)} type="primary">
          绘制
        </Button>

        {chartData.length && !errorText && !errorText ? <ResultDisplay type="image" title={title} data={chartData}></ResultDisplay> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            data={[
              {
                error: errorText,
              },
            ]}
            title={title}
          />
        )}
      </div>
    </div>
  );
}
