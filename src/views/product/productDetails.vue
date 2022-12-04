<template>
  <div v-if="product">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <b-img :src="product.image" fluid :alt="product.name" class="w-100" />
        <div class="fav-btn mr-3">
          <b-button pill @click.stop="handleFavorite">
            <b-icon icon="heart-fill" :variant="favoriteVariant" />
          </b-button>
        </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h4>{{ product.name }}</h4>
        <p>{{ product.description }}</p>
        <h5>{{ product.price | toCurrency }}</h5>
        <div class="row mt-5">
          <div class="col"></div>
          <div class="col">
            <b-button
              variant="primary"
              class="w-100"
              @click.stop="handleMoveToCart(product)"
            >
              <b-icon icon="cart-plus-fill" />
              Move to Cart
            </b-button>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favoriteVariant() {
      return this.product.is_favorite ? "danger" : null;
    },
  },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.product = this.$store.getters.getProduct(this.$route.params.id);
  },
  methods: {
    handleMoveToCart() {
      this.$store.dispatch("addToCart", this.product);
    },
    handleFavorite() {
      this.$store.dispatch("alterFavorite", this.product.id);
    },
  },
};
</script>
