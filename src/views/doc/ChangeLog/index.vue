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
                <li v-for="(desc, j) in feature.desc" :key="j">{{ desc.text }}</li>
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
      version: '1.1.2',
      date: '2022-10-28',
      features: [
        {
          name: 'Ui-Alert',
          desc: [
            {
              text: '新增alert组件的使用说明',
            },
          ],
        },
        {
          name: 'Ui-Collapse',
          desc: [
            {
              text: '新增collapse组件的使用说明',
            },
          ],
        },
        {
          name: 'Ui-Slider',
          desc: [
            {
              text: '新增Slider组件',
            },
          ],
        },
        {
          name: 'Page-Warndialog2',
          desc: [
            {
              text: '新增Warndialog2页面(增加二次确认输入框)',
            },
          ],
        },
        {
          name: 'Sidebar',
          desc: [
            {
              text: '新增最佳实践菜单',
            },
            {
              text: '侧边栏支持图标',
            },
          ],
        },
        {
          name: 'Ui-Input',
          desc: [
            {
              text: '新增input-small组件',
            },
          ],
        },
        {
          name: 'permission',
          desc: [
            {
              text: '新增权限的hosts配置和启动说明',
            },
          ],
        },
        {
          name: '全局',
          desc: [
            {
              text: '新增更换主题的说明和更新日志',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Page-SimpleDetail',
          desc: [
            {
              text: '还原simpleDetail 设计稿',
            },
          ],
        },
        {
          name: 'Ui-Collapse',
          desc: [
            {
              text: '增加collapse组件的使用说明',
            },
          ],
        },
        {
          name: 'auth',
          desc: [
            {
              text: '调整路由before执行逻辑,调整 perm 获取前置到所有路由前，确保即时当前路由不需要登录，其他路由依然能获得正确表现',
            },
          ],
        },
        {
          name: '全局',
          desc: [
            {
              text: '浏览器使用默认滚动条',
            },

            {
              text: '页面和组件的维护者信息',
            },
          ],
        },
        {
          name: 'Ui-SelectedButton',
          desc: [
            {
              text: '修复SelectedButton选中样式',
            },
          ],
        },
        {
          name: 'Ui-Table',
          desc: [
            {
              text: ' 修改table 的 expand 展开图标样式',
            },
          ],
        },
        {
          name: 'Page-Chart',
          desc: [
            {
              text: 'chart颜色优化,更新图表颜色信息',
            },
          ],
        },
        {
          name: 'permission',
          desc: [
            {
              text: '补充用户权限使用说明',
            },
          ],
        },
        {
          name: 'Page-SimpleTable',
          desc: [
            {
              text: ' 调整表单tip和error message的padding间距',
            },
          ],
        },
      ],
    },
    {
      version: '1.1.1',
      date: '2022-10-1',
      features: [
        {
          name: 'theme',
          desc: [
            {
              text: '新增一键换肤功能，增加蓝色主题的选项',
            },
            {
              text: '新增视频播放器功能组件',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Ui-Input',
          desc: [
            {
              text: '修复textarea disable状态下 border的颜色',
            },
          ],
        },
        {
          name: '全局',
          desc: [
            {
              text: '把所有颜色改成使用颜色变量的形式，便于一键换肤功能的实现',
            },
          ],
        },
        {
          name: 'TableHook',
          desc: [
            {
              text: '把类型引用的Request改成引用@cutedesign/base内部的，而非项目中的',
            },
          ],
        },
        {
          name: 'authenticate',
          desc: [
            {
              text: '删除权限为`none`时对于的引用',
            },
            {
              text: '修复权限为`none`时侧边菜单无法生成的bug',
            },
            {
              text: '修复权限为`local`时无法调用menu接口的bug',
            },
          ],
        },
      ],
    },
    {
      version: '1.1.0',
      date: '2022-9-9',
      bugfix: [
        {
          name: 'Ui-Input',
          desc: [
            {
              text: '修复input show-password 样式',
            },
          ],
        },
        {
          name: 'Cascader',
          desc: [
            {
              text: '调整 lodashGet 方法，支持 dataKey 为空，即直接返回数据本身',
            },
          ],
        },
        {
          name: 'authenticate',
          desc: [
            {
              text: '修复整个退出登录元素的 cursor: pointer',
            },
            {
              text: '调整 auth 中对 iam 路由鉴权的逻辑顺序',
            },
            {
              text: '调整 auth 中 layout 加载为 once',
            },
          ],
        },
      ],
    },
    {
      version: '1.0.9',
      date: '2022-9-2',
      features: [
        {
          name: 'Ui-CascadeSelect',
          desc: [
            {
              text: '新增CascadeSelect组件',
            },
          ],
        },
        {
          name: 'Page-Home',
          desc: [
            {
              text: '新增Home页面',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Layout',
          desc: [
            {
              text: '支持菜单数据拍平，支持 getPermInfo 二次请求',
            },
            {
              text: '完善登录头像',
            },
            {
              text: '调整 layout 包目录结构',
            },
            {
              text: '将 layout 初步接入到 auth',
            },
          ],
        },
        {
          name: 'Page-Login',
          desc: [
            {
              text: '修改login页面图片路径',
            },
            {
              text: '登录改掉用户名和密码',
            },
            {
              text: '完善按钮权限',
            },
            {
              text: '修复用户名显示不正确的bug',
            },
          ],
        },
        {
          name: 'Cascader',
          desc: [
            {
              text: '重置 config',
            },
            {
              text: '补充beforeEach钩子函数的说明',
            },
            {
              text: '增加权限插件的文档说明',
            },
            {
              text: '调整nginx配置',
            },
          ],
        },
        {
          name: 'component-CuteArea',
          desc: [
            {
              text: '修复CuteArea选项回填bug',
            },
            {
              text: 'CuteArea添加弹窗最大高度',
            },
          ],
        },
      ],
    },
    {
      version: '1.0.8',
      date: '2022-8-26',
      features: [
        {
          name: 'ui-Select',
          desc: [
            {
              text: '新增新增日期选择框带快捷选项 组件',
            },
          ],
        },
        {
          name: 'ui-Table',
          desc: [
            {
              text: '新增可在表头进行筛选的table 组件',
            },
          ],
        },
        {
          name: 'component-CuteArea',
          desc: [
            {
              text: '新增CuteArea组件',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'Cascader',
          desc: [
            {
              text: '修复固定面包屑引发的 code viewer 和 侧边栏未兼容图片侧栏的问题',
            },
            {
              text: '修复固定面包屑引发的 code viewer 和 侧边栏未兼容图片侧栏的问题',
            },
          ],
        },
        {
          name: 'component-SelectTree',
          desc: [
            {
              text: '修复selectTree组件通过id回显label',
            },
          ],
        },
        {
          name: 'Ui-selectButton',
          desc: [
            {
              text: '修复selectedButton禁用样式',
            },
          ],
        },
        {
          name: 'Page-WarnDialog ',
          desc: [
            {
              text: '修复WarnDialog中button hover样式',
            },
          ],
        },
      ],
    },
    {
      version: '1.0.7',
      date: '2022-8-15',
      features: [
        {
          name: 'Doc',
          desc: [
            {
              text: '增加脚手架使用文档链接',
            },
            {
              text: '拆分主题和有三方依赖的基础组件为业务组件',
            },
            {
              text: '把theme和第三方依赖组件单独打包后,修改相关的配置',
            },
          ],
        },
        {
          name: 'page-SimpleTable2',
          desc: [
            {
              text: '新增simpleTable2页面',
            },
          ],
        },
        {
          name: 'page-Login',
          desc: [
            {
              text: '新增Login页面',
            },
          ],
        },
      ],
      bugfix: [
        {
          name: 'ui-Tbale',
          desc: [
            {
              text: '修改table数据来源使用yapi',
            },
          ],
        },
        {
          name: 'ui-Tree',
          desc: [
            {
              text: '修改tree数据来源使用yapi',
            },
          ],
        },
      ],
    },
    {
      version: '1.0.5',
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
          name: 'Page-SimplePreview',
          desc: [
            {
              text: '新增SimplePreview组件',
            },
          ],
        },
        {
          name: 'Page-SimpleUser',
          desc: [
            {
              text: '新增SimpleUser组件',
            },
          ],
        },
        {
          name: 'Page-SimpleMenu',
          desc: [
            {
              text: '新增SimpleMenu组件',
            },
          ],
        },
        {
          name: 'Page-SimpleRole',
          desc: [
            {
              text: '新增SimpleRole组件',
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
      version: '1.0.4',
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
          name: 'Page-SmallDialog',
          desc: [
            {
              text: '新增SmallDialog组件',
            },
          ],
        },
        {
          name: 'Page-MediumDialog',
          desc: [
            {
              text: '新增MediumDialog组件',
            },
          ],
        },
        {
          name: 'Page-LargeDialog',
          desc: [
            {
              text: '新增LargeDialog组件',
            },
          ],
        },
        {
          name: 'Page-FullScreenDialog',
          desc: [
            {
              text: '新增FullScreenDialog组件',
            },
          ],
        },
        {
          name: 'Page-SuccessDialog',
          desc: [
            {
              text: '新增SuccessDialog组件',
            },
          ],
        },
        {
          name: 'Page-WarnDialog',
          desc: [
            {
              text: '新增WarnDialog组件',
            },
          ],
        },
        {
          name: 'Page-ProSmallDialog',
          desc: [
            {
              text: '新增ProSmallDialog组件',
            },
          ],
        },
        {
          name: 'Page-ProMediumDialog',
          desc: [
            {
              text: '新增ProMediumDialog组件',
            },
          ],
        },

        {
          name: 'Page-SimpleForm',
          desc: [
            {
              text: '新增SimpleForm组件',
            },
          ],
        },
        {
          name: 'Page-ProForm1',
          desc: [
            {
              text: '新增ProForm1组件',
            },
          ],
        },
        {
          name: 'Page-ProForm2',
          desc: [
            {
              text: '新增ProForm2组件',
            },
          ],
        },
        {
          name: 'Page-StepForm',
          desc: [
            {
              text: '新增StepForm组件',
            },
          ],
        },
        {
          name: 'Page-SimpleTable',
          desc: [
            {
              text: '新增SimpleTable组件',
            },
          ],
        },
        {
          name: 'Page-ProTable1',
          desc: [
            {
              text: '新增ProTable1组件',
            },
          ],
        },
        {
          name: 'Page-ProTable2',
          desc: [
            {
              text: '新增ProTable2组件',
            },
          ],
        },
        {
          name: 'Page-ProTable3',
          desc: [
            {
              text: '新增ProTable3组件',
            },
          ],
        },
        {
          name: 'Page-ProTable4',
          desc: [
            {
              text: '新增ProTable4组件',
            },
          ],
        },
        {
          name: 'Page-ScrolledToLoadTable',
          desc: [
            {
              text: '新增ScrolledToLoadTable组件',
            },
          ],
        },
        {
          name: 'Page-Card1',
          desc: [
            {
              text: '新增Card1组件',
            },
          ],
        },
        {
          name: 'Page-Card2',
          desc: [
            {
              text: '新增Card2组件',
            },
          ],
        },
        {
          name: 'Page-Card3',
          desc: [
            {
              text: '新增Card3组件',
            },
          ],
        },
        {
          name: 'Page-SimpleDetail',
          desc: [
            {
              text: '新增SimpleDetail组件',
            },
          ],
        },
        {
          name: 'Page-ProDetail1',
          desc: [
            {
              text: '新增ProDetail1组件',
            },
          ],
        },
        {
          name: 'Page-ProDetail2',
          desc: [
            {
              text: '新增ProDetail2组件',
            },
          ],
        },
        {
          name: 'Page-Page403',
          desc: [
            {
              text: '新增Page403组件',
            },
          ],
        },
        {
          name: 'Page-Page404',
          desc: [
            {
              text: '新增Page404组件',
            },
          ],
        },
        {
          name: 'Page-Page500',
          desc: [
            {
              text: '新增Page500组件',
            },
          ],
        },
        {
          name: 'Page-EmptyPage',
          desc: [
            {
              text: '新增EmptyPage组件',
            },
          ],
        },
        {
          name: 'Page-SimpleChart',
          desc: [
            {
              text: '新增SimpleChart组件',
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
