import React, { useState } from 'react';
import { Card, } from 'antd';
import '../styles/components/advert.css'



class Advert extends React.Component {

    state = {
        image: [
            { src: "http://blogimages.jspang.com/flutter_ad2.jpg" },
            { src: "http://blogimages.jspang.com/Vue_koa_ad1.jpg" },
            { src: "http://blogimages.jspang.com/WechatIMG12.jpeg" },
            { src: "http://blogimages.jspang.com/WechatIMG12.jpeg" },
        ],
    }


    render() {
        const { image } = this.state;
        return (
            image.map((item, index) => (
                <Card className='advertCard' style={{ width: '100%' }} key={index}>
                    <img style={{ width: '100%' }} alt="example" src={item.src} />
                </Card>
            ))

        )

    }

}

export default Advert; 