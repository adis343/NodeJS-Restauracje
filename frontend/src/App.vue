<template>
  <div class="app-layout">
    <menuapp></menuapp>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import menu from "./views/menu.vue";
import { useUserStore } from "./stores/user";

export default {
  name: 'App',
  components: {
    'menuapp': menu,
  },
}
</script>

<style>
/*@import '@/assets/base.css';*/

/*#app {*/
/*  max-width: 100%;*/
/*  font-weight: normal;*/
/*  background-color: blue;*/
/*}*/

.app-layout{
  background-color: rgba(63, 72, 80, 0.12);
  height: 100vh;
}

*{
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
}
</style>
