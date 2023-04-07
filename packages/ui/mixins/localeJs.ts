import { t } from '../i18n/locale'

export default {
  methods: {
    t(...args) {
      return t.apply(this, args)
    },
  },
}
