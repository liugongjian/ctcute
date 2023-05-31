import Vue from 'vue'
import LoadFail from './LoadFail.vue'

export default function showLoadFailPage() {
  const FailClass = Vue.extend(LoadFail)
  const instance = new FailClass()

  document.body.appendChild(instance.$mount().$el)
}
