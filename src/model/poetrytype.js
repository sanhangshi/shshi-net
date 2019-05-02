module.exports = class extends think.Model {


    async getTypeList(){
       let list = await this.select();
       console.log(list)
       return list;
    }
};
