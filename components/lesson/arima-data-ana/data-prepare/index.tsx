import { Button, Collapse, CollapseProps, Select } from 'antd';
import { useContext, useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import CapTitle from '../../common/cap-title';
import TooltipBtn from '../../common/tooltip-btn';
import fetcher from '@/lib/fetcher';
import GenDataCon from '../../common/gen-data-con';
import { DataContext } from '..';
import { PathMap } from '@/lib/path-map';

export default function DataPrepare() {
  const { setOriginData } = useContext(DataContext);
  const [oData, setOData] = useState<Array<any>>([]);

  const handleRead = async () => {
    const ctt = await fetcher(PathMap.AiIndex + '/showdata?id=10');
    setOData(ctt);
  };

  const excelDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `读取的原始数据`,
      children: <GenDataCon data={oData} />,
    },
  ];

  const reGenColOptions = Object.keys(oData[0] || {}).map((key) => ({ label: key, value: key }));
  const reGenCalcOptions = [
    { value: 100000, label: '十万' },
    { value: 1000000, label: '百万' },
    { value: 10000000, label: '千万' },
  ];

  const [reGenCalcNum, setReGenCalcNum] = useState<number | null>(1000000);
  const [reGenData, setReGenData] = useState<Array<any>>([]);

  const handleReGen = () => {
    if (!reGenCalcNum) return;

    const rD = oData.map((item: Record<string, any>) => {
      item['营业收入'] = Number(Number(item['营业收入'] / reGenCalcNum).toFixed(2));
      return item;
    });

    setOriginData(rD);
    setReGenData(rD);
  };

  const reGenDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `处理后的数据`,
      children: <GenDataCon data={reGenData} />,
    },
  ];

  const handleReset = () => {
    setOData([]);
    setReGenData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="读取原始数据" />
        <TooltipBtn className="mb-2" type="primary" onClick={handleRead} tip="运用pd.read_excel函数读取原始数据文件，进行数据描述性统计。">
          读取数据
        </TooltipBtn>

        {oData.length > 0 ? (
          <>
            <Collapse defaultActiveKey="1" items={excelDataCon} />
            <CapTitle className="my-2" index={2} title="处理原始数据" />
            <div>
              <span>为方便数据展示和查看，设置</span>
              <Select className="mx-1" defaultValue={reGenColOptions[1].value} options={reGenColOptions} />
              <span>的显示方式为</span>
              <Select className="mx-1" value={reGenCalcNum} onChange={setReGenCalcNum} options={reGenCalcOptions} />
            </div>
            <Button className="mb-2" onClick={handleReGen} type="primary">
              处理
            </Button>
          </>
        ) : null}

        {reGenData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={reGenDataCon} /> : null}
      </div>
    </div>
  );
}
