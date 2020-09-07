$('.oneFileInfo .delete').click(function () {
  console.log($(this).parent())
  $(this).parent().remove();
  //询问框

  layer.confirm('您是如何看待前端开发？', {
    btn: ['重要', '奇葩'] //按钮
  }, function () {
    layer.msg('的确很重要', { icon: 1 });
  }, function () {
    layer.msg('也可以这样', {
      time: 20000, //20s后自动关闭
      btn: ['明白了', '知道了']
    });
  });
})