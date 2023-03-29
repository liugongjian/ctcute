<template>
    <cute-layout class="cute-layout" logoText="">
        <template v-slot:headerNav>
            <div class="wrap-right">
                <el-button type="primary" >登录</el-button>
            </div>          
        </template>
        <template v-slot:appMain>
            <section class="app-main">
                <transition name="fade-transform" mode="out-in">
                    <router-view />
                </transition>
            </section>
        </template>
    </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '../../../../../packages/ui/components/CuteLayout/index.vue'

@Component({
    name: 'Demo1',
    components: {
        CuteLayout,
    },
})

export default class extends Vue {
    private desc = '描述文本'
}
</script>
<style lang="scss">
    .cute-layout .layout-header{
        position: absolute;
        top: -50px;
    }
    .wrap-right {
        margin-top: 8px;
        margin-right: 8px;
    }
</style>
