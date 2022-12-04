import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetails from "../views/product/productDetails.vue";
import WishlistList from "../views/wishlist/wishlistList.vue";
import CartView from "../views/cart/cartView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id?",
    name: "product.details",
    component: ProductDetails,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishlistList,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
