<template>
    <div class="collection">
        <div class="header">
            <div class="flex">
                <div class="c-left">
                    <div class="vedio">
                        <Vedio />
                    </div>
                    <div class="mode">
                        <p style="font-size: 16px; text-align: center; line-height: 42px">手动模式</p>
                        <div style="height: calc(100% - 42px); padding-top: 50px">
                            <p style="text-align: center; margin-bottom: 15px">
                                <span> 目标速度 </span>
                                <el-input-number v-model="num" @change="handleChange" :min="1" :max="99" />
                                <span> 米/分钟 </span>
                            </p>
                            <el-row type="flex" :gutter="50">
                                <el-col>
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="起始">
                                            <el-input v-model="form.sz" />
                                        </el-form-item>
                                        <el-form-item label="结束">
                                            <el-input v-model="form.ds" />
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                                <el-col style="line-height: 80px">
                                    <el-button type="primary" size="medium">发送</el-button>
                                    <el-button type="primary">停车</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <div class="table">
                    <div class="table_r">
                        <el-table :data="tableData" height="500" @selection-change="handleSelectionChange" style="width: 100%">
                            <el-table-column type="selection" width="55" />
                            <el-table-column prop="id" label="序号" />
                            <el-table-column prop="card" label="标识卡号" />
                            <el-table-column prop="sad" label="标识卡状态" />
                            <el-table-column prop="sad" label="更新时间" />
                            <el-table-column label="操作">
                                <template #default="{ row }">
                                    <el-button type="text" class="el-icon-edit" @click="handleEDit(row)">注册</el-button>
                                    <el-button type="text" class="el-icon-delete-solid" @click="handleDel(row)">删除</el-button>
                                </template>
                            </el-table-column>
                            >
                        </el-table>
                        <div class="el-pagination-box" style="text-align: right; padding-right: 2vw; margin-top: 10px">
                            <pagination />
                            <div style="margin-top: 10px">
                                <el-button type="primary" size="medium">注册</el-button>
                                <el-button type="primary" size="medium" @click="abstrastDel">删除</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot">
            <!--            <robot/>-->
            <step />
        </div>
        <ErrorDialog ref="ErrorDialog" msg="此标识卡不可删除!"/>
        <el-dialog  :visible.sync="dialogFormVisible" width="25vw">
            <slot name="title" class="header-title">
                <div style="text-align: center">
<!--                    <img src="static/crale.png" alt="">-->
                    <p class="white word">确认删除此标识卡吗?</p>
                    <el-button type="primary" style="margin-top: 30px" size="medium" @click="dialogFormVisible=false">确认删除</el-button>
                </div>
            </slot>
        </el-dialog>
    </div>
</template>

<script>
// import robot from "@/page/dataV/components/robot";
import Vedio from "@/components/Vedio/index";
import step from "@/components/Step/index";
import ErrorDialog from '@/components/ErrorDialog'
export default {
    name: "card_collection",
    components: { step, Vedio,ErrorDialog },
    // components:{robot},
    data() {
        return {
            dialogFormVisible:false,
            num: 1,
            form: {
                sz: "",
                ds: "",
            },
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
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "0",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
                {
                    id: 1,
                    card: "dsadsa",
                    million: "15m",
                    status: "启用",
                    sad: "dsadsa",
                    state: "0",
                    flag: "1",
                },
            ],
        };
    },
    methods: {
        handleEDit() {},
        handleDel() {
            this.dialogFormVisible=true
        },
        handleChange() {},
        handleSelectionChange() {},
        abstrastDel(){
            this.$refs.ErrorDialog.dialogFormVisible=true
        }
    },
};
</script>

<style lang="scss" scoped>
.collection {
    display: flex;
    flex-direction: column;
    padding: 0 50px 50px 50px;
    //width: 100%;
    height: calc(100vh - 110px);
    //background: url("/static/collection.png");
    background-size: 100% 100%;

    .header {
    }

    .bot {
        margin-top: 10px;
        min-height: 17vh;
    }
}

.table {
    background: url("/static/c03.png");
    background-size: 100% 100%;
    max-width: 55vw;
}

.flex {
    display: flex;
    height: 100%;

    .c-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 10px;

        .vedio {
            flex: 1;
            margin-bottom: 10px;
        }

        .mode {
            background: url("/static/c02.png");
            background-size: 100% 100%;
            height: 29vh;
        }
    }

    .table {
        flex: 2;
        padding: 30px 20px;
    }
}

::v-deep .el-table td.el-table__cell {
    border-bottom: none;
    //padding: 15px 0;
    font-size: 20px;
}

.tc {
    background: url("/static/c05.png");
    background-size: 100% 100%;
    height: 63px;
    width: 232px;
}
.el-dialog{
    width: 25vw;
    height: 26vh;
}
</style>
