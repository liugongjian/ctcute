<template>
  <div style="display: flex;" :class="[contentAreaTip ? 'is-content-area-tip' : 'is-alert-tip']">
    <transition name="el-alert-fade">
      <div
        v-show="visible"
        class="el-alert"
        :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
        role="alert"
      >
        <slot name="icon-custom">
          <!-- <i v-if="showIcon" class="el-alert__icon" :class="[iconClass, isBigIcon]"></i> -->
          <i v-if="showIcon" class="el-alert__icon" :class="[iconClass]"></i>
        </slot>
        <div class="el-alert__content">
          <span v-if="title || $slots.title" class="el-alert__title" :class="[isBoldTitle]">
            <slot name="title">{{ title }}</slot>
          </span>
          <p v-if="$slots.default && !description" class="el-alert__description">
            <slot></slot>
          </p>
          <p v-if="description && !$slots.default" class="el-alert__description">{{ description }}</p>
        </div>
        <i
          v-show="closable"
          class="el-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
          :style="{ color: closeBtnColor }"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: 'cute-icon-check-circle-fill',
  warning: 'cute-icon-warning-circle-fill',
  error: 'cute-icon-close-circle-fill',
}
export default {
  name: 'ElAlert',

  props: {
    contentAreaTip: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '',
    },
    showIcon: Boolean,
    customIcon: {
      type: Boolean,
      default: false,
    },
    closeBtnColor: {
      type: String,
      default: '',
    },
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      },
    },
  },

  data() {
    return {
      visible: true,
    }
  },
  computed: {
    typeClass() {
      return `el-alert--${this.type}`
    },

    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'cute-icon-info-circle-fill'
    },

    // isBigIcon() {
    //   return this.description || this.$slots.default ? 'is-big' : ''
    // },

    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    },
  },

  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    },
  },
}
</script>
