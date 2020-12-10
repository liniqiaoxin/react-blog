/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-23 09:56:45
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-12-10 14:36:15
 */
import React, { useState } from 'react';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Head from 'next/head';
import Header from '../components/Header';
import Auther from '../components/Auther';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import Tocify from '../components/tocify.tsx'
import ReactMarkDown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import axios from 'axios';
import marked from 'marked'
import highlight from "highlight.js";
import servicePath from '../config/api';
import 'highlight.js/styles/monokai-sublime.css';

import 'markdown-navbar/dist/navbar.css'
import '../styles/Home.module.css';
import '../styles/pages/detailed.css';

// class Detailed extends React.Component {
const Detailed = (list) => {
	const tocify = new Tocify()
	const renderer = new marked.Renderer();
	let articleContent = list.articleContent
	renderer.heading = function (text, level, raw) {
		console.log('text',text, level)
		const anchor = tocify.add(text, level);
		console.log('anchor', anchor)
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
	};


	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false,
		highlight: function (code) {
			return highlight.highlightAuto(code).value;
		}
	});

	// renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
	// gfm：启动类似Github样式的Markdown,填写true或者false
	// pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
	// sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
	// tables： 支持Github形式的表格，必须打开gfm选项
	// breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
	// smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
	// highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成

	let html = marked(list.articleContent)


	// console.log('=====',list.data)

	//---------主要代码-------------start
	const [myList, setMylist] = useState(list);

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
									{myList.typeName}
								</Breadcrumb.Item>
								<Breadcrumb.Item>detailed </Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<div className='detailed-title'>
								{myList?.title}
							</div>
							<div className="list-icon center">
								<div>
									<span> <CalendarOutlined />{myList?.addTime} </span>
								</div>
								<div>
									<span><FolderOutlined /> {myList?.typeName}</span>
								</div>
								<div>
									<span>  <FireOutlined /> {myList?.viewCount}</span>
								</div>
							</div>
							<div className="detailed-content"
								dangerouslySetInnerHTML={{ __html: html }}>
								{/* <ReactMarkDown
									// source={markdown}
									escapeHtml={false}
								/> */}

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
							<div className='article-menu'>{tocify && tocify.render()}</div>
							{/* <MarkNav
								className='article-menu'
								// source={markdown}
								ordered={false}
							/> */}
						</div>
					</Affix>
				</Col>
			</Row>
			<Footer />
		</>
	);
	// }
}

Detailed.getInitialProps = async (context) => {
	// console.log(context.query.id)
	let id = context.query.id
	// console.log('======')
	const promise = new Promise((resolve) => {
		axios(servicePath.getArticleById+id).then(
			(res) => {
				// console.log('远程获取数据结果:', res.data)
				resolve(res.data?.data[0])
			}
		)
	})

	return await promise
}

export default Detailed;