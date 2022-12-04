<template>
  <div>
    <table class="w-100">
      <tr v-for="(item, index) of items" :key="index">
        <td>{{ item.name }}</td>
        <td class="text-right">{{ item.price | toCurrency }}</td>
      </tr>
      <tr>
        <td><b>Total</b></td>
        <td class="text-right">
          <b>{{ total | toCurrency }}</b>
        </td>
      </tr>
    </table>
    <b-button variant="primary" class="mt-3 w-100">
      Proceed to checkout
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
      required: true,
    },
  },
  computed: {
    total() {
      return this.items.reduce((total, item) => total + item.price, 0);
    },
  },
  data() {
    return {
      // ...
    };
  },
};
</script>
