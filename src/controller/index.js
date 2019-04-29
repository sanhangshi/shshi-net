/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-29 12:19:21 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-29 15:30:32
 */
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
  }
};
