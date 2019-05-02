/*
 * @Author: Yun.Lei
 * @Date: 2019-04-29 12:19:21
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-29 18:24:45
 */
const Base = require("./base.js");
const config = require("../config/config.js");
import dayjs from 'dayjs';


module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    async addTypeAction() {
        if (this.isPost) {
            let type = this.post("typeName");
            if (!type) {
                this.fail(config.BASE_ERROE_CODE, "分类不能为空", {});
            } else {
                let typeModel = this.model("poetrytype");

                let res = await typeModel.where({
                    type: type
                }).thenAdd({
                    type: type
                });
                if (res.type == "exist") {
                    this.fail(config.BASE_ERROE_CODE, "分类已存在", {});
                } else {
                    this.success({
                        id: res.id
                    });
                }
            }

        } else {
            this.status = 404;
        }
    }

    async getTypeListAction() {
        if (this.isGet) {
            let typeModel = this.model("poetrytype");
            let typeList = await typeModel.getTypeList();
            this.success({
                list: typeList
            })
        } else {
            this.status = 404;
        }
    }

    async getListAction() {
        if (this.isGet) {
            let params = {
                tagId:this.get("tagId")||"",
                keyword:this.get("keyword")||"",
                page: this.get("page") || config.DEF_PAGE,
                pageSize: this.get("pageSize") || config.DEF_PAGE_SIZE
            }
            let shi = this.model("shi");
            let data = await shi.getList(params);
            this.success({
                list: data.data,
                total: data.count
            });
        } else {
            this.status = 404;
        }
    }

    async getPoetryAction() {
        if (this.isGet) {
            let id = this.get("poetryId") || 0;
            let shiModel = this.model("shi");
            let poetry = await shiModel.getPoetry(id);
            if (think.isEmpty(poetry)) {
                this.fail(config.BASE_ERROE_CODE, "没有对应ID的数据", {});
            } else {
                this.success(poetry);
            }
        } else {
            this.status = 404;
        }
    }

    async addPoetryAction() {
        if (this.isPost) {
            let poetry = {
                title: this.post("title"),
                author: this.post("author"),
                content: this.post("content"),
                createBy: this.post("createBy"),
                caeateTime: this.post("caeateTime") || dayjs().unix(),
                tagId: this.post("tagId"),
                remark: this.post("remark"),
                createUserId: this.post("createUserId")
            };
            let errorMsg = [];
            if (!poetry.content) {
                errorMsg.push("内容不能为空");
            }
            if (!poetry.createBy) {
                errorMsg.push("createBy不能为空");
            }
            if (!poetry.createUserId) {
                errorMsg.push("createUserId不能为空");
            }
            if (!poetry.tagId) {
                errorMsg.push("tagId不能为空");
            }
            if (errorMsg.length) {
                this.fail(config.BASE_ERROE_CODE, errorMsg.join("、"), {});
            } else {
                let shi = this.model("shi");
                let id = await shi.addPoetry(poetry);
                this.success({
                    id: id
                });
            }
        } else {
            this.status = 404;
        }
    }
};