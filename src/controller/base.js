module.exports = class extends think.Controller {
  __before() {

  }
  toJson(data={},msg="",code=0){
    return JSON.stringify({
      code:code,
      data:data,
      msg:msg,
    })
  }
    
  
};
