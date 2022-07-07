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
