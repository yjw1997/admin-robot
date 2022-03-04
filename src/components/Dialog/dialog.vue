<template>
    <el-dialog title="title" :visible.sync="dialogFormVisible" :width="width">
        <slot name="title" class="header-title">
            <img :src="src" alt="">
            <span>{{title}}</span>
        </slot>
        <slot name="main"></slot>
        <slot name="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="privateConfirm">确 定</el-button>
        </slot>
    </el-dialog>
</template>

<script>
export default {
    name: "dialog",
    props:{
        title: {
            type:String,
            default:()=>{
                return ''
            }
        },
        width: {
            type:String,
            default:()=>{
                return '30%'
            }
        },
        src: {
            type:String,
            default:()=>{
                return '@/static/dialog-bg2.jpg'
            }
        },
    },
    data(){
        return{
            dialogFormVisible:false
        }
    },
    methods:{
        privateConfirm() {
            this.$emit('ok')
        }
    }
}
</script>

<style scoped>

</style>
