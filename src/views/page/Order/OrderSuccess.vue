<template>
    <el-card class="real-order-success">
        <cute-fixed-footer class="real-order-header" @click="openPreview">
            <svg-icon class="real-order-header__icon" name="left" />
            <span class="real-order-header__content">服务管理</span>
        </cute-fixed-footer>
        <div class="success-content-container">
            <div >
                <img src="./images/success.svg" alt="">
            </div>
            <div class="content-success">恭喜您，开通成功！</div>
            <div class="content-count-down">您的订单已支付完成，请至管理控制台进行相关配置</div>
            <div><span class="timer">{{ timer }}S</span>后将为您自动跳转</div>
            <div class="operation">
                <el-button>次要操作</el-button>
                <el-button type="primary">主要操作</el-button>
            </div>
        </div>
        

       
    </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
import { CuteSpecialRadio } from '@cutedesign/ui'
// import { getOptions } from '@/api/orderList'
import CuteFixedFooter from '@cutedesign/ui/components/CuteFixedFooter/index.vue'

@Component({
    name: 'OrderSuccess',
    components: { CuteSpecialRadio, CuteFixedFooter },
})
export default class extends Vue {

    private colorVariables = variables
    private timer = 30
    private timerId: any;
    private mounted() {
        this.timerId = setInterval(() => { 
             this.timer--
            if (this.timer == 0) {
                clearInterval(this.timerId)
            }
        },1000)
    }
    /**
   * 跳转页面
   */
    private openPreview() {
        console.log('跳转')
    }
    
}
</script>
