import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#000000"
      }
    }
  }
}

export default new Vuetify(opts)
