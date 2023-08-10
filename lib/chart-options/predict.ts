import Highcharts from 'highcharts';

export const chartOptions: Highcharts.Options = {
  title: {
    text: '股价预测',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: '股价',
    },
  },
  series: [
    {
      type: 'line',
      name: '股价',
      data: [],
    },
  ],
};
