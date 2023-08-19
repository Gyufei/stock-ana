const dateUtils = {
  getToday(): string {
    const t = new Date();
    return this.formatDate(t);
  },

  getTodayThirty(): string {
    const t = new Date();
    const e = new Date(t.getTime() - 2592000000);
    const n = e.getFullYear();
    let i: string | number = e.getMonth() + 1;
    let r: string | number = e.getDate();
    i = i < 10 ? '0' + i : String(i);
    r = r < 10 ? '0' + r : String(r);
    return `${n}-${i}-${r}`;
  },

  getYesterday(): string {
    const t = new Date();
    t.setDate(t.getDate() - 1);
    return this.formatDate(t);
  },

  getLastWeekday(): string {
    const t = new Date();
    t.setDate(t.getDate() - 7);
    return this.formatDate(t);
  },

  getLastSomeMonthDay(months: number): string {
    const e = new Date();
    e.setMonth(e.getMonth() - months);
    return this.formatDate(e);
  },

  getLastYearToday(date?: string): string {
    const e = date ? new Date(date) : new Date();
    const n = e.getFullYear() - 1;
    const i = e.getMonth() + 1;
    const t = e.getDate();
    const newI = i < 10 ? '0' + i : String(i);

    let newT = t < 10 ? '0' + t : String(t);
    if (newI === '02' && newT === '29') {
      newT = '28';
    }
    return `${n}-${newI}-${newT}`;
  },

  getLastYearYesterday(): string {
    const t = new Date();
    t.setDate(t.getDate() - 1);
    t.setFullYear(t.getFullYear() - 1);
    return this.formatDate(t);
  },

  getLastMonthLastDay(): string {
    const t = new Date();
    const e = new Date(t.getFullYear(), t.getMonth(), 0);
    return this.formatDate(e);
  },

  formatDate(date: Date): string {
    const n = date.getFullYear();
    const i = date.getMonth() + 1;
    const r = date.getDate();
    const newI = i < 10 ? '0' + i : String(i);
    const newR = r < 10 ? '0' + r : String(r);
    return `${n}-${newI}-${newR}`;
  },

  changeDateVal(t: string): string {
    return t.substring(0, 4) + '-' + t.substring(4, 6) + '-' + t.substring(6);
  },

  sortArrByDate(arr: any[]): any[] {
    return arr.sort((t, e) => (Number(t.date) > Number(e.date) ? 1 : -1));
  },

  getWeekByDay(date: string): string {
    return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date(Date.parse(date)).getDay()];
  },

  getDateAndTimeByReg(date: string): { date: string; time: string } | undefined {
    if (date) {
      const e = new RegExp('([0-9-]+)[T|\\s]([0-9:]+)');
      const n = date.match(e);
      return {
        date: n![1],
        time: n![2],
      };
    }
  },

  pad(num: number): string {
    return num < 10 ? '0' + num : String(num);
  },

  toTimeString(date: number): string {
    const e = new Date(date);
    return `${e.getFullYear()}-${this.pad(e.getMonth() + 1)}-${this.pad(e.getDate())} ${this.pad(e.getHours())}:${this.pad(
      e.getMinutes()
    )}:${this.pad(e.getSeconds())}`;
  },

  getTime(date: string): number {
    const e = this.changeDateVal(date);
    return new Date(e).getTime();
  },
};

export default dateUtils;
