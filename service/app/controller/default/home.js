/*
 * @Descripttion:
 * @version:
 * @Author: linqiaoxin
 * @Date: 2020-11-30 10:50:20
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-12-09 16:30:26
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

  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      // 'article.add_time as addTime,' +
      "DATE_FORMAT(article.add_time,'%Y-%m-%d %H:%i:%s') as addTime," +
      'article.view_count as viewCount,' +
      'type.type_name as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id';

    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    const id = this.ctx.params.id;
    console.log(id);
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as articleContent,' +
      // 'article.add_time as addTime,' +
      "DATE_FORMAT(article.add_time,'%Y-%m-%d %H:%i:%s') as addTime," +
      'article.view_count as viewCount,' +
      'type.type_name as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id ' +
      'WHERE article.id=' + id;

    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  // 得到类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = {
      data: result,
    };
  }
}

module.exports = HomeController;
