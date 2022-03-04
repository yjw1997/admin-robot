// 事件处理函数
const funcode = {
    '1001': (data, vm, componentName) => {
        console.log("vm", vm)
    },
    '0': (data, vm, componentName) => {
        console.log("vm", vm)
    }
}
//组件处理函数
const fun = {
    //组件名
    ['app'](data) {
        return funcode[data.funcode]
    }
}

export default (data, vm, componentName) => {
    //用户登录 接口触发
    try {
        Object.keys(fun).includes(componentName) && fun[componentName](data)(data, vm, componentName)
    } catch (e) {
        console.log("e", e)
    }

}
