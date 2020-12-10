/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-19 11:43:40
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-12-09 15:14:56
 */
import React, { useState } from 'react';
import { Row, Col, List } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Head from 'next/head';
import Link from 'next/link'
import Header from '../components/Header';
import Auther from '../components/Auther';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import Lists from '../components/Lists';
import axios from 'axios';
import servicePath from '../config/api'
import '../styles/Home.module.css';

const Home = (list) => {
  // console.log(list)
  //---------主要代码-------------start
  const [myList, setMylist] = useState(list.data);

  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <Header />
      <Row className='content'>
        <Col className='con-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            itemLayout="vertical"
            dataSource={myList}
            className='list'
            renderItem={item => (
              <List.Item>
                {/* <List.Item.Meta
                  title={<a href="https://ant.design" style={{ color: ' #1e90ff', fontSize: '26px' }}>{item.title}</a>}
                /> */}
                <div className='list-title'>
                  <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>
                      {item.title}
                    </a>
                  </Link>
                </div>
                <div className="list-icon">
                  <div>
                    <span> <CalendarOutlined />{item.addTime} </span>
                  </div>
                  <div>
                    <span><FolderOutlined /> {item.typeName}</span>
                  </div>
                  <div>
                    <span>  <FireOutlined /> {item.viewCount}</span>
                  </div>
                </div>
                <div className='list-context'>
                  {item.introduce}
                </div>

              </List.Item>
            )}

          />
          {/* <Lists /> */}
        </Col>
        <Col className='con-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Auther />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}


Home.getInitialProps = async () => {
  // console.log('远程获取数据结果:================')
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log('远程获取数据结果:', res.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}



export default Home;