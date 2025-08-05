import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WebView from '@/views/WebView.vue'
import ModelingView from '@/views/ModelingView.vue'
import AIView from '@/views/AIView.vue'
import CodeView from '@/views/CodeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/web', name: 'Web', component: WebView },
  { path: '/modeling', name: 'Modeling', component: ModelingView },
  { path: '/ai', name: 'AI', component: AIView },
  { path: '/code', name: 'Code', component: CodeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router