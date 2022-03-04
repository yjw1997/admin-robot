<template>
    <el-dialog  :visible.sync="dialogFormVisible">
        <slot name="title" class="header-title">
            <div style="text-align: center">
                <img src="static/crale.png" alt="">
                <p class="white word">{{msg}}</p>
            </div>
        </slot>
    </el-dialog>
</template>

<script>
export default {
    name: "error_dialog",
    props: {
        msg: {
            type: String,
            required: true,
        },
        img_show:{
            type: Boolean,
        }
    },
    data(){
        return{
            dialogFormVisible:false
        }
    },
    methods:{
        init(){
            this.dialogFormVisible=true
        },
        privateConfirm() {
            this.$emit('ok')
        },
    }
};
</script>

<style lang="scss" scoped>
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
