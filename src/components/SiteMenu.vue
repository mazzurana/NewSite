<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>aa</nav>
  </div>
</template>

<script>
export default {
  name: "SiteMenu",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Hello World",
          page: "/HelloWorld"
        }
      ]
    };
  }
};
</script>
