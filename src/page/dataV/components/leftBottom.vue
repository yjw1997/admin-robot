<template>
    <div class="leftBottom flex-row-sb">
        <div class="left p20">
            <div class="left-top flex-row">
                <div class="date flex-row">
                    <span>日期: </span>
                    <el-date-picker
                        size="mini"
                        v-model="form.date"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </div>
                <div class="btn flex-row-c-c ml10" style="cursor: pointer" @click="privateShow">历史告警数据</div>
            </div>
            <div>
                <PeiChart></PeiChart>
            </div>
        </div>
        <div class="center">
            <div class="main-box" style="width:100%;height: 260px">
                <div class="mian-title flex-row-sb-c">
                    <div class="title-left flex-row-sb-c">
                        <img
                            src="/static/baogao@2x.png"
                            style="width: 15px; margin-right: 5px"
                        />
                        <span class="text">仪表数据登记报表</span>
                    </div>
                    <div class="title-right">查看更多记录</div>
                </div>
                <div class="table">
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        height="200"
                        :row-class-name="tableRowClassName"
                        :cell-style="{
                            padding: ' 8px 0',
                            color: '#fff',
                            border: 'none',
                        }"
                        :header-cell-style="{
                            background: '#042045',
                            color: '#fff',
                            padding: ' 5px 0',
                            border: 'none',
                        }"
                    >
                        <el-table-column prop="date" label="告警位置">
                        </el-table-column>
                        <el-table-column prop="name" label="告警内容">
                        </el-table-column>
                        <el-table-column prop="address" label="告警时间">
                        </el-table-column>
                        <el-table-column prop="action" label="措施">
                        </el-table-column>
                    </el-table>
                    <div class="more"><< 查看更多记录 >></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="main-box" style="height: 260px">
                <div class="tabs flex-row-c">
                    <div
                        class="tab"
                        @click="handleTab(1)"
                        :class="currentIndex === 1 ? 'active' : ''"
                    >
                        手动模式
                    </div>
                    <div
                        class="tab"
                        @click="handleTab(2)"
                        :class="currentIndex === 2 ? 'active' : ''"
                    >
                        自动巡检
                    </div>
                </div>
                <div class="right-content flex-col" v-if="currentIndex === 1">
                    <div class="right-top flex-row-c-c">
                        <span class="text">速度</span>
                        <div class="count flex-row-c-c">
                            <div class="tool cut">
                                <span class="icon" @click="handleDo(2)">-</span>
                            </div>
                            <el-input
                                class="input-box"
                                v-model="elForm.deep"
                            ></el-input>
                            <div class="tool add">
                                <span class="icon" @click="handleDo(1)">+</span>
                            </div>

                        </div>
                        <span class="text">米/分钟</span>
                    </div>

                    <div class="right-middle flex-row-sb-c">
                        <div class="l flex-row-c-c">
                            <el-form
                                ref="form"
                                :model="elForm"
                                label-width="40px"
                            >
                                <el-form-item label="起始">
                                    <el-date-picker
                                        size="mini"
                                        v-model="form.date"
                                        type="date"
                                        placeholder=""
                                        style="width: 130px"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="结束">
                                    <el-date-picker
                                        size="mini"
                                        v-model="form.date"
                                        type="date"
                                        placeholder=""
                                        style="width: 130px"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="r flex-row-c-c">发送</div>
                    </div>
                    <div class="right-bottom flex-row-c-c"  @click="hangdlePark(BTN_STYLE.PARK)">{{btn_word}}</div>
                </div>
                <div class="right-content flex-col" v-if="currentIndex === 2">
                    <div class="right-top flex-row-c-c">
                        <span class="text">速度</span>
                        <div class="count flex-row-c-c">
                            <div class="tool cut">
                                <span class="icon" @click="handleDo(2)">-</span>
                            </div>
                            <el-input
                                class="input-box"
                                v-model="elForm.deep"
                            ></el-input>
                            <div class="tool add">
                                <span class="icon" @click="handleDo(1)">+</span>
                            </div>
                        </div>
                        <span class="text">米/分钟</span>
                    </div>
                    <el-form>
                        <el-form-item label="方案">
                            <el-select v-model="ruleForm.region">
                                <el-option v-for="item in arr" :label="item.label" :value="item.value" :key="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div class="right-middle flex-row-sb-c">
                        <div class="l flex-row-c-c">
                            <div class="control">
                                <div
                                    class="boom up"
                                    @click="handelControl(1)"
                                    :class="
                                        currentConrtol === 1 ? 'active' : ''
                                    "
                                >
                                    加速
                                </div>
                                <div
                                    class="boom right"
                                    @click="handelControl(2)"
                                    :class="
                                        currentConrtol === 2 ? 'active' : ''
                                    "
                                >
                                    <img
                                        src="/static/right.png"
                                        style="width: 30px"
                                    />
                                    <span>后退</span>
                                </div>
                                <div
                                    class="boom down"
                                    @click="handelControl(3)"
                                    :class="
                                        currentConrtol === 3 ? 'active' : ''
                                    "
                                >
                                    减速
                                </div>
                                <div
                                    class="boom left"
                                    @click="handelControl(4)"
                                    :class="
                                        currentConrtol === 4 ? 'active' : ''
                                    "
                                >
                                    <img
                                        src="/static/left.png"
                                        style="width: 30px"
                                    />
                                    <span>前进</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-bottom flex-row-c-c" @click="hangdlePark(BTN_STYLE.IMPLEMENT)">{{ word }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PeiChart from "./peiChart";
