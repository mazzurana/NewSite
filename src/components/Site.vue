<template>
  <div id="app">
    <menu></menu>
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from "./components/SiteMenu";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>
