<template>
  <el-card>
    <div class="timeline">
      <div v-for="item in timeline" :key="item.version" class="timeline__item">
        <div class="head">
          <div class="head__left">{{ item.version }}</div>
          <div class="head__right">{{ item.date }}</div>
        </div>
        <template v-if="item.features">
          <h4>新特性</h4>
          <div class="content">
            <div v-for="(feature, index) in item.features" :key="index" class="content__item">
              <div>{{ feature.name }}</div>
              <ul>
                <li v-for="(desc, j) in feature.desc" :key="j">{{ desc.text }}</li>
              </ul>
            </div>
          </div>
        </template>
        <template v-if="item.bugfix">
          <h4>Bug修复</h4>
          <div class="content">
            <div v-for="(bugfix, index) in item.bugfix" :key="index" class="content__item">
              <div>{{ bugfix.name }}</div>
              <ul>
                <li v-for="(desc, j) in bugfix.desc" :key="j">{{ desc.text }}</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DesignTarget',
})
export default class extends Vue {
  private timeline = [
    {
      version: '0.0.5',
      date: '2022-08-09',
      features: [
        {
          name: '特性一',
          desc: [
            {
              text: '描述1',
              link: '预留',
            },
            {
              text: '描述2',
              link: '预留2',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Utils',
          desc: [
            {
              text: 'bug1',
              link: '',
            },
            {
              text: 'bug2',
              link: '',
            },
          ],
        },
      ],
    },
    {
      version: '0.0.4',
      date: '2022-07-25',
      features: [
        {
          name: '特性25',
          desc: [
            {
              text: '描述22',
              link: '预留',
            },
            {
              text: '描述33',
              link: '预留2',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'test',
          desc: [
            {
              text: 'bug4',
              link: '',
            },
            {
              text: 'bug3',
              link: '',
            },
          ],
        },
      ],
    },
  ]
}
</script>
<style lang="scss" scoped>
.timeline {
  padding: 0 0 10px;
  position: relative;

  &__item {
    position: relative;
    padding-bottom: 15px;
    list-style: none;
    line-height: 1.8;
    border: 1px solid $color-grey-6;
    border-radius: $border-radius;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-grey-6;

    &__left {
      margin: 0;
      padding: 15px 30px;
      font-size: 20px;
      color: $color-grey-1;
      font-weight: 700;
    }

    &__right {
      font-size: 14px;
      margin-right: $margin-medium;
    }
  }

  h4 {
    margin: 0 0 -10px;
    font-size: 18px;
    padding-left: 54px;
    padding-top: 30px;
    font-weight: 700;
  }

  .content {
    padding: 30px 30px 15px;

    &__item {
      font-size: 16px;
      list-style: none;
      padding-left: 20px;
      padding-bottom: 5px;
      color: $color-grey-1;
      word-break: break-all;
    }
  }

  ul {
    padding: 5px 0 0 27px;

    li {
      padding-left: 0;
      word-break: normal;
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
}
</style>
