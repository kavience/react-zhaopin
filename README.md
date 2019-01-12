## 说明

-------------------

### 项目包说明
#### antd
> 蚂蚁金服的react组件
##### 按需加载流程
- 安装antd

`
npm install antd  --save
`
- 暴露eject

`npm run eject`
- 安装babel-plugin-import

`
npm install babel-plugin-import --save
`
- 修改package.json如下代码

`
"babel": {
    "presets": [
      "react-app"
    ]
  }
`

`
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  }
`

#### react-router-dom
> 管理react路由
##### 在浏览器使用需要引入
`
import {BrowserRouter, Route} from 'react-router-dom'
`

#### node-sass
> 使create-react-app支持sass

`
npm install node-sass --save
`

#### mongoose
> 管理MongoDB

#### react-redux
>管理redux

#### redux-thunk
>thunk中间件

#### utility
>js加密库

#### bodyPaser
> bodyPaser

#### cookiePaser
> cookiePaser

#### brwoser-cookies
> 管理cookie

#### socket.io
> 提供socket服务端

#### socket.io-client
> 提供socket客户端


