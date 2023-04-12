<template>
  <div class="ui-input">
    <div class="sub-input">
      <h3>常规用法</h3>
      <div class="input-content">
        <el-radio-group v-model="inputSize" size="small">
          <el-radio-button value="medium" label="medium">默认</el-radio-button>
          <el-radio-button value="small" label="small">小</el-radio-button>
          <el-radio-button value="large" label="large">大</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="inputDisabled" size="small">
          <el-radio-button :value="true" :label="true">禁用</el-radio-button>
          <el-radio-button :value="false" :label="false">启用</el-radio-button>
        </el-radio-group>
      </div>
      <div class="sub-input">
        <div class="input-content">
          <div>
            <el-input
              v-model="value1"
              :size="inputSize"
              :disabled="inputDisabled"
              placeholder="请输入"
            ></el-input>
          </div>
          <div>
            <el-input
              v-model="formData.password"
              :disabled="inputDisabled"
              placeholder="请输入"
              :size="inputSize"
              type="text"
              @input="changeValue"
            >
              <svg-icon
                slot="suffix"
                :name="flag ? 'eye-close-fill' : 'eye-fill'"
                class="switch"
                @click="appearValue"
              />
            </el-input>
          </div>
          <div>
            <el-input v-model="value" placeholder="请输入" :size="inputSize" :disabled="inputDisabled">
            </el-input>
          </div>
        </div>
      </div>
      <h3>组合输入框 - 提醒内容</h3>
      <div class="sub-input">
        <el-input
          v-model="value1"
          placeholder="请输入"
          :size="inputSize"
          :disabled="inputDisabled"
        ></el-input>
        <span class="input-right-tips">提示内容</span>
      </div>
      <h3>IP地址输入框</h3>
      <div class="sub-input">
        <div class="input-ip">
          <el-input-number
            v-model="ip[0]"
            :size="inputSize"
            step-strictly
            :min="1"
            :max="255"
            :step="1"
            :controls="false"
          ></el-input-number>
          <span class="ip-dot">·</span>
          <el-input-number
            v-model="ip[1]"
            :size="inputSize"
            step-strictly
            :min="1"
            :max="255"
            :step="1"
            :controls="false"
          ></el-input-number>
          <span class="ip-dot">·</span>
          <el-input-number
            v-model="ip[2]"
            :size="inputSize"
            step-strictly
            :min="1"
            :max="255"
            :step="1"
            :controls="false"
          ></el-input-number>
          <span class="ip-dot">·</span>
          <el-input-number
            v-model="ip[3]"
            :size="inputSize"
            step-strictly
            :min="1"
            :max="255"
            :step="1"
            :controls="false"
          ></el-input-number>
        </div>
      </div>
    </div>
    <div class="routine-input">
      <h3>
        编辑输入框-使用了
        <a href="/component/base/cute-edit-input" target="_blank">CuteEditInput</a>
        组件
      </h3>
      <el-row>
        <cute-edit-input v-model="editValue1" class="input-demo" />
      </el-row>
      <el-row>
        <cute-edit-input v-model="editValue2" :textarea="true" class="input-demo" />
      </el-row>
    </div>
    <h3>搜索输入框</h3>
    <div>
      <div class="input-search">
        <div>
          <el-input
            v-model="searchValue"
            :size="inputSize"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          >
          </el-input>
        </div>
        <div>
          <el-input
            v-model="searchValue1"
            :size="inputSize"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          >
            <i slot="suffix" class="el-icon-close" @click="searchValue1 = ''"></i>
          </el-input>
        </div>
      </div>
    </div>
    <h3>特殊输入框</h3>
    <div class="sub-input">
      <div class="input-content">
        <el-radio-group v-model="inputSize" size="small">
          <el-radio-button value="medium" label="medium">默认</el-radio-button>
          <el-radio-button value="small" label="small">小</el-radio-button>
          <el-radio-button value="large" label="large">大</el-radio-button>
        </el-radio-group>
      </div>
      <div class="input-content">
        <div>
          <el-input-number
            v-model="num"
            :size="inputSize"
            controls-position="right"
            :min="1"
            :max="10"
          ></el-input-number>
        </div>
        <div>
          <el-input
            v-model="address"
            :size="inputSize"
            placeholder="请输入详细地址"
            class="input-with-select"
          >
            <div slot="prepend">
              <el-select v-model="select" placeholder="城市">
                <el-option label="上海" value="1"></el-option>
              </el-select>
            </div>
          </el-input>
        </div>
        <div>
          <el-input v-model="height" :size="inputSize" placeholder="请输入身高" class="input-with-select">
            <el-select slot="append" v-model="select" placeholder="CM">
              <el-option label="cm" value="2"></el-option>
            </el-select>
          </el-input>
        </div>
      </div>
      <div class="input-content">
        <div>
          <el-input-number
            v-model="num1"
            :size="inputSize"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </div>
        <div>
          <el-input v-model="url" :size="inputSize" placeholder="请输入url">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div>
          <el-input v-model="url1" :size="inputSize" placeholder="请输入url">
            <template slot="append">.com</template>
          </el-input>
        </div>
      </div>
      <div class="input-bottom">
        <div class="input-icon">
          <el-input v-model="money" :size="inputSize">
            <span slot="suffix" class="icon-money">元</span>
          </el-input>
        </div>
        <div>
          <el-input
            v-model="formData.password"
            :size="inputSize"
            placeholder="请输入"
            type="text"
            @input="changeValue"
          >
            <svg-icon slot="suffix" :name="flag ? 'eye-close-fill' : 'eye-fill'" @click="appearValue" />
          </el-input>
        </div>
        <div>
          <el-input
            v-model="formData.password"
            class="input-forgot"
            :size="inputSize"
            placeholder="请输入密码"
            type="text"
            @input="changeValue"
          >
            <template slot="suffix">
              <div class="suffix-box">
                <svg-icon slot="suffix" :name="flag ? 'eye-close-fill' : 'eye-fill'" @click="appearValue" />
                <span class="suffix-forgot-line"></span>
                <el-link> Forgot? </el-link>
              </div>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <h3 class="sub-title">
      带提示的输入框-使用了
      <a href="/component/base/cute-remind-input" target="_blank">CuteRemindInput</a>
      组件
    </h3>
    <div class="sub-input">
      <el-row>
        <cute-remind-input
          v-model="state1"
          :placeholder="placeholder"
          title="数据资源名称"
          @change="changeFun"
        />
      </el-row>
    </div>
    <h3 class="sub-title">
      带提示的输入框-小-使用了
      <a href="/component/base/cute-remind-input" target="_blank">CuteRemindInput</a>
      组件
    </h3>
    <div class="sub-input">
      <el-row>
        <cute-remind-input
          v-model="state1"
          :placeholder="placeholder"
          title="数据资源名称"
          size="small"
          @change="changeFun"
        />
      </el-row>
    </div>

    <h3>长文本域</h3>
    <div class="text-input">
      <el-row>
        <el-input
          v-model="information2"
          type="textarea"
          :rows="3"
          placeholder="请输入备注信息"
          maxlength="128"
          show-word-limit
        >
        </el-input>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-input
            v-model="information"
            type="textarea"
            :rows="3"
            placeholder="请输入备注信息"
            maxlength="128"
            show-word-limit
          >
          </el-input>
        </el-col>
        <el-col :span="7">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入备注信息"
            maxlength="128"
            show-word-limit
            disabled
          >
          </el-input>
        </el-col>
        <el-col :span="7">
          <el-input
            v-model="information1"
            type="textarea"
            :rows="3"
            placeholder="请输入备注信息"
            maxlength="60"
            show-word-limit
          >
          </el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteEditInput } from '@cutedesign/ui'
