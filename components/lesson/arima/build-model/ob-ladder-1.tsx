import { useState } from 'react';
import { Button, InputNumber, Select } from 'antd';

import { usePosterData } from '@/lib/hook/use-poster-data';
import ResetBtn from '@/components/share/reset-btn';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import CapTitle from '@/components/share/cap-title';
import { BuildModelCode2 } from '@/data/code/arima';

export default function ObLadder1() {
  const title = '观察法定阶: 一阶差分自相关偏相关图';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const [reqParams, setReqParams] = useState<any>({
    n: 15,
    lnCol: '营业收入',
  });

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: chartData,
    trigger: handleDrawAction,
    reset: reset1,
  } = usePosterData('build_model/6', errorHandler, {
    title,
    resCallback: (res) => res.image,
  });

  const handleDraw = (params: any) => {
    handleDrawAction(params);
  };

  const handleReset = () => {
    setReqParams({
      n: 15,
    });
    reset1();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={BuildModelCode2[0]} />
        <LabelText className="w-18" label="选取对数列" />
        <Select
          style={{ width: 150 }}
          value={reqParams.lnCol}
          onChange={(val) => {
            setReqParams({ ...reqParams, lnCol: val });
          }}
          options={originColOptions}
        />
        <LabelText className="w-18 ml-4" label="阶数" />
        <InputNumber
          value={reqParams.n}
          onChange={(e) =>
            setReqParams({
              ...reqParams,
              nflags: e || 0,
            })
          }
        />
        <br />
        <Button className="my-2 mr-2" onClick={() => handleDraw(reqParams)} type="primary">
          绘制
        </Button>

        {chartData ? (
          <>
            <ResultDisplay keyName="var18" data={[chartData]} type="image" title={title} />
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
