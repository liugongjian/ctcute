<template>
  <div id="ui-container" class="ui__container">
    <div v-for="component in componentList" :key="component.name" class="ui__component">
      <h1 :id="component.name">{{ component.title.en }} / {{ component.title.zh }}</h1>
      <h4 :id="component.name">
        版本：{{ component.description && component.description.version }} | 更新时间：{{
          component.description && component.description.updateTime
        }}
        | 维护人: {{ component.description && component.description.maintainer }}
      </h4>
      <component :is="component.name" class="ui__component__body" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { components, list } from './components/index'
import Sidebar from './Sidebar.vue'

@Component({
  name: 'UiComponent',
  components: {
    Sidebar,
    ...components,
  },
})
export default class extends Vue {
  private componentList = list
}
</script>
<style lang="scss" scoped>
.ui__component {
  border-bottom: 1px solid $border-color-light;
  padding: $padding-4x 0 $padding-6x;

  h1 {
    margin: $margin-3x 0;
    color: $text-color;
    font-size: $text-size-lg;
  }

  ::v-deep {
    p {
      color: $text-color;
      font-size: $text-size;
      line-height: $line-height;
    }

    h2 {
      font-size: $text-size-md;
      line-height: $line-height;
      font-weight: $text-title-weight;
      color: $text-color;
    }

    h3 {
      font-size: $text-size-md;
      margin-top: $margin-6x;
      color: $text-color;
    }

    h4 {
      color: $text-color;
    }

    .sub-sample {
      margin: $margin-6x 0;
      padding-bottom: $padding-6x;
      border-bottom: 1px solid $border-color-light;

      &:last-child {
        padding: 0;
        margin-bottom: 0;
        border: 0;
      }
    }

    .sub-steps {
      margin: $margin-6x 0;
      padding-bottom: $padding-6x;
      border-bottom: 1px solid $border-color-light;
    }
  }
}
</style>
