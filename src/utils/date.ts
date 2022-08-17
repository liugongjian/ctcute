import { format } from 'date-fns'

/**
 * 格式化日期时间
 * @param date 可传入日期类型或者时间戳
 * @param formatString 格式化后的格式
 * @returns 格式化后的日期
 */
export const formatDatetime = (datetime: Date | number, formatString = 'yyyy-MM-dd HH:mm:ss') => {
  console.log(datetime)

  if (!datetime) return ''
  return format(datetime, formatString)
}
