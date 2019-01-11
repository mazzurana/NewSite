<template>
  <div class="site">
    <menuview></menuview>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuView from "@/components/SiteMenu";
export default {
  name: "Site",

  components: {
    menuview: MenuView
  },
  beforeCreate() { // or create a mixin for this purpose
    if(styles.__inject__) {
      styles.__inject__(this.$ssrContext);
    }
}
}
</script>
