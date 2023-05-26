interface ISettings {
  title: string // Overrides the default title
  apiBaseUrl: string // 接口前缀
  logoIcon?: string // logo图标，可以是svgName或url
  logoText?: string // logo文字，若为空，则说明logoIcon使用了艺术化处理的文字图片
}

// You can customize below settings :)
const settings: ISettings = {
  title: '天翼云前端脚手架',
  apiBaseUrl: '/',
  logoIcon: require('./assets/images/cute-design.svg'),
}

export default settings
