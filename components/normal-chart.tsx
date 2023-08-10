import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import { forwardRef } from 'react';

// import HighChartsIndicators from 'highcharts/indicators/indicators';
// import HighChartsPivotPoints from 'highcharts/indicators/pivot-points';
// import HighChartsMacd from 'highcharts/indicators/macd';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

// HighChartsIndicators(Highcharts);
// HighChartsPivotPoints(Highcharts);
// HighChartsMacd(Highcharts);

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
