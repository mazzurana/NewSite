<template>
  <div class="site">
    <menuview></menuview>
    <router-view></router-view>
    <sitefooter></sitefooter>
  </div>
</template>
<style></style>
<script>
import MenuView from "@/components/SiteMenu";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: "Site",

  components: {
    menuview: MenuView,
    sitefooter: SiteFooter
  },
  beforeCreate() {
    // or create a mixin for this purpose
    //if (styles.__inject__) {
    //  styles.__inject__(this.$ssrContext);
    //}
  }
};
</script>
