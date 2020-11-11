Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted() {
     this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
       label: 'Line',
    //    backgroundColor: '#f87979',
       data: [40, 39, 10, 40, 39, 80, 40],
       lineTension: 0,
       borderColor: "red"
      }]
     }, {
      responsive: true,
      maintainAspectRatio: false
     })
    }
})

Vue.component("bar-chart", {
    extends: VueChartJs.Bar,
    mounted() {
        this.renderChart({
            labels: ["4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日"],
            datasets: [{
                label: "Bar",
                data: [18.6, 19.4, 16.2, 20.6, 22.4, 18.3, 16.9, 17],
                backgroundColor: "blue"
            }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        })
    }
})

Vue.component("pie", {
    extends: VueChartJs.Pie,
    mounted() {
        this.renderChart({
            labels: ["Android", "iPhone"],
            datasets: [{
                label: "Pie",
                data: [57.2, 42.8],
                backgroundColor: ["#ff6347", "#00f5ff"]
            }]
        },
        {
            responsive: true,
            maintainAspectRatio: false
        })
    }
})


var app = new Vue({
 el: '.app',
 data: {
  message: 'Vue-chart'
 }
})