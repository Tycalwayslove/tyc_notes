<!-- 游戏列表 -->
<template>
  <div class="className">

  </div>
</template>

<script>
import { getGameList, test } from "@/api/index";
export default {
  name: "gamelist",
  components: {},

  data() {
    return {};
  },
  async mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      const data = await test();
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>