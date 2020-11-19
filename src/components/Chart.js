import { data } from 'autoprefixer'
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            labels: ["4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日"],
            datasets: [{
                label: "Bar",
                data: [18.6, 19.4, 16.2, 20.6, 22.4, 18.3, 16.9, 17],
                backgroundColor: "pink"
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
            }
        })
    }
}