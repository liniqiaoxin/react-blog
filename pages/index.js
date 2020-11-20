/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-19 11:43:40
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-20 11:53:32
 */
import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headers from '../components/Header'
import Auther from '../components/Auther'
import Advert from '../components/Advert';
import Footer from '../components/Footer'
import Lists from '../components/Lists'

export default function Home() {

  return (
    <div className={styles.container}>

      <Headers />
      <Row className='content'>
        <Col className='con-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <Lists />
        </Col>
        <Col className='con-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Auther />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
