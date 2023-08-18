export const chartOptions = {
  chart: {
    type: 'packedbubble',
    height: '400',
  },
  title: {
    text: ''
  },
  tooltip: {
    useHTML: true,
  },
  plotOptions: {
    packedbubble: {
      minSize: '20%',
      maxSize: '40%',
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: false,
        parentNodeLimit: true,
      },
    },
  },
  series: [],
};
