<template>
  <div class="sub-drawer">
    <p>屏幕边缘滑出的浮层面板</p>
    <h3>何时使用</h3>
    <p>
      抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。<br />
      -当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。<br />
      -当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
    </p>
    <el-row>
      <el-col :span="3">
        <h3>简单样式</h3>
        <el-button @click="drawer = true">简单样式 </el-button>
        <!-- 抽屉 -->
        <el-drawer title="抽屉" :visible.sync="drawer" custom-class="sub-simple">
          <div class="sub-content">
            <div class="el-form">
              抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
            </div>
            <div class="sub-foot">
              <el-button @click="drawer = false">关闭</el-button>
            </div>
          </div>
        </el-drawer>
      </el-col>
      <el-col :span="2">
        <h3>复杂样式</h3>
        <el-button @click="drawer1 = true">复杂样式 </el-button>
        <!-- 抽屉 -->
        <el-drawer title="小弹窗(提示框)" :visible.sync="drawer1" custom-class="sub-simple">
          <div class="sub-content">
            <el-form
              ref="ruleForm"
              :rules="rules"
              label-width="125px"
              class="demo-ruleForm"
              label-position="top"
            >
              <el-form-item label="主机别名" prop="name" placeholder="111">
                <el-input value="" placeholder="请输入主机别名"></el-input>
              </el-form-item>
              <el-form-item label="IP地址" prop="name">
                <el-input value="" placeholder="请输入IP地址"></el-input>
              </el-form-item>
              <el-form-item label="SSH端口" prop="name">
                <el-input value="" placeholder="请输入SSH端口"></el-input>
              </el-form-item>
              <el-form-item label="SSH用户名" prop="name">
                <el-input value="" placeholder="请输入SSH用户名"></el-input>
              </el-form-item>
              <el-form-item label="SSH密码" prop="name">
                <el-input value="" placeholder="请提供具有sudo权限的账号"></el-input>
              </el-form-item>
              <el-form-item label="标签" class="sub-tags">
                <el-tag type="info">标签</el-tag>
                <el-tag type="info" closable>标签</el-tag>
                <el-button class="button-new-tag" size="small">+ 标签</el-button>
              </el-form-item>

              <el-form-item label="监控插件端口" prop="name">
                <el-input value="" placeholder="请输入监控插件端口"></el-input>
              </el-form-item>
              <el-form-item label="备注" prop="name">
                <el-input
                  type="textarea"
                  maxlength="128"
                  :rows="4"
                  show-word-limit
                  placeholder="请输入备注信息"
                ></el-input>
              </el-form-item>
            </el-form>
            <div class="sub-foot">
              <el-button @click="drawer1 = false">取消</el-button>
              <el-button type="primary" @click="drawer1 = false">确定</el-button>
            </div>
          </div>
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiDrawer',
})
export default class extends Vue {
  public static title = {
    zh: '抽屉',
    en: 'Drawer',
  }

  private drawer = false
  private drawer1 = false
  private rules = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
  margin-left: 10px;
}
.button-new-tag {
  height: 22px;
  line-height: 20px;
  margin-left: 10px;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px dashed #ccc;
}
.sub-tags {
  display: flex;
  align-items: center;
  ::v-deep.el-form-item__label {
    padding: 0;
  }
}
.sub-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    padding: 30px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 400;
  }
  .el-form {
    flex: 1;
    padding: 30px;
    font-size: 14px;
  }
  .sub-foot {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
  }
}
</style>
