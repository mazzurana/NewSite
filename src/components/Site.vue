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
  }
};
</script>
