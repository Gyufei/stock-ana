import Highcharts from 'highcharts';
import dateUtils from '../utils/dateUtil';

const formatYAxis = (value: any) => {
  if (value === 0) {
    return value;
  }

  let formatted = value;

  if (value > -1 && value < 1) {
    formatted = value.toFixed(1);
  } else if (Number.isInteger(value)) {
    formatted = value;
  } else {
    formatted = value.toFixed(1);
  }

  if (formatted > 1000000 || formatted < -1000000) {
    formatted = (formatted / 1000000).toFixed(1) + 'M';
  } else if (formatted > 1000 || formatted < -1000) {
    formatted = (formatted / 1000).toFixed(1) + 'K';
  }

  return formatted;
};

export const chartOptions: Highcharts.Options = {
  colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
  chart: {
    marginTop: 12,
  },
  plotOptions: {
    column: {
      dataGrouping: {
        enabled: false,
      },
    },
    line: {
      dataGrouping: {
        enabled: false,
      },
    },
  },
  rangeSelector: {
    selected: 5,
    inputDateFormat: '%Y-%m-%d',
    enabled: true,
    inputEnabled: true,
    buttonSpacing: 1,
    buttonTheme: {
      fill: '#fff',
      stroke: '#999',
      width: 40,
      height: 16,
      r: 2,
      style: {
        color: '#676A74',
        font: '14px "Microsoft yahei", sans-serif',
      },
      states: {
        hover: {},
        select: {
          fill: '#5389D2',
          style: {
            color: 'white',
            font: '14px "Microsoft yahei", sans-serif',
          },
        },
      },
    },
    buttons: [
      {
        type: 'week',
        count: 1,
        text: '1周',
      },
      {
        type: 'month',
        count: 1,
        text: '1月',
      },
      {
        type: 'month',
        count: 3,
        text: '3月',
      },
      {
        type: 'month',
        count: 6,
        text: '6月',
      },
      {
        type: 'year',
        count: 1,
        text: '1年',
      },
      {
        type: 'all',
        count: 1,
        text: '全部',
      },
    ],
    labelStyle: {
      color: '#676A74',
      font: '14px',
    },
  },
  legend: {
    enabled: true,
    align: 'left',
    verticalAlign: 'top',
    itemStyle: {
      font: '14px',
      color: '#333',
    },
    x: 308,
  },
  tooltip: {
    shared: true,
    enabled: true,
    valueDecimals: 2,
    followPointer: true,
    borderColor: '#eeeeee',
    padding: 5,
    // eslint-disable-next-line no-unused-vars
    formatter: function (this: any) {
      let t = this.points,
        e = [],
        n = Highcharts.dateFormat('%Y-%m-%d', this.x as any),
        i = dateUtils.getWeekByDay(n),
        // eslint-disable-next-line no-unused-vars
        r = 0;
      return (
        e.push('<div style="background: #eeeeee; border: 0; border-radius: 3px;">'),
        e.push(
          '<b><div style = "color: #333;font-size:13px; line-height: 18px; padding: 2px 0;"><span style="font-weight: 600;">' +
            n +
            '  ' +
            i +
            '</span> <div></b><br/>'
        ),
        t.forEach(function (n: any) {
          if (!n) return false;
          if ('基准收益' == n.series.name)
            e.push(
              '<span style="color:#2F4554; line-height: 18px; font-weight:600; padding: 5px 0;">基准收益：<span style="font-weight:700;color:#2F4554;">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            );
          else if ('策略收益' == n.series.name)
            e.push(
              '<span style="color:#C23531; line-height: 18px; font-weight:600; padding: 5px 0;">策略收益：<span style="font-weight:700; color:#C23531;">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            );
          else if ('超额收益' == n.series.name)
            e.push(
              '<span style="color:#f89c6d; line-height: 18px; font-weight:600; padding: 5px 0;">超额收益：<span style="font-weight:700; color:#f89c6d;">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            );
          else if ('当日盈亏' == n.series.name) {
            var i = n.y >= 0 ? '#EE5F5B' : '#62C462';
            e.push(
              '<span style="color:' +
                i +
                '; line-height: 18px; font-weight:600; padding: 5px 0;">盈亏分析：<span style="font-weight:700;color:' +
                i +
                ';">' +
                Number(n.y).toFixed(2) +
                '%</span></span><br>'
            );
          } else if ('当日买入' == n.series.name)
            e.push(
              '<span style="color:#676a74; line-height: 18px; font-weight:600; padding: 5px 0;">当日买入：<span style="font-weight:700; color:#676a74;">' +
                Math.round(100 * n.y) / 100 +
                '</span></span><br>'
            );
          else if ('当日卖出' == n.series.name)
            e.push(
              '<span style="color:#22ac38; line-height: 18px; font-weight:600; padding: 5px 0;">当日卖出：<span style="font-weight:700; color:#22ac38;">' +
                Math.round(100 * n.y) / 100 +
                '</span></span><br>'
            );
          else {
            var a = Math.round(100 * n.y) / 100;
            e.push(
              '<span style="font-weight:600; padding: 5px 0; color:' +
                n.color +
                '">' +
                n.series.name +
                '：<span style="font-weight:700; color:' +
                n.color +
                '">' +
                a +
                '</span></span><br>'
            ),
              r++;
          }
        }),
        e.push('</div>'),
        e.join('')
      );
    },
  },
  xAxis: {
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
    startOnTick: false,
    endOnTick: false,
    gridLineWidth: 0,
    labels: {
      enabled: true,
      autoRotation: [-45],
    },
    plotBands: [
      {
        color: '#e4f0ff',
        from: 1507680000000,
        to: 1539820800000,
        id: 'plot-bank',
        label: {
          text: '最大回撤区间',
          style: {
            color: '#676a74',
            textAlign: 'center',
          },
        },
      },
    ],
  },
  yAxis: [
    {
      labels: {
        align: 'left',
        x: 0,
        formatter: function (): string {
          return formatYAxis(this.value) + '%';
        },
      },
      title: {
        text: '收益走势',
      },
      height: '49%',
      tickAmount: 10,
      opposite: true,
    },
    {
      labels: {
        align: 'left',
        x: 0,
        formatter: function (): string {
          return formatYAxis(this.value) + '%';
        },
      },
      title: {
        text: '盈亏分析',
      },
      top: '50%',
      height: '29%',
      offset: 0,
      tickAmount: 10,
      opposite: true,
    },
    {
      labels: {
        align: 'left',
        x: 0,
        formatter: function (): string {
          return formatYAxis(this.value);
        },
      },
      title: {
        text: '成交记录',
      },
      top: '80%',
      height: '19%',
      offset: 0,
      tickAmount: 10,
      opposite: true,
    },
  ],
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  series: [
    {
      type: 'line',
      name: '基准收益',
      color: '#2F4554',
      tooltip: {},
      lineWidth: 1,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
    },
    {
      type: 'line',
      name: '策略收益',
      color: '#C23531',
      tooltip: {},
      lineWidth: 1,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
      data: [],
    },
    {
      type: 'line',
      name: '超额收益',
      color: '#f89c6d',
      tooltip: {},
      lineWidth: 1,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
      data: [],
    },
    {
      type: 'column',
      name: '当日盈亏',
      color: '#EE5F5B',
      negativeColor: '#62C462',
      yAxis: 1,
      showInLegend: false,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
      data: [],
    },
    {
      type: 'column',
      name: '当日买入',
      color: '#EE5F5B',
      yAxis: 2,
      showInLegend: false,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
      data: [],
    },
    {
      type: 'column',
      name: '当日卖出',
      color: '#62C462',
      yAxis: 2,
      showInLegend: false,
      states: {
        hover: {
          enabled: true,
          halo: {
            size: 1,
          },
        },
      },
      data: [],
    },
  ],
};
