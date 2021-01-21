import { Bar, Line } from 'vue-chartjs'
import chartjsPluginAnnotation from 'chartjs-plugin-annotation'

export default {
    extends: Bar,
    mounted() {
        this.addPlugin(chartjsPluginAnnotation),
        this.renderChart({
            labels: ["4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日"],
            datasets: [{
                type: 'line',
                label: "最高気温",
                data: [18.6, 19.4, 16.2, 20.6, 22.4, 18.3, 16.9, 17],
                borderColor: "pink",
                fill: false,
                lineTension: 0
            }, {
                label: "最低気温",
                data: [9.8, 9.1, 10.6, 11.1, 13.6, 11.7, 8.6, 8.5],
                backgroundColor: 'lightblue'
            }]
        }, {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "気温（℃）"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 5000,
                easing: "easeInOutBounce"
            },
            annotation: { 
                annotations: [{ 
                 type: 'line', 
                 id: 'hLine', 
                 mode: 'horizontal', 
                 scaleID: 'y-axis-0', 
                 value: 12,
                 borderWidth: 2, 
                 borderColor: 'black' 
                }] 
            },
        })
    }
}