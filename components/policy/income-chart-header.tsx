import { Tooltip } from 'antd';

export default function IncomeChartHeader() {
  const headerData = [
    {
      label: '策略收益',
      value: '136.43%	',
    },
    {
      label: '基准收益',
      value: '29.21%',
    },
    {
      label: '策略年化收益率',
      value: '19.28%',
    },
    {
      label: '基准年化收益',
      value: '5.39%',
    },
    {
      label: 'Alpha',
      value: '0.16',
    },
    {
      label: 'Beta',
      value: '0.33',
    },
    {
      label: 'Sharpe',
      value: '1',
    },
    {
      label: 'Sortino',
      value: '1.18',
    },
    {
      label: 'Information Ratio',
      value: '0.5',
    },
    {
      label: 'Volatility',
      value: '0.16',
    },
    {
      label: '最大回撤',
      value: '30.5%',
    },
    {
      label: 'Tracking Error',
      value: '0.22',
    },
    {
      label: 'Downside Risk',
      value: '0.14',
    },
    {
      label: '胜率',
      value: '57.3%',
    },
  ];

  return (
    <div className="bg-slate-200 flex gap-x-2 px-3 justify-between items-center h-[60px]">
      {headerData.map((item: any) => (
        <div key={item.label + item.value} className="flex flex-col justify-between items-center py-1">
          {item.label === '最大回撤' ? (
            <Tooltip title="2014-11-11 至 2015-1-1">
              <span className="mr-1">{item.label}</span>
              <i className="fa-solid fa-circle-question"></i>
            </Tooltip>
          ) : (
            <span>{item.label}</span>
          )}
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
