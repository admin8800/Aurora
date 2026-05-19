#### Aurora 主题

> 初始版本日期`2022.11.09`

- node版本：18-24

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

生产环境会自动生成 Xboard 的主题文件到`tempzip`目录。

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
