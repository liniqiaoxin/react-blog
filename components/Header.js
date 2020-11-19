/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-19 14:00:11
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-19 17:17:06
 */
import React from 'react';
import { Row, Col, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../styles/components/header.css'

const { SubMenu } = Menu;


class Headers extends React.Component {

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
                            <Menu.Item key="mail" icon={<MailOutlined />}>
                                首页
                              </Menu.Item>
                            <Menu.Item key="app"  icon={<AppstoreOutlined />}>
                                视频
                               </Menu.Item>
                        
                          <Menu.Item key="alipay"  icon={<AppstoreOutlined />}>   
                                分类
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default Headers;