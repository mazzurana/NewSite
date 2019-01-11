<template>
  <div class="site">
    <menuview></menuview>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import MenuView from "@/components/SiteMenu";
import Footer from "@/components/Footer";
export default {
  name: "Site",

  components: [
    {
      menuview: MenuView,
      footer: Footer
    }
  ],
  beforeCreate() {
    // or create a mixin for this purpose
    if (styles.__inject__) {
      styles.__inject__(this.$ssrContext);
    }
  }
};
</script>
