import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from '@@/Layout/Layout';
import SampleCard from '@@/Card/SampleCard';
import Avatar from '@@/Avatar/Avatar'
import Tag from '@@/Tag/Tag'
import Comments from '@@/Comments/Comments'
import marked from '@/utils/marked'
import ajax, { api } from '@/utils/Ajax.js';
import './Article.css'
import './marked.css'
import 'highlight.js/styles/github.css';

export default props => {
    const [article, setArticle] = useState({});
    const [content, setContent] = useState('');
    const [categorys_id, setCategorys_id] = useState([]);
    const [comments, setComments] = useState([])
    const [hotArticles, sethotArticles] = useState([]);
    const { id } = props.match.params
    useEffect(() => {
        // 为了画面不迁移的时候出现loading效果
        setArticle({})

        // 取得article数据
        let params = { "id": id }
        ajax.post(api.getArticle, { params }).then(res => {
            console.log(res)
            let articleData = res.data.res;
            articleData['user'] = res.data.user;
            // console.log(articleData)
            setArticle(articleData)
            setCategorys_id(articleData.categories.split(','))
            const markdownContent = marked(res.data.res.content)
            setContent(markdownContent)

            // 更新阅读数
            ajax.post(api.setArticle, {
                "params": {
                    "id": id,
                    "view_count": (res.data.res.view_count || 0) + 1
                }
            }).then(res => {
                console.log(res)
            })

            if(props.location.hash !==''){
                window.location.href = props.location.hash;
            }

        });

        ajax.post(api.getComments, { params }).then(res => {
            console.log(res)
            setComments(res.data.res)
        });


        params = {
            "select": true,
            "orderBy": ["like_count", "desc"],
            "take": 5
        }
        ajax.post(api.getHotArticles, { params }).then(res => {
            console.log(res)
            sethotArticles(res.data.res)
        });


    }, [props.location.pathname])



    const handlePublish = comment => {
        comments.unshift({
            user_id: -1,
            comment_content: comment,
            comment_date: new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 10),
        })

        setComments(comments)

        let params = {
            user_id: -1,
            article_id: id,
            comment_content: comment
        }
        ajax.post(api.addComment, { params }).then(res => {
            console.log(res)
        });


    }


    return (
        <Layout loading={article.title === undefined}>

            <div className="article main wrap">
                <div className="main-left">
                    <div className="content">
                        <div className="article-title">
                            <h1>{article.title}</h1>
                        </div>
                        <div className="atricle-introduce">
                            <Avatar image={require(`@/assets/images/avatars/${article.user? article.user.avatar : '28.png'}`)}></Avatar>
                            <div>
                                <span className="atricle-introduce-name">{article.user && article.user.name}</span>
                                <span>{article.user && article.user.comment}</span>
                            </div>
                            <div className="atricle-desc">
                                <span>阅读：{article.view_count || 1}、喜欢：{article.like_count || 0}</span>
                                <span>更新时间：{new Date(article.publish_date).format('yyyy-MM-dd')}</span>
                            </div>
                        </div>
                        <div className="atricle-type-v">
                            {
                                categorys_id.map((tag, i) =>
                                    <Tag key={i.toString()}>{tag}</Tag>
                                )
                            }
                        </div>
                        <div className="atricle-content">
                            <div
                                dangerouslySetInnerHTML={{ __html: content }}
                            ></div>
                        </div>
                    </div>
                    <a name='comments'></a>
                    <Comments
                        comments={comments}
                        onPublish={v => handlePublish(v)}
                    />

                </div>
                <div className="main-right">
                    <SampleCard
                        icon='viewlist'
                        title={'推荐'}
                        loading={hotArticles.length == 0}
                    >
                        <ul className="article-list">
                            {
                                hotArticles.map((item) =>
                                    <li key={item.id}>
                                        <span><Link to={`/article/${item.id}`}>{item.title}</Link></span>
                                        <span>阅读:{item.view_count}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </SampleCard>
                </div>
            </div>

        </Layout>
    )
}