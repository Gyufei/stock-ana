import Highcharts from 'highcharts';

export const chartOptions: Highcharts.Options = {
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: '股价和成交量预测',
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%Y-%m-%d',
    },
  },
  yAxis: [
    {
      labels: {
        align: 'right',
        x: -3,
      },
      title: {
        text: '股价',
      },
      height: '79%',
      lineWidth: 2,
    },
    {
      labels: {
        align: 'right',
        x: -3,
      },
      title: {
        text: '成交量',
      },
      top: '80%',
      height: '19%',
      offset: 0,
      lineWidth: 2,
    },
  ],
  series: [
    {
      type: 'candlestick',
      name: '股价',
      data: [],
      yAxis: 0,
    },
    {
      type: 'column',
      name: '成交量',
      data: [],
      yAxis: 1,
    },
  ],
};
