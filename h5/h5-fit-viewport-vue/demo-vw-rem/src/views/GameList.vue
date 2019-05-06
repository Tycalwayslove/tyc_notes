<!-- 游戏列表 -->
<template>
  <div class="className">
    <sport-list-item></sport-list-item>
  </div>
</template>

<script>
import sportListItem from "@/components/page-list-components/sport-list-item";
import { getGameList, test } from "@/api/index";
export default {
  name: "gamelist",
  components: { sportListItem },

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
