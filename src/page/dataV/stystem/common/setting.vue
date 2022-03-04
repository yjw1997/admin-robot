<template>
    <div class="setting">
        <div class="top">
            <div class="video-root">
                <videoControl class="video-main" />
            </div>
            <div class="top-right">
                <rightTop />
                <div class="fs15">
                    <p>云台操作</p>
                    <div class="selected" style="display: flex">
                        <div class="f6">
                            <div>
                                <img src="/static/setting/c01.png" alt="" />
                                <img class="mid-img" src="/static/setting/top.png" alt="" />
                                <img src="/static/setting/r01.png" alt="" />
                            </div>
                            <div>
                                <img src="/static/setting/left.png" alt="" />
                                <img class="mid-img" src="/static/setting/mid.png" alt="" />
                                <img src="/static/setting/right.png" alt="" />
                            </div>
                            <div>
                                <img src="/static/setting/cz.png" alt="" />
                                <img class="mid-img" src="/static/setting/bot.png" alt="" />
                                <img src="/static/setting/r02.png" alt="" />
                            </div>
                        </div>
                        <div class="f7">
                            <div>
                                <img class="mid-img" src="/static/setting/1.png" alt="" />
                                <img src="/static/setting/2.png" alt="" />
                            </div>
                            <div>
                                <img class="mid-img" src="/static/setting/3.png" alt="" />
                                <img src="/static/setting/4.png" alt="" />
                            </div>
                            <div>
                                <img class="mid-img" src="/static/setting/5.png" alt="" />
                                <img src="/static/setting/6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--            <el-row justify="space-between">-->
            <!--                <el-col :span="16">-->
            <!--                    <videoControl/>-->
            <!--                </el-col>-->
            <!--                <el-col :span="8">-->

            <!--                </el-col>-->
            <!--            </el-row>-->
        </div>
        <div class="main">
            <step />
        </div>
        <div class="bot">
            <el-table :data="tableData" height="200" style="width: 100%">
                <el-table-column label="序号" prop="id" />

                <el-table-column label="标签名称" prop="id" />
                <el-table-column label="标签卡号" prop="id" />
                <el-table-column label="摄像仪预置点" prop="id" />
                <el-table-column label="预置点属性" prop="id" />

                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-button class="el-icon-edit" type="text" @click="handleEDit(row)">编辑</el-button>
                        <el-button class="el-icon-delete-solid" type="text" @click="handleDel(row)">删除</el-button>
                    </template>
                </el-table-column>
                >
            </el-table>
        </div>
        <errorModal ref="errorModal" :msg="msg"  @ok="toReviceClick" />
        <el-dialog  :visible.sync="dialogFormVisible">
            <slot name="title" class="header-title">
                <div style="text-align: center">
<!--                    <img src="static/crale.png" alt="">-->
                    <p class="white word">确认删除次标签吗？</p>
                    <el-button class="el-icon-delete-solid" type="text" @click="dialogFormVisible=false">确认删除</el-button>

                </div>
            </slot>
        </el-dialog>
    </div>
</template>

<script>
import videoControl from "@/page/dataV/components/videoControl";
import rightTop from "@/page/dataV/components/rightTop";
import step from "@/components/Step/index";
import errorModal from "@/components/ErrorDialog/index";

export default {
    name: "setting",
    data() {
        return {
            dialogFormVisible:false,
            msg: "设置失败，与自动巡检冲突.若要执行，请去与后台关闭自动巡检",
            tableData: [
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "1",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "1",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "1",
                    flag: "0",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "1",
                    flag: "0",
                },
            ],
        };
    },
    components: { videoControl, rightTop, step, errorModal },
    mounted() {
        // this.$refs.errorModal.init();
    },
    methods: {
        handleDel({ flag }) {
            // if (flag === "0") {
            //     this.msg = "确认删除次标签吗？";
            // } else {
            //     this.msg = "此条消息不可删除因为已经启用";
            // }
            // this.$refs.errorModal.init();
        },
        toReviceClick() {
            this.$refs.errorModal.dialogFormVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.setting {
    display: flex;
    height: calc(100vh - 100px);
    padding: 0 50px 20px;
    flex-direction: column;

    .top {
        display: flex;
        width: 100%;
        height: 42vh;

        .video-root {
            display: flex;
            justify-content: space-between;
            //width: 67vw;
            height: 23vh;
            margin-right: 10px;
        }

        .top-right {
            width: 30vw;
            height: 100%;
            //width: 100%;
            .fs15 {
                //height: 100%;
                width: 100%;
                background: url("/static/setting/caozuo.png") no-repeat;
                background-size: 100% 100%;
                height: 83%;
                margin-top: 10px;
                display: flex;
                flex-direction: column;

                p {
                    text-align: center;
                    height: 5vh;
                    line-height: 5vh;
                }

                .f6,
                .f7 {
                    display: flex;
                    flex-direction: column;
                }

                img {
                    width: 3vw;
                    height: 3vw;
                    margin: 0.5vw;
                    cursor: pointer;
                }

                //.mid-img{
                //    margin: 0 10px;
                //}
            }
        }
    }

    .main {
    }

    .bot {
        height: 27vh;
        background: url("/static/setting/table.png") no-repeat;
        background-size: 100% 100%;
        margin-top: 30px;
        padding: 25px;
    }
}

.selected {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
.word{
    width: 13vw;
    margin: 0 auto;
    padding-top: 2vh;
}
::v-deep .el-dialog{
    width: 28vw;
    height: 30vh;
}
</style>
