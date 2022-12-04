<template>
  <div id="app">
    <NavBar />
    <div class="p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>
