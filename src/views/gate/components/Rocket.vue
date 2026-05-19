<template>
  <div class="rocket-container left-img">
    <div class="warp">
      <div ref="refAnimation" class="img" @click="$router.push('/')">
        <lottie v-if="rocketOptions.animationData" :options="rocketOptions" class="in" :height="640" :width="640" @animCreated="handleAnimation" />
      </div>
      <div class="txt">
        <h2 class="tit">{{ descTitles[0] || '' }}</h2>
        <p class="desc">{{ descTitles[1] || '' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import axios from 'axios'
import { STATIC_URL } from '@/core/constants'
import { bindAnimationVisibility, onVisible, prefersReducedMotion } from '@/core/utils/motion'

export default {
  name: 'Rocket',
  components: {
    Lottie
  },
  data() {
    return {
      anim: {},
      rocketOptions: {
        animationData: null,
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      },
      destroyVisibleObserver: null,
      destroyAnimationObserver: null
    }
  },
  computed: {
    descTitles() {
      return this.$appDesc.split('\n')
    }
  },
  mounted() {
    this.destroyVisibleObserver = onVisible(this.$refs.refAnimation, () => {
      axios.get(STATIC_URL + '/83245-rocket-launch.json').then((res) => {
        this.rocketOptions.animationData = res.data
      })
    })
  },
  beforeDestroy() {
    this.destroyVisibleObserver && this.destroyVisibleObserver()
    this.destroyAnimationObserver && this.destroyAnimationObserver()
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
      if (prefersReducedMotion()) {
        this.anim.goToAndStop(0, true)
        return
      }
      this.anim.setSpeed(0.6)
      this.destroyAnimationObserver = bindAnimationVisibility(this.$refs.refAnimation, this.anim)
    }
  }
}
</script>
