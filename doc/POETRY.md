## 目录---诗歌相关
<a href="#1">获取三行诗列表</a><br/>
<a href="#2">发布三行诗</a><br/>
<a href="#3">获取某一条诗</a><br/>
<a href="#4">获取是个分类</a><br/>

### <a name="1">发布三行诗</a>
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

### <a name="3">获取某一条诗</a>
```
url:/index/getPoetry
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
### <a name="4">获取三行诗分类</a>
```
url:/index/getTypeList
method:GET
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| **     | 否 |   *    |
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
### <a name="5">增加一个分类</a>
```
url:/index/addType
method:POST
```
| 参数        | 是否必传  |  含义  |
| --------   | -----:  | :----:  |
| typeName| 是 |   分类名称   |
```json
{
    "errno": 1004,
    "errmsg": "分类已存在",
    "data": {}
}
```