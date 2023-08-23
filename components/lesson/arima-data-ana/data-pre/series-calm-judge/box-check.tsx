import { Button } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import dataProcessPoster from '@/lib/http/data-process-poster';
import { likeArrayObjToArray } from '@/lib/utils/util';
import ResultDisplay from '@/components/lesson/common/result-display';

export default function BoxCheck() {
  const [boxCheckData, setBoxCheck] = useState<Record<string, any>>();

  const handleGen = async () => {
    const res = await dataProcessPoster(7);
    setBoxCheck(res);
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

    return data;
  }, [boxCheckData]);

  const handleReset = () => {
    setBoxCheck([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title="获得Ljung-Box检验统计量" tip="也可获得acf和pacf值" code={ArimaDataAnaCode[7]} />
        <Button className="mb-2" type="primary" onClick={handleGen}>
          计算
        </Button>

        {boxCheckData ? <ResultDisplay type="table" data={tData} title="Ljung-Box检验统计量, acf值, pacf值" /> : null}
      </div>
    </div>
  );
}
