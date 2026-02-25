<template>
  <div class="home-banner">
    <div class="wrapper-box">
      <div class="earth">
        <lottie v-if="earthOptions.animationData" :options="earthOptions" class="in" :height="800" :width="800" />
        <!-- <img v-else class="in2" src="../assets/earth2.png" /> -->
      </div>
      <strong class="t1 reveal-ele">
        <span class="t19">Better and</span>
        <div class="t10">
          <div class="t11">Faster</div>
          <div class="t12">Cheaper</div>
          <div class="t13">Stabler</div>
        </div>
      </strong>

      <a-anchor class="t2-wrap" :affix="false">
        <a-anchor-link class="t2 reveal-ele" href="#spec">
          <span slot="title">{{ $t('为什么选择') }} {{ $appName }}？</span>
        </a-anchor-link>
      </a-anchor>
      <div class="t3 reveal-ele">
        <router-link to="/login" class="t4">{{ $t('立即订阅') }} »</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import axios from 'axios'
import { STATIC_URL } from '@/core/constants'

export default {
  name: 'HomeBanner',
  components: {
    Lottie
  },
  data() {
    return {
      earthOptions: {
        animationData: null
      }
    }
  },
  mounted() {
    window.conso1e.log(5)
    setTimeout(() => {
      axios.get(STATIC_URL + '/turn-earth.json').then((res) => {
        this.earthOptions.animationData = res.data
      })
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
@keyframes spincube {
  from,
  to {
    transform: rotateX(0deg);
  }
  0%,
  25% {
    transform: rotateX(0deg);
  }
  33%,
  58% {
    transform: rotateX(120deg);
  }
  66%,
  92% {
    transform: rotateX(240deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
.home-banner {
  height: 500px;
  overflow: hidden;
  position: relative;
  background-color: #f7f8f9;

  .t19 {
    background: linear-gradient(90.13deg, #000000 0.11%, #{'rgba(var(--primary-color), 1)'} 25.06%, #000 50%, #6492d7 74.8%, #bbdef2 99.76%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }

  .t10 {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 16s;
    transform-style: preserve-3d;
    transform-origin: 40px 40px 0;

    .t11 {
      transform: translateZ(40px);
      -webkit-backface-visibility: hidden;
    }
    .t12 {
      transform: rotateX(120deg) translateZ(40px);
      -webkit-backface-visibility: hidden;
    }
    .t13 {
      transform: rotateX(240deg) translateZ(40px);
      -webkit-backface-visibility: hidden;
    }

    > div {
      position: absolute;
      height: 80px;
      text-align: left;
      width: 100%;
    }
  }

  .t1 {
    font-size: 60px;
    display: block;
    margin-top: 130px;
    margin-bottom: 100px;
    color: #000;
    line-height: 1.2;

    span {
      display: block;
    }
  }
  .t2 {
    color: var(--sub-color);
    font-size: 30px;
    margin-bottom: 20px;
    padding: 0;
  }
  .t2-wrap {
    background-color: transparent;
    ::v-deep {
      .ant-anchor {
        padding-left: 0;
      }
      .ant-anchor-ink {
        display: none;
      }
      .ant-anchor-wrapper {
        background-color: transparent;
      }
    }
  }
  .t3 {
    font-size: 30px;

    .t4 {
      display: inline-block;
      color: #{'rgba(var(--primary-color), 1)'};
      &:hover {
        transform: translateX(4px);
      }
    }
  }
  .earth {
    position: absolute;
    width: 420px;
    height: 420px;
    right: 0;
    top: -90px;
    pointer-events: none;
    .in {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    .in2 {
      width: 432px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@media screen and (max-width: 1100px) {
  .home-banner {
    height: auto;
    padding: 50px 0;
    .t1 {
      font-size: 50px;
      text-align: center;
      margin-top: 30px;
    }
    .t10 > div {
      text-align: center;
    }
    .t2 {
      text-align: center;
    }
    .t3 {
      text-align: center;
    }
    .earth {
      position: relative;
      margin: 0 auto;
      top: 0;
      width: 300px;
      height: 300px;
      transform: scale(0.8);
    }
  }
}
</style>
