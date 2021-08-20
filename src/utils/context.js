import React from 'react';

//只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试
const commonContext = React.createContext({
    user: '',
    setUser: (user) => {
      //我只是初始化
      //我不定义具体实现
    }
})
export default commonContext;