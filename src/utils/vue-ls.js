// Global(全局)     ：Vue.ls
// Context（上下文）：this.$ls
// 1. Vue.ls.get(name, def)
// 返回storage中 name值。在返回之前，内部解析JSON中的值
// def: 默认null, 如果为设置则返回 name .
//
// 2.Vue.ls.set(name, value, expire)
// 在storage设置 name 的 value .并将 value 转化为JSON
// expire: 默认为 null , name 有效时间以毫秒为单位
//
// 3. Vue.ls.remove(name)
// 从storage中移除 name . 成功移除 true, 否则返回false.
//
// Vue.ls.clear()
// 清除storage.
//
// 4. Vue.ls.on(name, callback)
// 持续监听 name 在其他标签上的更改，更改时触发 callback , 传递以下参数：
//
// newValue: 当前storage中 name , 从持久化的JSON中解析
// oldValue: 旧的storage中 name , 从持久化的JSON中解析
// url: 修改来自选项卡的URL
//
// 5.Vue.ls.off(name, callback)
// 删除以前的侦听器 Vue.ls.on(name, callback)
import Vuels from 'vue-ls';
import Vue from "vue";

const options = {
    namespace: 'sc_', // key键前缀
    name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
    storage: 'local', // 存储名称: session, local, memory
};

Vue.use(Vuels, options);



