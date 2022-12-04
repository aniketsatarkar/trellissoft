<template>
  <div class="row">
    <div
      v-for="(product, index) of products"
      :key="index"
      class="col-lg-3 col-md-6 col-sm-6 mb-3 inline"
    >
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/views/product/productItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = this.$store.getters.products;
  },
};
</script>
