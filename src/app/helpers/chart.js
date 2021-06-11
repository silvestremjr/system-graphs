export let chartOptions = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#008FFB", "#00E396"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    align: "left",
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<span class="tooltipHover">${series[seriesIndex][dataPointIndex]}%</span>`;
    },
  },
  xaxis: {
    type: "category",
    labels: {
      style: {
        fontSize: "10px",
      },
    },
    tooltip: {
      enabled: false,
      style: {
        fontSize: "10px",
      },
    },
  },
  yaxis: {
    style: {
      fontSize: "10px",
    },
    labels: {
      formatter: (value) => {
        return `${Math.round(value)}%`;
      },
      style: {
        fontSize: "10px",
      },
    },
  },
  legend: {
    horizontalAlign: "left",
  },
};
