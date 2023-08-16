import { Button, Collapse, CollapseProps, InputNumber } from 'antd';
import { useState } from 'react';

import { ArpCode } from '@/data/code/arima';
import ResetBtn from './common/reset-btn';
import ImageDisplay from './common/image-display';
import DataDisplay from './common/data-display';
import CapTitle from './common/cap-title';
import LabelText from './common/label-text';
import TooltipBtn from './common/tooltip-btn';

export default function ArpModel() {
  const [randomNum, setRandomNum] = useState<number | null>(1000);
  const [randomSeed, setRandomSeed] = useState<number | null>(5);

  const [noiseData, setNoiseData] = useState<Array<number>>([]);
  const [whiteNoiseData, setWhiteNoiseData] = useState<Array<number>>([]);
  const [ar1Data, setAr1Data] = useState<Array<number>>([]);

  const [timeChartData, setTimeChartData] = useState<any[]>([]);
  const [relChartData, setRelChartData] = useState<any[]>([]);

  const [residualData, setResidualData] = useState<Array<number>>([]);

  const [residualChartData, setResidualChartData] = useState<any[]>([]);
  const [residualDisChartData, setResidualDisChartData] = useState<any[]>([]);

  const handleGen = () => {
    if (!randomNum) return;

    const data1 = [];
    for (let i = 0; i < randomNum; i++) {
      data1.push(Math.floor(Math.random() * 1000));
    }
    setNoiseData(data1);

    const data2 = [];
    for (let i = 0; i < randomNum; i++) {
      data2.push(Math.floor(Math.random() * 1000));
    }
    setWhiteNoiseData(data2);
  };

  const handleGenAr1 = () => {
    if (!randomNum || !whiteNoiseData.length) return;

    const data = [];
    for (let i = 0; i < randomNum; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    setAr1Data(data);
  };

  const noiseDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `${randomNum}个随机数据`,
      children: (
        <DataDisplay
          displayData={[
            {
              title: '随机序列',
              data: noiseData,
            },
            {
              title: '白噪声序列',
              data: whiteNoiseData,
            },
          ]}
        />
      ),
    },
  ];

  const ar1DataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `AR(1)序列`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: ar1Data,
            },
          ]}
        />
      ),
    },
  ];

  const ResidualDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `残差序列`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: residualData,
            },
          ]}
        />
      ),
    },
  ];

  const TimeChartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `滞后时序图`,
      children: <ImageDisplay images={timeChartData} />,
    },
  ];

  const RelChartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `自相关与偏自相关图`,
      children: <ImageDisplay images={relChartData} />,
    },
  ];

  const ResidualChartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `残差`,
      children: <ImageDisplay images={residualChartData} />,
    },
  ];

  const ResidualDisChartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `残差`,
      children: <ImageDisplay images={residualDisChartData} />,
    },
  ];

  const handleTimeDraw1 = () => {
    setTimeChartData((val: Array<string>) => {
      const newImg = {
        title: '时间序列的滞后图(延迟为1)',
        name: '时间序列的滞后图',
        tip: '延迟为1的时间序列图，即前一个时间步之间的散点图',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleTimeDraw2 = () => {
    setTimeChartData((val: Array<any>) => {
      const newImg = {
        title: '时间序列的滞后图(延迟为i + 1)',
        name: '不同滞后阶数的时间序列滞后图',
        tip: '第i个子图上绘制延迟为i+1的时间序列滞后图',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleRelDraw1 = () => {
    setRelChartData((val: Array<string>) => {
      const newImg = {
        title: '时间序列的自相关图',
        name: '时间序列的自相关图',
        tip: '自相关图，用于展示时间序列数据之间的自相关性, 横轴是滞后阶数，纵轴是自相关系数',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleRelDraw2 = () => {
    setRelChartData((val: Array<any>) => {
      const newImg = {
        title: '时间序列的自相关图和偏自相关图',
        name: '时间序列的自相关图和偏自相关图',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleCalcResidual = () => {
    if (!ar1Data.length || !randomNum) return;

    const data = [];
    for (let i = 0; i < randomNum; i++) {
      data.push(Math.floor(Math.random() * 1000));
    }
    setResidualData(data);
  };

  const handleResidualDraw = () => {
    setResidualChartData((val: Array<any>) => {
      const newImg = {
        // title: 'AR模型的预测值和残差',
        name: 'AR模型的预测值和残差',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleResidualDisDraw = () => {
    setResidualDisChartData((val: Array<any>) => {
      const newImg = {
        // title: 'AR模型的预测值和残差',
        name: '残差分布图',
      };

      const newVal = val.filter((item: any) => item.name !== newImg.name);
      return [...newVal, newImg];
    });
  };

  const handleReset = () => {
    setRandomNum(100);
    setRandomSeed(0);
    setAr1Data([]);
    setNoiseData([]);
    setWhiteNoiseData([]);
    setResidualData([]);
    setTimeChartData([]);
    setRelChartData([]);
    setResidualChartData([]);
    setResidualDisChartData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="生成随机数列" code={ArpCode[0]} />
        <LabelText label="长度" className="mr-2" />
        <InputNumber id="randomNum" min={100} value={randomNum} onChange={(e) => setRandomNum(e || null)} />
        <LabelText label="随机数种子" tip="设置随机种子，确保每次运行生成的随机数相同，保证结果的可重复性" className="mx-2" />
        <InputNumber id="randomNum" min={0} value={randomSeed} onChange={(e) => setRandomSeed(e || null)} />
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成随机数
        </Button>

        {whiteNoiseData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={noiseDataCon} />
            <CapTitle className="my-2" index={2} title="生成AR1序列" tip="生成AR(1)线性序列:y(t)=0.5y(t-1)+ε(t)" code={ArpCode[1]} />
            <Button type="primary" onClick={handleGenAr1}>
              生成AR1序列
            </Button>
          </>
        ) : null}

        {ar1Data.length ? <Collapse className="mt-4" defaultActiveKey="1" items={ar1DataCon} /> : null}

        {ar1Data.length ? (
          <>
            <CapTitle className="my-2" index={3} title="绘制滞后时序图" code={[ArpCode[2], ArpCode[3]]} />
            <TooltipBtn onClick={handleTimeDraw1} type="primary" tip="延迟为1的时间序列图，即前一个时间步之间的散点图">
              绘制(延迟为1)
            </TooltipBtn>
            <TooltipBtn className="mx-2" onClick={handleTimeDraw2} type="primary" tip="第i个子图上绘制延迟为i+1的时间序列滞后图">
              绘制(延迟为i+1)
            </TooltipBtn>

            {timeChartData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={TimeChartCon} /> : null}
          </>
        ) : null}

        {ar1Data.length ? (
          <>
            <CapTitle className="my-2" index={4} title="绘制自相关与偏自相关图" code={[ArpCode[4], ArpCode[5]]} />
            <TooltipBtn onClick={handleRelDraw1} type="primary" tip="使用pandas库的autocorrelation_plot函数,">
              绘制(方法1)
            </TooltipBtn>
            <TooltipBtn className="mx-2" onClick={handleRelDraw2} type="primary" tip="使用statsmodels库的plot_acf, plot_pacf函数">
              绘制(方法2)
            </TooltipBtn>

            {relChartData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={RelChartCon} /> : null}
          </>
        ) : null}

        {ar1Data.length ? (
          <>
            <CapTitle className="my-2" index={5} title="AR(1)模型拟合" tip="1阶AR模型拟合（OLS）" code={[ArpCode[6], ArpCode[7]]} />
            <TooltipBtn onClick={handleCalcResidual} type="primary" tip="残差是观测值与预测值之间的差异">
              计算残差
            </TooltipBtn>
            {residualData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={ResidualDataCon} /> : null}

            <br />
            <Button className="mt-2" type="primary" onClick={handleResidualDraw}>
              绘制残差
            </Button>
            {residualChartData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={ResidualChartCon} /> : null}
          </>
        ) : null}

        {ar1Data.length ? (
          <>
            <CapTitle className="my-2" index={6} title="查看残差分布" code={ArpCode[8]} />
            <Button type="primary" onClick={handleResidualDisDraw}>
              绘制残差分布
            </Button>
            {residualDisChartData.length ? <Collapse className="mt-4" defaultActiveKey="1" items={ResidualDisChartCon} /> : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
