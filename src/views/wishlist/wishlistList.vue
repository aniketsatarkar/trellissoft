<template>
  <div>
    <div v-if="wishlist.length > 0" class="row">
      <div
        v-for="(product, index) of wishlist"
        :key="index"
        class="col-lg-3 col-md-4 col-sm-6 mb-3 inline"
      >
        <ProductItem :product="product" />
      </div>
    </div>
    <div v-else class="text-center">
      <div class="row">
        <div class="12 mx-auto">
          <p>There are no products in your wishlist!</p>
          <b-button class="mt-3" @click="$router.push('/').catch(() => {})">
            Browse products
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/views/product/productItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    wishlist() {
      return this.$store.getters.wishlist;
    },
  },
  data() {
    return {
      // ...
    };
  },
};
</script>
