# generator-vue
> 基于yo的vue脚手架

## Usage

### 1. 安装脚手架工具
```
npm install -g yo
```

### 2. 安装生成器
```
npm install generator-redx-vue
```

### 3、link全局
```
npm link
```

### 4. 目录结构
```
generators/
├── app         创建新app用（后期实现）
├── component   添加component用
├── module      添加module用
├── src         添加src文件用（后期实现）
└── view        添加view用
```

### 5. 创建文件
在项目根目录下执行：
```
yo redx-vue             创建新项目
yo redx-vue:src         新增src目录文件
yo redx-vue:component   创建conponent文件,
yo redx-vue:module      创建module文件
yo redx-vue:view        创建view文件
```

- component会新增在`src\components\`
- module会新增在`src\store\modules\`
- view会新增在`src\views`，同时view的样式文件存放在`src\themes\default\view\`


## Link 

 - [Yeoman](http://yeoman.io/).

## License

MIT © [redx](https://github.com/redgang)

