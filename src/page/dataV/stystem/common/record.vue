<template>
    <div class="card">
        <div class="main">
            <div class="search-box">
                <div class="dialog-left">
                    <el-form ref="form" :inline="true" :model="form">
                        <el-form-item label="巡检名称：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="计划编号：">
                            <el-input v-model="form.name"></el-input>
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
                            <el-button type="primary" @click="handleAdd(BTN_TYPE.ADD)">添加</el-button>
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
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="序号"
                />
                <el-table-column
                    prop="card"
                    label="计划名称"
                />
                <el-table-column
                    prop="address"
                    label="计划编号"/>
                <el-table-column
                    prop="million"
                    label="执行周期"/>
                <el-table-column
                    prop="status"
                    label="巡检开始时间"/>
                <el-table-column
                    prop="sad"
                    label="巡检结束时间"/>
                <el-table-column
                    prop="sad"
                    label="开始地点"/>
                <el-table-column
                    prop="sad"
                    label="结束地点"/>
                <el-table-column
                    prop="address"
                    label="启用">
                    <template #default="{row}">
                        <el-switch
                            v-model="row.state"
                            active-color="#10B3FF"
                            active-value="1"
                            inactive-value="0">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template #default="{ row }">
                        <el-button type="text" class="el-icon-edit" @click="handleEDit(row,BTN_TYPE.EDIT)">编辑</el-button>
                        <el-button type="text" class="el-icon-delete-solid" @click="handleDel(row)">删除</el-button>
                    </template>
                </el-table-column>
                >
            </el-table>
            <div class="el-pagination-box">
               <pagination/>
            </div>
        </div>
        <el-dialog
            title="编辑巡检计划"
            :visible.sync="dialogVisible"
            width="50%"
        >
            <slot name="title" class="header-title">
                <!--                <span>{{title}}</span>-->
                <!--                <img src="@/assets/img/plan.png" alt="">-->
            </slot>
            <div>
                <el-form ref="form" :inline="true" :model="form" :rules="rules" label-width="120px">
                    <el-form-item label="计划名称：" props="name" required>
                        <el-input v-model="form.name"/>
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开始日期：" props="startTime" required>
                                <el-date-picker
                                    v-model="form.startTime"
                                    type="datetime"
                                />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="结束日期：" props="endTime">
                                <el-date-picker
                                    v-model="form.endTime"
                                    type="datetime"
                                />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开始地点：">
                                <el-select v-model="form.region">
                                    <el-option v-for="item in starOptions" :label="item.label" value="item.value" :key="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="结束地点：">
                                <el-select v-model="form.region">
                                    <el-option v-for="item in endOptions" :label="item.label" value="item.value" :key="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="日计划类型：" required>
                                <el-radio-group v-model="form.type">
                                    <el-radio :label="3">周期</el-radio>
                                    <el-radio :label="6">自定义</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="执行周期：" required>
                                <span class="white">
                                    每
                                </span>
                                <el-input-number v-model="form.number" @change="handleChange" :min="1" :max="99"/>
                                <span class="white">
                                                                    天
                                </span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="每天频率：" required>
                                <el-radio-group v-model="form.num">
                                    <el-radio :label="3">一次</el-radio>
                                    <el-radio :label="6">多次</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="执行周期：" required>
                                <el-input-number v-model="form.number" @change="handleChange" :min="1" :max="99"/>
                                <span class="white">
                                                                    小时

                                </span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开始时间：">
                                <el-date-picker
                                    v-model="form.start_time"
                                    type="datetime"
                                />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="结束时间：">
                                <el-date-picker
                                    v-model="form.end_time"
                                    type="datetime"
                                />
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

                <el-table
                    :data="tableData"
                    v-if="current==='edit'"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="序号"
                    />
                    <el-table-column
                        prop="address"
                        label="开始时间">
                        <template #default="{row}">
                        <el-date-picker
                            v-model="row.start_time"
                            type="datetime"
                        />
                    </template>
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="结束时间">
                        <template #default="{row}">
                            <el-date-picker
                                v-model="row.end_time"
                                type="datetime"
                            />
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作">
                        <template #default="{ row }">
                            <el-button type="text" class="el-icon-delete-solid" @click="handleDel(row)">删除</el-button>
                        </template>
                    </el-table-column>
                    >
                </el-table>
                <div class="btn">
                    <el-button type="primary" class="Confirm" plain @click="handleConfirm"
                    >
                        {{ getWord() }}
                    </el-button
                    >
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="alertModal">
            <slot name="title" class="header-title">
                <img src="/src/assets/img/dialog01.png" alt="">
            </slot>
            <div name="main">
                <div class="flex" v-if="flag">
                    <el-row type="flex">
                        <el-col :span="24">
                            <img src="@/assets/img/crale.png" alt="">
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p class="word" style="width: 300px;">
                                此操作失败，与自动巡检冲突
                                若要执行，请去后台关闭自动巡检
                            </p>
                        </el-col>
                    </el-row>
                </div>
                <div class="flex" v-else>
                    <el-row type="flex">
                        <el-col :span="24">
                            <p style="padding-bottom: 70px;font-size: 20px"> 确认删除此标识卡吗？</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="handleOk" style="width: 249px;
