<template>
    <div class="home">
        <div class="header">
            <div class="header_left">
                <nowDate/>
            </div>
            <el-menu class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect"
                     background-color="#545c64"
                     menu-trigger="click"
                     text-color="#fff"
                     :unique-opened="true"
                     active-text-color="#fff">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">{{cuccent}}</template>
                    <el-menu-item index="2-1">标识卡设置</el-menu-item>
                    <el-menu-item index="2-2">标识卡采集</el-menu-item>
                </el-submenu>
                <el-submenu index="3" >
                    <template slot="title">{{ word }}</template>
                    <el-menu-item index="3-1">巡检点设置</el-menu-item>
                    <el-menu-item index="3-2">智能分析配置</el-menu-item>
                </el-submenu>
<!--                <el-menu-item index="4" >传感器参数设置</el-menu-item>-->
                <el-menu-item index="5" >自动巡检</el-menu-item>
                <el-menu-item index="6" >巡检记录</el-menu-item>
                <el-submenu index="7" >
                    <template slot="title">用户</template>
                    <el-menu-item index="7-1">设置</el-menu-item>
                    <el-menu-item index="7-2">账户管理</el-menu-item>
                    <el-menu-item index="7-3">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <router-view :key="$route.fullpath"/>
    </div>
</template>

<script>
import {HEADER_BTN} from "/src/const/variable"
import nowDate from '@/components/Timer/index'

export default {
    data() {
        return {
            cuccent:'标识卡管理',
            word:'巡检点设置',
            HEADER_BTN,
            nowDate: "", // 当前日期
            form: {
                name: '',
                region: ''
            },
            tableData: [
                {
                    id: 1,
                    card: 'dsadsa',
                    million: "15m",
                    status: '启用',
                    sad: 'dsadsa',
                    state: '1'
                }
            ],
            currentPage2: 5,
            statusbar: [],
            activeIndex: '1',
        };
    },
    components:{nowDate},
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            // if(key==='3-1'){
            //     return
            // }
            switch (key){
                case '1':
                    this.$router.push({
                        path:'/'
                    })
                    break
                case '2-1':
                    this.$router.push({
                        path:'/stystem/card_manage'
                    })
                    this.cuccent='标识卡管理'
                    break
                case '2-2':
                    this.$router.push({
                        path:'/stystem/card_collection'
                    })
                    this.cuccent='标识卡采集'
                    break
                case '3-1':
                    this.$router.push({
                        path:'/stystem/setting'
                    })
                    this.word='巡检点设置'
                    break
                case '3-2':
                    this.$router.push({
                        path:'/stystem/intell'
                    })
                    this.word='智能分析配置'
                    break
                case '5':
                    this.$router.push({
                        path:'/stystem/auto'
                    })
                    break
                case '6':
                    this.$router.push({
                        path:'/stystem/record_table'
                    })
                    break
                case '7-3':
                    this.$router.push({
                        path:'/login'
                    })
                    break
            }
        },

        handleEDit() {

        },
        handleDel() {

        },
        handleClick(data) {
            switch (data) {
                case 'home':
                    this.$router.push({
                        path:'/'
                    })
                    break;
                case 'auto':
                    break;
                case 'record':
                    break;
            }
        },

    },
}
</script>
<style lang="scss" scoped>
.home {
    background: url("/static/bg.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 100vh;
    font-size: 16px;

    .header {
        padding: 0 80px 20px 50px;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;

        .nav {
            list-style: none;
            color: #25C4FF;
            display: flex;

            li {
                margin: 0 25px;
                cursor: pointer;
            }
        }
    }

    .content-box {
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
