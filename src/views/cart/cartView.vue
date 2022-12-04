<template>
  <div>
    <div v-if="cartItems.length > 0" class="row">
      <div class="col-8 cart-list">
        <div v-for="(item, index) of cartItems" :key="index">
          <CartItem :product="item" />
        </div>
      </div>
      <div class="col-4 ml-auto">
        <CartTotal :items="cartItems" />
      </div>
    </div>
    <div v-else class="text-center">
      <div class="row">
        <div class="12 mx-auto">
          <p>There are no products in your cart!</p>
          <b-button class="mt-3" @click="$router.push('/').catch(() => {})">
            Browse products
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/views/cart/cartItem.vue";
import CartTotal from "@/views/cart/cartTotal.vue";

export default {
  components: {
    CartItem,
    CartTotal,
  },
  computed: {
    cartItems() {
      return Object.values(this.$store.getters.cart);
    },
  },
  data() {
    return {
      // ...
    };
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 90px);
  overflow: auto;
}
</style>
