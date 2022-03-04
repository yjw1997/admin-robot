<template>
    <el-pagination
        :background="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[12, 24, 36, 48]"
        :page-size="12"
        layout="sizes, prev, pager, next"
        :total="1000"
    >
    </el-pagination>
</template>

<script>
export default {
    data() {
        return {
            currentPage2: 4,
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    },
};
</script>

<style scoped></style>
