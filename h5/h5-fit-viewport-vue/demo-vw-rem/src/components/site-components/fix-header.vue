<template>
  <header class='nav'>
    <nav-title></nav-title>
    <nav-group></nav-group>

  </header>
</template>

<script>
import navTitle from "./header-top";
import navGroup from "./header-nav-group";
export default {
  name: "fix-header",
  components: { navTitle, navGroup }
};
</script>
<style lang="scss" scoped>
.nav {
  display: block;
  position: static;
  width: 100%;
  height: auto;
  min-width: 310px;
  min-height: rem(44);
  margin: 0;
  padding: 0;
  border: none;
  font-size: rem(16);
  /* background-color: #1c90f2; */
  color: #000;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  font-family: "Helvetica Neue", Helvetica, "STHeiTi Light", sans-serif;
}
</style>
