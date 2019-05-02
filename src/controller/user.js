/*
 * @Author: Yun.Lei
 * @Date: 2019-04-29 12:19:21
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-30 18:27:12
 */
const Base = require("./base.js");
const config = require("../config/config.js");

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    async loginAction(){
      if(this.isPost){
        let name = this.post("userName");
        let password = this.post("password");
        if(!name||!password){
          this.fail(config.BASE_ERROE_CODE,"账户或密码不能为空",{});
        }else{
          let userModel = this.model("user");
          let user = await userModel.where({userName:name}).find();
          if(think.isEmpty(user)){
            this.fail(config.BASE_ERROE_CODE,"账户或密码错误",{});
          }else{
            if(password!==user.password){
              this.fail(config.BASE_ERROE_CODE,"账户或密码错误",{});
            }else{
              delete user["password"];
              this.success(user);
            }
          }
        }
        
        
      }else{
        this.status = 404;
      }
    }

    async getListAction(){
      if(this.isGet){
        let params = {
          page : this.get("page")||config.DEF_PAGE,
          pageSize : this.get("pageSize")||config.DEF_PAGE_SIZE
        }
        let shi = this.model("user");
        let data = await shi.getList(params);
        data.data.map(item=>{
          delete item["password"];
        })
        this.success({
          list:data.data,
          total:data.count
        })
      }else{
        this.status = 404;
      }
      
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

    async getUserInfoAction(){
      if(this.isGet){
        let id = this.get("id");
        if(!id){
          this.fail(config.BASE_ERROE_CODE,"id为必传",{});
        }else{
          let userModel = this.model("user");
          let user = await userModel.getUser(id);
          if(think.isEmpty(user)){
            this.fail(config.BASE_ERROE_CODE,"暂无对应用户信息，请检查id是否正确",{});
          }else{
            this.success(user)
          }
        }
        
      }else{
        this.status = 404;
      }
    }

    async getDefAvatarAction(){
      if(this.isGet){
        let avatarModel = this.model("avatar");
        let list = await avatarModel.getDefAvatar();
        let avatarList = [];
        list.map(item=>{
          avatarList.push(item.img);
        })
        this.success({
          list:avatarList
        })
      }else{
        this.status = 404;
      }
    }
};
