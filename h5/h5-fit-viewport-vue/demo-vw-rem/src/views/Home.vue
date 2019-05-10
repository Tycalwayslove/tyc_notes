<!-- 游戏列表 -->
<template>
  <div class="game">
    <fix-header v-model="show"></fix-header>

    <sport-list-item v-for="item in 5" :key="item"></sport-list-item>
    <button @click="show= !show">点击出现header</button>
  </div>
</template>

<script>
import sportListItem from "@/components/page-list-components/sport-list-item";
import fixHeader from "@/components/site-components/fix-header";
import { getGameList, test } from "@/api/index";
export default {
  name: "gamelist",
  components: { sportListItem, fixHeader },

  data() {
    return {
      data: {},
      show: true
    };
  },
  async mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      const { data } = await test();
      this.data = data;
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  overflow: scroll;
}
</style>
