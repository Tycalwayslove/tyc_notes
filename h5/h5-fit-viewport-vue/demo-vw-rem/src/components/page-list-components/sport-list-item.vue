<template>
  <div class="sport-list">
    <div class="sport-list-el">
      <ul class="game-list">
        <li class="group-info">05-06</li>
        <li class="game-item px-bottom">
          <a href="#"
             class="detail-url">
            <div class="game-desc">英超第三轮</div>
            <div class="game-info">
              <div class="left team-box">
                <img src="http://mat1.gtimg.com/sports/logo/yingchao/afd.png"
                     alt>
                <h3>埃弗顿</h3>
              </div>
              <div class="right team-box">
                <img src="http://mat1.gtimg.com/sports/logo/yingchao/afd.png"
                     alt>
                <h3>埃弗顿</h3>
              </div>
              <div class="game-status">
                <div class="goals">2:0</div>
                <div class="game-icon end">
                  <i></i>
                  集锦
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-list .group-info {
  height: rem(25);
  padding-left: rem(10);
  font-size: rem(12);
  line-height: rem(25);
  color: #666;
  background-color: #ebf0f5;
}
.game-list .game-item {
  height: rem(128);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  & a {
    display: block;
    width: 100%;
    height: rem(127);
    text-decoration: none;
  }
  .game-desc {
    padding: rem(9) 0 rem(4);
    text-align: center;
    line-height: rem(17);
    font-size: rem(14);
    color: #9e9e9e;
  }
  .game-info {
    width: 100%;

    height: rem(97);
    .team-box {
      width: 33%;
      font-size: rem(15);
      color: #333;
      h3 {
        width: 100%;
        line-height: rem(22);
        font-size: rem(16);
        color: #373a41;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      & div {
        text-align: center;
        height: rem(97);
      }
      & img {
        margin-bottom: rem(10);
        width: rem(44);
        height: rem(44);
      }
    }
    .game-status {
      overflow: hidden;
      color: #373a41;
      .goals {
        margin-top: rem(7);
        margin-bottom: rem(11);
        line-height: rem(33);
        font-size: rem(24);
      }
      .game-icon {
        width: rem(110);
        height: rem(30);
        margin: 0 auto;
        border-radius: rem(15);
        border: #ebedf0 solid 1px;
        line-height: rem(30);
        font-size: rem(14);
        color: #fff;
        text-align: center;
      }
      .end {
        box-shadow: 0 rem(2) rem(4) 0 rgba(40, 98, 255, 0.3);
        border-color: transparent;
        background-color: #2962ff;
      }
    }
  }
}
</style>
