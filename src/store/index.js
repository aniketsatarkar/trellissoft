import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {
      1: {
        id: 1,
        name: "Apple iPhone 12",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 1249,
        image: "https://picsum.photos/150/150?random=1",
      },
      2: {
        id: 2,
        name: "Lenovo Laptop",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: true,
        added_to_cart: false,
        price: 499,
        image: "https://picsum.photos/150/150?random=2",
      },
      3: {
        id: 3,
        name: "MSI GF-63 RTX1650 | Intel i5",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 2053,
        image: "https://picsum.photos/150/150?random=3",
      },
      4: {
        id: 4,
        name: "MonkeyKeys Mechanical Keyboard",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 399,
        image: "https://picsum.photos/150/150?random=4",
      },
      // --------
      5: {
        id: 5,
        name: "Allen Solly Men Sweatshirt",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 299,
        image: "https://picsum.photos/150/150?random=5",
      },
      6: {
        id: 6,
        name: "Puma Men's Baseball Cap",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 299,
        image: "https://picsum.photos/150/150?random=6",
      },
      7: {
        id: 7,
        name: "PUMA Backpack Core",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 299,
        image: "https://picsum.photos/150/150?random=7",
      },
      8: {
        id: 8,
        name: "Puma Men's Regular Track Pants",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        is_favorite: false,
        added_to_cart: false,
        price: 299,
        image: "https://picsum.photos/150/150?random=8",
      },
    },
  },
  getters: {
    products(state) {
      return Object.values(state.products);
    },
    cart(state) {
      return Object.values(state.products).filter(
        (item) => item.added_to_cart === true
      );
    },
    wishlist(state) {
      return Object.values(state.products).filter(
        (item) => item.is_favorite === true
      );
    },
    getProduct: (state) => (id) => {
      return state.products[id];
    },
    cartCount(state) {
      return Object.values(state.products).reduce(
        (init, item) => (init += item.added_to_cart === true ? 1 : 0),
        0
      );
    },
    wishlistCount(state) {
      return Object.values(state.products).reduce(
        (init, item) => (init += item.is_favorite === true ? 1 : 0),
        0
      );
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.products[product.id].added_to_cart = true;
    },
    REMOVE_FROM_CART(state, product) {
      state.products[product.id].added_to_cart = false;
    },
    ADD_TO_WISHLIST(state, product) {
      state.products[product.id].is_favorite = true;
    },
    REMOVE_FROM_WISHLIST(state, product) {
      state.products[product.id].is_favorite = false;
    },
    ALTER_FAVORITE(state, productID) {
      state.products[productID].is_favorite =
        !state.products[productID].is_favorite;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, product) {
      commit("REMOVE_FROM_CART", product);
    },
    addToWishlist({ commit }, product) {
      commit("ADD_TO_WISHLIST", product);
    },
    removeFromWishlist({ commit }, product) {
      commit("REMOVE_FROM_WISHLIST", product);
    },
    alterFavorite({ commit }, productID) {
      commit("ALTER_FAVORITE", productID);
    },
  },
  modules: {},
});
