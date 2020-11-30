/*
 * @Descripttion:
 * @version:
 * @Author: linqiaoxin
 * @Date: 2020-11-30 10:51:43
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-30 10:52:59
 */
'use strict';

// /**
//  * @param {Egg.Application} app - egg application
//  */

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
};
