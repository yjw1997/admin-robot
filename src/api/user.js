import socketRequest from '@/api/socket/request';

export default {
    // 用户登录
    login: data => socketRequest.request({
        "funcode": 1001,
        "desc": "描述信息",
        "user": "admin",
        "pwd": "admin@123",
        "type": 1,
        ...data
    })
}
