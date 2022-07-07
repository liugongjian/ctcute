<template>
  <div class="empty-page">
    <el-tabs value="one" type="card" size="small">
      <el-tab-pane label="默认项" name="one">
        <div class="box">
          <img src="./Image/empty-page.svg">
          <div class="text">暂无数据</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="选中项" name="second">
        <div class="box">
          <img src="./Image/empty-page.svg">
          <div class="text">暂无数据</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="禁用选项" name="third" disabled>禁用选项</el-tab-pane>
      <el-tab-pane label="悬停项" name="fourth">
        <div class="box">
          <img src="./Image/empty-page.svg">
          <div class="text">暂无数据</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
