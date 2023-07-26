<!-- define("../components/strategy-lib/backreport/backreport", ["require", "exports", "module", "VueAjax", "VueConfig", "commonFunc", "wdatepicker", "datemethod", "../../../lib/datamethod"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig")
      , a = t("commonFunc")
      , o = (t("wdatepicker"),
    t("datemethod"))
      , s = t("../../../lib/datamethod"); -->

<!-- n.exports = Vue.extend( -->
<template>
  <div @click="hideOption" id="customcode_backrepottbox_chartspanel" class="backrepottbox-chartspanel">
    <div id="customcode_backrepottbox_toolbar" class="toolbar clearfix">
      <div class="toolbar-datasection">
        <input type="text" disabled="disabled" v-model="startdate" id="customcode_backrepottbox_startDate" /><span>至</span
        ><input type="text" disabled="disabled" v-model="enddate" id="customcode_backrepottbox_endDate" />
      </div>
      <div class="toolbar-money">
        <span>￥</span><input type="text" disabled="disabled" v-model="fundBase" id="customcode_backrepottbox_money" />
      </div>
      <div @click.stop="troggleOption" class="toolbar-pattern clearfix">
        <span id="customcode_backrepottbox_pattern" class="fl" :data-pattern="selectedFrequency.value">{{ selectedFrequency.name }}</span
        ><span class="icon icon-down fr mt5"></span>
        <ul v-show="showOption" id="toolbar_pattern_select" class="toolbar-pattern-select">
          <li
            @click="selectOption(item.value)"
            v-for="item in frequency"
            :data-pattern="item.value"
            class="toolbar-pattern-option"
            :class="item.selected ? activeClass : null"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div
        id="link_bkrpt"
        @click="jumpDetail"
        v-stat="{act: \'hcxq\'}"
        data-backreportid=""
        class="fr mr10 backreport_title_btn link_backreport_result"
      >
        回测详情 &gt;
      </div>
    </div>
    <table id="customcode_backrepottbox_data" class="backrepottbox-data">
      <thead>
        <tr>
          <td>策略收益</td>
          <td>基准收益</td>
          <td>Alpha</td>
          <td>Beta</td>
          <td>Sharpe</td>
          <td>最大回撤</td>
        </tr>
      </thead>
      <tbody id="customcode_backrepottbox_data_tbody">
        <tr>
          <td>{{ performance.yieldData }}</td>
          <td>{{ performance.benchmarkYield }}</td>
          <td>{{ performance.alpha }}</td>
          <td>{{ performance.beta }}</td>
          <td>{{ performance.sharp }}</td>
          <td>{{ performance.drawdown }}</td>
        </tr>
      </tbody>
    </table>
    <div id="customcode_backrepottbox_charts" class="backrepottbox-charts" style="width: 820px; height: 403px">
      <div v-show="showEmpty" :style="profitChartStyle"><p style="text-align: center; margin-top: 50px">点击“运行”进行回测</p></div>
      <div v-show="!showEmpty" id="customcode_backrepottbox_chart1" :style="profitChartStyle"></div>
      <div v-show="!hideRecordChart &amp;&amp; !showEmpty" id="customcode_backrepottbox_chart4" style="width: 100%; height: 50%"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      fundBase: 1e6,
      startdate: '2016-06-05',
      enddate: '2017-05-31',
      frequency: [
        {
          value: 'DAILY',
          name: '每日',
          selected: !0,
        },
        {
          value: 'MINUTE',
          name: '分钟',
          selected: !1,
        },
      ],
      performance: {
        alpha: '--',
        benchmarkYield: '--',
        beta: '--',
        drawdown: '--',
        progress: '--',
        sharp: '--',
        sortino: '--',
        volatility: '--',
        yieldData: '--',
      },
      showEmpty: !0,
      hideRecordChart: !0,
      chartId: 'customcode_backrepottbox_chart1',
      recordChartId: 'customcode_backrepottbox_chart4',
      showOption: !1,
      activeClass: 'toolbar-pattern-option-active',
      trades: [],
      process: 0,
    };
  },
  computed: {
    getProcess: function () {
      return (100 * this.process).toFixed(2) + '%';
    },
    processStyle: function () {
      return {
        width: this.getProcess,
      };
    },
    strategyChoosed: function () {
      return this.$store.state.strategyChoosed;
    },
    backtestid: function () {
      return this.$store.state.backtestId;
    },
    backtestinfo: function () {
      return this.$store.state.backtestInfo;
    },
    profitChartStyle: function () {
      return {
        width: '100%',
        height: this.hideRecordChart ? '100%' : '50%',
      };
    },
    selectedFrequency: function () {
      for (var t in this.frequency) if (this.frequency[t].selected) return this.frequency[t];
      return (this.frequency[0].selected = !0), this.frequency[0];
    },
    isShow: function () {
      return this.$store.state.backreportShow;
    },
  },

  mounted: function () {
    (this.showEmpty = !1), this.renderTop(), this.renderChart();
    var t = this;
    $(window).resize(function () {
      t.chartResize();
    });
  },

  watch: {
    backtestid: function () {
      (this.showEmpty = !1), this.renderTop(), this.renderChart();
    },
    startdate: function (t) {
      this.$store.state.runParams.beginDate = t;
    },
    enddate: function (t) {
      this.$store.state.runParams.endDate = t;
    },
    fundBase: function (t) {
      this.$store.state.runParams.capitalBase = t;
    },
    selectedFrequency: {
      handler: function (t) {
        this.$store.state.runParams.frequency = t.value;
      },
      deep: !0,
    },
    isShow: function () {
      this.chartResize();
    },
  },
  methods: {
    jumpDetail: function () {
      if (!this.backtestid) return a.warningTip('暂无数据'), !1;
      location.href =
        -1 !== window.location.pathname.indexOf('ifind')
          ? 'backtest-result-ifind.html?id=' + this.backtestid + '&fid=' + this.strategyChoosed.folder_id + '&t=strategylib'
          : 'backtest-result.html?id=' + this.backtestid + '&fid=' + this.strategyChoosed.folder_id + '&t=strategylib';
    },
    troggleOption: function () {
      this.showOption = !1;
    },
    hideOption: function () {
      this.showOption = !1;
    },
    selectOption: function (t) {
      for (var e in this.frequency) this.frequency[e].value === t ? (this.frequency[e].selected = !0) : (this.frequency[e].selected = !1);
    },
    renderChart: function () {
      if (!this.backtestid) return void this.reset();
      this.initChart();
    },
    initChart: function () {
      this.chart && (this.chart.destroy(), (this.chart = void 0));
      var t = {};
      (t = this.buildChartParams()),
        this.chart || (this.chart = Highcharts.stockChart(this.chartId, t)),
        this.chart.showLoading(),
        this.requestTradeDay();
    },
    requestTradeDay: function () {
      var t = this;
      i.jsonp({
        url: r.ajax['study-strategy'].getTradeDayList,
        data: {
          backTestId: this.backtestid,
        },
        success: function (e) {
          if ((t.interval && (clearInterval(t.interval), (t.interval = !1)), (t.trades = e), t.isRunning))
            return t.requestChartData(), void (t.interval = setInterval(t.requestChartData, 2e3));
          t.requestChartData();
        },
      });
    },
    requestChartData: function () {
      this.interval && !this.isRunning && (clearInterval(this.interval), (this.interval = !1));
      var t = this;
      this.backtestid &&
        i.jsonp({
          url: r.ajax['study-strategy'].backtestLoop,
          data: {
            backTestId: this.backtestid,
          },
          success: function (e) {
            e.performance.progress && (t.process = e.performance.progress),
              (t.performance = {
                yieldData: s.formatPerfomanceData(e.performance, 'yield', !0),
                benchmarkYield: s.formatPerfomanceData(e.performance, 'benchmark_yield', !0),
                alpha: s.formatPerfomanceData(e.performance, 'alpha', !1),
                beta: s.formatPerfomanceData(e.performance, 'beta', !1),
                sharp: s.formatPerfomanceData(e.performance, 'sharpe_ratio', !1),
                volatility: s.formatPerfomanceData(e.performance, 'volatility', !1),
                sortino: s.formatPerfomanceData(e.performance, 'sortino', !1),
                drawdown: s.formatPerfomanceData(e.performance, 'max_drawdown', !0),
                winrate: s.formatPerfomanceData(e.performance, 'win_rate', !0),
              });
            var n = {
              benchmarkProfit: [],
              algoProfit: [],
              record: {},
            };
            for (var i in t.trades) {
              var r = t.trades[i];
              n.benchmarkProfit.push([o.getTime(r), e.profit.list[r] ? 100 * e.profit.list[r].benchmark_profit : null]),
                n.algoProfit.push([o.getTime(r), e.profit.list[r] ? 100 * e.profit.list[r].algo_profit : null]);
            }
            e.record ? (n = t._parseRecordData(e.record, n)) : (n.record = !1), t.updateChart(n);
          },
          resulterror: function () {},
          error: function () {},
        });
    },
    _parseRecordData: function (t, e) {
      var n = {};
      for (var i in t) for (var r in t[i]) n.hasOwnProperty(r) || (n[r] = null);
      var a = _.keys(n);
      for (var s in this.trades) {
        var l = this.trades[s];
        for (var c in a) {
          var u = a[c];
          if (e.record.hasOwnProperty(u)) {
            var d = t[l] && t[l][u] ? t[l][u] : null;
            e.record[u].push([o.getTime(l), d]);
          } else e.record[u] = [];
        }
      }
      return e;
    },
    updateChart: function (t) {
      var e = [],
        n = this;
      if (
        (t.record && this.updateRecordChart(),
        (e = [
          {
            name: '策略收益',
            type: 'spline',
            data: t.algoProfit,
          },
          {
            name: '基准收益',
            type: 'area',
            fillOpacity: 0.2,
            data: t.benchmarkProfit,
          },
        ]),
        _.keys(t.record).length)
      )
        for (var i in t.record)
          e.push({
            name: i,
            yAxis: 1,
            data: t.record[i],
          });
      $.each(e, function (t, e) {
        var i = !1,
          r = e;
        $.each(n.chart.series, function (t, e) {
          if (e && r.name == e.name) return (i = !0), e.update(r), !1;
        }),
          i || n.chart.addSeries(r);
      }),
        this.chart.redraw(),
        this.chart.hideLoading(),
        this.chartResize();
    },
    chartResize: function () {
      var t = this,
        e = $('#customcode_backrepottbox_chartspanel').width(),
        n = $('#customcode_backrepottbox_chartspanel').height() - $('#customcode_backrepottbox_data').height() - 40;
      $('#customcode_backrepottbox_charts').css({
        width: e,
        height: n,
      }),
        this.timeout && (clearTimeout(this.timeSet), (this.timeSet = !1)),
        (this.timeSet = setTimeout(function () {
          t.chart && t.chart.reflow();
        }, 20));
    },
    reset: function () {
      (this.performance = {
        alpha: '--',
        benchmarkYield: '--',
        beta: '--',
        drawdown: '--',
        progress: '--',
        sharp: '--',
        sortino: '--',
        volatility: '--',
        yieldData: '--',
      }),
        (this.showEmpty = !0),
        (this.process = 0);
    },
    renderTop: function () {
      var t = this,
        e = $('#customcode_backrepottbox_startDate'),
        n = $('#customcode_backrepottbox_endDate');
      if (
        (e.unbind('click').click(function () {
          new WdatePicker({
            maxDate: "#F{$dp.$D('customcode_backrepottbox_endDate')}",
            minDate: '2005-1-1',
            startDate: o.getLastYearYesterday(),
            onpicked: function (e) {
              t.startdate = $(this).val();
            },
          });
        }),
        n.unbind('click').click(function () {
          new WdatePicker({
            minDate: "#F{$dp.$D('customcode_backrepottbox_startDate')}",
            maxDate: o.getYesterday(),
            startDate: o.getLastMonthLastDay(),
            onpicked: function (e) {
              t.enddate = $(this).val();
            },
          });
        }),
        !this.backtestid)
      )
        return !1;
      this.requestBacktestInfo();
    },
    requestBacktestInfo: function () {
      var t = this.backtestinfo;
      (this.startdate = t.hasOwnProperty('begin_date') ? t.begin_date : o.getLastYearYesterday()),
        (this.enddate = t.hasOwnProperty('end_date') ? t.end_date : o.getLastMonthLastDay()),
        (this.fundBase = t.capital_base);
      for (var e in this.frequency) {
        this.frequency[e].value === t.frequency ? (this.frequency[e].selected = !0) : (this.frequency[e].selected = !1);
      }
    },
    buildChartParams: function (t) {
      return {
        colors: ['#aa4643', '#4572a7', '#89a54e', '#80699b', '#18a5ca'],
        credits: {
          text: 'quant.10jqka.com.cn',
          href: '//quant.10jqka.com.cn',
        },
        rangeSelector: {
          enabled: !1,
        },
        yAxis: [
          {
            id: 'yieldRate',
            labels: {
              align: 'right',
              x: -3,
              formatter: function () {
                return this.value + '%';
              },
              step: 5,
            },
            title: {
              text: '收益走势',
            },
            opposite: !0,
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
            opposite: !0,
            visible: !1,
          },
        ],
        xAxis: [
          {
            labels: {
              enabled: !1,
            },
            startOnTick: !0,
            endOnTick: !0,
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
          maskInside: !1,
        },
        tooltip: {
          shared: !0,
          valueDecimals: 2,
          followPointer: !0,
          formatter: function () {
            var t = this.points,
              e = [],
              n = Highcharts.dateFormat('%Y-%m-%d', this.x),
              i = o.getWeekByDay(n);
            return (
              e.push(
                '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                  n +
                  '  ' +
                  i +
                  '</span> <span></b><br/>'
              ),
              $.each(t, function (t, n) {
                if (!n) return !1;
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
              }),
              e.join('')
            );
          },
        },
      };
    },
    updateRecordChart: function () {
      var t = [
        {
          id: 'yieldRate',
          labels: {
            align: 'right',
            x: -3,
            formatter: function () {
              return this.value + '%';
            },
            step: 5,
          },
          title: {
            text: '收益走势',
          },
          opposite: !0,
          tickAmount: 10,
          plotLines: [
            {
              value: 0,
              width: 2,
              color: '#000',
            },
          ],
          height: '45%',
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
          top: '50%',
          height: '45%',
          offset: 0,
          opposite: !0,
          visible: !0,
        },
      ];
      this.chart.update({
        yAxis: t,
      });
    },
  },
};
</script>
// ) // }),
