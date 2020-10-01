<template>
    <div class="row" style="width: 700px; height: 400px;">
        <canvas width="700" height="400"></canvas>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import Chart from 'chart.js';
    @Component
    export default class ChartView extends Vue {
        @Prop({}) public type: string;
        @Prop({}) public busEvent: any;
        private myChart: Chart;
        public mounted() {
            this.initChart();
            window.globalThis.eventBus.subscribe('onDataChanged', (data)=> {
                this.myChart.data.labels = data.map(d=> d.name);
                this.myChart.chart.data.datasets.forEach((dataset) => {
                        dataset.data =  data.map(d=> d.age);
                });
                this.myChart.update();
            });
        }
        public initChart() {
            if(this.myChart) {
                this.myChart.destroy();
            }
            const chartType = this.type;
            const ctx = this.$el.getElementsByTagName('canvas')[0];
            this.myChart = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 216, 86, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 23, 86, 0.2)',
                            'rgba(123, 206, 86, 0.2)',
                            'rgba(41, 206, 86, 0.2)',
                            'rgba(23, 206, 86, 0.2)',
                            'rgba(255, 6, 86, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(45, 206, 86, 0.2)',
                            'rgba(66, 206, 86, 0.2)',
                            'rgba(255, 206, 9, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(3, 102, 255, 0.2)',
                            'rgba(255, 4, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 2, 192, 1)',
                            'rgba(75, 192, 1, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 2, 192, 1)',
                            'rgba(75, 2, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 4, 0, 1)',
                            'rgba(75, 192, 7, 1)',
                            'rgba(75, 192, 5, 1)',
                            'rgba(2, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 4, 192, 1)',
                            'rgba(3, 192, 192, 1)',
                            'rgba(75, 192, 5, 1)',
                            'rgba(153, 102, 7, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,
                    onHover: ()=>{},
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }

        @Watch('type')
        onPropertyChanged(value: string, oldValue: string) {
            this.initChart();
        }
    }
</script>

