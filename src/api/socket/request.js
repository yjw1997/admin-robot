import websocket from "@/utils/websocket";
import Vue from "vue";
const socketRequest = {
    // 请求
    request: (option) => {
        //请求拦截
        let isRequest = false//是否请求
        socketRequest.interceptors.request(option)
        if (websocket.isConnect && !isRequest) {
            isRequest = true
            websocket.send(JSON.stringify(option))
        } else {
            setInterval(() => {
                if (websocket.isConnect && !isRequest) {
                    websocket.send(JSON.stringify(option))
                    isRequest = true
                }
            }, 50)
        }

    },
    //拦截器
    interceptors: {
        request: (option) => {
            console.log("request", option)
            return option
        },
        response: (res) => {
            console.log("response", res)
            return res
        },
    }
}

export default socketRequest
