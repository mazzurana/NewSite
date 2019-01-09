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
$blue: #002337;
$--color-primary: #002337;

@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

@import "./assets/css/estilo.scss";
</style>
