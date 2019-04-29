module.exports = class extends think.Model {


    async getList(params){
       let list = await this.page(params.page,params.pageSize).countSelect();
       console.log(list)
       return list;
    }

    async addPoetry(poepty){
        let result = await this.add(poepty);
        return result;
    }
};
