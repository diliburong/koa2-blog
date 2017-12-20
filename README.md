[![Build Status](https://travis-ci.org/diliburong/koa2-blog.svg?branch=master)](https://travis-ci.org/diliburong/koa2-blog)
# koa2-blog




### 一些记录点

#### post请求如何获取crsf？
* 安装cheerio `npm install cheerio` 
> Fast, flexible & lean implementation of core jQuery designed specifically for the server.

## 获取crsf 
```js
// method one

var $html = cheerio(res.text);  一个节点对象
var csrf = $html.find('input[name=_csrf]').val();

// method two

let $ = cheerio.load(res.text);
var csrf = $('input[name=_csrf]').val()

```

## 设置获取系统变量

### 分别设置
```
"dev-mac": " export NODE_ENV=development&&node bin/www" 
"dev-win": " set NODE_ENV=development&&node bin/www”
``` 
### 或者使用cross-env解决跨平台设置NODE_ENV的问题

install
[cross-env](https://www.npmjs.com/package/cross-env)

```
npm install --save-dev cross-env
```

用法
```
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```