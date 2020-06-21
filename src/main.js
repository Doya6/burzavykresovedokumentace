import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  en: {
    ItemDescription: {
      nazev: 'Name:',
      rozmer: 'Size:',
      cena: 'Price:',
      autor: 'Author:',
      poslatZpravu: 'Send a message',
      zprava: 'message',
      odeslat: 'send'
    }
  },
  cs: {
    ItemDescription: {
      nazev: 'Název:',
      rozmer: 'Rozměr:',
      cena: 'Cena:',
      autor: 'Autor:',
      poslatZpravu: 'Poslat zprávu',
      zprava: 'zpráva',
      odeslat: 'odeslat'
    }
  }
}
const i18n = new VueI18n({
  locale: 'cs', // set locale
  messages, // set locale messages
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

