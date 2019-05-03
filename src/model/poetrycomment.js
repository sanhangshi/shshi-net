module.exports = class extends think.Model {

    async getCommentList(poetryId){
        let list = await this.where({poetryId:poetryId}).join({table:'user',join:'left',on:['userId','id']}).select();
        return list;
    }
};