height: 58px;font-size:26px;">确认删除
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="errorModal" title="异常提示">
<!--            <slot name="title" class="header-title">-->
<!--                <img src="/src/assets/img/dialog01.png" alt="">-->
<!--            </slot>-->
            <div name="main">
                <div class="flex">
                    <div class="flex-word">
                        <p>
                            确认删除这条计划吗?
                        </p>
                    </div>
                    <el-button type="primary" @click="sunDel">
                        确认删除
                    </el-button>
                </div>
            </div>
        </el-dialog>
    </div>

</template>

<script>
import {BTN_TYPE} from '@/const/variable'

export default {
    name: "auto",
    data() {
        return {
            BTN_TYPE,
            current: '',
            flag: 'true',
            currentPage2: 4,
            alertModal: false,
            errorModal: false,
            statusbar: [],
            tableData: [
                {
                    id: 1,
                    card: 'dsadsa',
                    million: "15m",
                    status: '启用',
                    sad: 'dsadsa',
                    state: '1',
                    flag: '1'
                },
                {
                    id: 1,
                    card: 'dsadsa',
                    million: "15m",
                    status: '启用',
                    sad: 'dsadsa',
                    state: '0',
                    flag: '1'

                }, {
                    id: 1,
                    card: 'dsadsa',
                    million: "15m",
                    status: '启用',
                    sad: 'dsadsa',
                    state: '0',
                    flag: '0'
                }
            ],
            starOptions: [],
            endOptions: [],
            dialogVisible: false,
            form: {
                name: '',
                card: '',
                adress: '',
                type: '3',
                num: '3',
                number: 1,
                start_time: '',
                end_time: ''
            },
            rules: {
                name: [
                    {required: true, message: '标识卡名称', trigger: 'blur'}
                ], card: [
                    {required: true, message: '标识卡编号', trigger: 'blur'}
                ], adress: [
                    {required: true, message: '标识卡位置', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        handleConfirm() {
            this.dialogVisible = false
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
            if(this.current === 'edit'){
                return '确认编辑'
            }else{
                return '确认添加'
            }
        },
        privateConfirm() {
            this.alertModal = true
        },
        handleAdd(data) {
            this.dialogVisible = true
            this.current = data
        },
        sunDel(){
          this.errorModal=false
        },
        handleEDit(row, data) {
            this.dialogVisible = true
            this.current = data
        },
        handleDel({flag}) {
            flag === '1' ? this.flag = false : this.flag = true
            this.alertModal = true
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleOk() {
            this.alertModal = false
        }
    }
}
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
        background: linear-gradient(0deg, #10B3FF, #0E4680);
        border: 2px solid #25C4FF;
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
    color: #FFFFFF;
}

::v-deep .el-form-item.is-required:first-child {
    width: 100%;
}
</style>
