import Highcharts from 'highcharts';
import dateUtils from '../dateUtil';

export const chartOptions: Highcharts.Options = {
  colors: ['#aa4643', '#4572a7', '#89a54e', '#80699b', '#18a5ca'],
  credits: {
    text: '智慧会计平台',
    href: '',
  },
  rangeSelector: {
    enabled: false,
  },
  yAxis: [
    {
      id: 'yieldRate',
      labels: {
        align: 'right',
        x: -3,
        formatter: function (this: any) {
          return `${this.value}%`;
        },
        step: 5,
      },
      title: {
        text: '收益走势',
      },
      opposite: true,
      tickAmount: 10,
      plotLines: [
        {
          value: 0,
          width: 2,
          color: '#000',
        },
      ],
    },
    {
      id: 'selfDefined',
      labels: {
        align: 'right',
        x: -3,
        step: 5,
      },
      title: {
        text: '自定义画图',
      },
      tickAmount: 10,
      height: '0%',
      offset: 0,
      opposite: true,
      visible: false,
    },
  ],
  xAxis: [
    {
      labels: {
        enabled: false,
      },
      startOnTick: false,
      endOnTick: false,
      gridLineWidth: 1,
      dateTimeLabelFormats: {
        millisecond: '%Y%m%d',
        second: '%Y%m%d',
        minute: '%Y%m%d',
        hour: '%Y%m%d',
        day: '%Y%m%d',
        week: '%Y%m%d',
        month: '%Y%m%d',
        year: '%Y%m%d',
      },
      tickLength: 0,
      tickWidth: 0,
    },
  ],
  navigator: {
    margin: 2,
    height: 20,
    maskInside: false,
  },
  tooltip: {
    shared: true,
    valueDecimals: 2,
    followPointer: true,
    formatter: function (this: any) {
      var t = this.points,
        e = [],
        n = Highcharts.dateFormat('%Y-%m-%d', Number(this.x)),
        i = dateUtils.getWeekByDay(n);

      e.push(
        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' + n + '  ' + i + '</span> <span></b><br/>'
      );
      (this.points || []).forEach(function (n: any) {
        if (!n) return false;
        '基准收益' == n.series.name
          ? e.push(
              '<span style="color:' +
                n.color +
                '; line-height: 18px;">基准收益：<span style="font-weight:700">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            )
          : '策略收益' == n.series.name
          ? e.push(
              '<span style="color:' +
                n.color +
                '; line-height: 18px;">策略收益：<span style="font-weight:700">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            )
          : e.push(
              '<span style="color:' +
                n.color +
                '; line-height: 18px;">' +
                n.series.name +
                '：<span style="font-weight:700">' +
                Number(n.y).toFixed(2) +
                '</span></span><br>'
            );
      });

      return e.join('');
    },
  },
  series: [
    {
      name: '策略收益',
      type: 'spline',
      data: [],
    },
    {
      fillOpacity: 0.2,
      name: '基准收益',
      type: 'area',
      data: [],
    },
  ],
};
