/*
 * @Author: Yun.Lei
 * @Date: 2019-04-29 12:19:21
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-29 15:51:56
 */
const Base = require("./base.js");
const config = require("../config/config.js");

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    async getListAction(){
      let shi = this.model("user");
      let data = await shi.getList();
      this.success({
        list:data.data,
        total:data.count
      })
    }

    async registerAction() {
        if (this.isPost) {
            let user = {
                userName: this.post("userName"),
                password: this.post("password"),
                nickName: this.post("nickName"),
                signature: this.post("signature"),
                avatar: this.post("avatar")
            };
            let errorMsg = [];
            if (!user.userName) {
                errorMsg.push("账户名为必填");
            } else {
              if(user.userName.length<6||user.userName>18){
                errorMsg.push("账户名需要在6-18位")
              }
            }
            if(!user.password){
              errorMsg.push("密码为必填");
            }
            if(!user.nickName){
              errorMsg.push("昵称为必填");
            }

            console.log("errorMsg:",errorMsg,",user:",user)
            if(errorMsg.length){
              this.fail(config.BASE_ERROE_CODE,errorMsg.join("、"),{})
            }else{
              let userModel = this.model("user");
              let res = await userModel.addUser(user);
              if(res.type=="exist"){
                this.fail(config.BASE_ERROE_CODE,"用户已存在",{});
              }else{
                this.success({
                  id:res.id
                });
              }
              
            }
        } else {
            this.status = 404;
        }
    }
};
