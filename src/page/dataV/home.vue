<template>
    <div class="home">
        <!-- 头部 左侧日期右侧标签-->
        <videoHeader></videoHeader>
        <div class="content-box flex-row">
            <div class="left-box">
                <!-- 监控 -->
                <VideoControl></VideoControl>
                <Robot></Robot>
                <LeftBottom></LeftBottom>
            </div>
            <div class="right-box">
                <RightTop></RightTop>
                <RightBottom></RightBottom>
            </div>
        </div>

        <!--                &lt;!&ndash; 监控 &ndash;&gt;-->
        <!--                <video1></video1>-->
        <!--                &lt;!&ndash; 切换自动手动 &ndash;&gt;-->
        <!--                <automatic></automatic>-->
        <!--                &lt;!&ndash; 环境参数 &ndash;&gt;-->
        <!--                <environmentalParameters></environmentalParameters>-->
        <!--                &lt;!&ndash; 当前未处理告警记录 &ndash;&gt;-->
        <!--                <alarmLog></alarmLog>-->
        <!--                &lt;!&ndash; 异常告警图 &ndash;&gt;-->
        <!--                <alarmLeft></alarmLeft>-->

        <el-dialog
            title="当前告警记录"
            :visible.sync="dialogVisible"
            width="40vw"
        >
            <div style="height: 500px">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                    :cell-style="{
                        padding: ' 8px 0',
                        color: '#fff',
                        border: 'none',
                    }"
                    :header-cell-style="{
                        background: '#12416C',
                        color: '#fff',
                        padding: '10px 0',
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
            <div slot="footer" style="margin-bottom:20px">
                <el-button type="info" plain @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" plain @click="dialogVisible = false"
                    >确 定</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
import index from '@/assets/mixin/index'

import VideoControl from "./components/videoControl";
import Robot from "./components/robot";
import LeftBottom from "./components/leftBottom";
import RightTop from "./components/rightTop";
import RightBottom from "./components/rightBottom";

import VideoHeader from "./components/videoHeader";

export default {
    name: "home",
    mixins: [index],
    components: {
        VideoHeader,
        VideoControl,
        Robot,
        LeftBottom,
        RightTop,
        RightBottom,
    },
    data() {
        return {
            dialogVisible: false,
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
<style lang="scss" scoped>
.home {
    background: url("/static/bg.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    .content-box {
        height: 90vh;
        padding: 0 0 10px 40px;
        width: 100%;

        .left-box {
            width: 1304px;
        }

        .right-box {
            margin-left: 20px;
            width: 508px;
        }
    }
}
</style>
