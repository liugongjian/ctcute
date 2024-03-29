<script>
import TabBar from './tab-bar'
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'
import Locale from '@cutedesign/ui/mixins/locale'

function noop() {}
const firstUpperCase = str => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())
}

export default {
  name: 'TabNav',

  components: {
    TabBar,
  },

  mixins: [Locale],

  inject: ['rootTabs'],

  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    showAddInput: Boolean,
    addButtonText: String,
    onTabClick: {
      type: Function,
      default: noop,
    },
    onTabRemove: {
      type: Function,
      default: noop,
    },
    type: String,
    stretch: Boolean,
    addable: Boolean,
    size: String, // large|medium|small
    handleTabAdd: {
      type: Function,
      default: noop,
    },
  },

  data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true,
      newTabEditing: false,
      newTabName: this.defaultTabName,
    }
  },

  computed: {
    navStyle() {
      const dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${this.navOffset}px)`,
      }
    },
    sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height'
    },
    defaultTabName() {
      return this.addButtonText || this.t('cute.tabs.new')
    },
  },

  updated() {
    this.update()
  },

  mounted() {
    addResizeListener(this.$el, this.update)
    document.addEventListener('visibilitychange', this.visibilityChangeHandler)
    window.addEventListener('blur', this.windowBlurHandler)
    window.addEventListener('focus', this.windowFocusHandler)
    setTimeout(() => {
      this.scrollToActiveTab()
    }, 0)
  },

  beforeDestroy() {
    if (this.$el && this.update) removeResizeListener(this.$el, this.update)
    document.removeEventListener('visibilitychange', this.visibilityChangeHandler)
    window.removeEventListener('blur', this.windowBlurHandler)
    window.removeEventListener('focus', this.windowFocusHandler)
  },

  methods: {
    showTabAdd() {
      if (this.showAddInput) {
        this.newTabEditing = true
        this.newTabName = this.defaultTabName
        this.$nextTick(() => {
          this.$refs.tabAddInput?.focus()
        })
      } else {
        this.handleTabAdd()
      }
    },
    scrollPrev() {
      const containerSize = this.$refs.navScroll[`offset${firstUpperCase(this.sizeName)}`]
      const currentOffset = this.navOffset

      if (!currentOffset) return

      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0

      this.navOffset = newOffset
    },
    scrollNext() {
      const navSize = this.$refs.nav[`offset${firstUpperCase(this.sizeName)}`]
      const containerSize = this.$refs.navScroll[`offset${firstUpperCase(this.sizeName)}`]
      const currentOffset = this.navOffset

      if (navSize - currentOffset <= containerSize) return

      const newOffset =
        navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize

      this.navOffset = newOffset
    },
    scrollToActiveTab() {
      if (!this.scrollable) return
      const nav = this.$refs.nav
      const activeTab = this.$el.querySelector('.is-active')
      if (!activeTab) return
      const navScroll = this.$refs.navScroll
      const isHorizontal = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const maxOffset = isHorizontal
        ? nav.offsetWidth - navScrollBounding.width
        : nav.offsetHeight - navScrollBounding.height
      const currentOffset = this.navOffset
      let newOffset = currentOffset

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top)
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom)
        }
      }
      newOffset = Math.max(newOffset, 0)
      this.navOffset = Math.min(newOffset, maxOffset)
    },
    update() {
      if (!this.$refs.nav) return
      const sizeName = this.sizeName
      const navSize = this.$refs.nav[`offset${firstUpperCase(sizeName)}`]
      const containerSize = this.$refs.navScroll[`offset${firstUpperCase(sizeName)}`]
      const currentOffset = this.navOffset

      if (containerSize < navSize) {
        const currentOffset = this.navOffset
        this.scrollable = this.scrollable || {}
        this.scrollable.prev = currentOffset
        this.scrollable.next = currentOffset + containerSize < navSize
        if (navSize - currentOffset < containerSize) {
          this.navOffset = navSize - containerSize
        }
      } else {
        this.scrollable = false
        if (currentOffset > 0) {
          this.navOffset = 0
        }
      }
    },
    changeTab(e) {
      const keyCode = e.keyCode
      let nextIndex
      let currentIndex, tabList
      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]')
        currentIndex = Array.prototype.indexOf.call(tabList, e.target)
      } else {
        return
      }
      if (keyCode === 37 || keyCode === 38) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
          nextIndex = currentIndex + 1
        } else {
          nextIndex = 0
        }
      }
      tabList[nextIndex].focus() // 改变焦点元素
      tabList[nextIndex].click() // 选中下一个tab
      this.setFocus()
    },
    setFocus() {
      if (this.focusable) {
        this.isFocus = true
      }
    },
    removeFocus() {
      this.isFocus = false
    },
    visibilityChangeHandler() {
      const visibility = document.visibilityState
      if (visibility === 'hidden') {
        this.focusable = false
      } else if (visibility === 'visible') {
        setTimeout(() => {
          this.focusable = true
        }, 50)
      }
    },
    windowBlurHandler() {
      this.focusable = false
    },
    windowFocusHandler() {
      setTimeout(() => {
        this.focusable = true
      }, 50)
    },
  },

  render() {
    const {
      type,
      panes,
      editable,
      stretch,
      onTabClick,
      onTabRemove,
      navStyle,
      scrollable,
      scrollNext,
      scrollPrev,
      changeTab,
      setFocus,
      removeFocus,
      addable,
      handleTabAdd,
      showTabAdd,
      newTabName,
      newTabEditing,
      showAddInput,
    } = this
    const scrollBtn = scrollable
      ? [
          <span class={['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled']} on-click={scrollPrev}>
            <i class="el-icon-arrow-left"></i>
          </span>,
          <span class={['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled']} on-click={scrollNext}>
            <i class="el-icon-arrow-right"></i>
          </span>,
        ]
      : null

    const tabs = this._l(panes, (pane, index) => {
      const tabName = pane.name || pane.index || index
      const closable = pane.isClosable || editable

      pane.index = `${index}`

      const btnClose = closable ? (
        <span
          class="el-icon-close"
          on-click={ev => {
            onTabRemove(pane, ev)
          }}
        ></span>
      ) : null

      const tabLabelContent = pane.$slots.label || pane.label
      const tabindex = pane.active ? 0 : -1
      return (
        <div
          class={{
            'el-tabs__item': true,
            [`is-${this.rootTabs.tabPosition}`]: true,
            'is-active': pane.active,
            'is-disabled': pane.disabled,
            'is-closable': closable,
            'is-focus': this.isFocus,
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          role="tab"
          aria-selected={pane.active}
          ref="tabs"
          tabindex={tabindex}
          refInFor
          on-focus={() => {
            setFocus()
          }}
          on-blur={() => {
            removeFocus()
          }}
          on-click={ev => {
            removeFocus()
            onTabClick(pane, tabName, ev)
          }}
          on-keydown={ev => {
            if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
              onTabRemove(pane, ev)
            }
          }}
        >
          {tabLabelContent}
          {btnClose}
        </div>
      )
    })
    return (
      <div
        class={['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', `is-${this.rootTabs.tabPosition}`]}
      >
        {scrollBtn}
        <div class={['el-tabs__nav-scroll']} ref="navScroll">
          <div
            class={[
              'el-tabs__nav',
              `is-${this.rootTabs.tabPosition}`,
              stretch && ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'is-stretch' : '',
            ]}
            ref="nav"
            style={navStyle}
            role="tablist"
            on-keydown={changeTab}
          >
            {!type ? <tab-bar tabs={panes}></tab-bar> : null}
            {tabs}
            {editable || addable ? (
              <div
                class={[
                  'el-tabs__item',
                  `is-${this.rootTabs.tabPosition}`,
                  'el-tabs__add',
                  showAddInput ? 'with-input' : '',
                ]}
                on-click={showTabAdd}
                ref="tabAdd"
                tabindex="0"
              >
                {showAddInput && newTabEditing ? (
                  <el-input
                    class="el-tabs__add__input"
                    ref="tabAddInput"
                    size="small"
                    value={newTabName}
                    nativeOnClick={e => e.stopPropagation()}
                    on-input={$event => (this.newTabName = $event)}
                    on-blur={() => {
                      this.newTabEditing = false
                    }}
                    on-focus={e => e.currentTarget.select()}
                    nativeOnKeyup={e => {
                      e.stopPropagation()
                      e.preventDefault()
                      if (e.keyCode === 13) {
                        this.newTabEditing = false
                        handleTabAdd(newTabName)
                      }
                    }}
                  ></el-input>
                ) : (
                  <span class="el-tabs__add__text"> <i class="cute-icon-plus" />{` ${this.defaultTabName}`}</span>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  },
}
</script>
