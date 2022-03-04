<template>
    <div
        class="chart-box"
        id="peiChart1"
        :style="{ width: '100%', height: '220px' }"
    ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:'peiChart',
    data() {
        return {};
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let myChart = new echarts.init(
                document.getElementById("peiChart1")
            );
            let option = {
                title: {
                    left: 40,
                    top: "40%",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14,
                        align: "center",
                    },
                },
                legend: {
                    show: true,
                    orient: "vertical",
                    type: "scroll",
                    right: 0,
                    top: 80,
                    itemWidth: 14,
                    itemHeight: 14,
                    borderRadius:'',
                    textStyle: {
                        color: "#ccc",
                        fontSize: 14,
                        padding: [0, 40, 20, 5],
                    },
                    borderRadius: "50%",
                    formatter: function (name) {
                        return name.length > 8
                            ? name.slice(0, 8) + "..."
                            : name + "88";
                    },
                },
                color: ["#F27FD0", "#F0EC78", "#79E4FF"],
                series: [
                    {
                        type: "pie",
                        radius: ["60%", "80%"],
                        left: -120,
                        label: {
                            show: false,
                            position: "center",
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold",
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                            // normal: {
                            //     color: function (params) {
                            //         var colorList = [
                            //             {
                            //                 c1: '#5C64FF',
                            //                 c2: '#6988F8',
                            //             },
                            //             {
                            //                 c1: '#2DE1FD',
                            //                 c2: '#0E5FFF',
                            //             },
                            //             {
                            //                 c1: '#ED5430',
                            //                 c2: '#F5A181',
                            //             },
                            //             {
                            //                 c1: '#5AD8A6',
                            //                 c2: '#269A99',
                            //             },
                            //             {
                            //                 c1: '#FFD8B8',
                            //                 c2: '#FFD8B8',
                            //             },
                            //             {
                            //                 c1: '#026DB2',
                            //                 c2: '#12FEE0',
                            //             },
                            //             {
                            //                 c1: '#F7B500',
                            //                 c2: '#FF7B00',
                            //             },

                            //         ]
                            //         return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            //             {
                            //                 offset: 0,
                            //                 color: colorList[params.dataIndex].c1,
                            //             },
                            //             {
                            //                 offset: 1,
                            //                 color: colorList[params.dataIndex].c2,
                            //             },
                            //         ])
                            //         /*  return colorList[params.dataIndex]*/
                            //     },
                            // },
                        },
                        data: [
                            { value: 1048, name: "本机异常" },
                            { value: 735, name: "仪表异常" },
                            { value: 580, name: "环境异常" },
                        ],
                    },
                ],
            };
            myChart.setOption(option);
        },
    },
};
</script>

<style lang="scss" scoped>
.chart-box {
    height: 100%;
    background-size: 60% 100%;
    background-position: -10px;
}
</style>