@Component({
  name: 'UiInput',
  components: {
    CuteEditInput,
  },
})
export default class extends Vue {
  public static title = {
    zh: '输入框',
    en: 'Input',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }

  private flag = true
  private value1 = ''
  private editValue1 = '单行描述'
  private editValue2 = '多行描述'
  private placeholder = '数据资源名称'
  private num = 1
  private num1 = 1
  private content = '这是一段内容'
  private select = ''
  private value = 's2.mall.1'
  private searchValue = ''
  private searchValue1 = ''
  private money = '2'
  private information = '这是一条备注信息'
  private information1 = ''
  private information2 = ''
  private state1 = ''
  private address = '' // 地址
  private height = '' // 身高
  private url = '' // url
  private url1 = ''
  private forgot = ''
  private ip = ['', '', '', '']
  private formData = {
    password: '',
    password1: '',
  }

  private newPassword = ''
  private inputSize = 'medium'
  private inputDisabled = false
  private rules = {
    password: [
      { required: true, message: '密码输入错误', trigger: 'change' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' },
    ],
  }

  // . 替换成 *
  private changeValue(value: string, type?: boolean) {
    let val = ''
    if (value.length < this.newPassword.length) {
      this.newPassword = this.newPassword.slice(0, this.newPassword.length - 1)
      return
    }
    if (!type) {
      this.newPassword = this.newPassword + value.charAt(value.length - 1)
    }
    if (value.length) {
      for (let i = 0; i < value.length; i++) {
        val += '*'
      }
      this.formData.password = val
    }
  }

  // 显示密码
  private appearValue() {
    if (this.formData.password === '' || !this.formData.password) return
    if (this.flag) {
      this.formData.password = this.newPassword
      this.flag = false
    } else if (!this.flag) {
      this.changeValue(this.formData.password, true)
      this.flag = true
    }
  }
  private changeFun(key) {
    console.log(key, '1234')
    this.state1 = key
  }
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 300px;
}

.el-row {
  margin-top: 24px;
}

.sub-input {
  border-bottom: 1px solid $border-color-light-1;
  padding-bottom: 24px;
}

.edit-input-icon {
  margin: 0 20px;
  cursor: pointer;
}

.el-select .el-input {
  width: 130px;
}

.input-content {
  width: 846px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  .el-input {
    width: 250px;
  }
}

.input-bottom {
  width: 846px;
  display: flex;
  justify-content: space-between;
}

.input-search {
  width: 630px;
  display: flex;
  justify-content: space-between;
}

.input-demo {
  width: 384px;
  color: $color-grey-1;
}

.el-textarea {
  max-width: 300px;
}

.input-icon {
  .el-input {
    width: 200px;
  }
}

.input-small {
  margin-bottom: 24px;
}

.input-ip {
  display: flex;
  align-items: center;

  ::v-deep.el-input-number {
    width: 48px;
    text-align: center;
  }
  // .el-input.el-input--medium .el-input__inner {text-align: center;}
  ::v-deep.el-input-number.is-without-controls .el-input__inner {
    padding: 0 5px;
  }

  .ip-dot {
    height: 18px;
    width: 18px;
    margin: 0 8px;
    text-align: center;
    font-size: $text-size-xl;
    line-height: 16px;
    color: $text-color;
  }
}
</style>
