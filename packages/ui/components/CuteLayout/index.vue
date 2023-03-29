<template>
    <div class="app-wrapper">
        <layout-header v-bind="$attrs">
            <template slot="headerNav">
                <slot name="headerNav"></slot>
            </template>
        </layout-header>
        <div class="layout-wrap">
          <layout-sidebar class="layout-sidebar" :title="sidebarTitle"   type="page" />
          <!-- id在sidebar中被使用，勿随意删改 -->
          <div id="layout-container" class="layout-container">
            <navbar />
            <div class="app-main-wrap">
              <slot name="appMain"></slot>
            </div>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutHeader from './LayoutHeader/index.vue'
import LayoutSidebar from './LayoutSidebar/index.vue'
import Navbar from './Navbar/index.vue'
@Component({
    name: 'CuteLayout',
    components: {
        LayoutSidebar,
        Navbar,
        LayoutHeader,
    },
     
})
export default class extends Vue {
    private sidebarTitle = '页面'
}
</script>
