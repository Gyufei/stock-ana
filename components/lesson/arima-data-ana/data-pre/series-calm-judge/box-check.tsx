import { Button, Collapse, CollapseProps } from 'antd';
import { useMemo, useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import DataDisplay from '../../../common/data-display';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import dataProcessPoster from '@/lib/data-process-poster';
import { likeArrayObjToArray } from '@/lib/util';
import GenDataCon from '@/components/lesson/common/gen-data-con';

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

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `Ljung-Box检验统计量, acf值, pacf值`,
      children: (
        <>
          <DataDisplay
            displayData={[
              {
                title: 'r',
                data: likeArrayObjToArray(boxCheckData?.AC),
              },
              {
                title: 'b',
                data: likeArrayObjToArray(boxCheckData?.PAC),
              },
            ]}
          />
          <GenDataCon data={tData} />
        </>
      ),
    },
  ];

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
        {boxCheckData ? <Collapse defaultActiveKey="1" items={randomDataCon} /> : null}
      </div>
    </div>
  );
}
