<template>
  <div class="cute-layout-sidebar__navigation">
    <div
      v-for="nav in sidebarNavigation"
      :key="nav.path"
      class="cute-layout-sidebar__navigation__item"
      :class="{ 'cute-layout-sidebar__navigation__item--active': nav.active }"
    >
      <sidebar-item-link :to="nav.path">
        <span class="cute-layout-sidebar__navigation__item__icon">
          <sidebar-item-icon v-if="nav.icon" :name="nav.icon" :icon-type="nav.iconType" />
        </span>
        {{ nav.title }}
      </sidebar-item-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SidebarNavigationLink } from '@cutedesign/ui/types/CuteLayout'
import SidebarItemLink from './SidebarItemLink.vue'
import SidebarItemIcon from './SidebarItemIcon.vue'

@Component({
  name: 'SidebarNavigation',
  components: {
    SidebarItemIcon,
    SidebarItemLink,
  },
})
export default class extends Vue {
  @Prop()
  private sidebarNavigation?: SidebarNavigationLink[]
}
</script>
