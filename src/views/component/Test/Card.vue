<template>
  <div>
    <h1>Card 卡片</h1>
    <div>
      <h3>用于小卡片</h3>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>默认总是显示无边框浅色阴影，通常用于页面容器</h3>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>悬浮后显示阴影(shadow="hover")</h3>
      <el-card shadow="hover" class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>始终显示阴影(shadow="always")</h3>
      <el-card shadow="always" class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>始终不显示阴影(shadow="never")</h3>
      <el-card shadow="never" class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>无边框且有浅色阴影，悬浮后显示深色阴影(shadow="hover-light")</h3>
      <el-card shadow="hover-light" class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <h3>带图片</h3>
      <el-row style="width: 1000px">
        <el-col v-for="(o, index) in 2" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }" shadow="hover-light">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="mb-12">
      <h3>卡片阴影</h3>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always"> 总是显示 </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never"> 从不显示 </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Card',
})
export default class extends Vue {
  public currentDate = new Date()
}
</script>
<style lang="scss" scoped>
.text {
  font-size: $text-size;
}

.item {
  margin-bottom: $text-size-xl;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.time {
  font-size: $text-size;
  color: $color-neutral-7;
}

.bottom {
  margin-top: $text-size;
  line-height: $text-size;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.mb-12 {
  margin-bottom: $common-space-3x;
}
</style>
