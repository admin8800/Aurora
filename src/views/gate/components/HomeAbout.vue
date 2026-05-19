<template>
  <div class="home-about">
    <div class="wrapper-box">
      <h2 class="qa-title reveal-ele">{{ $t('关于') }} {{ $appName }}</h2>
      <p class="qa-about reveal-ele">
        {{ $t('我们专注于提供稳定、易用的跨区网络连接服务，帮助用户在多设备上获得更顺畅的访问体验。') }}
        <br />
        {{ $t('服务覆盖日常浏览、远程办公、流媒体、AI 工具和学习研究等场景。') }}
        <br />
        <br />
        {{ $t('我们持续维护节点、协议与订阅兼容性，让连接更简单，也让体验更可靠。') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout'
}
</script>

<style lang="scss" scoped>
.home-about {
  margin-top: 120px;
  .qa-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .qa-about {
    font-size: 16px;
    color: #616577;
    margin-bottom: 100px;
  }
}
</style>
