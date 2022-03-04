<template>
    <div class="card">
        <div class="main">
            <div class="search-box">
                <div class="dialog-left">
                    <el-form ref="form" :inline="true" :model="form">
                        <el-form-item label="标识卡名称：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="标识卡编号：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="标识卡状态：">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option v-for="item in statusbar" :label="item.label" value="item.value" :key="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-row :gutter="10">
                                <el-col>
                                    <el-button type="primary">查询</el-button>
                                    <el-button type="primary">重置</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="dialog-right">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-button type="primary">自检测</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="primary">导出</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="primary">打印</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="序号" />
                <el-table-column prop="card" label="标识卡名称" />
                <el-table-column prop="address" label="标识卡编号" />
                <el-table-column prop="million" label="位置（米）" />
                <el-table-column prop="status" label="标识卡状态" />
                <el-table-column prop="sad" label="标识卡描述" />
                <el-table-column prop="address" label="充点卡">
                    <template #default="{ row }">
                        <!--                        <el-switch-->
                        <!--                            v-model="row.state"-->
                        <!--                            active-color="#10B3FF"-->
                        <!--                            active-value="1"-->
                        <!--                            inactive-value="0">-->
                        <!--                        </el-switch>-->
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="启用">
                    <template #default="{ row }">
                        <el-switch v-model="row.state" active-color="#10B3FF" active-value="1" inactive-value="0"> </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <el-button type="text" class="el-icon-edit" @click="handleEDit(row)">编辑</el-button>
                        <el-button type="text" class="el-icon-delete-solid" @click="handleDel(row)">删除</el-button>
                    </template>
                </el-table-column>
                >
            </el-table>
            <div class="el-pagination-box">
                <pagination />
            </div>
        </div>
        <el-dialog title="编辑标签" :visible.sync="dialogVisible" width="40vw">
            <div>
                <el-form ref="form" :model="form" :rules="rules" label-width="120px">
                    <el-form-item label="标识卡名称：" props="name" required>
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label=" 标识卡编号：" props="card" required>
                        <el-input v-model="form.card" />
                    </el-form-item>
                    <el-form-item label="标识卡位置：" props="adress" required>
                        <el-input v-model="form.adress" />
                    </el-form-item>
                    <el-form-item label="充电点：" props="adress" required>
                        <el-select v-model="form.region">
                            <el-option v-for="item in starOptions" :label="item.label" value="item.value" :key="item.value"></el-option>
                        </el-select>
                        <!--                        <el-input v-model="form.adress"/>-->
                    </el-form-item>
                    <el-form-item label="标识卡位置：">
                        <el-input type="textarea" v-model="form.adress" maxlength="30" show-word-limit />
                    </el-form-item>
                </el-form>
                <div class="btn">
                    <el-button type="primary" class="Confirm" plain @click="handleConfirm">确认修改 </el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="alertModal">
            <slot name="title" class="header-title">
                <img src="/src/assets/img/dialog01.png" alt="" />
            </slot>
            <div name="main">
                <div class="flex" v-if="flag">
                    <el-row type="flex">
                        <el-col :span="24">
                            <img src="@/assets/img/crale.png" alt="" />
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p class="word" style="width: 300px">此操作失败，与自动巡检冲突 若要执行，请去后台关闭自动巡检</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="flex" v-else>
                    <el-row type="flex">
                        <el-col :span="24">
                            <p style="padding-bottom: 70px; font-size: 20px">确认删除此标识卡吗？</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="handleOk" style="width: 249px; height: 58px; font-size: 26px">确认删除 </el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="errorModal" title="异常提示">
            <slot name="title" class="header-title">
                <img src="/src/assets/img/dialog01.png" alt="" />
            </slot>
            <div name="main">
                <div class="flex">
                    <div class="flex-word">
                        <p>名称：xxxxx，编号：xxxxxx</p>

                        <p class="red">未识别成功，请及时确认处理！</p>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "card_manage",
    data() {
        return {
            flag: "true",
            currentPage2: 4,
            alertModal: false,
            errorModal: false,
            statusbar: [],
            starOptions: [
                {
                    label: "是",
                    value: 1,
                },
                {
                    label: "否",
                    value: 0,
                },
            ],
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
            ],
            dialogVisible: false,
            form: {
                name: "",
                card: "",
                adress: "",
            },
            rules: {
                name: [{ required: true, message: "标识卡名称", trigger: "blur" }],
                card: [{ required: true, message: "标识卡编号", trigger: "blur" }],
                adress: [{ required: true, message: "标识卡位置", trigger: "blur" }],
            },
        };
    },
    methods: {
        handleConfirm() {
            this.dialogVisible = false;
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         // alert('submit!');
            //         this.dialogVisible = false
            //     } else {
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
        },
        privateConfirm() {
            this.alertModal = true;
        },
        handleEDit() {
            this.dialogVisible = true;
        },
        handleDel({ flag }) {
            flag === "1" ? (this.flag = false) : (this.flag = true);
            this.alertModal = true;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleOk() {
            this.alertModal = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    background: url("../../../../assets/img/d01.png") no-repeat;
    background-size: 100% 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;

    .search-box {
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
    }

    .el-pagination-box {
        padding-right: 50px;
        text-align: right;
        margin-top: 40px;
    }
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;

    .word {
        margin-top: 15px;
        width: 170px;
    }
}

.btn {
    text-align: center;
    margin: 40px 0 60px 0;

    .el-button {
        width: 309px;
        height: 58px;
        background: linear-gradient(0deg, #10b3ff, #0e4680);
        border: 2px solid #25c4ff;
        box-shadow: 0px 4px 5px 1px rgba(9, 22, 41, 0.34), 0px 0px 3px 2px rgba(255, 255, 255, 0.29);
        color: #fff;
        font-size: 26px;
    }
}

.flex {
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    fonts-size: 20px;
    justify-content: center;
    color: #ffffff;
}
</style>
