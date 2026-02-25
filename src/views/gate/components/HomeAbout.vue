<template>
  <div class="home-about">
    <div class="wrapper-box">
      <h2 class="qa-title reveal-ele">{{ $t('关于') }} {{ $appName }}</h2>
      <p class="qa-about reveal-ele">
        {{ $t('总部位于美国，经过专业训练的计算机科学家和网络工程师组成的团队。') }}
        <br />
        {{ $t('我们致力于让您的互联网更快，更安全。') }}
        <br />
        <br />
        {{ $t('我们努力改善您的互联网体验，让您自由重来：免受审查，监控和电讯商限速。') }}
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
