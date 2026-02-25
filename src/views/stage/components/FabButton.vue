<template>
  <div class="fab-button" :style="{ ...positionStyle, width: buttonSize, height: buttonSize }">
    <slot>
      <a-tooltip placement="left" :title="defaultTooltip">
        <div
          v-wave
          class="button button-default"
          :class="{ 'is-open': showActions, disabled }"
          :style="{ backgroundColor: defaultColor, width: buttonSize, height: buttonSize }"
          @click.stop="onClickDefault"
        >
          <svg-icon class="icon" :name="defaultIcon" />
        </div>
      </a-tooltip>
    </slot>
    <transition-group ref="refList" name="fades" tag="ul" class="fab-childs" :class="['is-' + direction]">
      <a-tooltip v-for="(action, index) in actions" v-show="showActions" :key="action.name" placement="left" :title="action.tooltip">
        <li
          v-wave
          class="button button-item"
          :class="[action.disabled ? 'disabled' : '', action.buttonClass]"
          :style="{
            'animation-delay': delay(index),
            'background-color': action.color || defaultColor,
            width: buttonSize,
            height: buttonSize
          }"
          @click.stop="onClickItem(action)"
        >
          <svg-icon v-if="action.icon" :name="action.icon" class="icon" />
          <span class="name">{{ action.name }}</span>
        </li>
      </a-tooltip>
    </transition-group>
  </div>
</template>

<script>
import { throttle, isNumber } from 'lemutils'

export default {
  name: 'FabButton',
  props: {
    actions: {
      // 操作列表 { name: 名称，icon: 图标, tooltip: 浮动提示, color: 颜色, disabled: 禁用, buttonClass: 按钮class名称 }
      type: Array,
      default: () => []
    },
    size: {
      // 按钮尺寸
      type: [String, Number],
      default: '50px'
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    defaultColor: {
      // 默认按钮颜色
      type: String,
      default: '#3985ff'
    },
    defaultTooltip: {
      // 默认按钮tooltip
      type: String,
      default: ''
    },
    defaultIcon: {
      // 默认按钮图标
      type: String,
      default: 'plus'
    },
    startOpen: {
      // 首次自动展开
      type: Boolean,
      default: false
    },
    positionStyle: {
      // 定位
      type: Object,
      default: () => ({
        right: '2vh',
        bottom: '2vh'
      })
    },
    direction: {
      // actions展开方向  up:上 | down:下 | left:左 | right:右
      type: String,
      default: 'up',
      validator(value) {
        return ['up', 'down', 'left', 'right'].includes(value)
      }
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    delay() {
      return (index) => {
        const step = 0.1
        return this.expanded ? index * step + 's' : (this.actions.length - 1 - index) * step + 's'
      }
    },
    showActions() {
      return this.actions.length > 0 && this.expanded
    },
    buttonSize() {
      return isNumber(this.size) ? this.size + 'px' : this.size
    }
  },
  watch: {
    startOpen: {
      immediate: true,
      handler(value) {
        if (value === true) {
          this.expanded = true
        }
      }
    }
  },
  mounted() {
    document.addEventListener(
      'click',
      () => {
        this.hideChilds()
      },
      false
    )
  },
  methods: {
    onClickDefault(e) {
      if (this.actions.length > 0) {
        throttle(this.toggleChilds)
      } else {
        throttle(this.emitClick, 500, e)
      }
    },
    onClickItem(action) {
      // this.toggleChilds()
      throttle(this.emitClick, 500, action)
    },
    emitClick(e) {
      this.$emit('click', e)
    },
    toggleChilds() {
      this.expanded = !this.expanded
    },
    hideChilds() {
      this.expanded = false
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fly-bird {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  50% {
    opacity: 1;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fab-button {
  position: fixed;

  .fab-childs {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &.is-up {
      left: 0;
      bottom: 100%;
      flex-direction: column-reverse;

      .button-item {
        margin-bottom: 10px;
      }
    }

    &.is-down {
      left: 0;
      top: 100%;
      flex-direction: column;

      .button-item {
        margin-top: 10px;
      }
    }

    &.is-left {
      right: 100%;
      top: 0;
      flex-direction: row-reverse;

      .button-item {
        margin-right: 10px;
      }
    }
    &.is-right {
      left: 100%;
      top: 0;
      flex-direction: row;

      .button-item {
        margin-left: 10px;
      }
    }
  }

  .button {
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3985ff;
    box-shadow: 0 0 12px 0 rgba(rgb(31, 25, 77), 0.4);
    color: #fff;
    cursor: pointer;
    overflow: hidden;

    &.disabled {
      filter: grayscale(1);
      pointer-events: none;
    }
  }

  .button-default {
    font-size: 20px;
    position: absolute;
    transition: transform 0.3s ease;

    &.is-open {
      transform: rotate(45deg);
    }
  }

  .button-item {
    &.fades-enter-active {
      animation: fly-bird 0.4s ease both;
    }
    &.fades-leave-active {
      animation: fly-bird 0.4s ease reverse;
    }

    .name {
      font-size: 12px;
      display: block;
      margin-top: 5px;
      width: 90%;
      text-align: center;
    }
    .icon {
      font-size: 18px;
    }
  }
}
</style>
