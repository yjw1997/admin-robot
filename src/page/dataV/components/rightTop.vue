<template>
    <div class="rightTop">
        <div class="item-box flex-row-sb-c">
            <div class="item">
                <div class="text">通讯状态：</div>
                <div class="status point"></div>
            </div>
            <div class="item">
                <div class="text">本机状态：</div>
                <div
                    class="status point"
                    style="background-color: tomato"
                ></div>
            </div>
            <div class="item">
                <div class="text">电池电量：</div>
                <div class="status power-bg">80%</div>
            </div>
            <div class="item">
                <div class="text">运行模式：</div>
                <div class="status power-bg">手动模式</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rightTop",
    data() {
        return {};
    },
};
</script>
<style lang='scss' scoped>
.rightTop {
    height:3vw;
    width: 100%;
    background: url("/static/arr/border/1.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(15px); /*为了模糊更明显，调高模糊度*/
        //z-index: 0;
    }

    .item-box {
        color: #fff;
        font-size: 14px;
        height: 100%;
        padding: 0 16px;
        .item {
            display: flex;
            align-items: center;
            margin-right: 5px;
            .status {
                text-align: center;
            }
            .point {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: yellowgreen;
            }
            .power-bg {
                padding:3px 15px;
                line-height: 100%;
                background: url("/static/圆角矩形.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
}
</style>
