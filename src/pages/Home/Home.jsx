import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import Layout from '@@/Layout/Layout';
import Card from '@@/Card/Card';
import SampleCard from '@@/Card/SampleCard';
import ajax, { api } from '@/utils/Ajax.js';
import CommonContext from '@/utils/context';
import './Home.css'

export default (props) => {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [hotArticles, sethotArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const ctx = useContext(CommonContext);

    useEffect(() => {
        setLoading(true)

        const { searchText, categorie } = props.match.params
        let params = {
            "orderBy": ["publish_date", "desc"],
            "skip": 0
        }
        if (searchText !== undefined) {
            // search页面处理
            params["searchText"] = searchText;
        }
        if (categorie !== undefined) {
            // 分类页面处理
            params["categorie"] = categorie;
        }

        ajax.post(api.getArticles, { params }).then(res => {
            console.log(res)
            setArticles(res.data.res)
            setLoading(false)
        });
        params = {
            "select": true,
            "orderBy": ["like_count", "desc"],
            "take": 5
        }
        ajax.post(api.getHotArticles, { params }).then(res => {
            // console.log(res)
            sethotArticles(res.data.res)
        });

        params = {
            orderBy: ["sort", "asc"]
        }
        ajax.post(api.getCategories, { params }).then(res => {
            // console.log(res)
            if (res.data.res.length > 0) {
                setCategories(res.data.res)
            }
        })
    }, [props.location, props.match.params])

    const handleAction = async (type, { id }) => {
        // console.log(props)
        // console.log(type)
        if (type === 'edit') {
            props.history.push(`/edit-article/${id}`)
        } else if (type === 'message') {
            props.history.push(`/article/${id}#comments`)
        }

    }
    return (
        <Layout loading={loading}>
            <div className="main wrap">
                <div className="main-left">
                    <ul className="main-list">
                        {
                            articles.map((article, i) =>
                                <li key={article.id}>
                                    <Card
                                        title={
                                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                                        }

                                        id={article.id}
                                        updateAt={new Date(article.publish_date).format('yyyy-MM-dd')}
                                        showAction={ctx.user.name}
                                        browseCount={article.view_count || 0}
                                        likeCount={article.like_count || 0}
                                        messageCount={article.comment_count}
                                        action={handleAction}
                                    >
                                        <p>
                                            {article.content}
                                        </p>
                                    </Card>
                                </li>
                            )}
                    </ul>

                </div>
                <div className="main-right">
                    <SampleCard
                        icon='all'
                        title={'分类'}
                        loading={categories.length === 0}
                    >
                        <ul className="categorie-list">
                            {
                                categories.map((item, i) =>
                                    <li key={i.toString()}>
                                        <span><Link to={`/categorie/${item.name}`}>{item.name}</Link></span>
                                        <span>文章:{item.article_count}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </SampleCard>
                    <SampleCard
                        icon='hot'
                        title={'热门'}
                        loading={hotArticles.length === 0}
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

                    <SampleCard>
                        <div className='beian'>
                            版本：1.0.0
                            <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" rel="noreferrer" target="_blank">辽ICP备2020012563号-1</a>
                        </div>

                    </SampleCard>
                </div>
            </div>



        </Layout>
    )
}
