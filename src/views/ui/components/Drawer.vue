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
      <el-col :span="2">
        <el-button @click="drawer1 = true">复杂样式 </el-button>
        <!-- 抽屉 -->
        <el-drawer title="小弹窗(提示框)" :visible.sync="drawer1" class="drawer-content">
          <div class="sub-content">
            <div class="labelposition">
              <el-radio-group v-model="labelposition" size="mini">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
              </el-radio-group>
            </div>
            <el-form
              ref="ruleForm"
              :rules="rules"
              :model="form"
              label-width="111px"
              class="demo-ruleForm"
              :label-position="labelposition"
            >
              <el-form-item label="主机别名" prop="name" placeholder="111">
                <el-input v-model="form.name" value="" placeholder="请输入主机别名"></el-input>
              </el-form-item>
              <el-form-item label="IP地址" prop="ip">
                <el-input v-model="form.ip" value="" placeholder="请输入IP地址"></el-input>
              </el-form-item>
              <el-form-item label="SSH端口" prop="ssh">
                <el-input v-model="form.ssh" value="" placeholder="请输入SSH端口"></el-input>
              </el-form-item>
              <el-form-item label="SSH用户名" prop="sshname">
                <el-input v-model="form.sshname" value="" placeholder="请输入SSH用户名"></el-input>
              </el-form-item>
              <el-form-item label="SSH密码" prop="password">
                <el-input v-model="form.password" value="" placeholder="请提供具有sudo权限的账号"></el-input>
              </el-form-item>
              <el-form-item label="标签" class="sub-tags">
                <cute-tag tag-name="+ 标签" :dynamic-tags="dynamicTags"></cute-tag>
              </el-form-item>

              <el-form-item label="监控插件端口" prop="port">
                <el-input v-model="form.port" value="" placeholder="请输入监控插件端口"></el-input>
              </el-form-item>
              <el-form-item label="备注" prop="tip">
                <el-input
                  v-model="form.tip"
                  type="textarea"
                  class="tip"
                  maxlength="128"
                  :rows="4"
                  show-word-limit
                  placeholder="请输入备注信息"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="sub-foot">
            <el-button type="primary" @click="drawer1 = false">确定</el-button>
            <el-button @click="drawer1 = false">取消</el-button>
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
  public static description = {
    maintainer: '赵昕',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private labelposition = 'right'
  private drawer = false
  private drawer1 = false
  private rules = {
    name: [
      { required: true, message: '请输入主机别名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
  }

  private form = {}
  private dynamicTags = ['标签', '标签1']
}
</script>

<style lang="scss" scoped>
.drawer-content .el-drawer__body {
  position: relative;
  overflow: hidden;

  .sub-content {
    padding: 24px 24px 0;
    overflow: auto;
    height: calc(100% - 52px);
  }

  .sub-foot {
    position: absolute;
    z-index: 9;
    bottom: 0;
    width: 100%;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    background: $color-grey-10;
  }
}

.labelposition {
  margin-bottom: 30px;
  text-align: right;
}
</style>
