import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import CartView from '../views/CartView.vue'
import DeliveryFormView from '../views/DeliveryFormView.vue'
import PaymentView from "../views/PaymentView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/menu/:category',
      name: 'menu',
      component: MenuView,
    },

    {
      path: '/food/:id',
      name: 'food-detail',
      component: FoodDetailView
    },

    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },

    {
      path: '/delivery-method',
      name: 'delivery-method',
      component: DeliveryFormView
    },

    {
      path: "/payment",
      name: "payment",
      component: PaymentView,
    }


  ],
})

export default router;