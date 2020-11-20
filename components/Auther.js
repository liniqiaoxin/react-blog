/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-20 09:45:31
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-20 15:49:53
 */
import React from 'react';
import { Avatar, Card, Divider, Tooltip } from 'antd';
import { UserOutlined, GithubOutlined, WeiboCircleOutlined , WechatOutlined, QqOutlined } from '@ant-design/icons';
import '../styles/components/auther.css'

const { Meta } = Card;

class Auther extends React.Component {
    render() {
        return (
            <>
                <Card

                    style={{ width: '100%', marginBottom: ' 10px' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    {/* <Meta title="web前端开发" /> */}
                    <p style={{ textAlign: 'center' }}>liniqiaoxin</p>
                    <Divider>社交账号</Divider>
                    <div className='icon'>
                        <Tooltip title="liniqiaoxin" color='#999'>
                            <GithubOutlined />
                        </Tooltip>
                        <Tooltip title="林瘦点" color='#999'>
                            <WeiboCircleOutlined /> 
                        </Tooltip>

                        <Tooltip title="liniqiaoxin" color='#999'>
                            <WechatOutlined />
                        </Tooltip>
                        <Tooltip title="liniqiaoxin" color='#999'>
                            <QqOutlined />
                        </Tooltip>
                    </div>
                </Card>
                {/* <Avatar shape="square" size={64} icon={<UserOutlined />} /> */}
            </>
        )
    }
}

export default Auther;