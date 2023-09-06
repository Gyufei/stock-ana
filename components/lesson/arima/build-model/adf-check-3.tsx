import { useState } from 'react';
import { Button, Select } from 'antd';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { BuildModelCode } from '@/data/code/arima';
import { usePosterData } from '@/lib/hook/use-poster-data';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';

export default function ADFCheck3() {
  const title = 'ADF检验(方法三)';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const { data: resData, trigger: handleGenAction, reset: reset1 } = usePosterData('build_model/5', errorHandler);

  const [reqParams, setReqParams] = useState<Record<string, string | null>>({
    lnCol: '营业收入',
  });

  const handleGen = async () => {
    if (!reqParams.lnCol) return;
    await handleGenAction(reqParams);
  };

  const handleReset = () => {
    reset1();
    setReqParams({
      lnCol: '营业收入',
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} tip="自定义函数" code={[BuildModelCode[4], BuildModelCode[5]]} />
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
        </div>
        <Button className="mb-2" type="primary" onClick={handleGen}>
          计算
        </Button>

        {resData ? <ResultDisplay keyName="var17" title="对数营业收入序列的检验结果" type="json" data={[resData]} /> : null}

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
