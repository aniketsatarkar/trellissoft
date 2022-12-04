<template>
  <div>
    <b-navbar toggleable="lg" variant="primary">
      <b-navbar-brand
        @click="$router.push('/').catch(() => {})"
        class="cursor-pointer text-white"
      >
        Store
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="$router.push('/cart').catch(() => {})">
            <span class="text-white">
              <b-icon icon="cart-plus-fill" />
              &nbsp;Cart&nbsp;
              <b-badge variant="light">{{ cartCount }}</b-badge>
            </span>
          </b-nav-item>
          <b-nav-item @click="$router.push('/wishlist').catch(() => {})">
            <span class="text-white">
              <b-icon icon="card-checklist" />
              &nbsp;Wishlist&nbsp;
              <b-badge variant="light">{{ wishlistCount }}</b-badge>
            </span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ...
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
    wishlistCount() {
      return this.$store.getters.wishlistCount;
    },
  },
};
</script>
