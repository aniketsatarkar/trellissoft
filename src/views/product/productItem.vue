<template>
  <b-card
    :title="product.name"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 cursor-pointer h-100"
    @click="handleRedirect"
  >
    <b-card-text>
      <hr />
      <h5 class="w-100 text-center">{{ product.price | toCurrency }}</h5>
      <hr />
      <p>
        {{ product.description | trimString }}
      </p>
    </b-card-text>

    <div class="fav-btn">
      <b-button pill @click.stop="handleFavorite">
        <b-icon icon="heart-fill" :variant="favoriteVariant" />
      </b-button>
    </div>

    <div class="mt-4">
      <div class="row m-auto p-0 add-to-cart">
        <div class="col"></div>
        <div class="col-6 text-center">
          <b-button
            variant="primary"
            class="w-100"
            @click.stop="handleAddToCart(product)"
          >
            <b-icon icon="cart-plus-fill" />
            Add to cart
          </b-button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      default: null,
    },
  },
  filters: {
    trimString(text) {
      if (text.length > 100) {
        return text.substr(0, 100) + "...";
      } else {
        return text;
      }
    },
  },
  computed: {
    favoriteVariant() {
      return this.product.is_favorite ? "danger" : null;
    },
  },
  data() {
    return {
      // ...
    };
  },
  methods: {
    handleFavorite() {
      this.$store.dispatch("alterFavorite", this.product.id);
    },
    handleRedirect() {
      this.$router
        .push({
          name: "product.details",
          params: {
            id: this.product.id,
          },
        })
        .catch(() => {});
    },
    handleAddToWishlist(product) {
      this.$store.dispatch("addToWishlist", product);
    },
    handleAddToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>
