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

    async getPoetry(id){
        let result;
        if(id){
            result = await this.where({id:id}).find();
            return result;
        }else{
            let count = await this.count('*');
            let offset = Math.floor(Math.random()*count)+1;
            let list = await this.page(offset,1).select();
            result = list[0];
            return result;
        }
        
    }
};
