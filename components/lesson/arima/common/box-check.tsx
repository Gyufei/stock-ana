import { Button, InputNumber, Select } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { likeArrayObjToArray } from '@/lib/utils/util';
import ResultDisplay from '@/components/share/result-display';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import LabelText from '@/components/share/label-text';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function BoxCheck() {
  const originColOptions = useAtomValue(originColOptionsAtom);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const { data: res, trigger: handleGenAction, reset: reset1 } = usePosterData('preprocessing/7', errorHandler);
  const boxCheckData = useMemo(() => (res?.data ? res?.data?.data : null), [res]);
  const rpqData = useMemo(
    () =>
      res?.data
        ? {
            r: res?.data?.r,
            p: res?.data?.p,
            q: res?.data?.q,
          }
        : null,
    [res]
  );

  const [reqParams, setReqParams] = useState({
    lnCol: '营业收入',
    nflags: 15,
  });

  const handleGen = async () => {
    if (!reqParams.lnCol || !reqParams.nflags) return;
    await handleGenAction(reqParams);
  };

  const tData = useMemo(() => {
    const ac = likeArrayObjToArray(boxCheckData?.AC);
    const pac = likeArrayObjToArray(boxCheckData?.PAC);
    const lag = likeArrayObjToArray(boxCheckData?.lag);
    const q = likeArrayObjToArray(boxCheckData?.Q);
    const prob = likeArrayObjToArray(boxCheckData?.['Prob(>Q)']);

    const data = ac.map((item, index) => {
      return {
        lag: lag[index],
        AC: item,
        PAC: pac[index],
        Q: q[index],
        ['Prob(>Q)']: prob[index],
      };
    });

    return { data };
  }, [boxCheckData]);

  const handleReset = () => {
    reset1();
    setReqParams({
      lnCol: '营业收入',
      nflags: 15,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle
          className="mb-2"
          title="获得Ljung-Box检验统计量: 自相关系数r，Q 及其概率值"
          tip="也可获得acf和pacf值"
          code={ArimaDataAnaCode[7]}
        />
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
        <Button className="mb-2" type="primary" onClick={handleGen}>
          计算
        </Button>

        {rpqData && !errorText ? (
          <ResultDisplay
            type="json"
            data={[
              {
                title: 'r',
                data: rpqData.r,
              },
              {
                title: 'p',
                data: rpqData.p,
              },
              {
                title: 'q',
                data: rpqData.q,
              },
            ]}
            title="Ljung-Box检验统计量 r, p, q"
          />
        ) : null}

        {boxCheckData && !errorText ? <ResultDisplay keyName='var9' type="table" data={[tData]} title="Ljung-Box检验统计量: acf值, pacf值" /> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            data={[
              {
                data: errorText,
              },
            ]}
            title="Ljung-Box检验统计量"
          />
        )}
      </div>
    </div>
  );
}
