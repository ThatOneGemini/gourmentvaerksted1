import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import CartView from '../views/CartView.vue'
//import CheckoutView from '../views/CheckoutView.vue'
import DeliveryFormView from '../views/DeliveryFormView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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


  ],
})

export default router;