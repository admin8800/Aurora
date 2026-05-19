<template>
  <div id="index" class="home-container">
    <home-header></home-header>
    <div id="reveal">
      <home-banner id="banner"></home-banner>
      <home-spec id="spec"></home-spec>
      <home-advance id="advance"></home-advance>
      <home-service id="service"></home-service>
      <home-question id="question"></home-question>
      <a-divider />
      <home-about id="about"></home-about>
      <copyright class="reveal-ele"></copyright>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
import HomeSpec from './components/HomeSpec'
import HomeAdvance from './components/HomeAdvance'
import HomeService from './components/HomeService'
import HomeQuestion from './components/HomeQuestion'
import HomeAbout from './components/HomeAbout'
import Copyright from './components/Copyright'
import ScrollReveal from 'scrollreveal'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeSpec,
    HomeAdvance,
    HomeService,
    HomeQuestion,
    HomeAbout,
    Copyright
  },
  mounted() {
    const sr = ScrollReveal()

    const slideUp = {
      distance: '50%',
      origin: 'bottom',
      opacity: 0,
      interval: 120,
      easing: 'ease',
      duration: 800,
      delay: 0,
      useDelay: 'onload',
      viewFactor: 0
    }

    sr.reveal('#reveal .reveal-ele, #reveal .qa-list .ant-collapse-item', slideUp)
  }
}
</script>

<style lang="scss">
.home-container {
  background-color: #fff;
  padding-top: 60px;

  .wrapper-box {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .text-title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 20px;
  }
  .text-desc {
    font-size: 21px;
    font-weight: 400;
    color: #616577;
    margin-bottom: 80px;
    text-align: center;
    padding: 0 20px;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 1220px) {
  .home-container {
    .wrapper-box {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>
