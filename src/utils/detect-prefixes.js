/**
 * Detecting prefixes for saving time and bytes
 */
export default function detectPrefixes() {
  let transform
  let transition
  let transitionEnd
  let hasTranslate3d
  (function() {
    const ele = document.createElement('_')
    const style = ele.style
    let prop
    if (style[prop = 'webkitTransition'] === '') {
      transitionEnd = 'webkitTransitionEnd'
      transition = prop
    }
    if (style[prop = 'transition'] === '') {
      transitionEnd = 'transitionend'
      transition = prop
    }
    if (style[prop = 'webkitTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'msTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'transform'] === '') {
      transform = prop
    }
    document.body.insertBefore(ele, null)
    style[transform] = 'translate3d(0, 0, 0)'
    hasTranslate3d = !!global.getComputedStyle(ele).getPropertyValue(transform)
    document.body.removeChild(ele)
  }())
  return {
    transform,
    transition,
    transitionEnd,
    hasTranslate3d
  }
}
