<template>
    <div class="robot flex-col-c ">
        <el-steps style="margin-bottom: 10px" :active="active" finish-status="success">
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                    <img class="robot-img" src="/static/robot.png" alt="">
                </div>
            </el-step>
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                </div>
            </el-step>
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                </div>
            </el-step>
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                </div>
            </el-step>
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                </div>
            </el-step>
            <el-step>
                <div class="title" slot="title">
                    <span> 步骤 1</span>
                </div>
                <div slot="icon">
                </div>
            </el-step>

        </el-steps>
    </div>
</template>

<script>
export default {
    name: "robot",
    data() {
        return {
            active: 0
        }
    },
}
</script>
<style lang='scss' scoped>
.robot {
    height: 7vw;
    background: url("/static/arr/border/1.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 0.5vw;
    position: relative;
    padding: 0 70px;

    ::v-deep .el-steps {
        .el-step__icon-inner {
            display: none;
        }

        .el-step__icon.is-text {
            background-color: #FF9B4A;
            border: 4px solid #fff;
        }

        .el-step__line {
            height: 8px;
            //top: 8px;
        }

        .is-success {
            color: #c0c4cc;
        }

        .el-step {
            position: relative;

            .title {
                background: url("/static/rob.png") no-repeat;
                background-size: 100% 100%;
                width: 60px;
                height: 28px;
                top: -35px;
                left: -18px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    color: #fff;
                    font-size: 11px;
                }
            }

            .robot-img {
                width: 70px;
                position: absolute;
                top: -16px;
                //left: -30px;
                left: 130px;
            }
        }

    }

}
</style>
