<template>
  <div id="app">
    <router-view></router-view>

    <div class="loading">
      <div id="loader"></div>
      <div id="loaderProgress"><div></div></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "./assets/css/estilo.scss";
</style>
