<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: MessageBox
-->
<template>
  <div>
    <h1>MessageBox</h1>
    <el-row>
      <h3>基本用法</h3>
      <el-button type="text" @click="open1">点击打开 Message Box</el-button>
    </el-row>

    <el-row>
      <h3>确认消息</h3>
      <el-button type="text" @click="open2">点击打开 Message Box</el-button>
    </el-row>

    <el-row>
      <h3>提交内容</h3>
      <el-button type="text" @click="open3">点击打开 Message Box</el-button>
    </el-row>

    <el-row>
      <h3>使用 HTML 片段</h3>
      <el-button type="text" @click="open4">点击打开 Message Box</el-button>
    </el-row>

    <el-row>
      <h3>区分取消与关闭</h3>
      <el-button type="text" @click="open5">点击打开 Message Box</el-button>
    </el-row>

    <el-row>
      <h3>居中布局</h3>
      <el-button type="text" @click="open6">点击打开 Message Box</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'MessageBox',
})
export default class extends Vue {
  private open1() {
    this.$alert('这是一段内容', '标题名称', {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${action}`,
        })
      },
    })
  }

  private open2() {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
  }

  private open3() {
    this.$prompt('请输入邮箱', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern:
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱格式不正确',
    })
      .then((data: any) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + data.value,
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入',
        })
      })
  }

  private open4() {
    this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
      dangerouslyUseHTMLString: true,
    })
  }

  private open5() {
    this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
      distinguishCancelAndClose: true,
      confirmButtonText: '保存',
      cancelButtonText: '放弃修改',
    })
      .then(() => {
        this.$message({
          type: 'info',
          message: '保存修改',
        })
      })
      .catch(action => {
        this.$message({
          type: 'info',
          message: action === 'cancel' ? '放弃保存并离开页面' : '停留在当前页面',
        })
      })
  }

  private open6() {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      center: true,
    })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
  }
}
</script>
