import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#A61103',
        secondary: '#F2C1BD',
        accent: '#8c9eff',
        error: '#b71c1c',
        background: '#87A658',
      },
    },
  },
});
