import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighChartMore from 'highcharts/highcharts-more';
import { forwardRef } from 'react';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  HighChartMore(Highcharts);

  // HighChartsIndicators(Highcharts);
  // HighChartsPivotPoints(Highcharts);
  // HighChartsMacd(Highcharts);
}

const NormalChart = forwardRef(({ options, loading, ...reset }: any, ref: any) => {
  if (loading) {
    ref?.current?.chart?.showLoading('数据加载中...');
  } else {
    ref?.current?.chart?.hideLoading();
  }

  return (
    <HighchartsReact
      ref={ref}
      containerProps={{
        className: 'flex-1',
        style: {
          height: '100%',
        },
      }}
      highcharts={Highcharts}
      options={options}
      {...reset}
    />
  );
});

NormalChart.displayName = 'NormalChart';

export default NormalChart;
