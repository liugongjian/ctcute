import { Component, Vue } from 'vue-property-decorator'
import { t } from '../i18n/locale'

@Component
export default class LcoaleMixin extends Vue {
  t(...args) {
    return t.apply(this, args)
  }
}
