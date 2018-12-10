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

