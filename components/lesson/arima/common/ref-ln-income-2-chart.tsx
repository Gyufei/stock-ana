import { Button, InputNumber, Select } from 'antd';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { usePosterData } from '@/lib/hook/use-poster-data';
import ResultDisplay from '@/components/share/result-display';
import { useState } from 'react';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { useComments } from '@/lib/hook/use-comment';

export default function RelLnIncome2Chart() {
  const title = '二阶差分（lnIncome_2）的自相关图与偏自相关图';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: chartData,
    trigger: handleDrawAction,
    reset: resetChartData,
  } = usePosterData('preprocessing/9', errorHandler, {
    title,
    resCallback: (res) => res.image,
  });

  const [reqParams, setReqParams] = useState({
    lnCol: '营业收入',
    nflags: 20,
  });

  const handleReset = () => {
    resetChartData();
    setReqParams({
      lnCol: '营业收入',
      nflags: 20,
    });
  };

  const { comments, handleSetComments } = useComments();
  const handleDraw = (params: any) => {
    handleDrawAction(params);
    handleSetComments({
      ...comments,
      var3: `PACF图说明：自相关的波动性普遍在+-0.2-+-0.4徘徊，相关性较高。`,
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
        <Button className="mb-2" onClick={() => handleDraw(reqParams)} type="primary">
          绘制
        </Button>

        {chartData ? (
          <>
            <ResultDisplay keyName="var11" type="image" title={title} data={[chartData]}></ResultDisplay>
          </>
        ) : null}

        {errorText && (
          <ResultDisplay
            type="error"
            data={[
              {
                data: errorText,
              },
            ]}
            title={title}
          />
        )}
      </div>
    </div>
  );
}
