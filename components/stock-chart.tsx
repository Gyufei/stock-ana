import Highcharts from 'highcharts/highstock';

import HighchartsReact from 'highcharts-react-official';
import HighChartsIndicators from 'highcharts/indicators/indicators';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighChartsPivotPoints from 'highcharts/indicators/pivot-points';
import HighChartsMacd from 'highcharts/indicators/macd';
import { forwardRef } from 'react';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

HighChartsIndicators(Highcharts);
HighChartsPivotPoints(Highcharts);
HighChartsMacd(Highcharts);

const StockChart = forwardRef(({ options, highcharts, loading, ...reset }: any, ref: any) => {
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
      highcharts={highcharts}
      constructorType={'stockChart'}
      options={options}
      {...reset}
    />
  );
});

StockChart.displayName = 'StockChart';

export default StockChart;
