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
                <div v-for="(desc, j) in feature.desc" :key="j">
                  <li>{{ desc.text }}</li>
                  <el-link v-for="(v, i) in desc.link" :key="i">{{ v }}</el-link>
                </div>
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
          name: 'Page-Table',
          desc: [
            {
              text: '新增Preview组件',
            },
          ],
        },
        {
          name: 'Page-Preview',
          desc: [
            {
              text: '新增Preview组件',
              link: ['SimplePreview'],
            },
          ],
        },
        {
          name: 'Page-Permission',
          desc: [
            {
              text: '新增Permission组件',
              link: ['SimpleUser', 'SimpleMenu', 'SimpleRole'],
            },
          ],
        },
        {
          name: 'component-CuteSelectTree',
          desc: [
            {
              text: '新增CuteSelectTree组件',
            },
          ],
        },
        {
          name: 'component-CuteSelectTree',
          desc: [
            {
              text: '新增CuteSelectTree组件',
            },
          ],
        },
        {
          name: 'component-CuteTitledBlock',
          desc: [
            {
              text: '新增CuteTitledBlock组件',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'ui-Breadcrumb',
          desc: [
            {
              text: '修复Breadcrumb出现滚动',
            },
          ],
        },
        {
          name: 'Page-table',
          desc: [
            {
              text: '修复SimpleTable查询、重置按钮增加空格',
            },
          ],
        },
        {
          name: 'Page-Form',
          desc: [
            {
              text: '修复SimpleForm样式',
            },
          ],
        },
        {
          name: 'Page-Detail',
          desc: [
            {
              text: '修复ProDetail1,ProDetail2文案+新标签',
            },
          ],
        },
        {
          name: 'Ui-Input',
          desc: [
            {
              text: '修复input全局样式',
            },
          ],
        },
        {
          name: 'component-CuteTableColumnSettings',
          desc: [
            {
              text: '修复CuteTableColumnSetting函数名重复问题',
            },
          ],
        },
        {
          name: 'Ui-Upload',
          desc: [
            {
              text: '修复Upload组件',
            },
          ],
        },
        {
          name: 'component-CuteSortTable',
          desc: [
            {
              text: 'CuteSortTable封装更改用hook',
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
          name: 'Ui-Button',
          desc: [
            {
              text: '新增Button组件',
            },
          ],
        },
        {
          name: 'Ui-TextButton',
          desc: [
            {
              text: '新增TextButton组件',
            },
          ],
        },
        {
          name: 'Ui-IconButton',
          desc: [
            {
              text: '新增IconButton组件',
            },
          ],
        },
        {
          name: 'Ui-Link',
          desc: [
            {
              text: '新增Link组件',
            },
          ],
        },
        {
          name: 'Ui-Breadcrumb',
          desc: [
            {
              text: '新增Breadcrumb组件',
            },
          ],
        },
        {
          name: 'Ui-Pagination',
          desc: [
            {
              text: '新增Pagination组件',
            },
          ],
        },
        {
          name: 'Ui-Steps',
          desc: [
            {
              text: '新增Steps组件',
            },
          ],
        },
        {
          name: 'Ui-Input',
          desc: [
            {
              text: '新增Input组件',
            },
          ],
        },
        {
          name: 'Ui-Select',
          desc: [
            {
              text: '新增Select组件',
            },
          ],
        },
        {
          name: 'Ui-Radio',
          desc: [
            {
              text: '新增Radio组件',
            },
          ],
        },
        {
          name: 'Ui-Upload',
          desc: [
            {
              text: '新增Upload组件',
            },
          ],
        },
        {
          name: 'Ui-Switch',
          desc: [
            {
              text: '新增Switch组件',
            },
          ],
        },
        {
          name: 'Ui-Popover',
          desc: [
            {
              text: '新增Popover组件',
            },
          ],
        },
        {
          name: 'Ui-Tabs',
          desc: [
            {
              text: '新增Tabs组件',
            },
          ],
        },
        {
          name: 'Ui-Table',
          desc: [
            {
              text: '新增Table组件',
            },
          ],
        },
        {
          name: 'Ui-Alert',
          desc: [
            {
              text: '新增Alert组件',
            },
          ],
        },
        {
          name: 'Ui-Content Area Tips',
          desc: [
            {
              text: '新增Content Area Tips组件',
            },
          ],
        },
        {
          name: 'Ui-Tag',
          desc: [
            {
              text: '新增Tag组件',
            },
          ],
        },
        {
          name: 'Ui-Tree',
          desc: [
            {
              text: '新增Tree组件',
            },
          ],
        },
        {
          name: 'Ui-Tabs',
          desc: [
            {
              text: '新增Tabs组件',
            },
          ],
        },
        {
          name: 'Ui-State',
          desc: [
            {
              text: '新增State组件',
            },
          ],
        },
        {
          name: 'Ui-Notification',
          desc: [
            {
              text: '新增Notification组件',
            },
          ],
        },
        {
          name: 'Ui-Progress',
          desc: [
            {
              text: '新增Progress组件',
            },
          ],
        },
        {
          name: 'Ui-Toast',
          desc: [
            {
              text: '新增Toast组件',
            },
          ],
        },
        {
          name: 'Ui-Transfer',
          desc: [
            {
              text: '新增Transfer组件',
            },
          ],
        },
        {
          name: 'Ui-Collapse',
          desc: [
            {
              text: '新增Collapse组件',
            },
          ],
        },
        {
          name: 'Ui-Timeline',
          desc: [
            {
              text: '新增Timeline组件',
            },
          ],
        },
        {
          name: 'Page-Dialog',
          desc: [
            {
              text: '新增Dialog组件',
              link: [
                'SmallDialog',
                'MediumDialog',
                'LargeDialog',
                'FullScreenDialog',
                'SuccessDialog',
                'WarnDialog',
                'ProSmallDialog',
                'ProMediumDialog ',
              ],
            },
          ],
        },
        {
          name: 'Page-Form',
          desc: [
            {
              text: '新增Form组件',
              link: ['SimpleForm', 'ProForm1', 'ProForm2', 'StepForm'],
            },
          ],
        },
        {
          name: 'Page-Table',
          desc: [
            {
              text: '新增Table组件',
              link: [
                'SimpleTable',
                'ProTable1',
                'ProTable2',
                'ProTable3',
                'ProTable4',
                'ScrolledToLoadTable',
              ],
            },
          ],
        },
        {
          name: 'Page-CardList',
          desc: [
            {
              text: '新增CardList组件',
              link: ['Card1', 'Card2', 'Card3'],
            },
          ],
        },
        {
          name: 'Page-Detail',
          desc: [
            {
              text: '新增Detail组件',
              link: ['SimpleDetail', 'ProDetail1', 'ProDetail2'],
            },
          ],
        },
        {
          name: 'Page-Status',
          desc: [
            {
              text: '新增Status组件',
              link: ['Page403', 'Page404', 'Page500', 'EmptyPage'],
            },
          ],
        },
        {
          name: 'Page-Chart',
          desc: [
            {
              text: '新增Chart组件',
              link: ['SimpleChart'],
            },
          ],
        },
        {
          name: 'component-CuteRemindSelect',
          desc: [
            {
              text: '新增CuteRemindSelect组件',
            },
          ],
        },
        {
          name: 'component-CuteSelectedInput',
          desc: [
            {
              text: '新增CuteSelectedInput组件',
            },
          ],
        },
        {
          name: 'component-CuteEditInput',
          desc: [
            {
              text: '新增CuteEditInput组件',
            },
          ],
        },
        {
          name: 'component-CuteTag',
          desc: [
            {
              text: '新增CuteTag组件',
            },
          ],
        },
        {
          name: 'component-CuteSortTable',
          desc: [
            {
              text: '新增CuteSortTable组件',
            },
          ],
        },
        {
          name: 'component-CuteRemindInput',
          desc: [
            {
              text: '新增CuteRemindInput组件',
            },
          ],
        },
        {
          name: 'component-CuteSpecialRadio',
          desc: [
            {
              text: '新增CuteSpecialRadio组件',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Cascader',
          desc: [
            {
              text: '修改@cutedesign/base版本号',
            },
            {
              text: '将基础组件相关依赖移到packages/base下',
            },
            {
              text: '项目自定义图标',
            },
            {
              text: '更新icon path',
            },
            {
              text: '拆开公共样式、组件，移入到mono workspace',
            },
            {
              text: 'i18n/zh.ts修改 支持elementui自带的国际化以及自定义',
            },
            {
              text: '重构生成描述信息的脚本,支持组件的信息的描述',
            },
            {
              text: '将Breadcrumb移入layout目录',
            },
            {
              text: '新增.npmrc和pnpm-lock.yaml文件',
            },
            {
              text: '把lock文件纳入版本管理,防止依赖的不兼容升级',
            },
            {
              text: ' hash后自动调整滚动条位置',
            },
            {
              text: '添加脚手架使用说明',
            },
          ],
        },
        {
          name: 'Page-Table',
          desc: [
            {
              text: '删除ProTbale4多余依赖',
            },
            {
              text: '修复table页面空数据下边框，不展示分页',
            },
            {
              text: '将table图片放到assets文件夹下',
            },
          ],
        },
        {
          name: 'Page-Dialog',
          desc: [
            {
              text: '删除FullSecreenDialog maniest大小写',
            },
            {
              text: '增加FullSecreenDialog内容',
            },
            {
              text: '添加SmallDialog.manifest文件',
            },
            {
              text: '修复LargeDialog重复样式',
            },
          ],
        },
        {
          name: 'Page-Detail',
          desc: [
            {
              text: 'SimpleDetail中的表格加链接',
            },
            {
              text: 'ProDetail1控制台警告',
            },
            {
              text: 'ProDetail1的manifest文件大小写问题',
            },
            {
              text: '提取SimpleDetail中的公共样式',
            },
            {
              text: '修复ProDetail2 manifest',
            },
          ],
        },
        {
          name: 'component-CuteEditInput',
          desc: [
            {
              text: '添加CuteEditInput使用文档',
            },
          ],
        },
        {
          name: 'component-CuteTitledBlock',
          desc: [
            {
              text: '增加CuteTitledBlock的组件说明',
            },
          ],
        },
        {
          name: 'component-CuteSpecialRadio',
          desc: [
            {
              text: '修复CuteSpecialRadio参数命名',
            },
          ],
        },
        {
          name: 'Page-StepForm',
          desc: [
            {
              text: '修复stepform表单样式，修改steps组件最后一个元素flex-basis: auto !important;',
            },
          ],
        },
        {
          name: 'Page-Chart',
          desc: [
            {
              text: '修改manifest格式的说明文档,给SimpleChart增加了依赖字段',
            },
            {
              text: '修改Card3 manifest文件',
            },
          ],
        },
        {
          name: 'Ui-IconButton',
          desc: [
            {
              text: '修复IconButton样式',
            },
          ],
        },
        {
          name: 'Ui-Select',
          desc: [
            {
              text: '去掉下拉的箭头和修改下拉的margin-top值',
            },
          ],
        },
        {
          name: 'Ui-collapse',
          desc: [
            {
              text: 'Collapse修复-增加row-style中的height',
            },
            {
              text: 'Collapse写入element-override',
            },
          ],
        },
        {
          name: 'Ui-Tag',
          desc: [
            {
              text: 'Tag hover颜色修复',
            },
            {
              text: '新增过滤改写到tag',
            },
          ],
        },
        {
          name: 'Ui-Table',
          desc: [
            {
              text: 'Tabel 部分样式写入override.scss',
            },
          ],
        },
        {
          name: 'Ui-Alert',
          desc: [
            {
              text: 'Alert组件规范stylelint、颜色变量',
            },
          ],
        },
        {
          name: 'Ui-Tree',
          desc: [
            {
              text: 'Tree弹出框样式修复',
            },
            {
              text: 'Tree组件Tooltip替换popover',
            },
          ],
        },
        {
          name: 'Ui-Notification',
          desc: [
            {
              text: '修复Notification缺图标',
            },
          ],
        },
        {
          name: 'Ui-ContentAreaTips',
          desc: [
            {
              text: '处理ContentAreaTips里eslint报错',
            },
          ],
        },
        {
          name: 'Ui-Step',
          desc: [
            {
              text: 'Step增加前进后退按钮',
            },
          ],
        },
        {
          name: 'Ui-Form',
          desc: [
            {
              text: '修复Form提交状态',
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

    .el-link + .el-link {
      margin-left: 20px;
    }
  }
}
</style>
