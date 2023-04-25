interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  showTagsView: boolean // Controls tagsview display
  showSidebarLogo: boolean // Controls siderbar logo display
  fixedHeader: boolean // If true, will fix the header component
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
  apiBaseUrl: string // 接口前缀
  logoIcon?: string // logo图标，可以是svgName或url
  logoText?: string // logo文字，若为空，则说明logoIcon使用了艺术化处理的文字图片
}

// You can customize below settings :)
const settings: ISettings = {
  title: '天翼云前端脚手架',
  showSettings: true,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: false,
  errorLog: ['production'],
  sidebarTextTheme: true,
  apiBaseUrl: '/',
  logoIcon: require('./assets/images/cute-design.svg'),
}

export default settings
