<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  created() {

    var scripts = [
      "https://cdn.tailwindcss.com",
      "https://use.fontawesome.com/releases/v5.15.4/js/all.js",
    ];

    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
