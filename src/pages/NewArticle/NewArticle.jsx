import React, { useState, useEffect, useMemo, useContext } from 'react';
import Layout from '@@/Layout/Layout';
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import TagInput from '@@/TagInput/TagInput'
import ajax, { api } from '@/utils/Ajax.js';
// https://github.com/RIP21/react-simplemde-editor
import SimpleMDE from "react-simplemde-editor";
import localStorage from "localStorage";
import message from '@@/Message/Message'
import modal from '@@/Modal/Modal'
import CommonContext from '@/utils/context';
import "easymde/dist/easymde.min.css";
import './NewArticle.css'

export default props => {
    const { id } = props.match.params
    const [title, setTitle] = useState(id === undefined ? (localStorage.getItem("article-title") || '') : '');
    const [categories, setCategories] = useState(id === undefined ? (localStorage.getItem("article-categorie") || '') : '');
    const [content, setContent] = useState(id === undefined ? (localStorage.getItem("article-content") || '') : '');
    const [tagList, setTagList] = useState([]);
    const ctx = useContext(CommonContext);

    // 未保存的文章临时保存
    useEffect(() => {
        if (id === undefined) {
            localStorage.setItem("article-title", title)
            localStorage.setItem("article-categorie", categories)
            localStorage.setItem("article-content", content)
        }
    }, [title, categories, content])

    useEffect(() => {

        let params = {
            orderBy: ["article_count", "desc"]
        }
        ajax.post(api.getCategories, { params }).then(res => {
            if (res.data.res.length > 0) {
                setTagList(res.data.res.map(categorie => categorie.name))
            }
        })


        if (id !== undefined) {
            params = { "id": id }
            ajax.post(api.getArticle, { params }).then(res => {
                // console.log(res)
                setTitle(res.data.res.title)
                setCategories(res.data.res.categories)
                setContent(res.data.res.content)

            });
        }


    }, [props.location])

    const handleDelete = () => {
        modal.warning('确定清除吗？', del)
    }

    const del = () => {
        setTitle('');
        setContent('');
        setCategories('');
        // props.goBack();
    }


    const handleSave = async () => {

        let params = {
            title,
            categories,
            content,
            "user_id": ctx.user.id,
            "article_status": 1,  //文章是否公开 1：公开
            "comment_status": 1,  //是否允许评论 1：允许
            // "publish_date":new Date(),
            // "last_modify_date":new Date()
        }

        const { id } = props.match.params;
        if (id) {
            params['id'] = id;
        }

        if (title === '') {
            message.error('需要输入文章标题')
            return
        }
        if (categories === '') {
            message.warning('请选择类型')
            return
        }
        if (content === '') {
            message.error('内容不能为空白')
            return
        }
        let res = await ajax.post(api.setArticle, { params })
        // console.log(res, res.data);
        if (id === undefined) {
            localStorage.setItem("article-title", '')
            localStorage.setItem("article-categorie", '')
            localStorage.setItem("article-content", '')
        }
        message.info(id === undefined ? '文章发布成功！' : '文章修改成功！')
    }


    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        };
    }, []);

    return (
        <Layout>

            <div className="main wrap">
                <div className="main-left">
                    <div className="atricle-title">
                        <Input type="input-normal" placeholder="题目" onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="atricle-type">
                        {/* <TagSelect></TagSelect> */}
                        <TagInput
                            tags={tagList}
                            onChange={tags => setCategories(tags.join(','))}
                            value={categories}
                        />
                    </div>
                    {/* <Input type="input-normal" placeholder="类型（选填）" onChange={e => setCategories(e.target.value)} value={categories} showSelect="true" /> */}
                    <div className="content">
                        <div className="atricle-content">
                            <SimpleMDE
                                options={autofocusNoSpellcheckerOptions}
                                value={content}
                                onChange={v => setContent(v)}
                            />
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <div>
                            <Button type="primary small" onClick={handleSave}>保存</Button>
                            <Button type="dash small" onClick={handleDelete}>清空</Button>
                            <Button type="normal small" onClick={() => props.history.goBack()}>返回</Button>

                        </div>
                    </div>
                </div>

            </div>
        </Layout >
    )
}