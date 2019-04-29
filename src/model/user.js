module.exports = class extends think.Model {


    async getList(){
       let list = await this.page(1,5).countSelect();
       console.log(list)
       return list;
    }

    async addUser(user){
        console.log("userModel:",user);
        const result = await this.where({userName:user.userName}).thenAdd(user);
        return result
    }
};
