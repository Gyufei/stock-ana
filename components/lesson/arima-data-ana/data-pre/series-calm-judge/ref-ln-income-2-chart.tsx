import { Button, InputNumber, Select } from 'antd';
import ResetBtn from '../../../common/reset-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '../../../common/result-display';
import { useState } from 'react';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '../../state';

export default function RelLnIncome2Chart() {
  const title = '二阶差分（lnIncome_2）的自相关图与偏自相关图';
  const originColOptions = useAtomValue(originColOptionsAtom);
  const { chartData, handleDraw, resetChartData, errorText, setErrorText } = useChartImage(9, title);

  const [reqParams, setReqParams] = useState({
    lnCol: '营业收入',
    nflags: 15,
  });

  const handleReset = () => {
    resetChartData();
    setErrorText('');
    setReqParams({
      lnCol: '营业收入',
      nflags: 15,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={ArimaDataAnaCode[9]} />
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
        <Button className="mb-2" onClick={() => handleDraw()} type="primary">
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
