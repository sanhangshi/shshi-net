
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
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
```json
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