/*
 * @Descripttion:
 * @version:
 * @Author: linqiaoxin
 * @Date: 2020-11-30 10:50:20
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-30 11:50:14
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    //  获取用户表的数据

    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);
    ctx.body = result;
  }
}

module.exports = HomeController;
