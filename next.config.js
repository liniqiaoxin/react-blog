/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-19 11:48:49
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-19 11:48:49
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})