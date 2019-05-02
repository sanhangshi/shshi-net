module.exports = class extends think.Model {


    async getDefAvatar(){
       let list = await this.select();
       console.log(list)
       return list;
    }
};
