'use strict'
const path = require('path')
const dayjs = require('dayjs')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

function isProd() {
  return process.env.NODE_ENV === 'production'
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

function getEnvConfig() {
  if (isProd()) {
    return `
      <script>
      window.EnvConfig = {
        serverUrl: '{{ $theme_config['server_url'] }}',
        landPage: '{{ $theme_config['land_page'] }}',
        showRegInvite: '{{ $theme_config['show_reg_invite'] }}',
        appTheme: '{{ $theme_config['app_theme'] }}',
        appColor: '{{ $theme_config['app_color'] }}',
        appName: '{{ $title }}',
        appDesc: \`{{ $description }}\`,
        appLogo: '{{ $logo }}',
        appVersion: '{{ $version }}',
        clientIOS: '{{ $theme_config['client_ios'] }}',
        clientAndroid: '{{ $theme_config['client_android'] }}',
        clientWindows: '{{ $theme_config['client_windows'] }}',
        clientMacOS: '{{ $theme_config['client_macos'] }}',
        clientOpenwrt: '{{ $theme_config['client_openwrt'] }}',
        clientLinux: '{{ $theme_config['client_linux'] }}',
        staticUrl: '/theme/{{ $theme }}/static'
      }
      </script>
    `
  } else {
    return `
      <script>
        window.EnvConfig = {
          serverUrl: 'https://api.example.com',
          landPage: 'index',
          showRegInvite: 'hide',
          appTheme: 'auto',
          appColor: 'default',
          appName: 'Aurora',
          appDesc: \`稳定、高速、私密的IPLC专线加速器,\n优质的服务获得众多外贸公司、科研人员、科技博主一致好坪\`,
          appLogo: '',
          appVersion: 'v1.5.6.1673150015337',
          clientIOS: 'http://xxx.com/download.php?type=ios',
          clientAndroid: 'http://xxx.com/download.php?type=android',
          clientWindows: 'http://xxx.com/download.php?type=windows',
          clientMacOS: 'http://xxx.com/download.php?type=macos',
          clientOpenwrt: 'http://xxx.com/download.php?type=openwrt',
          clientLinux: 'http://xxx.com/download.php?type=linux',
          staticUrl: '/dev/static'
        }
      </script>
    `
  }
}

function getCustomHtml() {
  return isProd()
    ? `{!! $theme_config['custom_html'] !!}`
    : `
  
<script>
CRISP_RUNTIME_CONFIG = {
  locale : getLocaleLang()
};
window.$crisp=[];window.CRISP_WEBSITE_ID="1b365c58-977c-45e9-830a-4570d306b697";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
</script>
  `
}

function getFavicon(VUE_APP_PUBLIC_PATH) {
  return isProd()
    ? `
    @empty($logo)
    <link rel="icon" href="${VUE_APP_PUBLIC_PATH}/favicon.svg" />
    @endempty
    <link rel="icon" href="{{ $logo }}" />
  `
    : `<link rel="icon" href="${VUE_APP_PUBLIC_PATH}/favicon.svg" />`
}

function getCustomJS(VUE_APP_PUBLIC_PATH, VUE_APP_TIME) {
  return isProd()
    ? `
  @if (file_exists(public_path("/theme/{$theme}/static/custom.js")))
    <script src="${VUE_APP_PUBLIC_PATH}/static/custom.js?v=${VUE_APP_TIME}"></script>
  @endif
  `
    : ''
}

function getCustomCSS(VUE_APP_PUBLIC_PATH, VUE_APP_TIME) {
  return isProd()
    ? `
  @if (file_exists(public_path("/theme/{$theme}/static/custom.css")))
    <link rel="stylesheet" href="${VUE_APP_PUBLIC_PATH}/static/custom.css?v=${VUE_APP_TIME}" />
  @endif
  `
    : ''
}

function getCustomLoading() {
  const defaultLoading = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="hourglassx" x="0px" y="0px" viewBox="0 0 203 203" enable-background="new 0 0 203 203" xml:space="preserve">
      <g>
        <path
          class="hourglass"
          fill="none"
          stroke="#C0E5FA"
          stroke-width="5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M137.5,169.5h-72
		c0-72,63-73,63-126h-54C74.5,96.5,137.5,97.5,137.5,169.5z"
        />
        <path
          class="hourglass"
          fill="none"
          stroke="#74C2EE"
          stroke-width="5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M65.5,34.5h72
		c0,71-63,71-63,126h54C128.5,105.5,65.5,105.5,65.5,34.5z"
        />
      </g>
    </svg>
  `
  return isProd()
    ? `
    @empty($theme_config['loading_text'])
    ${defaultLoading}
    @endempty
    <div class="loading-user">{!! $theme_config['loading_text'] !!}</div>
  `
    : `<div class="loading-user">欢迎！主题购买请联系 <a href="https://t.me/kunpehx">@kunpehx</a></div>`
}

process.env.VUE_APP_PUBLIC_PATH = isProd() ? '/theme/{{$theme}}' : '/dev'
process.env.VUE_APP_TIME = dayjs().format('YYYYMMDDHHmmss')
process.env.VUE_APP_ENV = getEnvConfig()
process.env.VUE_APP_HTML = getCustomHtml()
process.env.VUE_APP_JS = getCustomJS(process.env.VUE_APP_PUBLIC_PATH, process.env.VUE_APP_TIME)
process.env.VUE_APP_CSS = getCustomCSS(process.env.VUE_APP_PUBLIC_PATH, process.env.VUE_APP_TIME)
process.env.VUE_APP_TITLE = isProd() ? '{{$title}}' : 'NetGoing'
process.env.VUE_APP_LOADING = getCustomLoading()
process.env.VUE_APP_FAVICON = getFavicon(process.env.VUE_APP_PUBLIC_PATH)

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    compress: false,
    progress: false,
    port: 7800,
    open: false,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new AntdDayjsWebpackPlugin({
        preset: 'antdv3'
      })
    ]
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    if (isProd()) {
      config.plugin('html').tap((args) => {
        args[0].minify = false
        args[0].filename = 'dashboard.blade.php'
        return args
      })
    }

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config.plugin('copy').tap((args) => {
      args[0][0].ignore = ['index.html']
      return args
    })

    config
      .plugin('ScriptExtHtmlWebpackPlugin')
      .after('html')
      .use('script-ext-html-webpack-plugin', [
        {
          inline: /runtime\..*\.js$/
        }
      ])
      .end()

    config.devtool('cheap-source-map')

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'n',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    })
    config.optimization.runtimeChunk('single')
  }
}
