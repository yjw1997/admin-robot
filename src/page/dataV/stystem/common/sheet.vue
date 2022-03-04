<template>
    <div class="card">
        <div class="main">
            <div class="search-box">
                <div class="dialog-left">
                    <el-form ref="form" :inline="true" :model="form">
                        <el-form-item label="开始时间：">
                            <el-date-picker v-model="form.start_time" type="datetime" />
                        </el-form-item>
                        <el-form-item label="结束时间：">
                            <el-date-picker v-model="form.end_time" type="datetime" />
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
                        <el-col :span="12">
                            <el-button type="primary">导出</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="primary">打印</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="序号" />
                <el-table-column prop="card" label="巡检点" />
                <el-table-column prop="address" label="巡检部位" />
                <el-table-column prop="million" label="分析类型" />
                <el-table-column prop="status" label="巡检时间" />
                <el-table-column prop="sad" label="状态" />
                <el-table-column prop="sad" label="巡检照片" />
            </el-table>
            <div class="el-pagination-box">
                <pagination />
            </div>
        </div>
    </div>
</template>

<script>
import { BTN_TYPE } from "@/const/variable";

export default {
    name: "record_table",
    data() {
        return {
            BTN_TYPE,
            current: "",
            flag: "true",
            currentPage2: 4,
            alertModal: false,
            errorModal: false,
            statusbar: [],
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
            ],
            starOptions: [],
            endOptions: [],
            dialogVisible: false,
            form: {
                name: "",
                card: "",
                adress: "",
                type: "3",
                num: "3",
                number: 1,
                start_time: "",
                end_time: "",
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
        handleChange(value) {
            console.log(value);
        },
        getWord() {
            if (this.current === "edit") {
                return "确认编辑";
            } else {
                return "确认添加";
            }
        },
        privateConfirm() {
            this.alertModal = true;
        },
        handleAdd(data) {
            this.dialogVisible = true;
            this.current = data;
        },
        sunDel() {
            this.errorModal = false;
        },
        handleEDit(row, data) {
            this.dialogVisible = true;
            this.current = data;
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
    font-size: 20px;
    justify-content: center;
    color: #ffffff;
}

::v-deep .el-form-item.is-required:first-child {
    width: 100%;
}
</style>
