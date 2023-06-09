/* eslint-disable prettier/prettier */
export default [
  {
    'title': '主题色',
    'doc': 'true',
    'list': [
      {
        'name': '$color-master',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$blue-base',
        'scene': '主题色，用于主题按钮，链接hover状态等'
      },
      {
        'name': '$color-master-hover',
        'type': 'color',
        'value': '#3357ac',
        'scssValue': '$blue-5',
        'scene': '主题-悬停色，用于主题按钮悬停等'
      },
      {
        'name': '$color-master-active',
        'type': 'color',
        'value': '#628fe9',
        'scssValue': '$blue-7',
        'scene': '主题-触发色，用于选中状态'
      },
      {
        'name': '$color-master-disabled',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$blue-3',
        'scene': '主题-禁用色，用于禁用状态'
      },
      {
        'name': '$color-master-bg',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$blue-3',
        'scene': '主题-背景色'
      },
      {
        'name': '$color-master-bg-light',
        'type': 'color',
        'value': '#232f4f',
        'scssValue': '$blue-2',
        'scene': '主题-背景浅色'
      },
      {
        'name': '$color-master-bg-light-2',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$blue-1',
        'scene': '主题-背景浅色2'
      },
      {
        'name': '$color-ct',
        'type': 'color',
        'value': '#c30927',
        'scssValue': '$red-base',
        'scene': '天翼云-默认色，用于天翼云风格的主题按钮(如订购)、链接hover状态等'
      },
      {
        'name': '$color-ct-hover',
        'type': 'color',
        'value': '#9d0f27',
        'scssValue': '$red-5',
        'scene': '天翼云-悬停色，用于天翼云风格的题按钮悬停等'
      },
      {
        'name': '$color-ct-active',
        'type': 'color',
        'value': '#d72941',
        'scssValue': '$red-7',
        'scene': '天翼云-触发色，用于天翼云风格的选中状态'
      },
      {
        'name': '$color-ct-disabled',
        'type': 'color',
        'value': '#5a1925',
        'scssValue': '$red-3',
        'scene': '天翼云-禁用色，用于天翼云风格的禁用状态'
      },
      {
        'name': '$color-ct-bg',
        'type': 'color',
        'value': '#450015',
        'scssValue': '$red-1',
        'scene': '天翼云-背景色'
      }
    ]
  },
  {
    'title': '状态色',
    'doc': 'true',
    'list': [
      {
        'name': '$color-info',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$neutral-6',
        'scene': '信息通知色，用于信息通知内容'
      },
      {
        'name': '$color-info-hover',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$neutral-5',
        'scene': '信息通知-悬停色，用于信息通知内容的悬停'
      },
      {
        'name': '$color-info-active',
        'type': 'color',
        'value': '#626367',
        'scssValue': 'mix($black, $color-info, 15%)',
        'scene': '信息通知-触发色，用于信息通知内容的选中状态'
      },
      {
        'name': '$color-info-disabled',
        'type': 'color',
        'value': '#8f9194',
        'scssValue': 'mix($white, $color-info, 20%)',
        'scene': '信息通知-禁用色，用于信息通知内容的触发状态'
      },
      {
        'name': '$color-info-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$neutral-1',
        'scene': '信息通知-背景色，用于信息通知内容的背景'
      },
      {
        'name': '$color-success',
        'type': 'color',
        'value': '#21b66e',
        'scssValue': '$green-base',
        'scene': '成功色，用于表示成功状态的内容'
      },
      {
        'name': '$color-success-hover',
        'type': 'color',
        'value': '#21935d',
        'scssValue': '$green-5',
        'scene': '成功-悬停色'
      },
      {
        'name': '$color-success-active',
        'type': 'color',
        'value': '#43cb85',
        'scssValue': '$green-7',
        'scene': '成功-触发色'
      },
      {
        'name': '$color-success-disabled',
        'type': 'color',
        'value': '#21563e',
        'scssValue': '$green-3',
        'scene': '成功-禁用色'
      },
      {
        'name': '$color-success-bg',
        'type': 'color',
        'value': '#1d312b',
        'scssValue': '$green-1',
        'scene': '成功-背景色'
      },
      {
        'name': '$color-warning',
        'type': 'color',
        'value': '#de7f32',
        'scssValue': '$orange-base',
        'scene': '警告色，用于表示警告状态的内容'
      },
      {
        'name': '$color-warning-hover',
        'type': 'color',
        'value': '#b1692e',
        'scssValue': '$orange-5',
        'scene': '警告-悬停色'
      },
      {
        'name': '$color-warning-active',
        'type': 'color',
        'value': '#e99d56',
        'scssValue': '$orange-7',
        'scene': '警告-触发色'
      },
      {
        'name': '$color-warning-disabled',
        'type': 'color',
        'value': '#644329',
        'scssValue': '$orange-3',
        'scene': '警告-禁用色'
      },
      {
        'name': '$color-warning-bg',
        'type': 'color',
        'value': '#372921',
        'scssValue': '$orange-1',
        'scene': '警告-背景色'
      },
      {
        'name': '$color-danger',
        'type': 'color',
        'value': '#de4040',
        'scssValue': '$ruby-base',
        'scene': '危险色，用于表示危险状态的内容'
      },
      {
        'name': '$color-danger-hover',
        'type': 'color',
        'value': '#b13939',
        'scssValue': '$ruby-5',
        'scene': '危险-悬停色'
      },
      {
        'name': '$color-danger-active',
        'type': 'color',
        'value': '#e96b67',
        'scssValue': '$ruby-7',
        'scene': '危险-触发色'
      },
      {
        'name': '$color-danger-disabled',
        'type': 'color',
        'value': '#642d2e',
        'scssValue': '$ruby-3',
        'scene': '危险-禁用色'
      },
      {
        'name': '$color-danger-bg',
        'type': 'color',
        'value': '#372125',
        'scssValue': '$ruby-1',
        'scene': '危险-背景色'
      },
      {
        'name': '$color-fatal',
        'type': 'color',
        'value': '#f8c1ba',
        'scssValue': '$ruby-9',
        'scene': '严重危险色，用于表示严重危险状态的内容'
      },
      {
        'name': '$color-fatal-hover',
        'type': 'color',
        'value': '#f49790',
        'scssValue': '$ruby-8',
        'scene': '严重危险-悬停色'
      },
      {
        'name': '$color-fatal-active',
        'type': 'color',
        'value': '#fbe7e4',
        'scssValue': '$ruby-10',
        'scene': '严重危险-触发色'
      },
      {
        'name': '$color-fatal-disabled',
        'type': 'color',
        'value': '#b13939',
        'scssValue': '$ruby-5',
        'scene': '严重危险-禁用色'
      },
      {
        'name': '$color-fatal-bg',
        'type': 'color',
        'value': '#642d2e',
        'scssValue': '$ruby-3',
        'scene': '严重危险-背景色'
      }
    ]
  },
  {
    'title': '中性色',
    'doc': 'true',
    'list': [
      {
        'name': '$color-neutral-1',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$neutral-1',
        'scene': '中性色1'
      },
      {
        'name': '$color-neutral-2',
        'type': 'color',
        'value': '#34373a',
        'scssValue': '$neutral-2',
        'scene': '中性色2'
      },
      {
        'name': '$color-neutral-3',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$neutral-3',
        'scene': '中性色3'
      },
      {
        'name': '$color-neutral-4',
        'type': 'color',
        'value': '#4b4f51',
        'scssValue': '$neutral-4',
        'scene': '中性色4'
      },
      {
        'name': '$color-neutral-5',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$neutral-5',
        'scene': '中性色5'
      },
      {
        'name': '$color-neutral-6',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$neutral-6',
        'scene': '中性色6'
      },
      {
        'name': '$color-neutral-7',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$neutral-7',
        'scene': '中性色7'
      },
      {
        'name': '$color-neutral-8',
        'type': 'color',
        'value': '#b8babf',
        'scssValue': '$neutral-8',
        'scene': '中性色8'
      },
      {
        'name': '$color-neutral-9',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$neutral-9',
        'scene': '中性色9'
      },
      {
        'name': '$color-neutral-10',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$neutral-10',
        'scene': '中性色10'
      },
      {
        'name': '$color-neutral-11',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$neutral-10',
        'scene': '中性色11'
      },
      {
        'name': '$color-white',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$white',
        'scene': '白色'
      },
      {
        'name': '$color-white-hover',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': '白色-悬停色'
      },
      {
        'name': '$color-black',
        'type': 'color',
        'value': '#000',
        'scssValue': '$black',
        'scene': '黑色'
      }
    ]
  },
  {
    'title': '背景色',
    'doc': 'true',
    'list': [
      {
        'name': '$color-bg-1',
        'type': 'color',
        'value': '#242528',
        'scssValue': '#242528',
        'scene': '组件背景色'
      },
      {
        'name': '$color-bg-2',
        'type': 'color',
        'value': '#212224',
        'scssValue': '#212224',
        'scene': '背景卡片颜色'
      },
      {
        'name': '$color-bg-3',
        'type': 'color',
        'value': '#1a1c1d',
        'scssValue': '#1a1c1d',
        'scene': '页面整体背景色'
      },
      {
        'name': '$color-form-component-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': '用于表单组件的背景'
      },
      {
        'name': '$color-content-bg',
        'type': 'color',
        'value': '#212224',
        'scssValue': '$color-bg-2',
        'scene': '用于内容的背景'
      },
      {
        'name': '$color-body-bg',
        'type': 'color',
        'value': '#1a1c1d',
        'scssValue': '$color-bg-3',
        'scene': '用于body的背景'
      }
    ]
  },
  {
    'title': '禁用色',
    'doc': 'true',
    'list': [
      {
        'name': '$disabled-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': '用于表单项禁用状态的背景色'
      },
      {
        'name': '$disabled-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': '用于表单项禁用状态的边框色'
      },
      {
        'name': '$disabled-color',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': '用于表单项禁用状态的字体色'
      }
    ]
  },
  {
    'title': '字体、字号、字体颜色、字重',
    'doc': 'true',
    'list': [
      {
        'name': '$font-family',
        'type': 'string',
        'value': '\'Microsoft YaHei\',\'PingFang SC\',\'Helvetica Neue\',Helvetica,Arial,STHeiTi,sans-serif,\'-apple-system\',\'BlinkMacSystemFont\',\'Segoe UI\',\'Hiragino Sans GB\'',
        'scssValue': '\'Microsoft YaHei\', \'PingFang SC\', \'Helvetica Neue\', Helvetica, Arial, STHeiTi, sans-serif,',
        'scene': ''
      },
      {
        'name': '$font-family-cute-icons',
        'type': 'string',
        'value': '\'cute-icons\'',
        'scssValue': '\'cute-icons\'',
        'scene': 'cute-icons'
      },
      {
        'name': '$text-size',
        'type': 'string',
        'value': '12px',
        'scssValue': '12px',
        'scene': '标准字体大小'
      },
      {
        'name': '$text-size-sm',
        'type': 'string',
        'value': '12px',
        'scssValue': '12px',
        'scene': '字号small'
      },
      {
        'name': '$text-size-md',
        'type': 'string',
        'value': '14px',
        'scssValue': '14px',
        'scene': '字号medium'
      },
      {
        'name': '$text-size-lg',
        'type': 'string',
        'value': '16px',
        'scssValue': '16px',
        'scene': '字号large'
      },
      {
        'name': '$text-size-xl',
        'type': 'string',
        'value': '18px',
        'scssValue': '18px',
        'scene': '字号extra large'
      },
      {
        'name': '$text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-neutral-10',
        'scene': '强调/正文标题'
      },
      {
        'name': '$text-color-light',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$color-neutral-9',
        'scene': '次强调/正文标题'
      },
      {
        'name': '$text-color-light-2',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': '置灰信息'
      },
      {
        'name': '$text-color-disabled',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$text-color-light-2',
        'scene': '置灰信息($text-color-light-2别名)'
      },
      {
        'name': '$text-color-feature',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$color-neutral-7',
        'scene': '说明文字'
      },
      {
        'name': '$text-color-placeholder',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$color-neutral-7',
        'scene': '组件占位文本'
      },
      {
        'name': '$text-weight',
        'type': 'string',
        'value': 'normal',
        'scssValue': 'normal',
        'scene': '标准字体粗细'
      },
      {
        'name': '$text-title-weight',
        'type': 'string',
        'value': 'bold',
        'scssValue': 'bold',
        'scene': '标题的字体粗细'
      }
    ]
  },
  {
    'title': '行间距',
    'doc': 'true',
    'list': [
      {
        'name': '$line-height',
        'type': 'string',
        'value': '1.5',
        'scssValue': '1.5',
        'scene': '标准行间距'
      }
    ]
  },
  {
    'title': '边框',
    'doc': 'true',
    'list': [
      {
        'name': '$border-color',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': '边框颜色'
      },
      {
        'name': '$border-color-hover',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$color-neutral-9',
        'scene': '悬停状态下的边框颜色'
      },
      {
        'name': '$border-color-light',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': '边框颜色-light'
      },
      {
        'name': '$border-color-dark',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': '边框颜色-dark'
      },
      {
        'name': '$border-radius',
        'type': 'string',
        'value': '3px',
        'scssValue': '3px',
        'scene': '边框圆角大小'
      },
      {
        'name': '$border-radius-md',
        'type': 'string',
        'value': '5px',
        'scssValue': '5px',
        'scene': '边框圆角大小medium，用于Card圆角'
      }
    ]
  },
  {
    'title': '间距',
    'doc': 'true',
    'list': [
      {
        'name': '$common-space',
        'type': 'string',
        'value': '4px',
        'scssValue': '4px',
        'scene': '标准间距'
      },
      {
        'name': '$common-space-2x',
        'type': 'string',
        'value': '8px',
        'scssValue': '$common-space * 2',
        'scene': '2倍间距'
      },
      {
        'name': '$common-space-3x',
        'type': 'string',
        'value': '12px',
        'scssValue': '$common-space * 3',
        'scene': '3倍间距'
      },
      {
        'name': '$common-space-4x',
        'type': 'string',
        'value': '16px',
        'scssValue': '$common-space * 4',
        'scene': '4倍间距'
      },
      {
        'name': '$common-space-5x',
        'type': 'string',
        'value': '20px',
        'scssValue': '$common-space * 5',
        'scene': '5倍间距'
      },
      {
        'name': '$common-space-6x',
        'type': 'string',
        'value': '24px',
        'scssValue': '$common-space * 6',
        'scene': '6倍间距'
      },
      {
        'name': '$common-space-7x',
        'type': 'string',
        'value': '28px',
        'scssValue': '$common-space * 7',
        'scene': '7倍间距'
      },
      {
        'name': '$common-space-8x',
        'type': 'string',
        'value': '32px',
        'scssValue': '$common-space * 8',
        'scene': '8倍间距'
      },
      {
        'name': '$common-space-9x',
        'type': 'string',
        'value': '36px',
        'scssValue': '$common-space * 9',
        'scene': '9倍间距'
      },
      {
        'name': '$common-space-10x',
        'type': 'string',
        'value': '40px',
        'scssValue': '$common-space * 10',
        'scene': '10倍间距'
      },
      {
        'name': '$common-space-6',
        'type': 'string',
        'value': '6px',
        'scssValue': '6px',
        'scene': '特殊场景使用6px'
      },
      {
        'name': '$common-space-10',
        'type': 'string',
        'value': '10px',
        'scssValue': '10px',
        'scene': '特殊场景使用10px'
      },
      {
        'name': '$padding',
        'type': 'string',
        'value': '4px',
        'scssValue': '$common-space',
        'scene': '标准padding'
      },
      {
        'name': '$padding-2x',
        'type': 'string',
        'value': '8px',
        'scssValue': '$common-space-2x',
        'scene': '2倍padding'
      },
      {
        'name': '$padding-3x',
        'type': 'string',
        'value': '12px',
        'scssValue': '$common-space-3x',
        'scene': '3倍padding'
      },
      {
        'name': '$padding-4x',
        'type': 'string',
        'value': '16px',
        'scssValue': '$common-space-4x',
        'scene': '4倍padding'
      },
      {
        'name': '$padding-5x',
        'type': 'string',
        'value': '20px',
        'scssValue': '$common-space-5x',
        'scene': '5倍padding'
      },
      {
        'name': '$padding-6x',
        'type': 'string',
        'value': '24px',
        'scssValue': '$common-space-6x',
        'scene': '6倍padding'
      },
      {
        'name': '$padding-7x',
        'type': 'string',
        'value': '28px',
        'scssValue': '$common-space-7x',
        'scene': '7倍padding'
      },
      {
        'name': '$padding-8x',
        'type': 'string',
        'value': '32px',
        'scssValue': '$common-space-8x',
        'scene': '8倍padding'
      },
      {
        'name': '$padding-9x',
        'type': 'string',
        'value': '36px',
        'scssValue': '$common-space-9x',
        'scene': '9倍padding'
      },
      {
        'name': '$padding-10x',
        'type': 'string',
        'value': '40px',
        'scssValue': '$common-space-10x',
        'scene': '10倍padding'
      },
      {
        'name': '$padding-6',
        'type': 'string',
        'value': '6px',
        'scssValue': '$common-space-6',
        'scene': '特殊场景padding使用6px'
      },
      {
        'name': '$padding-10',
        'type': 'string',
        'value': '10px',
        'scssValue': '$common-space-10',
        'scene': '特殊场景padding使用10px'
      },
      {
        'name': '$margin',
        'type': 'string',
        'value': '4px',
        'scssValue': '$common-space',
        'scene': '标准margin'
      },
      {
        'name': '$margin-2x',
        'type': 'string',
        'value': '8px',
        'scssValue': '$common-space-2x',
        'scene': '2倍margin'
      },
      {
        'name': '$margin-3x',
        'type': 'string',
        'value': '12px',
        'scssValue': '$common-space-3x',
        'scene': '3倍margin'
      },
      {
        'name': '$margin-4x',
        'type': 'string',
        'value': '16px',
        'scssValue': '$common-space-4x',
        'scene': '4倍margin'
      },
      {
        'name': '$margin-5x',
        'type': 'string',
        'value': '20px',
        'scssValue': '$common-space-5x',
        'scene': '5倍margin'
      },
      {
        'name': '$margin-6x',
        'type': 'string',
        'value': '24px',
        'scssValue': '$common-space-6x',
        'scene': '6倍margin'
      },
      {
        'name': '$margin-7x',
        'type': 'string',
        'value': '28px',
        'scssValue': '$common-space-7x',
        'scene': '7倍margin'
      },
      {
        'name': '$margin-8x',
        'type': 'string',
        'value': '32px',
        'scssValue': '$common-space-8x',
        'scene': '8倍margin'
      },
      {
        'name': '$margin-9x',
        'type': 'string',
        'value': '36px',
        'scssValue': '$common-space-9x',
        'scene': '9倍margin'
      },
      {
        'name': '$margin-10x',
        'type': 'string',
        'value': '40px',
        'scssValue': '$common-space-10x',
        'scene': '10倍margin'
      },
      {
        'name': '$margin-6',
        'type': 'string',
        'value': '6px',
        'scssValue': '$common-space-6',
        'scene': '特殊场景margin使用6px'
      },
      {
        'name': '$margin-10',
        'type': 'string',
        'value': '10px',
        'scssValue': '$common-space-10',
        'scene': '特殊场景margin使用10px'
      }
    ]
  },
  {
    'title': '阴影',
    'doc': 'true',
    'list': [
      {
        'name': '$shadow-1',
        'type': 'string',
        'value': '0 0 8px 0 rgba(0,0,0,.1)',
        'scssValue': '0 0 8px 0 rgba(0, 0, 0, 10%)',
        'scene': '一级阴影'
      },
      {
        'name': '$shadow-2',
        'type': 'string',
        'value': '0 0 15px 0 rgba(0,0,0,.2)',
        'scssValue': '0 0 15px 0 rgba(0, 0, 0, 20%)',
        'scene': '二级阴影'
      },
      {
        'name': '$shadow-3',
        'type': 'string',
        'value': '0 0 40px 0 rgba(0,0,0,.3)',
        'scssValue': '0 0 40px 0 rgba(0, 0, 0, 30%)',
        'scene': '三级阴影'
      },
      {
        'name': '$shadow-form-item',
        'type': 'string',
        'value': '0 2px 2px 0 rgba(0,0,0,.2)',
        'scssValue': '0 2px 2px 0 rgba(0, 0, 0, 20%)',
        'scene': '表单项阴影，组件Focused状态使用 4级'
      }
    ]
  },
  {
    'title': '页面框架',
    'doc': 'true',
    'list': [
      {
        'name': '$cute-layout-header-height',
        'type': 'string',
        'value': '50px',
        'scssValue': '50px',
        'scene': 'header高度'
      },
      {
        'name': '$cute-layout-header-logo-height',
        'type': 'string',
        'value': '22px',
        'scssValue': '22px',
        'scene': 'logo高度'
      },
      {
        'name': '$cute-layout-header-sub-logo-height',
        'type': 'string',
        'value': '15px',
        'scssValue': '15px',
        'scene': '次logo高度'
      },
      {
        'name': '$cute-layout-header-text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-white',
        'scene': 'header文字颜色'
      },
      {
        'name': '$cute-layout-header-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$neutral-1',
        'scene': 'header背景色'
      },
      {
        'name': '$cute-layout-header-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$neutral-5',
        'scene': 'header边框色'
      },
      {
        'name': '$cute-layout-sidebar-width',
        'type': 'string',
        'value': '190px',
        'scssValue': '190px',
        'scene': '侧边栏宽度'
      },
      {
        'name': '$cute-layout-sidebar-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': '侧边栏背景色'
      },
      {
        'name': '$cute-layout-sidebar-border',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': '侧边栏边框色'
      },
      {
        'name': '$cute-layout-sidebar-item-bg-hover',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': '侧边栏菜单悬停背景色'
      },
      {
        'name': '$cute-layout-sidebar-color-master',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': '侧边栏主题色'
      },
      {
        'name': '$cute-layout-sidebar-text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$text-color',
        'scene': '侧边栏文字色'
      },
      {
        'name': '$cute-layout-sidebar-arrow-color',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$text-color-light',
        'scene': '侧边栏箭头色'
      },
      {
        'name': '$header-input-bg',
        'type': 'color',
        'value': '#34373a',
        'scssValue': '$neutral-2',
        'scene': '头部输入框背景色'
      },
      {
        'name': '$header-search-text-color',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$neutral-7',
        'scene': '头部搜索栏文字色'
      }
    ]
  },
  {
    'title': 'Tag',
    'doc': 'false',
    'list': [
      {
        'name': '$tag-master',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$color-master-bg-light-2',
        'scene': '主题色标签背景'
      },
      {
        'name': '$tag-master-border',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': '主题色标签边框'
      },
      {
        'name': '$tag-info',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': '信息色标签背景'
      },
      {
        'name': '$tag-info-dark',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': '信息色标签Dark类型背景'
      },
      {
        'name': '$tag-info-border',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': '信息色标签边框'
      },
      {
        'name': '$tag-info-text',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$text-color',
        'scene': '信息色标签字体颜色'
      },
      {
        'name': '$tag-success',
        'type': 'color',
        'value': '#1d312b',
        'scssValue': '$color-success-bg',
        'scene': '成功色标签背景'
      },
      {
        'name': '$tag-success-border',
        'type': 'color',
        'value': '#21b66e',
        'scssValue': '$color-success',
        'scene': '成功色标签边框'
      },
      {
        'name': '$tag-warning',
        'type': 'color',
        'value': '#372921',
        'scssValue': '$color-warning-bg',
        'scene': '警告色标签背景'
      },
      {
        'name': '$tag-warning-border',
        'type': 'color',
        'value': '#de7f32',
        'scssValue': '$color-warning',
        'scene': '警告色标签边框'
      },
      {
        'name': '$tag-danger',
        'type': 'color',
        'value': '#372125',
        'scssValue': '$color-danger-bg',
        'scene': '危险色标签背景'
      },
      {
        'name': '$tag-danger-border',
        'type': 'color',
        'value': '#de4040',
        'scssValue': '$color-danger',
        'scene': '危险色标签边框'
      },
      {
        'name': '$tag-fatal',
        'type': 'color',
        'value': '#642d2e',
        'scssValue': '$color-fatal-bg',
        'scene': '危险色标签背景'
      },
      {
        'name': '$tag-fatal-border',
        'type': 'color',
        'value': '#f8c1ba',
        'scssValue': '$color-fatal',
        'scene': '危险色标签边框'
      },
      {
        'name': '$tag-weak',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': '轻微提示色标签背景'
      },
      {
        'name': '$tag-weak-border',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': '轻微提示色标签边框'
      },
      {
        'name': '$tag-ct',
        'type': 'color',
        'value': '#450015',
        'scssValue': '$color-ct-bg',
        'scene': 'CT特殊色标签背景'
      },
      {
        'name': '$tag-ct-border',
        'type': 'color',
        'value': '#c30927',
        'scssValue': '$color-ct',
        'scene': 'CT特殊色标签边框'
      }
    ]
  },
  {
    'title': 'Button',
    'doc': 'false',
    'list': [
      {
        'name': '$button-default-text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$text-color',
        'scene': ''
      },
      {
        'name': '$button-default-text-color-disabled',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$text-color-light-2',
        'scene': ''
      },
      {
        'name': '$button-default-color-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$button-default-color-bg-disabled',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$button-default-color-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      },
      {
        'name': '$button-default-color-border-disabled',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      },
      {
        'name': '$button-icon-color',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$text-color-light-2',
        'scene': ''
      },
      {
        'name': '$button-group-border',
        'type': 'string',
        'value': 'rgba(36,37,40,.5)',
        'scssValue': 'rgba($color-bg-1, 0.5)',
        'scene': ''
      },
      {
        'name': '$button-margin',
        'type': 'string',
        'value': '12px',
        'scssValue': '$margin-3x',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Radio',
    'doc': 'false',
    'list': [
      {
        'name': '$radio-checked-bg',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-white',
        'scene': '普通radio背景色'
      },
      {
        'name': '$radio-group-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-white',
        'scene': ''
      },
      {
        'name': '$radio-group-bg',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$radio-group-disabled-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$disabled-bg',
        'scene': ''
      },
      {
        'name': '$radio-group-border-color',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$disabled-border',
        'scene': ''
      },
      {
        'name': '$radio-group-border-disabled-color',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$disabled-border',
        'scene': ''
      },
      {
        'name': '$radio-group-border-disabled-bg',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$color-master-disabled',
        'scene': ''
      },
      {
        'name': '$radio-width',
        'type': 'string',
        'value': '12px',
        'scssValue': '12px',
        'scene': '普通按钮外部宽高'
      },
      {
        'name': '$radio-label-width',
        'type': 'string',
        'value': '6px',
        'scssValue': '6px',
        'scene': '普通按钮 中间按钮宽高'
      },
      {
        'name': '$input-lg-padding',
        'type': 'string',
        'value': '0 24px',
        'scssValue': '0 $padding-6x',
        'scene': ''
      },
      {
        'name': '$input-md-padding',
        'type': 'string',
        'value': '0 16px',
        'scssValue': '0 $padding-4x',
        'scene': ''
      },
      {
        'name': '$input-sm-padding',
        'type': 'string',
        'value': '0 12px',
        'scssValue': '0 $padding-3x',
        'scene': ''
      },
      {
        'name': '$input-xs-padding',
        'type': 'string',
        'value': '0 12px',
        'scssValue': '0 $padding-3x',
        'scene': ''
      },
      {
        'name': '$cute-special-radio-size',
        'type': 'string',
        'value': '3px',
        'scssValue': '3px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Form',
    'doc': 'false',
    'list': [
      {
        'name': '$form-item-label-line-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '32px',
        'scene': 'label'
      },
      {
        'name': '$form-item-content-line-height',
        'type': 'string',
        'value': '30px',
        'scssValue': '30px',
        'scene': 'content'
      },
      {
        'name': '$form-item-error-padding-top',
        'type': 'string',
        'value': '6px',
        'scssValue': '$padding-6',
        'scene': ''
      },
      {
        'name': '$form-item-margin-bottom',
        'type': 'string',
        'value': '24px',
        'scssValue': '$margin-6x',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Input',
    'doc': 'false',
    'list': [
      {
        'name': '$input-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$input-disabled-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$disabled-bg',
        'scene': ''
      },
      {
        'name': '$input-hover-border',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$border-color-hover',
        'scene': ''
      },
      {
        'name': '$input-active-border',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$input-xs-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$input-sm-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$input-md-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '32px',
        'scene': ''
      },
      {
        'name': '$input-lg-height',
        'type': 'string',
        'value': '40px',
        'scssValue': '40px',
        'scene': ''
      },
      {
        'name': '$input-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '$input-md-height',
        'scene': ''
      },
      {
        'name': '$input-prefix-padding',
        'type': 'string',
        'value': '36px',
        'scssValue': '$padding-9x',
        'scene': ''
      },
      {
        'name': '$input-suffix-padding',
        'type': 'string',
        'value': '36px',
        'scssValue': '$padding-9x',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Select',
    'doc': 'false',
    'list': [
      {
        'name': '$select-border-color-hover',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$border-color-hover',
        'scene': ''
      },
      {
        'name': '$select-disabled-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$disabled-border',
        'scene': ''
      },
      {
        'name': '$select-color',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$select-color-disabled',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$neutral-6',
        'scene': ''
      },
      {
        'name': '$select-dropdown-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$select-tag-color',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': ''
      },
      {
        'name': '$select-tag-color-hover',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      },
      {
        'name': '$select-xs-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$select-sm-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$select-md-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '32px',
        'scene': ''
      },
      {
        'name': '$select-lg-height',
        'type': 'string',
        'value': '40px',
        'scssValue': '40px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Range Editor',
    'doc': 'false',
    'list': [
      {
        'name': '$range-editor-disabled-bg',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$color-master-bg-light-2',
        'scene': ''
      },
      {
        'name': '$range-editor-multiple-bg',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$color-master-bg-light-2',
        'scene': ''
      },
      {
        'name': '$range-editor-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$range-editor-tags-size',
        'type': 'string',
        'value': '16px',
        'scssValue': '16px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Checkbox',
    'doc': 'false',
    'list': [
      {
        'name': '$checkbox-label-size',
        'type': 'string',
        'value': '14px',
        'scssValue': '14px',
        'scene': ''
      },
      {
        'name': '$checkbox-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$checkbox-border',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$checkbox-button',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$color-master-bg-light-2',
        'scene': ''
      },
      {
        'name': '$checkbox-button-disabled',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$checkbox-button-hover',
        'type': 'color',
        'value': '#232f4f',
        'scssValue': '$color-master-bg-light',
        'scene': ''
      },
      {
        'name': '$checkbox-button-disabled-select',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$color-master-disabled',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Table',
    'doc': 'false',
    'list': [
      {
        'name': '$table-header-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$table-cell-bg',
        'type': 'color',
        'value': '#b8babf',
        'scssValue': '$color-neutral-8',
        'scene': ''
      },
      {
        'name': '$table-cell-padding-xs',
        'type': 'string',
        'value': '6px',
        'scssValue': '$padding-6',
        'scene': ''
      },
      {
        'name': '$table-cell-padding-sm',
        'type': 'string',
        'value': '6px',
        'scssValue': '$padding-6',
        'scene': ''
      },
      {
        'name': '$table-cell-padding-md',
        'type': 'string',
        'value': '10px',
        'scssValue': '$padding-10',
        'scene': ''
      },
      {
        'name': '$table-cell-padding-lg',
        'type': 'string',
        'value': '12px',
        'scssValue': '$padding-3x',
        'scene': ''
      },
      {
        'name': '$table-cell-selection-line-height',
        'type': 'string',
        'value': '20px',
        'scssValue': '20px',
        'scene': ''
      },
      {
        'name': '$table-border-color',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': ''
      },
      {
        'name': '$table-sort-caret-bg',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': ''
      },
      {
        'name': '$table-fixed-box-shadow',
        'type': 'string',
        'value': '0px 2px 8px rgba(100,110,144,.2)',
        'scssValue': '0px 2px 8px rgba(100, 110, 144, 0.2)',
        'scene': ''
      },
      {
        'name': '$table-row-hover-background-color',
        'type': 'color',
        'value': '#34373a',
        'scssValue': '$color-neutral-2',
        'scene': ''
      },
      {
        'name': '$table-filter-item-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '32px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Pagination',
    'doc': 'false',
    'list': [
      {
        'name': '$pagination-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$pagination-button-color',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$text-color-light',
        'scene': ''
      },
      {
        'name': '$pagination-hover-color',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$pagination-hover-bg',
        'type': 'color',
        'value': '#1a1c1d',
        'scssValue': '$color-bg-3',
        'scene': ''
      },
      {
        'name': '$pagination-active-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-white',
        'scene': ''
      },
      {
        'name': '$pagination-active-bg',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$pagination-active-bg-disabled',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$color-master-disabled',
        'scene': ''
      },
      {
        'name': '$pagination-font-size',
        'type': 'string',
        'value': '12px',
        'scssValue': '$text-size',
        'scene': ''
      },
      {
        'name': '$pagination-font-size-sm',
        'type': 'string',
        'value': '12px',
        'scssValue': '$text-size',
        'scene': ''
      },
      {
        'name': '$pagination-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$pagination-height-sm',
        'type': 'string',
        'value': '24px',
        'scssValue': '24px',
        'scene': ''
      },
      {
        'name': '$pagination-button-width',
        'type': 'string',
        'value': '20px',
        'scssValue': '20px',
        'scene': ''
      },
      {
        'name': '$pagination-button-width-sm',
        'type': 'string',
        'value': '20px',
        'scssValue': '20px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Transfer',
    'doc': 'false',
    'list': [
      {
        'name': '$transfer-header-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$transfer-item-active-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': 'Transfer组件选中项背景色'
      },
      {
        'name': '$transfer-item-hover-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': 'Transfer组件选中项悬停色'
      },
      {
        'name': '$transfer-footert-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': 'Transfer组件footer背景色'
      },
      {
        'name': '$transfer-item-height',
        'type': 'string',
        'value': '32px',
        'scssValue': '32px',
        'scene': 'Transfer组件选项高度'
      },
      {
        'name': '$transfer-header-height',
        'type': 'string',
        'value': '40px',
        'scssValue': '40px',
        'scene': 'Transfer组件header高度'
      },
      {
        'name': '$transfer-footer-height',
        'type': 'string',
        'value': '40px',
        'scssValue': '40px',
        'scene': 'Transfer组件footer高度'
      },
      {
        'name': '$transfer-filter-input-height',
        'type': 'string',
        'value': '24px',
        'scssValue': '$input-sm-height',
        'scene': 'Transfer组件搜索框高度'
      },
      {
        'name': '$transfer-filter-input-margin',
        'type': 'string',
        'value': '10px',
        'scssValue': '$margin-10',
        'scene': 'Transfer组件搜索框高度'
      },
      {
        'name': '$transfer-filter-height',
        'type': 'string',
        'value': '34px',
        'scssValue': 'calc($transfer-filter-input-height + $transfer-filter-input-margin)',
        'scene': 'Transfer组件filter区域高度'
      }
    ]
  },
  {
    'title': 'Tabs',
    'doc': 'false',
    'list': [
      {
        'name': '$tabs-master',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': '主题色标签背景'
      },
      {
        'name': '$tabs-default-line-color',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': '默认风格的线条颜色'
      }
    ]
  },
  {
    'title': 'Switch',
    'doc': 'false',
    'list': [
      {
        'name': '$switch-core-bg',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': ''
      },
      {
        'name': '$switch-core-bg-disabled',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      },
      {
        'name': '$switch-core-color',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$switch-small-height',
        'type': 'string',
        'value': '16px',
        'scssValue': '$common-space-4x',
        'scene': ''
      },
      {
        'name': '$switch-small-core-size',
        'type': 'string',
        'value': '12px',
        'scssValue': '$common-space-3x',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Tooltip',
    'doc': 'false',
    'list': [
      {
        'name': '$tooltip-bg',
        'type': 'color',
        'value': '#b8babf',
        'scssValue': '$color-neutral-8',
        'scene': ''
      },
      {
        'name': '$tooltop-text-color',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$tooltip-light-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$tooltop-light-text-color',
        'type': 'color',
        'value': '#c6c7cc',
        'scssValue': '$color-neutral-9',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Notification',
    'doc': 'false',
    'list': [
      {
        'name': '$notification-border-color',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Upload',
    'doc': 'false',
    'list': [
      {
        'name': '$upload-progress-bar-height',
        'type': 'string',
        'value': '2px',
        'scssValue': '2px',
        'scene': ''
      },
      {
        'name': '$upload-color',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$upload-border-color',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$border-color',
        'scene': ''
      },
      {
        'name': '$upload-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$upload-bg-hover',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$upload-font-size',
        'type': 'string',
        'value': '12px',
        'scssValue': '$text-size-sm',
        'scene': ''
      },
      {
        'name': '$upload-tips-font-color',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$color-neutral-7',
        'scene': ''
      },
      {
        'name': '$upload-font-active-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-neutral-10',
        'scene': ''
      },
      {
        'name': '$upload-picture-card-size',
        'type': 'string',
        'value': '100px',
        'scssValue': '100px',
        'scene': ''
      },
      {
        'name': '$upload-picture-card-progress-circle-size',
        'type': 'string',
        'value': '72px',
        'scssValue': '72px',
        'scene': ''
      },
      {
        'name': '$upload-file-uploader-width',
        'type': 'string',
        'value': '320px',
        'scssValue': '320px',
        'scene': ''
      },
      {
        'name': '$upload-dragger-border-radius',
        'type': 'string',
        'value': '3px',
        'scssValue': '$border-radius',
        'scene': ''
      },
      {
        'name': '$upload-dragger-text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$text-color',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Card',
    'doc': 'false',
    'list': [
      {
        'name': '$card-bg',
        'type': 'color',
        'value': '#212224',
        'scssValue': '$color-bg-2',
        'scene': ''
      },
      {
        'name': '$card-shadow',
        'type': 'string',
        'value': '0 0 8px 0 rgba(0,0,0,.1)',
        'scssValue': '$shadow-1',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Badge',
    'doc': 'false',
    'list': [
      {
        'name': '$badge-content-padding',
        'type': 'string',
        'value': '5px',
        'scssValue': '5px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Time',
    'doc': 'false',
    'list': [
      {
        'name': '$date-panel-btn-size',
        'type': 'string',
        'value': '28px',
        'scssValue': '28px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Cascader',
    'doc': 'false',
    'list': [
      {
        'name': '$cascader-tag-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$cascader-tag-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      },
      {
        'name': '$cascader-tag-close-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$white',
        'scene': ''
      },
      {
        'name': '$cascader-tag-close-bg',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': ''
      },
      {
        'name': '$cascader-node-hover',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$cascader-panel-bg',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Collapse',
    'doc': 'false',
    'list': [
      {
        'name': '$collapse-border-color',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': ''
      },
      {
        'name': '$collapse-content-background-color',
        'type': 'color',
        'value': '#242528',
        'scssValue': '$color-bg-1',
        'scene': ''
      },
      {
        'name': '$collapse-header-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$collapse-header-arrow-color',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': ''
      },
      {
        'name': '$collapse-seperate-header-bg',
        'type': 'color',
        'value': '#34373a',
        'scssValue': '$color-neutral-2',
        'scene': ''
      },
      {
        'name': '$collapse-header-height',
        'type': 'string',
        'value': '36px',
        'scssValue': '36px',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Steps',
    'doc': 'false',
    'list': [
      {
        'name': '$steps-bg-color',
        'type': 'color',
        'value': '#212224',
        'scssValue': '$color-bg-2',
        'scene': '覆盖色块，与背景同色'
      },
      {
        'name': '$steps-icon-bg',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': '完成步骤背景色'
      }
    ]
  },
  {
    'title': 'Dialog',
    'doc': 'false',
    'list': [
      {
        'name': '$dialog-header-border',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': ''
      },
      {
        'name': '$dialog-footer-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Icon',
    'doc': 'true',
    'list': [
      {
        'name': '$icon-color',
        'type': 'color',
        'value': '#737579',
        'scssValue': '$color-neutral-6',
        'scene': 'icon颜色'
      }
    ]
  },
  {
    'title': 'Loading',
    'doc': 'false',
    'list': [
      {
        'name': '$loading-default-color',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      },
      {
        'name': '$loading-default-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$color-neutral-5',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Alert',
    'doc': 'false',
    'list': [
      {
        'name': '$alert-text-color',
        'type': 'color',
        'value': '#a5a8ac',
        'scssValue': '$text-color-feature',
        'scene': ''
      },
      {
        'name': '$alert-info-bg',
        'type': 'color',
        'value': '#202638',
        'scssValue': '$color-master-bg-light-2',
        'scene': ''
      },
      {
        'name': '$alert-success-bg',
        'type': 'color',
        'value': '#1d312b',
        'scssValue': '$color-success-bg',
        'scene': ''
      },
      {
        'name': '$alert-warning-bg',
        'type': 'color',
        'value': '#372921',
        'scssValue': '$color-warning-bg',
        'scene': ''
      },
      {
        'name': '$alert-danger-bg',
        'type': 'color',
        'value': '#372125',
        'scssValue': '$color-danger-bg',
        'scene': ''
      },
      {
        'name': '$alert-weak-bg',
        'type': 'color',
        'value': '#292b2e',
        'scssValue': '$color-neutral-1',
        'scene': ''
      }
    ]
  },
  {
    'title': 'CuteSlider',
    'doc': 'false',
    'list': [
      {
        'name': '$slider-stop-color',
        'type': 'color',
        'value': '#3f4345',
        'scssValue': '$color-neutral-3',
        'scene': ''
      },
      {
        'name': '$slider-stop-border-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-white',
        'scene': ''
      },
      {
        'name': '$slider-height',
        'type': 'string',
        'value': '4px',
        'scssValue': '4px',
        'scene': ''
      },
      {
        'name': '$cute-slider-size',
        'type': 'string',
        'value': '14px',
        'scssValue': '14px',
        'scene': '特殊大小'
      },
      {
        'name': '$cute-slider-text-color',
        'type': 'color',
        'value': '#fff',
        'scssValue': '$color-neutral-10',
        'scene': ''
      },
      {
        'name': '$cute-slider-bg',
        'type': 'color',
        'value': '#34373a',
        'scssValue': '$color-neutral-2',
        'scene': ''
      },
      {
        'name': '$cute-slider-line-color',
        'type': 'color',
        'value': '#3967d6',
        'scssValue': '$color-master',
        'scene': ''
      },
      {
        'name': '$cute-slider-disabled-border',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$disabled-border',
        'scene': ''
      },
      {
        'name': '$cute-slider-btn-bg',
        'type': 'string',
        'value': 'linear-gradient(to bottom, #fff, #232f4f)',
        'scssValue': 'linear-gradient(to bottom, $color-white, $color-master-bg-light)',
        'scene': ''
      },
      {
        'name': '$cute-slider-btn-width',
        'type': 'string',
        'value': '17px',
        'scssValue': '17px',
        'scene': ''
      },
      {
        'name': '$cute-slider-btn-height',
        'type': 'string',
        'value': '22px',
        'scssValue': '22px',
        'scene': ''
      },
      {
        'name': '$cute-slider-btn-color',
        'type': 'color',
        'value': '#3357ac',
        'scssValue': '$color-master-hover',
        'scene': ''
      },
      {
        'name': '$cute-slider-bg-disabled',
        'type': 'color',
        'value': '#535558',
        'scssValue': '$disabled-border',
        'scene': ''
      },
      {
        'name': '$cute-slider-btn-color-disabled',
        'type': 'color',
        'value': '#293a63',
        'scssValue': '$color-master-disabled',
        'scene': ''
      }
    ]
  },
  {
    'title': 'Animation',
    'doc': 'true',
    'list': [
      {
        'name': '$transition-time',
        'type': 'string',
        'value': '200ms',
        'scssValue': '200ms',
        'scene': '动画渐变时间'
      }
    ]
  },
  {
    'title': 'Z-Index',
    'doc': 'true',
    'list': [
      {
        'name': '$zindex-badge',
        'type': 'string',
        'value': 'auto',
        'scssValue': 'auto',
        'scene': 'badge的z-index值'
      },
      {
        'name': '$zindex-normal',
        'type': 'string',
        'value': '1',
        'scssValue': '1',
        'scene': 'Table固定行列的z-index值'
      },
      {
        'name': '$zindex-table-fixed',
        'type': 'string',
        'value': '2',
        'scssValue': '2',
        'scene': 'Table固定行列的z-index值'
      },
      {
        'name': '$zindex-affix',
        'type': 'string',
        'value': '10',
        'scssValue': '10',
        'scene': '吸附内容的z-index值'
      },
      {
        'name': '$zindex-fixed-component',
        'type': 'string',
        'value': '9',
        'scssValue': '9',
        'scene': '吸顶/吸底组件的z-index值'
      },
      {
        'name': '$zindex-layout-sidebar',
        'type': 'string',
        'value': '10',
        'scssValue': '10',
        'scene': '侧边栏的z-index值'
      },
      {
        'name': '$zindex-modal',
        'type': 'string',
        'value': '1000',
        'scssValue': '1000',
        'scene': 'modal的z-index值'
      },
      {
        'name': '$zindex-modal-mask',
        'type': 'string',
        'value': '1000',
        'scssValue': '1000',
        'scene': 'modal遮罩的z-index值'
      },
      {
        'name': '$zindex-message',
        'type': 'string',
        'value': '1010',
        'scssValue': '1010',
        'scene': 'message的z-index值'
      },
      {
        'name': '$zindex-notification',
        'type': 'string',
        'value': '1010',
        'scssValue': '1010',
        'scene': 'notification的z-index值'
      },
      {
        'name': '$zindex-popover',
        'type': 'string',
        'value': '1030',
        'scssValue': '1030',
        'scene': 'popover的z-index值'
      },
      {
        'name': '$zindex-dropdown',
        'type': 'string',
        'value': '1050',
        'scssValue': '1050',
        'scene': 'dropdown的z-index值'
      },
      {
        'name': '$zindex-picker',
        'type': 'string',
        'value': '1050',
        'scssValue': '1050',
        'scene': 'picker的z-index值'
      },
      {
        'name': '$zindex-popoconfirm',
        'type': 'string',
        'value': '1060',
        'scssValue': '1060',
        'scene': 'popoconfirm的z-index值'
      },
      {
        'name': '$zindex-tooltip',
        'type': 'string',
        'value': '1070',
        'scssValue': '1070',
        'scene': 'tooltip的z-index值'
      },
      {
        'name': '$zindex-image',
        'type': 'string',
        'value': '1080',
        'scssValue': '1080',
        'scene': 'image的z-index值'
      },
      {
        'name': '$zindex-layout-header',
        'type': 'string',
        'value': '1999',
        'scssValue': '1999',
        'scene': 'header的z-index值'
      },
      {
        'name': '$zindex-loading-mask',
        'type': 'string',
        'value': '2000',
        'scssValue': '2000',
        'scene': 'loading状态遮罩的z-index值'
      }
    ]
  },
  {
    'title': '响应式断点',
    'doc': 'true',
    'list': [
      {
        'name': '$screen-lg',
        'type': 'string',
        'value': '1280px',
        'scssValue': '1280px',
        'scene': '屏幕最小分辨率，用于布局主容器宽度计算'
      }
    ]
  },
  {
    'title': '图表默认的颜色',
    'doc': 'true',
    'list': [
      {
        'name': '$chart-color-1',
        'type': 'color',
        'value': '#91c6f5',
        'scssValue': '#91c6f5',
        'scene': ''
      },
      {
        'name': '$chart-color-2',
        'type': 'color',
        'value': '#8cd4ca',
        'scssValue': '#8cd4ca',
        'scene': ''
      },
      {
        'name': '$chart-color-3',
        'type': 'color',
        'value': '#e8d065',
        'scssValue': '#e8d065',
        'scene': ''
      },
      {
        'name': '$chart-color-4',
        'type': 'color',
        'value': '#fdac6f',
        'scssValue': '#fdac6f',
        'scene': ''
      },
      {
        'name': '$chart-color-5',
        'type': 'color',
        'value': '#a39df7',
        'scssValue': '#a39df7',
        'scene': ''
      },
      {
        'name': '$chart-color-6',
        'type': 'color',
        'value': '#8ed8f3',
        'scssValue': '#8ed8f3',
        'scene': ''
      },
      {
        'name': '$chart-color-7',
        'type': 'color',
        'value': '#ffab9a',
        'scssValue': '#ffab9a',
        'scene': ''
      },
      {
        'name': '$chart-color-8',
        'type': 'color',
        'value': '#78a1da',
        'scssValue': '#78a1da',
        'scene': ''
      },
      {
        'name': '$chart-color-9',
        'type': 'color',
        'value': '#fa7175',
        'scssValue': '#fa7175',
        'scene': ''
      },
      {
        'name': '$chart-color-10',
        'type': 'color',
        'value': '#93c2bb',
        'scssValue': '#93c2bb',
        'scene': ''
      },
      {
        'name': '$chart-color-11',
        'type': 'color',
        'value': '#81dbe3',
        'scssValue': '#81dbe3',
        'scene': ''
      },
      {
        'name': '$chart-color-12',
        'type': 'color',
        'value': '#f48fb4',
        'scssValue': '#f48fb4',
        'scene': ''
      }
    ]
  },
  {
    'title': '图表高亮颜色',
    'doc': 'true',
    'list': [
      {
        'name': '$chart-color-h-1',
        'type': 'color',
        'value': '#9fd9ff',
        'scssValue': '#9fd9ff',
        'scene': ''
      },
      {
        'name': '$chart-color-h-2',
        'type': 'color',
        'value': '#9ae9de',
        'scssValue': '#9ae9de',
        'scene': ''
      },
      {
        'name': '$chart-color-h-3',
        'type': 'color',
        'value': '#ffe46f',
        'scssValue': '#ffe46f',
        'scene': ''
      },
      {
        'name': '$chart-color-h-4',
        'type': 'color',
        'value': '#ffbd7a',
        'scssValue': '#ffbd7a',
        'scene': ''
      },
      {
        'name': '$chart-color-h-5',
        'type': 'color',
        'value': '#b3acff',
        'scssValue': '#b3acff',
        'scene': ''
      },
      {
        'name': '$chart-color-h-6',
        'type': 'color',
        'value': '#9cedff',
        'scssValue': '#9cedff',
        'scene': ''
      },
      {
        'name': '$chart-color-h-7',
        'type': 'color',
        'value': '#ffbca9',
        'scssValue': '#ffbca9',
        'scene': ''
      },
      {
        'name': '$chart-color-h-8',
        'type': 'color',
        'value': '#84b1ef',
        'scssValue': '#84b1ef',
        'scene': ''
      },
      {
        'name': '$chart-color-h-9',
        'type': 'color',
        'value': '#ff7c80',
        'scssValue': '#ff7c80',
        'scene': ''
      },
      {
        'name': '$chart-color-h-10',
        'type': 'color',
        'value': '#a1d5cd',
        'scssValue': '#a1d5cd',
        'scene': ''
      },
      {
        'name': '$chart-color-h-11',
        'type': 'color',
        'value': '#8df0f9',
        'scssValue': '#8df0f9',
        'scene': ''
      },
      {
        'name': '$chart-color-h-12',
        'type': 'color',
        'value': '#ff9dc6',
        'scssValue': '#ff9dc6',
        'scene': ''
      }
    ]
  }
]
