const Base = require('./base.js');
const config = require('../config/config.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async getListAction(){
    let shi = this.model("shi");
    let data = await shi.getList();
    this.success({
      list:data.data,
      total:data.count
    })
    // this.fail(config.BASE_ERROE_CODE,"暂无相关数据",{})
  }
};
