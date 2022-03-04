<template>
    <div id="app">
        <router-view :key="$route.fullpath"></router-view>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {};
    },
    async mounted() {
       console.log("await this.$api.user.login()",)
    }
};
</script>
<style lang="scss">
@import "~@/assets/scss/theme.scss";
@import "~@/assets/scss/custom.scss";
@import "~@/assets/scss/icon.scss";
@import "~@/assets/scss/global.scss";
</style>
