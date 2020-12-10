/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-12-09 14:45:46
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-12-09 15:37:11
 */
let ipUrl = 'http://127.0.0.1:7002/default/'


let servicePath = {
   getArticleList:ipUrl+'getArticleList', // 首页文章列表接口
   getArticleById:ipUrl+`getArticleById/`, // 文章详细页内容接口，需要接受参数
   
}
export default servicePath;