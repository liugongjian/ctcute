import { VNode } from 'vue'
import { CuteComponent } from './component'

export interface CuteCardBoxSlots {
  content: VNode[]
  extra: VNode[]
  [key: string]: VNode[]
}

export declare class CuteCardBox extends CuteComponent {
  title: string
  contentHeight: string
  $slots: CuteCardBoxSlots
}
