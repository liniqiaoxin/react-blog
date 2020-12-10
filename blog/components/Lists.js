/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-20 11:49:01
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-12-04 10:57:43
 */
import React, { useState } from 'react';
import { List } from 'antd';
import axios from 'axios';

class Lists extends React.Component {
    static async  getInitialProps   (){
        console.log('======')
        const promise = new Promise((resolve)=>{
          axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res)=>{
              console.log('远程获取数据结果:',res.data)
              resolve(res.data)
            }
          )
        })
      
        return await promise
      }
      

    render() {
        const  getInitialProps = this.props;
        console.log(getInitialProps)
        return (
            // <List
            //     itemLayout="vertical"
            //     dataSource={myList}
            //     className='list'
            //     renderItem={item => (
            //         <List.Item>
            //             <List.Item.Meta

            //                 title={<a href="https://ant.design" style={{ color: ' #1e90ff', fontSize: '26px' }}>{item.title}</a>}
            //                 description='发表日期：2020-11-19 观看人数：1000+'

            //             />
            //             {item.context}
            //         </List.Item>
            //     )}

            // />
''
        );
    }
}
export default Lists;
