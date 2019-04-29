
### 基础数据定义
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

### 获取三行诗列表
```
url:/index/getList
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| page     | 否 |   页码：从1开始     |
| pageSize       |   否   |   单页数量   |
```
{
    "errno": 0,
    "errmsg": "",
    "data": {
        "list": [
            {
                "id": 2,    //id
                "title": "六月八日",    //标题
                "author": "武汉大学",   //作者--来源
                "content": "螃蟹在剥我的壳，笔记本在写我。\r\n漫天的我落在枫叶上雪花上。\r\n而你在想我。",  //诗歌内容
                "createBy": "leiyun",   //创建人
                "caeateTime": 1556464345,   //创建时间
                "tagId": 1,     //分类ID
                "remark": "也许世界颠覆，你才会想我吧"  //创建者备注--感想--读后感等
            }
        ],
        "total": 1      //总数，分页之类的自己算
    }
}
```

### 用户注册
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