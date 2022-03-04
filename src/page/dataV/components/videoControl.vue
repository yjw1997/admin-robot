<template>
    <div class="video flex-row-sb">
        <div class="left-video flex-row-c-c">
            <div class="video-box">
                <video width="100%" height="100%"
                       autoplay="autoplay"
                       loop="loop"
                       muted="muted"
                       controls="controls"
                       controlsList=“nodownload”>
                    <source src="/static/video.mp4" type="video/mp4">
                </video>
            </div>

        </div>
        <div class="right-video flex-row-c-c">
            <div class="video-box">
                <video width="100%" height="100%"
                       autoplay="autoplay"
                       loop="loop"
                       muted="muted"
                >
                    <source src="/static/video.mp4" type="video/mp4">
                </video>

                <div class="fixed-operate flex-row-sb">
                   <div class="btn">
                       <img src="/static/1.png" alt="">
                       <img src="/static/2.png" alt="">
                       <img src="/static/3.png" alt="">
                       <img src="/static/4.png" alt="">
                   </div>
<!--                    全屏-->
                    <div class="suofang">
                        <img src="/static/suofang.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "videoControl",
    components: {

    },
    data() {
        return {

        }
    },
}
</script>
<style lang='scss' scoped>
.video {
    //height: 477px;
    height: 18vw;
    width: 100%;
    justify-content: space-between;
    .left-video {

    }

    .right-video {
        //margin-left: 15px;
        .fixed-operate {
            height: 80px;
            position: absolute;
            bottom: -30px;
            left: 0;
            width: 100%;
            //border: 1px solid red;
            padding: 0 40px;
            //padding-top: 10px;
            .btn{
                img{
                    cursor: pointer;
                    width: 90px;
                    margin-left: 6px;
                }
            }
            .suofang{
                img{
                    cursor: pointer;
                    width: 40px;
                    margin-top: 3px;
                }

            }

        }
    }

    .left-video, .right-video {
        background: url("/static/videoborder.png") no-repeat;
        background-size: 100% 100%;
        width: 637px;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 30px;

        .video-box {
            position: relative;
            background-color: #000000;
            border-radius: 30px;
            overflow: hidden;
            width: 616px;
            //height: 460px
            height: 100%;
        }
    }

}
.video-main{
    //height: 23vw;
}
</style>
