<template>
    <div id="myChart" :style="{ width: '100%', height: '30px' }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:'rightTopLineChart',
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let myChart = new echarts.init(document.getElementById("myChart"));
            myChart.setOption({
                title: {
                    text: "",
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            backgroundColor: "#6a7985",
                        },
                    },
                },
                legend: {
                    show: false,
                    data: ["保养总数"],
                    left: "center",
                    top: "bottom",
                    padding: [0, 50],
                    textStyle: {
                        color: "#fff",
                        lineHeight: 18,
                    },
                },
                grid: {
                    top: "0%",
                    left: "3%",
                    right: "4%",
                    bottom: "20%",
                    containLabel: true,
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["0:00", "0:60", "0:12", "0:18", "0:24"],
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                yAxis: {
                    type: "value",
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                series: [
                    {
                        name: "1",
                        type: "line",
                        itemStyle: {
                            color: "#F276EE",
                        },
                        symbolSize: 0,
                        smooth: true,
                        data: [20, 332, 31, 290, 10, 290, 10],
                    },
                    {
                        name: "2",
                        type: "line",
                        itemStyle: {
                            color: "#25C4FF",
                        },
                        symbolSize: 0,
                        smooth: true,
                        data: [200, 132, 231, 240, 120, 290, 10],
                    },
                ],
            });
        },
    },
};
</script>
