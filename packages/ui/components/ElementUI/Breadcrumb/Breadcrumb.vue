<template>
  <div :class="['el-breadcrumb', `el-breadcrumb--${size}`]" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ElBreadcrumb',

  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
    // 新增props
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium'].indexOf(value) !== -1
      },
    },
  },

  provide() {
    return {
      elBreadcrumb: this,
    }
  },

  mounted() {
    const items = this.$el.querySelectorAll('.el-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  },
}
</script>
