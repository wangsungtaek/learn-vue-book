import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'
import store from './store'


const app = createApp(App);
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
})

app.mixin(mixins)
    .use(router)
    .use(store)
    .mount('#app')

window.Kakao.init('3d364bb0cc97ed4d21c0cc2fd4490d3a');