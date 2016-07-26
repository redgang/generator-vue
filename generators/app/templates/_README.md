# suneee-vue
> 基于vue、vue-router、vuex移动端SPA解决方案

## Technologies

- Vue
- Vuex
- Vue-Router
- PostCSS
- webpack
- koa
- ES6
- whatwg-fetch

## Quick Start

```bash
$ git clone git@172.19.6.123:products/suneee-vue.git
$ cd suneee-vue
$ npm install
$ npm start
# open http://localhost:3200
```

## Docs
```
# open http://localhost:3200/#!/docs
```

## Demo
```
# open http://localhost:3200/#!/demo
```

## Usage

|Command|Description|
|---|---|
|npm install|Install dependencies|
|npm run dev|Run webpack and restart server with hot-reload enabled|
|npm start|Run webpack and server with hot-reload enabled|
|npm run deploy|Build assets for development use, dumped in `./dist`|
|npm run deploy:prod|Build assets for production use, dumped in `./dist`|
|npm run deploy:start|Run static server to check `dist` files|

## Regulation

- 使用 ES6 编写
- 数据使用vuex管理
- 使用 .vue 单文件组件，组件中不建议直接写css
- 组件commponents以c-开头，view公共组件以v-开头
- 逻辑尽量写在 script 里，保持 template 逻辑简单
- i18n, validator，request 可以正常使用，components中的组件还不稳定，随时会改
- 不限制使用何种 UI 组件，可以使用第三方，或自己开发（请尽量考虑复用性）
- 尽量使用小的依赖库
- 整体尽量向 [vue2.0](https://github.com/vuejs/vue/issues/2873) 靠近
- v-for 目前vue1.0版本统一使用，禁止使用$index and $key
```vue1.0
<div v-for="(index, item) in items"></div>
<div v-for="(key, val) in object"></div>
```
- 禁止使用partials、elementDirective、$dispatch、$broadcast等
- v-model 中的debounce尽量少用

## Directories
```
suneee-vue
├── bin
├── build
├── config
├── server
│   ├── lib
│   └── middleware
└── src
    ├── components                      #ui组件库（目前自建）
    ├── plugins                         #插件库
    │   ├── i18n
    │   └── validator
    ├── routes                          ＃路由
    ├── static                          ＃静态文件
    │   ├── assets                      ＃其他资源文件
    │   ├── docs
    │   ├── i18n                        ＃国际化文件
    │   └── images
    ├── themes                          ＃主题
    │   └── default
    │       ├── components              ＃ui组件库样式
    │       ├── fonts                   
    │       ├── images
    │       ├── mixins                  ＃postcss特性
    │       ├── variables               ＃postcss特性
    │       └── views                   ＃业务组件样式
    ├── utils                           ＃公共库（request）
    ├── views                           ＃业务组件
    │   ├── common                      ＃业务公共组件
    │   ├── demo                        ＃示例
    │   └── docs                        ＃文档
    └── store                              ＃vuex数据管理
        ├── plugins
        └── modules
```

## Additional

### Vue 
> [vue-en](http://vuejs.org/) [vue-zh](http://cn.vuejs.org/)

- 基本语法
- 生命周期
- 声明、使用插件，指令、mixin、组件、过滤器等创建、使用
- v-if，v-bind，v-on,  v-model，v-cloak等指令
- 运算computed，监听watch，事件注册method，props属性，延时处理函数nextTick等
- 片段component，slot，动态组件
- 全局、实例的属性及方法

### Vuex 
> [vuex-en](http://vuex.vuejs.org/en/index.html) [vuex-zh](http://vuex.vuejs.org/zh-cn/index.html) 

- vuex简介
- state与getters使用
- Mutations使用
- Actions的使用
- 数据流
    - 用户在组件中的输入操作触发 action 调用；
    - Actions 通过分发 mutations 来修改 store 实例的状态；
    - Store 实例的状态变化反过来又通过 getters 被组件获知。
- 中间件
- [数据流](http://vuex.vuejs.org/zh-cn/data-flow.html) ![数据流](http://vuex.vuejs.org/zh-cn/vuex.png =100x) 


### vue-router 
> [route-en](http://router.vuejs.org/en/index.html) [route-zh](http://router.vuejs.org/zh-cn/index.html)

- 路由注册、使用
- 嵌套路由subRoutes
- 路由对象$route
- 具名路径
- 路由外链router-view
- 指令v-link
- 动态路由
    ```结合webpack动态路由
    router.map({
    '/async': {
        component: function (resolve) {
        require(['./MyComponent.vue'], resolve)
        }
    }
    })
    ```
- 路由实例属性和方法



## Link

- [vue](https://github.com/vuejs/vue) 
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [vue-resource](https://github.com/vuejs/vue-resource)
- [vue-cli](https://github.com/vuejs/vue-cli)
- [vue-devtools](https://github.com/vuejs/vue-devtools)
- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [hen-mui](http://mint-ui.github.io/#!/zh-cn)

## License

MIT &copy; [Redx](https://github.com/redgang)
