/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-23 09:56:45
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-23 14:22:23
 */
import React from 'react';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Head from 'next/head';
import Header from '../components/Header';
import Auther from '../components/Auther';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ReactMarkDown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css'

import '../styles/Home.module.css';
import '../styles/pages/detailed.css';

class Detailed extends React.Component {

    render() {
        let markdown = '# P01:课程介绍和环境搭建\n' +
            '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
            '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
            '**这是加粗的文字**\n\n' +
            '*这是倾斜的文字*`\n\n' +
            '***这是斜体加粗的文字***\n\n' +
            '~~这是加删除线的文字~~ \n\n' +
            '\`console.log(111)\` \n\n' +
            '# p02:来个Hello World 初始Vue3.0\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n' +
            '***\n\n\n' +
            '# p03:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p04:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '# p02:来个Hello World 初始Vue3.0\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n' +
            '***\n\n\n' +
            '# p03:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p04:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '#5 p05:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p06:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +  '# p02:来个Hello World 初始Vue3.0\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n' +
            '***\n\n\n' +
            '# p03:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p04:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '#5 p05:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p06:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '# p07:Vue3.0基础知识讲解\n' +
            '> aaaaaaaaa\n' +
            '>> bbbbbbbbb\n' +
            '>>> cccccccccc\n\n' +
            '``` var a=11; ```'
        return (
            <>
                <Head>
                    <title>博客详情页</title>
                </Head>

                <Header />
                <Row className='content'>
                    <Col className='con-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                        <div>
                            <div className='bread-div'>
                                <Breadcrumb >
                                    <Breadcrumb.Item>
                                        <a href='/'>Home</a> </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href='/'>list</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>detailed </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div>
                                <div className='detailed-title'>
                                    Rreat实战视频教程
                            </div>
                                <div className="list-icon center">
                                    <span><CalendarOutlined /> 2019-06-28</span>
                                    <span><FolderOutlined /> 视频教程</span>
                                    <span><FireOutlined /> 5498人</span>
                                </div>
                                <div className="detailed-content" >
                                    <ReactMarkDown
                                        source={markdown}
                                        escapeHtml={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='con-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                        <Auther />
                        <Advert />
                        <Affix offsetTop={5}>
                            <div className="detailed-nav comm-box">
                                <div className="nav-title">文章目录</div>
                                <MarkNav
                                    className='article-menu'
                                    source={markdown}
                                    ordered={false}
                                />
                            </div>
                        </Affix>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default Detailed;