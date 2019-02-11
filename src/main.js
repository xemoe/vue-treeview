import Vue from 'vue'
import App from './App.vue'

import TreeView from '@ll931217/vue-treeview'

Vue.use(TreeView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
