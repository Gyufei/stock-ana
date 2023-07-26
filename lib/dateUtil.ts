const dateUtils = {
  getToday: function () {
    var t = new Date();
    return this.formatDate(t);
  },
  getTodayThirty: function () {
    var t = new Date(),
      e = new Date(t - 2592e6),
      n = e.getFullYear(),
      i = e.getMonth() + 1,
      r = e.getDate();
    return (i = i < 10 ? '0' + i : i), (r = r < 10 ? '0' + r : r), n + '-' + i + '-' + r;
  },
  getYesterday: function () {
    var t = new Date();
    return t.setDate(t.getDate() - 1), this.formatDate(t);
  },
  getLastWeekday: function () {
    var t = new Date();
    return t.setDate(t.getDate() - 7), this.formatDate(t);
  },
  getLastSomeMonthday: function (t) {
    var e = new Date();
    return e.setMonth(e.getMonth() - t), this.formatDate(e);
  },
  getLastYearToday: function (t) {
    var e = t ? new Date(t) : new Date(),
      n = e.getFullYear() - 1,
      i = e.getMonth() + 1;
    return (
      (t = e.getDate()), (i = i < 10 ? '0' + i : i), (t = t < 10 ? '0' + t : t), 2 === i && 29 === t && (t = 28), n + '-' + i + '-' + t
    );
  },
  getLastYearYesterday: function () {
    var t = new Date();
    return t.setDate(t.getDate() - 1), t.setFullYear(t.getFullYear() - 1), this.formatDate(t);
  },
  getLastMonthLastDay: function () {
    var t = new Date(),
      e = new Date(t.getFullYear(), t.getMonth(), 0);
    return this.formatDate(e);
  },
  formatDate: function (t) {
    var e = new Date(t),
      n = e.getFullYear(),
      i = e.getMonth() + 1,
      r = e.getDate();
    return (i = i < 10 ? '0' + i : i), (r = r < 10 ? '0' + r : r), n + '-' + i + '-' + r;
  },
  changeDateVal: function (t) {
    return t.substring(0, 4) + '-' + t.substring(4, 6) + '-' + t.substring(6);
  },
  sortArrByDate: function (t) {
    return (
      t.sort(function (t, e) {
        return Number(t.date) > Number(e.date) ? 1 : -1;
      }),
      t
    );
  },
  getWeekByDay: function (t) {
    return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date(Date.parse(t)).getDay()];
  },
  getDateAndTimeByReg: function (t) {
    if (t) {
      var e = new RegExp('([0-9-]+)[T|\\s]([0-9:]+)'),
        n = t.match(e);
      return {
        date: n[1],
        time: n[2],
      };
    }
  },
  pad: function (t) {
    return t < 10 ? '0' + t : t;
  },
  toTimeString: function (t) {
    var e = new Date(t);
    return (
      e.getFullYear() +
      '-' +
      this.pad(e.getMonth() + 1) +
      '-' +
      this.pad(e.getDate()) +
      ' ' +
      this.pad(e.getHours()) +
      ':' +
      this.pad(e.getMinutes()) +
      ':' +
      this.pad(e.getSeconds())
    );
  },
  getTime: function (t) {
    var e = this.changeDateVal(t);
    return new Date(e).getTime();
  },
};

export default dateUtils;
