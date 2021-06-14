<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redraw-on-update="true"
    :one-to-one-update="false"
    :animate-on-update="true"
    @rendered="onRender"
  />
</template>

<script>
import VueHighcharts from "vue3-highcharts";

export default {
  props: {
    name: {
      type: String,
      default: "Votes Till Now",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    VueHighcharts,
  },

  computed: {
    chartOptions() {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: undefined,
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: undefined,
          },
          gridLineColor: "#e6e6e6",
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            colorByPoint: true,
            name: this.name,
            data: this.data,
          },
        ],
      };
    },
  },

  methods: {
    onRender() {
      console.log("Chart Rendered");
    },
  },
};
</script>
