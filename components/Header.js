/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-19 14:00:11
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-23 09:52:18
 */
import React from 'react';
import { Row, Col, Menu } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone  } from '@ant-design/icons';
import '../styles/components/header.css'



class Header extends React.Component {

    render() {

        return (
            <div className='header' >
                <Row className='headerRow'>
                    <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className='header-logo'>liniaoxin</span>
                        <span  className='header-txt'>MY BLOG</span>
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu className='menu-div' mode="horizontal">
                            <Menu.Item key="mail" icon={<SmileTwoTone  />}>
                                首页
                              </Menu.Item>
                            <Menu.Item key="app"  icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
                                视频
                               </Menu.Item>
                        
                          <Menu.Item key="alipay"  icon={<CheckCircleTwoTone  twoToneColor="#52c41a"/>}>   
                                分类
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default Header;