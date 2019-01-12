## 说明

-------------------

###目录说明:
- config   配置目录
- public   公共资源文件目录
- scripts  框架自带js文件
- server   服务端文件
- src      客户端文件
    - component 组件文件
    - container 页面文件
    - redux 常量与redux文件
    - APP.js index.jx 入口文件
    - reducer.js 包含所有的reducer文件
    - store.js  包含store文件，扩展其它插件
-------------------

### 演示图片

![演示图片](https://github.com/kavience/react-zhaopin/blob/master/public/static/show.gif?raw=true)

> 我是拿某款录屏gif软件录的，导致点击发送消息的时候，发送了两次，实际上只有一次，原因应该是服务端触发了两次广播，懒得改了。。。将就看吧！
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
