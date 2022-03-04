import Vue from "vue";
const websocket = new WebSocket('ws://58.213.47.173:10010');
import socketRequest from "@/api/socket/request";


websocket.isConnect = false //是否连接成功
websocket.onopen = function (event) {
    websocket.isConnect = true
    console.log('建立连接');
}

websocket.onclose = function (event) {
    console.log('连接关闭');
}

websocket.onmessage = function (event) {
    console.log('收到消息:' + event.data)
    socketRequest.interceptors.response(JSON.parse(event.data))
    //全局推送 分发
    Vue.$bus.$emit('socketRes',JSON.parse(event.data))
}

websocket.onerror = function () {
    console.log("websocket通信发生错误！")
}

window.onbeforeunload = function () {
    websocket.close();
}
export default websocket
