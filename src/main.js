import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'

const app = createApp(App);
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
})

app.mixin(mixins)
    .use(router)
    .mount('#app')
