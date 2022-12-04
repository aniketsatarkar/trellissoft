<template>
  <div>
    <b-card tag="article" class="mb-2">
      <b-card-text>
        <div class="row">
          <div class="ml-2 d-lg-block d-md-block">
            <b-img :src="product.image" responsive class="p-2" />
          </div>
          <div class="col">
            <h4 class="mt-3">{{ product.name }}</h4>
            <h5 class="mt-3">{{ product.price | toCurrency }}</h5>
            <b-button class="mt-3" @click="handleRemoveFromCart">
              <b-icon icon="cart-x-fill" />
              Remove from cart
            </b-button>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      default: null,
      type: Object,
    },
  },
  data() {
    return {
      // ...
    };
  },
  methods: {
    handleRemoveFromCart() {
      this.$bvModal
        .msgBoxConfirm(
          `Do you want to remove ${this.product.name} from the cart ?`,
          {
            title: "Remove item from cart ?",
            size: "md",
            buttonSize: "md",
            okVariant: "primary",
            okTitle: "Yes",
            cancelTitle: "No",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((result) => {
          if (result) {
            this.$store.dispatch("removeFromCart", this.product);
          }
        });
    },
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.product);
    },
  },
};
</script>
