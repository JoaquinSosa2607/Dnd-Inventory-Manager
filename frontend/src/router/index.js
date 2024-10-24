import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import InventoryComponent from '@/components/InventoryComponent.vue'
import CharacterForm from '@/views/CharacterForm.vue'

const routes = [
    {
        path: '/',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/home',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/inventory',
        name: 'InventoryView',
        component: InventoryComponent
    },
    {
        path: '/create-character',
        name: 'CharacterForm',
        component: CharacterForm
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
