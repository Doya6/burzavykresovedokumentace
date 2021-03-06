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
      poslatZpravu: 'Send a message to the author',
      zprava: 'message',
      odeslat: 'send'
    },
    sectionBottom:{
      sample: 'drawing sample'
    },
    sectionTop:{
      title: 'Drawing Documentation Marketplace'
    }
  },
  cs: {
    ItemDescription: {
      nazev: 'Název:',
      rozmer: 'Rozměr:',
      cena: 'Cena:',
      autor: 'Autor:',
      poslatZpravu: 'Kontaktovat autora',
      zprava: 'zpráva',
      odeslat: 'odeslat'
    },
    sectionBottom:{
      sample: 'ukázka výkresové dokumentace'
    },
    sectionTop:{
      title: 'Burza výkresové dokumentace'
    }
  },
  
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

