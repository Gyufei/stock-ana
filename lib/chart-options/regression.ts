export const chartOptions = {
  title: {
    text: '',
  },
  xAxis: {
    categories: [0, 1, 2, 3, 4, 5],
  },
  yAxis: {
    title: {
      text: '数值',
    },
  },
  tooltip: {
    // eslint-disable-next-line no-unused-vars
    formatter: function (this: any) {
      const points = this.points;
      let tooltipText: string = '<b>第' + this.x + '项:</b><br/>';
      points.forEach(function (point: any) {
        tooltipText += point.series.name + ': ' + point.y + '<br/>';
      });
      return tooltipText;
    },
    shared: true, // 允许tooltip共享显示多个系列的数据
  },
  series: [
    {
      name: '真实值',
      data: [],
      color: '#FF0000',
    },
    {
      name: '预测值',
      data: [],
      color: '#0000FF',
    },
  ],
};
