import { useMemo, useState } from 'react';
import { InputNumber, Select } from 'antd';
import { useAtomValue } from 'jotai';

import ResetBtn from '@/components/share/reset-btn';
import TooltipBtn from '@/components/share/tooltip-btn';
import CapTitle from '@/components/share/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useLessonPoster } from '@/lib/http/lesson-poster';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';

export default function RelRatio() {
  const { lessonPoster } = useLessonPoster();
  const title = '自相关与偏自相关系数';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const [relData, setRelData] = useState<Record<string, any>>();

  const { errorText, setErrorText, catchErrorWrapper } = useFetchError();

  const [reqParams, setReqParams] = useState({
    lnCol: '营业收入',
    nflags: 15,
  });

  const handleGen = useMemo(
    () =>
      catchErrorWrapper(async () => {
        const res = await lessonPoster('preprocessing/6', reqParams);
        setRelData(res);
      }),
    [reqParams]
  );

  const handleReset = () => {
    setRelData([]);
    setErrorText(null);
    setReqParams({
      lnCol: '营业收入',
      nflags: 15,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title={title} code={ArimaDataAnaCode[6]} />
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
        <TooltipBtn
          className="mb-2"
          tip="使用时间序列工具包（statsmodels.tsa.stattools）中的acf和pacf函数"
          type="primary"
          onClick={handleGen}
        >
          计算
        </TooltipBtn>

        {relData && !errorText ? (
          <ResultDisplay
            title={title}
            type="json"
            data={[
              {
                title: 'ACF_lnIncome',
                data: relData?.ACF_lnIncome || [],
              },
              {
                title: 'PACF_lnIncome',
                data: relData?.PACF_lnIncome || [],
              },
            ]}
          />
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
