import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'

import VuePrism from 'vue-prism'
//import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VuePrism)
//Vue.use(Prism)


new Vue({
  router,
  store,
  Prism,
  render: h => h(App)
}).$mount('#app')
