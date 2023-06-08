/*
 * @Author: 朱凌浩
 * @Date: 2023-04-18 20:31:32
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-29 14:09:54
 * @Description:
 */
import { CuteComponent } from './component'
import { RouteConfig } from 'vue-router'

export type LayoutType = 'default' | 'fixed-navbar'
export type SidebarNavigationLink = {
  path: string
  title: string
  icon: string
  iconType: string
}
export declare class CuteLayout extends CuteComponent {
  /* 是否显示页眉 */
  header: boolean

  /* 是否显示侧边栏 */
  sidebar: boolean

  /* 是否显示页面导航栏(面包屑) */
  navbar: boolean

  /* 布局方式，可选类型: fixed-navbar(固定页面导航栏) */
  layout?: LayoutType

  /* 页面切换动画类型 */
  transition: string

  /* 自定义Class */
  customClass: string

  /* 主Logo图片URL，仅支持使用相对路径的图片地址 */
  headerLogo: string

  /* 二级Logo图片URL，仅支持使用相对路径的图片地址 */
  headerSubLogo: string

  /* 二级文本标题 */
  headerSubTitle: string

  /* 侧边栏菜单数据，格式同vue routes，默认获取项目全局路由 */
  sidebarRoutes: RouteConfig[]

  /* 显示菜单数据时的勾子方法，可以对动态对每个菜单项进行修改 */
  sidebarRoutesAfterEach: (route: RouteConfig) => RouteConfig

  /* 对菜单数据进行过滤 */
  sidebarFilter: (routes: RouteConfig[]) => RouteConfig[]

  /* 侧边栏标题 */
  sidebarTitle: string

  /* 侧边栏标题图标 */
  sidebarTitleIcon: string

  /* 侧边栏标题导航 */
  sidebarNavigation: SidebarNavigationLink[]

  /* 是否显示菜单收起开关 */
  sidebarKnob: boolean

  /* 侧边栏自定义Class */
  sidebarCustomClass: string

  /* 是否显示面包屑 */
  navbarBreadcrumb: boolean

  /* 面包屑自定义标题 */
  breadcrumbCustomTitle: string

  /* 仅显示面包屑最后一级 */
  breadcrumbShowLast: boolean

  /* 是否显示面包屑首页 */
  breadcrumbShowHome: boolean

  /* 显示面包屑时的勾子方法，可以对动态对每个菜单项进行修改 */
  breadcrumbAfterEach: (route: RouteRecord) => RouteRecord
}
