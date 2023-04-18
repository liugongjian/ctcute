/*
 * @Author: 胡佳婷
 * @Date: 2023-04-18 17:17:41
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 20:47:53
 * @Description:
 */
export * from 'element-ui/types/element-ui'

import * as ElementUI from 'element-ui/types/element-ui'
import { CuteAppendix } from './CuteAppendix'
import { CuteArea } from './CuteArea'
import { CuteButtonGroup } from './CuteButtonGroup'
import { CuteChart } from './CuteChart'
import { CuteDistributionBar } from './CuteDistributionBar'
import { CuteEditInput } from './CuteEditInput'
import { CuteFormInfo } from './CuteFormInfo'
import { CuteLayout } from './CuteLayout'
import { CuteRemindInput } from './CuteRemindInput'
import { CuteRemindSelect } from './CuteRemindSelect'
import { CuteSelectedInput } from './CuteSelectedInput'
import { CuteSelectTree } from './CuteSelectTree'
import { CuteSlider } from './CuteSlider'
import { CuteSortTable } from './CuteSortTable'
import { CuteSpecialRadio } from './CuteSpecialRadio'
import { CuteState } from './CuteState'
import { CuteStepsMulti } from './CuteStepsMulti'
import { CuteTableColumnSettings } from './CuteTableColumnSettings'
import { CuteTableFilter } from './CuteTableFilter'
import { CuteTag } from './CuteTag'
import { CuteTitledBlock } from './CuteTitledBlock'



export default ElementUI

declare module '*.json' {
  const value: any
  export default value
}
