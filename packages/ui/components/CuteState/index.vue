<template>
  <span class="el-state">
    <span v-if="icon" class="icon-wrap">
      <svg-icon :class="[{ loading: loading }]" :name="icon" :color="color" />
    </span>
    <span v-else class="dot" :style="{ 'background-color': color }" />
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CuteState',
})
export default class extends Vue {
  @Prop({ default: '#999' }) private color!: string
  @Prop({ default: '' }) private icon!: string
  @Prop({ default: false }) private loading!: boolean
}
</script>

<style lang="scss" scoped>
.el-state {
  display: inline-flex;
  align-items: center;
}

.el-state > span {
  margin-right: 8px;
}

.el-state > span.dot {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 50%;
}

.icon-wrap {
  font-size: $text-size-lg;
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

.loading {
  animation: rotating 1.5s linear infinite;
}
</style>
