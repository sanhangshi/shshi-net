## 目录--用户相关
1. <a href="#1">用户注册</a>
2. <a href="#2">用户列表</a>

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