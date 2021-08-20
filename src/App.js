import React, { useState, Suspense, lazy } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import localStorage from "localStorage";
import Loader from "@/pages/Loader/Loader"
import CommonContext from '@/utils/context';
import './App.css';


// 路由懒加载写法
// const Home = lazy(() => import("./pages/Home/Home"));

function App() {
    const initUser = localStorage.getItem('capturexUser') 
                        ? JSON.parse(localStorage.getItem('capturexUser'))
                        : {};
    const [user, setUser] = useState(initUser);
    let ctxValue = {
        user,
        setUser(user) {
            setUser(user)
        }
    }

    return (
        <CommonContext.Provider value={ctxValue}>
            <Router>
                <Suspense fallback={<Loader></Loader>}>
                    <Switch>
                        <Route path="/" exact
                            component={lazy(() => import("./pages/Home/Home"))} />
                        <Route path="/about" exact
                            component={lazy(() => import("./pages/About"))} />
                        <Route path="/login" exact
                            component={lazy(() => import("./pages/Login"))} />
                        <Route path="/article/:id" exact
                            component={lazy(() => import("./pages/Article/Article"))} />
                        <Route path="/new-article" exact
                            component={lazy(() => import("./pages/NewArticle/NewArticle"))} />
                        <Route path="/edit-article/:id" exact
                            component={lazy(() => import("./pages/NewArticle/NewArticle"))} />
                        <Route path="/search/:searchText" exact
                            component={lazy(() => import("./pages/Home/Home"))} />
                        <Route path="/categorie/:categorie" exact
                            component={lazy(() => import("./pages/Home/Home"))} />
                        <Route path="/loader" exact
                            component={lazy(() => import("./pages/Loader/Loader"))} />
                        <Route component={lazy(() => import("./pages/404/404"))} />
                    </Switch>
                </Suspense>
            </Router >
        </CommonContext.Provider>
    );
}

export default App;
