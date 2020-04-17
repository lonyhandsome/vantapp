import axios from 'axios';
import qs from 'qs';

let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = 'http://47.103.159.97:8080/honeypot/api/v1/wx';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {//请求头
        "Content-Type": "application/json;charset=utf-8"
    },
    changeOrigin: true
});

util.get = function (url, data) {
    return util.ajax({
        url,//请求地址，会加上配置的前缀地址
        method: 'get',//请求类型
        data: qs.stringify(data, { arrayFormat: "repeat" })//这里用qs处理数据，数组转成不带下标
    })
        .then(response => {//成功
            console.log(response);
            return response;
        })
        .catch(error => {//失败
            console.log(error);
            return error;
        });
}

export default util;