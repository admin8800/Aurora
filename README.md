#### Aurora 主题

> Aurora 作者，主题购买请联系 [@kunpehx](https://t.me/kunpehx)

#### 初始版本日期

> 2022.11.09

#### 版本要求（已使用最新版 Nodejs 本地调试/构建没问题）

- node v12.18.3
- cnpm v6.2.0
- @vue/cli v4.5.4

#### 安装依赖

```bash
$ npm i
```

#### 配置本地调试 API

本地开发时，前端请求的后端 API 地址在 `vue.config.js` 中的 `getEnvConfig()` 函数 `else` 分支里配置：

```js
// vue.config.js 约第 42 行
serverUrl: 'https://api.example.com',  // 改成你自己的 V2Board 后端地址
```

#### 启动项目开发环境

```bash
$ npm run dev
```

启动后访问 `http://localhost:7800/dev/`

#### 编译项目到生产环境

```bash
$ npm run build
```

> build 完成后会自动执行 `converter.js` 进行代码混淆，产物输出到 `dist/` 目录。

#### 套餐 html

```html
<!-- 大标签html -->
<!-- color预置了6种颜色，color-1到color-6-->

<!-- #3e92f6 -->
<div class="t0 color-1">即将售罄</div>

<!-- #faad14 -->
<div class="t0 color-2">即将售罄</div>

<!-- #eb2f96 -->
<div class="t0 color-3">即将售罄</div>

<!-- #04b5c7 -->
<div class="t0 color-4">即将售罄</div>

<!-- #384142 -->
<div class="t0 color-5">即将售罄</div>

<!-- #368914 -->
<div class="t0 color-6">即将售罄</div>

<!-- 自定义颜色 -->
<div class="t0" style="background: #000; color: #fff;">即将售罄</div>

<!-- 文本介绍html -->
<div class="t4">
  <span class="tit">
    流量明细
    <!-- tag表示小标签 -->
    <span class="tag">轻量</span>
  </span>

  <div class="desc">
    <i class="gou"></i>
    每月
    <!-- re 表示标红, bo 表示加粗字体 -->
    <b class="re bo">250GB</b>
    流量
  </div>
</div>
<div class="t4">
  <span class="tit">重置期限</span>
  <div class="desc">
    <i class="gou"></i>
    每月购买日免费重置流量手动重置流量
    <span class="re">35CNY</span>
    /次
  </div>
</div>
<div class="t4">
  <span class="tit">线路优势</span>
  <div class="desc">
    <!-- cha 表示套餐不包含的内容 -->
    <i class="cha"></i>
    多地BGP跨境专线出国
  </div>
</div>
<div class="t4">
  <span class="tit">流媒体支持</span>
  <div class="desc">
    <!-- gou 表示套餐包含的内容 -->
    <i class="gou"></i>
    Netfilx/Hulu/Hbo/Disney+/Dazn等流媒体
  </div>
</div>
<div class="t4">
  <span class="tit">套餐优势</span>
  <div class="desc">
    <i class="gou"></i>
    全球
    <span class="re">90+</span>
    国家/地区，
    <span class="re">200+</span>
    节点
  </div>
</div>
<div class="t4">
  <span class="tit">设备支持</span>
  <div class="desc">
    <i class="gou"></i>
    SS-Obfs协议，支持
    <span class="re">10</span>
    台设备同时使用
  </div>
</div>
<div class="t4">
  <span class="tit">其他说明</span>
  <div class="desc">
    <i class="gou"></i>
    <b class="re bo">无退款服务</b>
    ，介意勿买
  </div>
</div>
```
