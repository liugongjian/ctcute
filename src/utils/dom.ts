/**
 * 给DOM元素添加一个class
 * @param elem DOM元素
 * @param className class名称
 */
export const addClass = (elem, className) => {
  if (!className) return
  const els = Array.isArray(elem) ? elem : [elem]
  els.forEach(el => {
    if (el.classList) {
      el.classList.add(className.split(' '))
    } else {
      el.className += ` ${className}`
    }
  })
}

/**
 * 给DOM元素删除一个class
 * @param elem DOM元素
 * @param className class名称
 */
export const removeClass = (elem, className) => {
  if (!className) return
  const els = Array.isArray(elem) ? elem : [elem]
  els.forEach(el => {
    if (el.classList) {
      el.classList.remove(className.split(' '))
    } else {
      el.className = el.className.replace(
        new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
        ' '
      )
    }
  })
}

/**
 * 手动触发窗口resize事件
 * @param elem DOM元素
 */
export function triggerResize(elem: Element | Window = window) {
  const event = document.createEvent('UIEvent')
  event.initEvent('resize', true, true)
  elem.dispatchEvent(event)
}
