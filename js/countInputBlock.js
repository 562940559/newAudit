// 方法计算layui-form-label的宽度 从而自适应layui-input-block的宽度
const countInputBlockWidth = function () {
  for (let i = 0; i < $('.layui-form-label').length; i++) {
    let dom = $('.layui-form-label')[i];
    $(dom).next().css('margin-left', $(dom).outerWidth())
  }
}