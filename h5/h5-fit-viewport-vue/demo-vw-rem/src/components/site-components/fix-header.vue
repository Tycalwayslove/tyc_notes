<template>
  <transition name="fade">
    <header v-if="showStatus" class="nav">
      <nav-title></nav-title>
      <nav-group></nav-group>
    </header>
  </transition>
</template>

<script>
import navTitle from "./header-top";
import navGroup from "./header-nav-group";
export default {
  name: "fix-header",
  components: { navTitle, navGroup },
  data() {
    return {
      showStatus: null
    };
  },
  model: {
    prop: "show",
    event: "change"
  },
  props: {
    show: Boolean
  },
  watch: {
    show: {
      immediate: true, // 这句重要
      handler(val) {
        console.log("获取props show");
        this.showStatus = val;
      }
    }
    // showStatus(val) {
    //   this.$emit("change" + val);
    // }
  },
  method: {
    show() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  display: block;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  min-width: 310px;
  max-width: 540px;
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
.fade-enter {
  opacity: 0;
  height: 0;
}
.fade-enter-active {
  min-height: 44px;
  transition: all 0.8s ease-out;
}
.fade-leave-to {
  opacity: 0;
  height: 0;
}
.fade-leave-active {
  transition: all 0.8s ease-out;
}
</style>