import {BTN_STYLE} from '@/const/variable'
export default {
    name: "leftBottom",
    components: {
        PeiChart,
    },
    data() {
        return {
            BTN_STYLE,
            word:'重新启动',
            disabled:false,
            btn_word:'停车',
            arr:[],
            ruleForm:{
                region:''
            },
            tableData: [
                {
                    date: "热像仪+15m",
                    name: "高温",
                    address: "2020-10-10  10:00",
                    action: "录入措施",
                },
                {
                    date: "热像仪+15m",
                    name: "高温",
                    address: "2020-10-10  10:00",
                    action: "录入措施",
                },
                {
                    date: "热像仪+15m",
                    name: "高温",
                    address: "2020-10-10  10:00",
                    action: "录入措施",
                },
                {
                    date: "热像仪+15m",
                    name: "高温",
                    address: "2020-10-10  10:00",
                    action: "录入措施",
                },
            ],
            form: {
                date: "",
            },
            elForm: {
                deep: 10,
            },
            currentIndex: 1,
            currentConrtol: -1,
        };
    },
    methods: {
        privateShow(){
          this.$emit('show')
        },
        hangdlePark(data){
            data==='park'?this.btn_word='正在执行':this.word='执行结束'

            // this.disabled=true
        },
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 == 0) {
                return "warning-row";
            } else {
                return "success-row";
            }
            return "";
        },
        handleTab(index) {
            this.currentIndex = index;
        },
        handelControl(index) {
            this.currentConrtol = index;
        },

        handleDo(index) {
            if (index === 1) {
                this.elForm.deep += 1;
            } else {
                this.elForm.deep -= 1;
            }
        },
    },
};
</script>
<style lang='scss' scoped>
.leftBottom {
    height: 277px;
    margin-top: 20px;
    position: relative;

    .more {
        line-height: 5vh;
        font-size: 18px;
        //height: 50px;
        color: #25c4ff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    > div {
        height: 100%;
    }

    .left {
        width: 352px;
        background: url("/static/arr/border/2.png") no-repeat;
        background-size: 100% 100%;

        ::v-deep .date {
            //width: 100px;
            font-size: 18px;
            color: #fff;

            .el-date-editor.el-input {
                width: 150px !important;

                input {
                    padding-right: 10px;
                }
            }
        }

        .btn {
            width: 108px;
            height: 30px;
            background-image: linear-gradient(#44b2f8, #3a67a4);
            border-radius: 5px;
            font-size: 10px;
            color: #fff;
        }
    }

    .center {
        width: 582px;
        background: url("/static/arr/border/4.png") no-repeat;
        background-size: 100% 100%;
    }

    .right {
        width: 337px;
        background: url("/static/arr/border/5.png") no-repeat;
        background-size: 100% 100%;
    }
    .main-box {
        height: 300px;
        font-size: 20px;
        .mian-title {
            height: 34px;
            padding: 0 30px 0 10px;
            font-size: 18px;
            .title-right {
                color: #25c4ff;
                text-decoration: underline;
            }
        }

        .tabs {
            height: 40px;
            .tab {
                width: 120px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
                cursor: pointer;
            }
            .active {
                background: url("/static/yellow-bg.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        ::v-deep.right-content {
            padding: 0 30px;
            .right-top {
                height: 25px;
                //margin: 0.5vw 0;
                .text {
                    display: inline-block;
                    font-size: 12px;
                }
                .count {
                    height: 100%;
                    width: 100px;
                    background: url("/static/count.png") no-repeat;
                    background-size: 100% 100%;
                    font-size: 12px;
                    margin: 0 10px;
                    .add {
                        cursor: pointer;
                    }
                    .cut {
                        cursor: pointer;
                    }
                    .tool {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                    }

                    .icon {
                        display: inline-block;
                    }
                    .input-box {
                        .el-input__inner {
                            border-radius: 4px;
                            text-align: center;
                            border: none;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            color: #fff;
                            font-size: inherit;
                            padding: 0 !important;
                            height: 30px !important;
                            line-height: 30px;
                            -webkit-transition: border-color 0.2s
                                cubic-bezier(0.645, 0.045, 0.355, 1);
                            transition: border-color 0.2s
                                cubic-bezier(0.645, 0.045, 0.355, 1);
                            width: 90%;
                        }
                    }
                }
            }

            .right-middle {
                .l {
                    flex: 1;
                    .el-date-editor.el-input {
                        .el-input__inner {
                            background: url("/static/sky-bule-bg.png") no-repeat;
                            background-size: 100% 100%;
                            border-radius: 4px;
                            color: #ffffff;
                            opacity: 0.7;
                        }
                    }

                    .control {
                        position: relative;
                        height: 120px;
                        width: 100%;
                        .boom {
                            position: absolute;
                            width: 100px;
                            height: 50px;
                            background: url("/static/down.png") no-repeat;
                            background-size: 100% 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                        }
                        .active {
                            background: url("/static/active.png") no-repeat;
                            background-size: 100% 100%;
                        }
                        .up {
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        .right {
                            top: 50%;
                            right: -15px;
                            transform: translateY(-50%);
                        }
                        .down {
                            bottom: 15px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        .left {
                            top: 50%;
                            left: -15px;
                            transform: translateY(-50%);
                        }
                    }
                }
                .r {
                    width: 25%;
                    height: 50px;
                    background: url("/static/big-blue-bg.png") no-repeat;
                    background-size: 100% 100%;
                    cursor: pointer;
                    margin-left: 5%;
                }
                .form-input {
                    .el-input__inner {
                        background: url("/static/sky-bule-bg.png") no-repeat;
                        background-size: 100% 100%;
                        border-radius: 4px;
                        text-align: center;
                        border: none;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        color: #fff;
                        font-size: inherit;
                        padding: 0 !important;
                        height: 30px !important;
                        line-height: 30px;
                        -webkit-transition: border-color 0.2s
                            cubic-bezier(0.645, 0.045, 0.355, 1);
                        transition: border-color 0.2s
                            cubic-bezier(0.645, 0.045, 0.355, 1);
                        width: 90%;
                    }
                }
            }
            .right-bottom {
                height: 40px;
                width: 100%;
                background: url("/static/bule-bg.png") no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
        }
    }
}
.main-box{
    ::v-deep .el-form-item{
        margin-bottom: 0;
    }
}
</style>
