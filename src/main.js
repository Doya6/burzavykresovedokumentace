import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      hello: 'hello'
    }
  },
  cs: {
    message: {
      hello: 'ahoj'
    }
  }
}
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

