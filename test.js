var axios = require('axios');

var addr = 'http://wwwbaiducom13.cn/?email=xxxx@baidu.com&sign=fcbd24464d';
var pass = '同学,你能接收到我发过来的吗?';

axios.defaults.headers.post['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';
axios.defaults.headers.post['Accept-Encoding'] = 'gzip, deflate';
axios.defaults.headers.post['Accept-Language'] = 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4';
axios.defaults.headers.post['Cache-Control'] = 'max-age=0';
axios.defaults.headers.post['Connection'] = 'keep-alive';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Cookie'] = '__cfduid=d743820ab42823dd7eb297d72e3bd97971498545584';
axios.defaults.headers.post['Upgrade-Insecure-Requests'] = 'Upgrade-Insecure-Requests';
axios.defaults.headers.post['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';

axios.post(addr,{
    email:'xxxx@baidu.com',
    submit:'确认上述信息有误',
    pass: pass
}).then(function (response) {
    console.log(response);
});