<template>
  <div>
    <div class="routine-input">
      <h3>常规用法</h3>
      <el-row> <el-input placeholder="请输入"></el-input></el-row>
    </div>
    <h3>禁用状态</h3>
    <div class="sub-input">
      <el-row><el-input placeholder="请输入" :disabled="true"> </el-input></el-row>

      <el-row> <el-input v-model="content" placeholder="请输入" :disabled="true"> </el-input></el-row>
      <el-row> <el-input type="textarea" :rows="5" placeholder="请输入" :disabled="true"> </el-input></el-row>
    </div>
    <div class="routine-input">
      <h3>编辑输入框</h3>
      <el-row>
        <el-button type="text">描述 <svg-icon name="edit" /></el-button>
      </el-row>
      <el-row>
        <el-input placeholder="请输入" value="描述"></el-input>
        <svg-icon name="check" class="edit-input-icon" color="#52C41A" />
        <svg-icon name="close" color= "#F5212D"/>
      </el-row>
    </div>
    <h3>搜索输入框</h3>
    <div class="sub-input">
      <el-row>
        <el-col :span="5"><el-input placeholder="请输入"> </el-input></el-col>
        <el-col :span="6">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input>
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
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <h3 class="sub-title">带提示的输入框</h3>
    <div class="sub-input">
      <el-row> <el-autocomplete class="inline-input" placeholder="请输入内容"></el-autocomplete></el-row>
    </div>
    <h3>长文本域</h3>
    <div class="text-input">
      <el-row>
        <el-input type="textarea" :rows="5" placeholder="请输入" maxlength="128" show-word-limit> </el-input>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiInput'
})
export default class extends Vue {
  public static title = {
    zh: '输入框',
    en: 'Input'
  }

  private num = 1
  private num1 = 1
  private content = '这是一段内容'
  private select = ''
}
</script>
<style lang="scss" scoped>
.special-input {
  border-bottom: 1px solid #f1f1f1;
  ::v-deep.el-input-group__append,
  ::v-deep.el-input-group__prepend {
    width: 80px;
    background: #ffff;
  }
  .special-prepend {
    ::v-deep.el-input-group__append,
    ::v-deep.el-input-group__prepend {
      width: 80px;
      background: #f9f8f7;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}

.sub-input {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 24px;
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
.el-input.el-input--prefix {
  width: 200px;
  margin-left: 48px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
