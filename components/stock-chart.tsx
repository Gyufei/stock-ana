import Highcharts from 'highcharts/highstock';

import HighchartsReact from 'highcharts-react-official';
import HighChartsIndicators from 'highcharts/indicators/indicators';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighChartsPivotPoints from 'highcharts/indicators/pivot-points';
import HighChartsMacd from 'highcharts/indicators/macd';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

HighChartsIndicators(Highcharts);
HighChartsPivotPoints(Highcharts);
HighChartsMacd(Highcharts);

const StockChart = ({ options, highcharts, ...reset }: { options: Highcharts.Options; highcharts: typeof Highcharts }) => (
  <HighchartsReact
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
export default StockChart;
