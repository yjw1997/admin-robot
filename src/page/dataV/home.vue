<template>
    <div class="home">
        <!-- 头部 左侧日期右侧标签-->
        <videoHeader></videoHeader>
        <div class="content-box flex-row">
            <div class="left-box">
                <!-- 监控 -->
                <VideoControl></VideoControl>
                <Robot></Robot>
                <LeftBottom @show="isShow"></LeftBottom>
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
                    <el-table-column label="操作">
                        <template #default="{row}">
                            <el-button type="text">录入措施</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div slot="footer" style="margin-bottom:20px">
                <el-button type="info" plain @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" plain @click="dialogVisible = false"
                >确 定
                </el-button
                >
            </div>
        </el-dialog>
        <el-dialog
            title="历史告警记录"
            :visible.sync="history_show"
            width="40vw"
            class="mea_Dialog"
        >
            <div class="search-box">
                <el-form :model="queryParams" :inline="true" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="开始日期" prop="name">
                        <el-date-picker
                            v-model="queryParams.start_time"
                            type="date"
                            placeholder="选择日期"/>
                    </el-form-item>
                    <el-form-item label="结束日期" prop="name">
                        <el-date-picker
                            v-model="queryParams.end_time"
                            type="date"
                            placeholder="选择日期"/>
                    </el-form-item>
                    <el-form-item label-width="80px">
                        <el-checkbox-group v-model="queryParams.checkList">
                            <el-checkbox label="仪表"></el-checkbox>
                            <el-checkbox label="环境参数"></el-checkbox>
                            <el-checkbox label="本机异常"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label-width="80px">
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <div class=" white center daochu">
                                    查询
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class=" white center daochu">
                                    导出
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class=" white center daochu">
                                    打印
                                </div>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
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
                    <el-table-column label="操作">
                        <template #default="{row}">
                            <el-button type="text" @click="mea_show=true">录入措施</el-button>
                            <el-button type="text" @click="resolve_Show=true">已处理</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div slot="footer" style="margin-bottom:20px">
                <el-button type="primary" plain @click="history_show = false">取 消</el-button>
                <el-button type="primary" plain @click="history_show = false"
                >确 定
                </el-button
                >
            </div>
        </el-dialog>
        <el-dialog title="用户登录" :visible.sync="login_show">
            <slot name="title" class="header-title">
                <img src="static/dialog01.png.png" alt="">
            </slot>
            <div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item prop="user">
                        <el-input prefix-icon="el-icon-s-custom" placeholder="请输入用户名" v-model="ruleForm.user"/>
                    </el-form-item>
                    <el-form-item prop="pwd" required>
                        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" style="position: relative" :type="passw" v-model="ruleForm.pwd">
                            <i slot="suffix" :class="icon" @click="showPass"/>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row justify="space-between">
                            <el-col :span="8">
                                <el-checkbox v-model="checked" @change="remeberPwd">记住密码</el-checkbox>
                            </el-col>
                            <el-col :span="8">
                                忘记密码
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <div class="smallbtn login white center" style="transform: translateX(6vw);">
                    <span style="cursor: pointer" @click="handleLogin">立即登录</span>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="mea_show" title="录入措施" class="meaModal" width="35vw">
            <slot name="title">
                <div>
                    <el-form :model="form" ref="form" label-width="200px">
                        <el-form-item label="告警位置：">

                        </el-form-item>
                        <el-form-item label="告警内容：">

                        </el-form-item>
                        <el-form-item label="测量值：">

                        </el-form-item>
                        <el-form-item label="告警时间：">

                        </el-form-item>
                        <el-form-item label="措施：">

                        </el-form-item>
                        <el-form-item label="措施：">
                            <el-input type="textarea" maxlength="40"
                                      show-word-limit/>
                        </el-form-item>
                        <el-form-item label="">
                            <div class="white sure_mea center" style="width: 314px;cursor:pointer;object-fit:contain;height: 69px">
                                确认措施
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </slot>
        </el-dialog>
        <el-dialog :visible.sync="resolve_Show" class="meaModal" title="已处理告警" width="35vw">
            <slot name="title">
                <div>
                    <el-form :model="form" ref="form" label-width="200px">
                        <el-form-item label="措施：">

                        </el-form-item>
                        <el-form-item label="录入人员：">

                        </el-form-item>
                        <el-form-item label="录入时间：">

                        </el-form-item>
                    </el-form>
                </div>
            </slot>
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
import {sendWebsocket, closeWebsocket, websocketOpen} from '@/utils/request.js'
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
            form:{

            },
            resolve_Show:false,
            mea_show: false,
            queryParams: {
                start_time: '',
                end_time: '',
                checkList: ''
            },
            history_show: false,
            passw: "password",
            icon: "el-input__icon el-icon-view",
            ruleForm: {
                user: '',
                pwd: '',
            },
            checked: '',
            login_show: false,
            dialogVisible: false,
            rules: {
                pwd: [
                    {
                        required: true, message: '请输入正确密码', trigger: 'blur'
                    }
                ]
            },
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
    created() {
        websocketOpen()
        //验证登录
        // if (!getToken()) {
        //     this.login_show = true
        // }
    },
    methods: {
        isShow() {
            this.history_show = true
        },
        showPass() {
            //点击图标是密码隐藏或显示
            if (this.passw == "text") {
                this.passw = "password";
                //更换图标
                this.icon = "el-input__icon el-icon-view";
            } else {
                this.passw = "text";
                this.icon = "el-input__icon el-icon-loading";
            }
            ;
        },
        remeberPwd() {
            if (this.checked) {
                localStorage.setItem('userName', this.ruleForm.user)
                localStorage.setItem('pwd', this.ruleForm.pwd)
            } else {
                localStorage.removeItem('userName')
                localStorage.removeItem('pwd')

            }
        },
        wsMessage(data) {
            const dataJson = data
            console.log(dataJson)
            // 这里写拿到数据后的业务代码
        },
        // ws连接失败，组件要执行的代码
        wsError() {
            // 比如取消页面的loading
        },
        handleLogin() {
            closeWebsocket()
            const object = {funcode: 1001, type: 1, desc: ''}
            let obj = {...object, ...this.ruleForm}
            obj = JSON.stringify(obj)

            console.log('obj', obj)
            sendWebsocket(obj, this.wsMessage, this.wsError)
            // awa
            // socketRequest.request.(
            //     ...this.ruleForm
            // )
        }
    },

    beforeDestroy() {
        // 页面销毁时关闭ws。因为有可能ws连接接收数据尚未完成，用户就跳转了页面
        // 在需要主动关闭ws的地方都可以调用该方法
        closeWebsocket()
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

//::v-deep .el-dialog {
//    width: 24vw;
//}

.login {
    background: url("/static/global/btn/second/btn.png") no-repeat;
    background-size: 100% 100%;
}

.box {
}

::v-deep .el-input__suffix {
    right: 7.26vw !important;
}

::v-deep .el-checkbox__label {
    color: #fff;
}

.daochu {
    background: url("/static/global/btn/second/btn-3.png") no-repeat;
    background-size: 100% 100%;
    width: 87px;
    cursor: pointer;
}

.mea_Dialog {
    ::v-deep .el-dialog {
        background: url("/static/dialog-bg1.jpg") no-repeat;
    }
}

.meaModal {
    ::v-deep .el-dialog {
        background: url("/static/global/btn/second/mea.png") no-repeat;
    }
}
.sure_mea{
    background: url('/static/global/btn/second/btn.png') no-repeat;
}
</style>
