<template>
    <div class="header flex-row-sb-c">
        <div class="left">
            <nowDate/>
        </div>
        <div class="center"><img src="/static/title@3x.png" alt=""></div>
        <div class="right">
            <el-row :gutter="20">
                <el-col :span="6"><span class="pointer">设备列表<i class="el-icon-caret-bottom"></i></span></el-col>
                <el-col :span="6"><span class="pointer" @click="intoSystem">进入系统</span></el-col>
                <el-col :span="6"><span class="pointer">{{ user }}<i class="el-icon-caret-bottom"></i></span></el-col>
                <el-col :span="6"><i class="el-icon-error pointer"></i></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import nowDate from '@/components/Timer/index'

export default {
    name: 'videoHeader',
    components:{nowDate},

    data() {
        return {
            form: {
                name: '',
                region: ''
            },
            statusbar: [],
            user: 'admin',
            currentPage4: 4
        };
    },
    methods: {
        intoSystem() {
            this.$router.push({
                path:'/stystem/card_manage'
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
    padding: 10px 30px 0 30px;
    align-items: center;
    height: 10vh;
    display: flex;
    font-size: 16px;
    color: #25C4FF !important;

    .center {
        margin: 0 2vw;

        img {
            height: 80px;
        }
    }

    .left {
        flex: 1;
    }

    .right {
        width: 20vw;
    }

    .center {
        flex: 1;
    }
}

.pointer {
    cursor: pointer;
}
::v-deep .el-input__inner{
    width: 157px;
}
.search-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
