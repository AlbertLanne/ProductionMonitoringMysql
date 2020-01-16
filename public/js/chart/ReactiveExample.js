import {Bar} from './BaseCharts'

// import data from '../../servertest'

// myFunction: function(){
//   return Utils.something()
// https://github.com/request/request/issues/1529

export default {

  extends: Bar,
  // mixins: [reactiveData],
  data: () => ({
    chartData: '',
    // logitems: data,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  created() {
    this.fillData()
  },

  mounted() {
    this.renderChart(this.chartData, this.options)

    setInterval(() => {
      this.fillData()
    }, 5000)
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
