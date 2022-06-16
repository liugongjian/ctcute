<template>
  <div class="ui-input">
    <div class="sub-input">
      <h3>常规用法</h3>
      <el-row>
        <el-col :span="7"><el-input placeholder="请输入"></el-input></el-col>
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
        <el-button type="text">描述 <svg-icon name="edit" /></el-button>
      </el-row>
      <el-row>
        <el-input placeholder="请输入" value="描述"></el-input>
        <svg-icon name="check" class="edit-input-icon" color="#52C41A" />
        <svg-icon name="close" color="#F5212D" />
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
    <div class="special-input">
      <el-row>
        <el-col :span="6">
          <el-input-number v-model="num" controls-position="right" :min="1" :max="10"></el-input-number>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入详细地址" class="input-with-select">
            <el-select slot="prepend" v-model="select" placeholder="城市">
              <el-option label="上海" value="1"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入身高" class="input-with-select">
            <el-select slot="append" v-model="select" placeholder="CM">
              <el-option label="cm" value="2"></el-option>
            </el-select>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="special-prepend">
        <el-col :span="6">
          <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入url">
            <template slot="prepend">Http://</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入url">
            <template slot="append">.com</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="input-icon">
          <el-input v-model="money">
            <span slot="suffix" class="icon-money">元</span>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入密码">
            <span slot="suffix" class="suffix-Forgot">Forgot?</span>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <h3 class="sub-title">带提示的输入框</h3>
    <div class="sub-input">
      <el-row>
        <el-autocomplete
          v-model="state1"
          class="inline-input"
          placeholder="请输入内容"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          @input="prompt"
        >
          <span v-show="flag" slot="suffix" class="prompt-title">数据资源名称</span>
        </el-autocomplete>
      </el-row>
    </div>
    <h3>长文本域</h3>
    <div class="text-input">
      <el-row>
        <el-input type="textarea" :rows="3" placeholder="请输入备注信息" maxlength="128" show-word-limit>
        </el-input>
      </el-row>
      <el-row>
        <el-col :span="6">
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
        <el-col :span="6">
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
        <el-col :span="6">
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

@Component({
  name: 'UiInput',
})
export default class extends Vue {
  public static title = {
    zh: '输入框',
    en: 'Input',
  }

  private flag = false
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

  private password = ''
  private state1 = ''
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

  private querySearch(queryString, cb) {
    const restaurants = this.restaurants
    const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
    // 调用 callback 返回建议列表的数据
    cb(results)
  }

  private createFilter(queryString) {
    return restaurant => {
      return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }

  private prompt(e: any) {
    if (e) {
      this.flag = true
    } else {
      this.flag = false
    }
  }
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 300px;
  height: 32px;
  font-size: 12px;
}
.el-textarea {
  display: block;
  width: 300px;
}
.special-input {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 24px;
  ::v-deep.el-input-group__append,
  ::v-deep.el-input-group__prepend {
    width: 80px;
    background: #ffff;
    color: #333333;
  }
  .special-prepend {
    ::v-deep.el-input-group__append,
    ::v-deep.el-input-group__prepend {
      width: 80px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .icon-money {
    line-height: 36px;
  }
  .input-icon {
    .el-input {
      width: 200px;
    }
  }
  .suffix-Forgot {
    line-height: 36px;
    color: #333333;
  }
  .suffix-Forgot::before {
    content: '|';
    color: #cccccc;
    margin-right: 12px;
  }
}

.sub-input {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 24px;
  .el-icon-close {
    line-height: 36px;
    &:hover {
      color: $primary;
      cursor: pointer;
    }
  }
}

.edit-input-icon {
  margin: 0 20px;
  cursor: pointer;
}

.el-input {
  width: 300px;
  height: 32px;
  // margin: 20px 0;
}

.el-textarea {
  display: block;
  width: 300px;
}

.el-input.is-disabled {
  ::v-deep.el-input__inner {
    color: rgba(0, 0, 0, 0.65);
    font-size: 12px;
  }
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
// 提示输入框
.el-autocomplete.inline-input {
  width: 300px;
  height: 32px;
  // .el-input__inner:active{

  // }
}
.prompt-title {
  // display: none;
  line-height: 36px;
  font-size: 12px;
}
</style>
