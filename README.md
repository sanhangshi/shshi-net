## 目录
1. <a href="#1">基础数据定义</a>
2. <a href="#2">获取三行诗列表</a>
3. <a href="#3">发布三行诗</a>
4. <a href="#4">用户注册</a>
5. <a href="#5">用户列表</a>
6. <a href="#6">获取某一条诗</a>


### <a name="1">基础数据定义</a>
1、对象型
```
{
    "errno": 0,     //0为成功，非0为失败，如1004
    "errmsg": "",   //一般在失败时才会有
    "data": {}      //数据
}
```
2、数组型
```
{
    "errno": 0,     //0为成功，非0为失败，如1004
    "errmsg": "",   //一般在失败时才会有
    "data": {       //数据
        "list":[],  //数据列表
        "total":0   //数据总数---分页的时候存在
    }      
}
```

### <a name="2">获取三行诗列表</a>
```
url:/index/getList
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| page     | 否 |   页码：从1开始     |
| pageSize       |   否   |   单页数量   |
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "list": [
            {
                "id": 2,    
                "title": "六月八日",    
                "author": "武汉大学",   
                "content": "螃蟹在剥我的壳，笔记本在写我。\r\n漫天的我落在枫叶上雪花上。\r\n而你在想我。",  
                "createBy": "leiyun",   
                "caeateTime": 1556464345,  
                "tagId": 1,    
                "remark": "也许世界颠覆，你才会想我吧" ,
                "createUserId": 1
            }
        ],
        "total": 1      
    }
}
```
### <a name="3">发布三行诗</a>
```
url:/index/addPoetry
method:POST
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| title     | 否 |   标题     |
| author       |   否   |   作者   |
| content       |   是   |   内容   |
| createBy       |   是   |   创建人   |
| createUserId       |   是   |   创建人ID   |
| tagId       |   是   |   分类ID   |
| remark       |   否   |   备注   |
| caeateTime       |   否   |   创建时间   |
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "id": 3
    }
}
```

### <a name="4">用户注册</a>
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
### <a name="5">用户列表</a>
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
### <a name="6">获取某一条诗</a>
```
url:/user/getPoetry
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| poetryId     | 否 |   诗歌ID，传0或者不传随机获取，传非0或者去指定诗歌内容     |
```json
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "id": 4,
        "title": "标题",
        "author": "作者",
        "content": "内容",
        "createBy": "创建人",
        "caeateTime": 1556530890,
        "tagId": 1,
        "remark": "备注",
        "createUserId": 2
    }
}
```