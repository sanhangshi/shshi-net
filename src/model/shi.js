module.exports = class extends think.Model {


    async getList(){
       let list = await this.page(1,5).countSelect();
       console.log(list)
       return list;
    }
};
