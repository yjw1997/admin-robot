<template>
    <div class="rightBottom">
        <div class="main-box flex-col title">
            <div class="info-title flex-col-c-c">仪表智能分析</div>
            <div class="info-top flex-row-c-c">
                <div class="info-left">
                    <div class="info">巡检地点：<span>1号泵</span></div>
                    <div class="info">
                        环境巡检：<span
                            >甲烷（<span style="color: #ff4f2c">异常</span
                            >）</span
                        >
                    </div>
                    <div class="info">仪表分析：<span>正常运行</span></div>
                    <div class="info">红外分析：<span>正常运行</span></div>
                    <div class="info-bt">
                        <div class="bt-title">声波分析：</div>
                        <div class="line">
                            <RightTopLineChart></RightTopLineChart>
                        </div>
                    </div>
                </div>
<!--                <div class="info-right flex-row">-->
<!--                    <div class="tool flex-col-c-c">-->
<!--                        <img-->
<!--                            src="/static/shengyin-kai@2x1.png"-->
<!--                            style="height: 50px"-->
<!--                        />-->
<!--                        <span class="text">监听</span>-->
<!--                    </div>-->
<!--                    <div class="tool flex-col-c-c">-->
<!--                        <img-->
<!--                            src="/static/talkback_fill@2x.png"-->
<!--                            style="height: 50px"-->
<!--                        />-->
<!--                        <span class="text">对讲</span>-->
<!--                    </div>-->
<!--                </div>-->
            </div>

        </div>
        <div class="main-box">
            <div class="mian-title flex-row-sb-c">
                <div class="title-left flex-row-sb-c">
                    <img
                        src="/static/baogao@2x.png"
                        style="width: 15px; margin-right: 5px"
                    />
                    <span class="text">仪表数据登记报表</span>
                </div>
                <div class="title-right">查看更多记录</div>
            </div>
            <div class="table">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="202"
                    :row-class-name="tableRowClassName"
                    :cell-style="{
                        padding: ' 8px 0',
                        color: '#fff',
                        border: 'none',
                    }"
                    :header-cell-style="{
                        background: '#042045',
                        color: '#fff',
                        padding: ' 5px 0',
                        border: 'none',
                    }"
                >
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="main-box">
            <div class="mian-title flex-row-sb-c">
                <div class="title-left flex-row-sb-c">
                    <img
                        src="/static/形状1015@2x.png"
                        style="width: 15px; margin-right: 5px"
                    />
                    <span class="text">环境参数</span>
                </div>
                <div class="title-right"></div>
            </div>
            <div class="info-top flex-row-c-c">
                <div class="info-left" style="width: 31%;padding: 0 20px;">
                    <div class="status">
                        <div class="statu-bg bg1" style="width: 100%;height: 40px;background: url('/static/arr/1.png') no-repeat;background-size: 100% 100%;"></div>
                        <span class="text"></span>
                    </div>
                    <div class="status">
                        <div class="statu-bg bg1" style="width: 100%;height: 40px;background: url('/static/arr/2.png') no-repeat;background-size: 100% 100%;"></div>
                        <span class="text"></span>
                    </div>
                    <div class="status">
                        <div class="statu-bg bg1" style="width: 100%;height: 40px;background: url('/static/arr/3.png') no-repeat;background-size: 100% 100%;"></div>
                        <span class="text"></span>
                    </div>
                    <div class="status">
                        <div class="statu-bg bg1" style="width: 100%;height: 40px;background: url('/static/arr/4.png') no-repeat;background-size: 100% 100%;"></div>
                        <span class="text"></span>
                    </div>
                </div>
                <div class="info-right flex-row" style="width: 69%;">
                    <RightBottomLineChart></RightBottomLineChart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RightTopLineChart from "./rightTopLineChart";
import RightBottomLineChart from "./rightBottomLineChart";
export default {
    name: "rightBottom",
    components: {
        RightTopLineChart,
        RightBottomLineChart,
    },
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金",
                },
            ],
        };
    },
    methods: {
    },
};
</script>
<style lang='scss' scoped>
.rightBottom {
    //height: 851px;
    height: 37vw;
    width: 100%;
    background: url("/static/arr/border/3.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-top: 20px;
    .main-box {
        //height: 300px;
        //height: 13vw;
        font-size: 20px;
        .info-title {
            padding: 5px 0;
            //height: 50px;
            font-size: 24px;
            width: 100%;
        }
        .info-top {
            justify-content: flex-start;
            width: 100%;
            //flex-grow: 1;
            //box-sizing: border-box;
            .info-left {
                width: 100%;
                padding: 0 30px;
                .info {
                    //height: 47px;
                    display: flex;
                    align-items: center;
                    padding: 8px 0;
                }

                .status {
                    width: 100%;
                    height: 40px;
                    margin-bottom: 10px;
                }
            }
            .info-right {
                width: 40%;
                .tool {
                    margin-right: 40px;
                    margin-top: 80px;
                    .text {
                        margin-top: 10px;
                        color: #25c4ff;
                        font-size: 16px;
                    }
                }
            }
        }
        .info-bt {
            display: flex;
            .bt-title {
                width: 100px;
            }
            .line {
                flex: 1;
            }
        }

        .mian-title {
            height: 31px;
             //padding: 0 30px 0 10px;
            padding: 0 30px;
            font-size: 18px;
            .title-right {
                color: #25c4ff;
                text-decoration: underline;
            }
        }

        .table {
            width: 97%;
            margin-left: 7px;
        }
    }
}
//.main-box{
//    height: 230px;
//}
.main-box:nth-child(2){
    height: 24.5vh;
}
.main-box.title{
    height: 26.6vh;
}
</style>
