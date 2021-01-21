<template>
 <Chart :chartData="chartItems" :options="chartOptions"/>
</template>

<script>
 import Chart from './ChartBox/ChartBox.js'
 export default {
  components: {
   Chart
  },
  data() {
   return {
    chartItems: {
        labels: ["12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
        datasets: [{
          label: "月ごとの数",
          data: [9500, 12000, 19000, 15000, 9500, 5000, 10000, 14000, 9500, 8000, 4500, 7000],
          backgroundColor: 'lightblue'
        }]
      },

      // Chart用表示オプション
      chartOptions: {
        maintainAspectRatio: false,
        // 凡例非表示
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            // X軸グリッド非表示
            gridLines: {
              display:false
            }
          }],
          // Y軸
          yAxes: [{
            display: true,
            position: 'right',
            ticks: {
              // 0から始まる
              beginAtZero: true,
              // 最大5目盛
              maxTicksLimit: 5,
              // 3桁区切り
              userCallback: (label, index, labels) => label.toLocaleString()
            },
          }]
        },
        annotation: { 
          annotations: [{ 
           type: 'line', 
           id: 'hLine', 
           mode: 'horizontal', 
           scaleID: 'y-axis-0', 
           value: 9000,
           borderWidth: 10, 
           borderColor: 'red' 
          }] 
        },
        // ホバーの際にグラフの値を表示しない
        tooltips: {
          enabled: false
        },
        // アニメーションなし
        animation: {
          duration: 0
        } 
      }
   }
  }
 }
</script>