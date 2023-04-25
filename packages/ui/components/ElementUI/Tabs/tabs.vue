<script>
import TabNav from './tab-nav'

export default {
  name: 'ElTabs',

  components: {
    TabNav,
  },

  provide() {
    return {
      rootTabs: this,
    }
  },

  props: {
    // type新增button风格
    type: String,
    // 新增size属性 large|medium|small
    size: {
      type: String,
      default: 'medium',
    },
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top',
    },
    beforeLeave: Function,
    stretch: Boolean,
  },

  data() {
    return {
      currentName: this.value || this.activeName,
      panes: [],
    }
  },

  watch: {
    activeName(value) {
      this.setCurrentName(value)
    },
    value(value) {
      this.setCurrentName(value)
    },
    currentName() {
      if (this.$refs.nav) {
        this.$nextTick(() => {
          this.$refs.nav.$nextTick(_ => {
            console.log(_, '----')
            this.$refs.nav.scrollToActiveTab()
          })
        })
      }
    },
  },

  created() {
    if (!this.currentName) {
      this.setCurrentName('0')
    }

    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true))
  },

  mounted() {
    this.calcPaneInstances()
  },

  updated() {
    this.calcPaneInstances()
  },

  methods: {
    calcPaneInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(
          vnode =>
            vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ElTabPane'
        )
        // update indeed
        const panes = paneSlots.map(({ componentInstance }) => componentInstance)
        const panesChanged = !(
          panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index])
        )
        if (isForceUpdate || panesChanged) {
          this.panes = panes
        }
      } else if (this.panes.length !== 0) {
        this.panes = []
      }
    },
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    handleTabRemove(pane, ev) {
      if (pane.disabled) return
      ev.stopPropagation()
      this.$emit('edit', pane.name, 'remove')
      this.$emit('tab-remove', pane.name)
    },
    handleTabAdd(tabName) {
      this.$emit('edit', null, 'add')
      this.$emit('tab-add', tabName)
    },
    setCurrentName(value) {
      const changeCurrentName = () => {
        this.currentName = value
        this.$emit('input', value)
      }
      if (this.currentName !== value && this.beforeLeave) {
        const before = this.beforeLeave(value, this.currentName)
        if (before && before.then) {
          before.then(
            () => {
              changeCurrentName()
              this.$refs.nav && this.$refs.nav.removeFocus()
            },
            () => {
              // https://github.com/ElemeFE/element/pull/14816
              // ignore promise rejection in `before-leave` hook
            }
          )
        } else if (before !== false) {
          changeCurrentName()
        }
      } else {
        changeCurrentName()
      }
    },
  },

  render() {
    const {
      type,
      size,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch,
    } = this

    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable,
        type,
        panes,
        stretch,
        addable,
        handleTabAdd,
        size,
      },
      ref: 'nav',
    }
    const header = (
      <div class={['el-tabs__header', `is-${tabPosition}`]}>
        <tab-nav {...navData}></tab-nav>
      </div>
    )

    const panels = <div class="el-tabs__content">{this.$slots.default}</div>

    return (
      <div
        class={{
          'el-tabs': true,
          ['el-tabs--' + `${size}`]: true,
          'el-tabs--button': type === 'button',
          'el-tabs--card': type === 'card',
          ['el-tabs--' + `${tabPosition}`]: true,
          'el-tabs--border-card': type === 'border-card',
        }}
      >
        {tabPosition !== 'bottom' ? [header, panels] : [panels, header]}
      </div>
    )
  },
}
</script>
