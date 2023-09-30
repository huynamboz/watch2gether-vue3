import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/global.css'
import Notifications from '@kyvg/vue3-notification'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { initAuthStore } from '@/stores/auth.store'
import { authMiddleware } from '@/router/router.middleware'
import defaultLayout from '@/layouts/defaultLayout.vue'
import emptyLayout from '@/layouts/emptyLayout.vue'
import touchOutSide from '@/plugins/handleClick'
const initApp = async () => {
  authMiddleware()
  await initAuthStore()
  const app = createApp(App)
  app.use(router)
  app.use(touchOutSide)
  app.use(VueVideoPlayer)
  app.component('default-layout', defaultLayout)
  app.component('empty-layout', emptyLayout)
  app.use(Notifications)
  app.mount('#app')
}
initApp()
