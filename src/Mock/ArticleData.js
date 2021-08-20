export default {
    title:'React脚手架配置',
    type:[
        '前端','react'
    ],
    createAt:new Date( +new Date() + 8 * 3600 * 1000 ).toJSON().substr(0,19).replace("T"," "),
    comments:[
        {
            user: '游客',
            comment:'支持点赞，非常感谢！',
            createAt:new Date( +new Date() + 8 * 3600 * 1000 ).toJSON().substr(0,10),
        },
        {
            user: '游客',
            comment:'支持点赞，非常感谢！',
            createAt:new Date( +new Date() + 8 * 3600 * 1000 ).toJSON().substr(0,10),
        },
        {
            user: '游客',
            comment:'支持点赞，非常感谢！',
            createAt:new Date( +new Date() + 8 * 3600 * 1000 ).toJSON().substr(0,10),
        },
        {
            user: '游客',
            comment:'支持点赞，非常感谢！',
            createAt:new Date( +new Date() + 8 * 3600 * 1000 ).toJSON().substr(0,10),
        },
    ],
    content:`## create-react-app

### 安装

~~~bash
    npm install -g create-react-app
~~~

### 创建react项目

~~~bash
    create-react-app myapp
~~~

> 项目依赖：react,react-dom,react-scripts
> 通常情况下，我们创建spa应用时是使用npm安装项目依赖，在通过配置webpack.config.js进行配置，搭建好环境后在src编写源代码。而create-react-app是自动构建，在package.json中只有react-scripts作为依赖

### 查看react版本

~~~javascript
 npm info react 
~~~

### 目录初结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200918193656636.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210517232632951.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY4MTI5NQ==,size_16,color_FFFFFF,t_70)



~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口 ，用于做移动端网页的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏的颜色(仅支持安卓手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <!-- 描述网站信息 -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 书签信息 ，用于指定网页添加到手机主屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- 应用加壳的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持js则展示标签中的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- 容器 -->
    <div id="root"></div>
  </body>
</html>
~~~

**reportWebVitals.js文件 用于记录页面性能，需要web-vitals库的支持**
**setupTests.js 应用的整体测试，组件的测试，需要web-vitals库的支持**

### 启动项目

- 启动项目

~~~bash
    npm start
~~~

### 配置默认端口

**注意：默认端口是3000**

~~~javascript
打开react项目的 package.json文件

将 scripts中的start键值对

  "start": "react-scripts start"

  修改为

"scripts": {
  "start": "set PORT=8082 && react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
~~~

### 配置装饰器

- ~npm run eject~ （不建议这种操作，因为会删除里面的配置，把webpack暴露出来）

  > 单向操作不可逆，npm run eject命令暴露项目的配置，这样用户就可以完全取得 webpack 文件的控制权

- ~react-app-rewired~ （推荐这种操作）

  > 通过创建一个 ~config-overrides.js~ 文件来对 webpack 配置进行扩展。

  1. 配置~config-overrides.js~

  ~~~js
      const { injectBabelPlugin } = require('react-app-rewired');
      module.exports = function override(config, env) {
          // 修改配置
          config.resolve.alias['@'] = path.join(__dirname,'./src/')
  
          config = injectBabelPlugin([
              "@babel/plugin-proposal-decorators", { "legacy": true }
          ], config);
          
          return config;
      }
  ~~~

  1. 修改~package.json~中的npm script

  ~~~json
     // - 代表删除 /  + 代表添加
    "scripts": {
          -   "start": "react-scripts start",
          +   "start": "react-app-rewired start",
          -   "build": "react-scripts build",
          +   "build": "react-app-rewired build",
          -   "test": "react-scripts test --env=jsdom",
          +   "test": "react-app-rewired test --env=jsdom",
              "eject": "react-scripts eject"
      }
  ~~~

  > PS: react-app-rewired 2.x 已经把所有配置方法移置到了~customize-cra~模块

  ~~~js
  const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports} = require('customize-cra');
  module.exports = override(
       addDecoratorsLegacy(), // 装饰器支持
       fixBabelImports('import',{ libraryName: "antd", style: "css" })
   )
  ~~~

  [customize-cra模块的GitHub网址](https://github.com/arackaf/customize-cra/blob/HEAD/api.md#addwebpackaliasalias)

**总结react脚手架使用装饰器步骤：**

1、安装 ~npm i @babel/plugin-proposal-decorators~
2、安装~npm i react-app-rewired -D~
3、安装 ~npm i customize-cra -D~
4、新建js文件 ~config-overrides.js~
5、把下面代码放到新建js文件中（只在文件中配置如下操作即可）

~~~javascript
  const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports} = require('customize-cra');
  module.exports = override(
       addDecoratorsLegacy(), // 装饰器支持
       fixBabelImports('import',{ libraryName: "antd", style: "css" })
  )
~~~

### 配置路径别名

~~~javascript
  // 添加路径别名
  // 注意：join和resolve的区别：
  // 1、join是把路径拼接
  // 2、resolve是 统一，转换平台 比如window和Linux系统服务器的路径不同问题
  addWebpackAlias({
    "@": path.join(__dirname, 'src'),
    "@com": path.join(__dirname, 'src/components'),
    "@pages": path.join(__dirname, 'src/pages')
   }),
~~~

### UI框架的按需加载

~~~javascript
  // ui框架按需加载
  fixBabelImports('import', {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css" // style: true  会加载 less 文件
  }),
  // 如果有多个UI框架 注意在后面加一个唯一值标识, 比如下面的写法
  // fixBabelImports('import', {
  //   "libraryName": "antd",
  //   "libraryDirectory": "es",
  //   "style": "css" // style: true  会加载 less 文件
  // }, 'antd'),

~~~

### 禁用eslint

~~~javascript
  // 禁用eslint
  disableEsLint()
~~~

### 使用.bablelrc 配置

**注意：需要新建一个.bablelrc 文件**

~~~javascript
 // 使用.bablelrc 配置
 useBabelRc(),
~~~

## 项目优化

### 优化类型

- 性能优化
  - 合并压缩
  - 服务器压缩
  - 按需加载
    - UI框架按需加载
    - 路由懒加载
  - 图片优化
    - base64编码
  - 事件委托
  - 虚拟DOM
  - …
- 用户体验优化
- 搜索引擎优化

**React项目优化：**
React项目常出现的问题是打包体积过大，导致线上访问页面过慢，可以通过以下方式进行优化

### 路由懒加载

> react脚手架默认支持路由懒加载

- 传统写法

~~~jsx
    import React from "react";
    import {Switch,Route} from 'react-router-dom';
    import Home from './pages/Home';
    import Mine from './pages/Profile';
    import Login from './pages/Login';
    <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
    </Switch>
~~~

- 路由懒加载写法：

  > 通过 ~React.lazy()~ 与 ~import()~ 实现组件的懒加载（需要安装~@babel/plugin-syntax-dynamic-import~进行支持）

  ~~~jsx
      import React, {Suspense, lazy } from "react";
      import {Switch,Route} from 'react-router-dom';
      const Home = lazy(() => import("./pages/Home"));
      const Mine = lazy(() => import("./pages/Profile"));
      const Login = lazy(() => import("./pages/Login"));
      <Suspense fallback={<div>loading...</div>}>
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>
          </Switch>
      </Suspense>
  ~~~

  > 注意：路由懒加载在打包编译后与传统的方式有很大区别

### UI框架按需加载

- 传统引入方式

  ~~~js
      import { Row,Col,Menu,Upload } from 'antd';
      import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
  ~~~

  这种方式会导致把整个antd的js和css全部引入项目，但你的页面中也许只需要antd中的某一个小功能的代码，这样会造成打包文件过大的问题，所以需要使用按需加载的方式

- 按需加载引入

  - 手动按需引入

    > 缺点：引入繁琐，代码量过大，不容易维护

    ~~~js
        import DatePicker from 'antd/es/date-picker'; // 加载 JS
        import 'antd/es/date-picker/style/css'; // 加载 CSS
        // import 'antd/es/date-picker/style';         // 加载 LESS
    ~~~

  - 使用 ~babel-plugin-import~（推荐）

    > 需要配置babel插件, 可以在~webpack.config.js~ 、~babel.config.js~、~.babelrc~任意一种方式中配置

    ~~~json
     {
       "plugins": [
            ["import", {
             "libraryName": "antd",
             "libraryDirectory": "es",
             "style": "css" // ~style: true~ 会加载 less 文件
           }]
        ]
     }
    ~~~

    配置完后，只需要编写以下代码，babel会自动帮我们引入js和css代码

    ~~~js
        import { DatePicker } from 'antd';
    ~~~

### 服务器压缩

> Gzip 是高效的，压缩后通常能帮我们减少响应 70% 左右的大小，在NodeJS中需要安装第三方中间件~compression~来启动服务器gzip压缩

- Gzip 压缩背后的原理：是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大。反之亦然
- node服务器开启zip

~~~js
    const compression = require('compression');
    app.use(compression());
~~~

- webpack-dev-server开启gzip

~~~js
    devServer: {
        contentBase: path.join(__dirname, "./src"),
        host: "0.0.0.0",
        compress:true
    },
~~~
    `.replace(/~/g,'`')
    
}