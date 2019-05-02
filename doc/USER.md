## 目录--用户相关
<a href="#1">用户注册</a><br/>
<a href="#2">用户列表</a><br/>
<a href="#3">登录</a><br/>
<a href="#4">获取默认头像</a><br/>

### <a name="1">用户注册</a>
```
url:/user/register
method:POST
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| userName     | 是 |   用户名    |
| password       |   是   |   密码   |
| nickName       |   是   |   昵称   |
| signature       |   否   |   个性签名   |
| avatar       |   否   |   头像   |
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "id": 5
    }
}
```
### <a name="2">用户列表</a>
```
url:/user/getList
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| page     | 否 |   页码：从1开始     |
| pageSize       |   否   |   单页数量   |
// 字段含义对应注册方法
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "list": [
            {
                "id": 6,
                "userName": "tanghanyang4",
                "nickName": "hello",
                "signature": "个性签名",
                "avatar": "https://hbimg.huabanimg.com/621034b37c53ffc81f5d6a23ae1226d5c67e2b9628267-BYuZLo_fw658"
            }
        ],
        "total": 6
    }
}
```
### <a name="3">登录</a>
```
url:/user/login
method:POST
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| userName     | 是 |   账户名     |
| password       |   是   |   密码   |
// 字段含义对应注册方法
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "id": 2,
        "userName": "tanghanyang",
        "nickName": "hello",
        "signature": "个性签名",
        "avatar": "https://hbimg.huabanimg.com/621034b37c53ffc81f5d6a23ae1226d5c67e2b9628267-BYuZLo_fw658"
    }
}
{
    "errno": 1004,
    "errmsg": "账户或密码错误",
    "data": {}
}
```
### <a name="4">获取默认头像</a>

由于我们没有对象存储，就不做头像上传，但是想保留头像功能，可以做成让用户选择默认头像，或者随机配置头像，总共有25张，可新增
```
url:/user/getDefAvatar
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| 无     | 否 |   **     |
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "list": [
            "http://hbimg.b0.upaiyun.com/35c1bbf1039fed2470db2891c03a0ccae2ae23ee1d44-pHn81e_fw658",
            "http://img.zcool.cn/community/0130e95c1cf7f3a8012029ac1fdfee.jpg@1280w_1l_2o_100sh.jpg",
            "http://img.duoziwang.com/2016/09/02/18485755487.jpg",
            "http://img.duoziwang.com/2019/02/03261330134766.jpg"
        ]
    }
}
```