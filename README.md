#### Aurora 主题

#### 初始版本日期

> 2022.11.09

#### 版本要求

- node v12.18.3
- cnpm v6.2.0
- @vue/cli v4.5.4

#### 安装依赖

```bash
npm i
```

#### 配置本地调试 API

本地开发时，前端请求的后端 API 地址在 `vue.config.js` 中的 `getEnvConfig()` 函数 `else` 分支里配置：

```js
serverUrl: 'https://api.example.com'
```

#### 启动开发环境

```bash
npm run dev
```

启动后访问：

```text
http://localhost:7800/dev/
```

#### 编译生产环境

```bash
npm run build
```

构建产物输出到 `dist/` 目录，生产环境会生成 Xboard 可使用的主题文件。

#### 套餐 HTML 示例

```html
<div class="t0 color-1">即将售罄</div>
<div class="t0 color-2">即将售罄</div>
<div class="t0 color-3">即将售罄</div>
<div class="t0 color-4">即将售罄</div>
<div class="t0 color-5">即将售罄</div>
<div class="t0 color-6">即将售罄</div>

<div class="t4">
  <span class="tit">
    流量明细
    <span class="tag">轻量</span>
  </span>
  <div class="desc">
    <i class="gou"></i>
    每月 <b class="re bo">250GB</b> 流量
  </div>
</div>
```
