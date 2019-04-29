module.exports = class extends think.Model {


    async getList(params){
       let list = await this.page(params.page,params.pageSize).countSelect();
       return list;
    }

    async addUser(user){
        const result = await this.where({userName:user.userName}).thenAdd(user);
        return result
    }
};
