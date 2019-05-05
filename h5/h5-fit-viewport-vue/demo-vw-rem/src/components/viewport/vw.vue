<!-- 只使用vw 适配 -->
<template>
  <div class="wx_wrap">
    <div class="mod_slide">
      <div class="mod_slide_inner">
        <ul class="mod_slide_list">
          <li class="mod_slide_list_item"><img src="@/assets/img/banner.png"
                 alt="1"></li>
          <li class="mod_slide_list_item"><img src="@/assets/img/banner.png"
                 alt="2"></li>
          <li class="mod_slide_list_item"><img src="@/assets/img/banner.png"
                 alt="3"></li>
        </ul>

      </div>
      <div class="mod_slide_indexs">
        <span class="mod_slide_indexs_item cur"></span>
        <span class="mod_slide_indexs_item"></span>
        <span class="mod_slide_indexs_item"></span>

      </div>
    </div>
    <div class="mod_banner">
      <img src="@/assets/img/banner-bottom.png"
           alt="banner-bottom">
    </div>
    <div class="mod_nav">
      <nav class="mod_nav_list">
        <a href="#"
           class="mod_nav_list_item">
          <span class="mod_nav_list_item_logo">
            <img src="@/assets/img/80.png"
                 alt="">
          </span>
          <p class="mod_nav_list_item_name">导航入口</p>
        </a>
        <a href="#"
           class="mod_nav_list_item">
          <span class="mod_nav_list_item_logo">
            <img src="@/assets/img/80.png"
                 alt="">
          </span>
          <p class="mod_nav_list_item_name">导航入口</p>
        </a>
        <a href="#"
           class="mod_nav_list_item">
          <span class="mod_nav_list_item_logo">
            <img src="@/assets/img/80.png"
                 alt="">
          </span>
          <p class="mod_nav_list_item_name">导航入口</p>
        </a>
        <a href="#"
           class="mod_nav_list_item">
          <span class="mod_nav_list_item_logo">
            <img src="@/assets/img/80.png"
                 alt="">
          </span>
          <p class="mod_nav_list_item_name">导航入口</p>
        </a>
        <a href="#"
           class="mod_nav_list_item">
          <span class="mod_nav_list_item_logo">
            <img src="@/assets/img/80.png"
                 alt="">
          </span>
          <p class="mod_nav_list_item_name">导航入口</p>
        </a>
      </nav>
    </div>
    <div class="mod_sale">
      <img src="@/assets/img/750.png"
           alt="">
      <div class="mod_sale_countdown">
        倒计时
        <span class="mod_sale_countdown_num">0</span>
        <span class="mod_sale_countdown_num">0</span>
        分
        <span class="mod_sale_countdown_num">0</span>
        <span class="mod_sale_countdown_num">0</span>
        秒结束
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./vw.scss";
</style>
