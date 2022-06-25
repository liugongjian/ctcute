<template>
  <div class="ui-input">
    <div class="sub-input">
      <h3>常规用法</h3>
      <el-row>
        <el-col :span="7"><el-input v-model="value1" placeholder="请输入"></el-input></el-col>
        <el-col :span="7">
          <el-form v-model="password" :rules="rules">
            <el-form-item prop="password">
              <el-input v-model="password" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7"><el-input disabled placeholder="请输入"></el-input></el-col>
        <el-col :span="7"><el-input v-model="value" disabled placeholder="请输入"> </el-input></el-col>
      </el-row>
    </div>
    <div class="routine-input">
      <h3>编辑输入框</h3>
      <el-row>
        <edit-input value="单行描述" />
      </el-row>
      <el-row>
        <edit-input :textarea="true" value="多行描述" />
      </el-row>
    </div>
    <h3>搜索输入框</h3>
    <div class="sub-input">
      <el-row>
        <el-col :span="7">
          <el-input v-model="searchValue" placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="searchValue1" placeholder="请输入内容" prefix-icon="el-icon-search">
            <i slot="suffix" class="el-icon-close" @click="searchValue1 = ''"></i>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <h3>特殊输入框</h3>
    <div class="sub-input">
      <div class="input-content">
        <div>
          <el-input-number v-model="num" controls-position="right" :min="1" :max="10"></el-input-number>
        </div>
        <div>
          <el-input v-model="address" placeholder="请输入详细地址" class="input-with-select">
            <el-select slot="prepend" v-model="select" placeholder="城市" size="small">
              <el-option label="上海" value="1"></el-option>
            </el-select>
          </el-input>
        </div>
        <div>
          <el-input v-model="height" placeholder="请输入身高" class="input-with-select">
            <el-select slot="append" v-model="select" placeholder="CM">
              <el-option label="cm" value="2"></el-option>
            </el-select>
          </el-input>
        </div>
      </div>
      <div class="input-content">
        <div>
          <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div>
          <el-input v-model="url" placeholder="请输入url">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div>
          <el-input v-model="url1" placeholder="请输入url">
            <template slot="append">.com</template>
          </el-input>
        </div>
      </div>
      <div class="input-bottom">
        <div class="input-icon">
          <el-input v-model="money">
            <span slot="suffix" class="icon-money">元</span>
          </el-input>
        </div>
        <div>
          <el-input v-model="forgot" placeholder="请输入密码">
            <span slot="suffix" class="suffix-forgot">Forgot?</span>
          </el-input>
        </div>
      </div>
    </div>
    <h3 class="sub-title">带提示的输入框</h3>
    <div class="sub-input">
      <el-row>
        <remind-input :restaurants="restaurants" :placeholder="placeholderTitle" />
      </el-row>
    </div>
    <h3>长文本域</h3>
    <div class="text-input">
      <el-row>
        <el-input type="textarea" :rows="3" placeholder="请输入备注信息" maxlength="128" show-word-limit>
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
import EditInput from '@/components/EditInput/index.vue'
import RemindInput from '@/components/Input/RemidInput.vue'
@Component({
  name: 'UiInput',
  components: {
    EditInput,
    RemindInput,
  },
})
export default class extends Vue {
  public static title = {
    zh: '输入框',
    en: 'Input',
  }

  private value1 = ''
  private placeholderTitle = '请输入内容'
  private num = 1
  private num1 = 1
  private content = '这是一段内容'
  private select = ''
  private value = 's2.mall.1'
  private searchValue = ''
  private searchValue1 = ''
  private money = '2'
  private information = '请输入备注信息'
  private information1 =
  '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二'

  private address = '' // 地址
  private height = '' // 身高
  private url = '' // url
  private url1 = ''
  private forgot = ''
  private password = ''
  private rules = {
    password: [
      { required: true, message: '密码输入错误', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
  }

  private restaurants = [
    { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
    { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
    { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
    { value: '泷千家(天山西路店)', address: '天山西路438号' },
  ]
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 300px;
  height: 32px;
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
}

.input-bottom {
  width: 522px;
  display: flex;
  justify-content: space-between;
}
</style>
