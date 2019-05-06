import fetch from "./fetch";

// 获取游戏列表
export const getGameList = data =>
  fetch({
    url: "/list",
    method: "GET",
    data
  });

// 获取游戏列表
export const test = data =>
  fetch({
    url: "/test",
    method: "POST",
    data
  });
