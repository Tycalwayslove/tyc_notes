<template>
  <div class='nav-title'>
    <h1>
      <a href="#">**sport</a>
    </h1>
    <h2>
      <a href="#"
         class='nav-title-txt'>热门</a>
    </h2>
    <a href="#"
       class='nav-group-fold'></a>
    <a href="#"
       class='nav-login'>登录</a>
  </div>
</template>
<style lang="scss" scoped>
.nav-title {
  background: url(//mat1.gtimg.com/sports/sportAppWeb/kbsshare/statics/icon-logo40x40_6cc48e.png)
    no-repeat 10px center;
  background-size: 24px;
  background-color: #1c90f2;
  height: 44px;
  line-height: 44px;
  color: #fff;
  font-size: 0;
  overflow: hidden;
  & h1 {
    float: left;
    height: 100%;
    font-size: inherit;
    & a {
      display: inline-block;
      height: 100%;
      line-height: 44px;
      padding-right: 10px;
      border-right: solid 1px #066dc4;
      text-indent: 43px;
      font-size: 16px;
      color: #fff;
    }
  }
  & h2 {
    float: left;
    height: 100%;
    font-size: inherit;

    & a {
      color: #fff;
    }
  }
  .nav-title-txt {
    display: inline-block;
    height: 100%;
    padding: 0 rem(10);
    line-height: rem(44);
    font-size: rem(16);
    color: #fff;
  }
  .nav-group-fold {
    float: right;
    background: url(//mat1.gtimg.com/sports/sportAppWeb/kbsshare/statics/btn-nav-fold_b389a1.png)
      no-repeat 10px center;
    background-size: 24px;
    width: 44px;
    height: 44px;
    color: #fff;
  }
  .nav-login {
    float: right;
    padding: 0 15px 0 0;
    font-size: 16px;
    height: 100%;
    line-height: 44px;
    color: #fff;
  }
}
</style>
