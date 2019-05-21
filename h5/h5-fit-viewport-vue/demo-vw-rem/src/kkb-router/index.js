let Vue;
class Krouter {
  static install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
      beforeCreate() {
        Vue.prototype.$kkbrouter = "来了小老弟，我是路有";
      }
    });
  }
}
export default Krouter;
