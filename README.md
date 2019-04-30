## 目录
<a href="#1">基础数据定义</a><br/>
[用户相关](https://github.com/sanhangshi/shshi-net/blob/master/doc/USER.md)<br/>
[诗歌相关](https://github.com/sanhangshi/shshi-net/blob/master/doc/POETRY.md)<br/>


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