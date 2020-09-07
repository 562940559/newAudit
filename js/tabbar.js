// 主页的dom点击切换tabbar（与表单顶部的tab切换层级不同 所以需要两个function分开使用）
$('.homepageChoose .dChoose li').click(function () {
  var n = Number($(this).attr('name'))
  var d = $(this).parent();
  for (let a = 0; a < n; a++) {
    d = d.next()
  }
  $(this).addClass('this-choose').siblings().removeClass('this-choose');
  d.css('display', 'block')
  d.siblings('div').css('display', 'none')
})

// 表单顶部点击切换tabbar
$('.dForm-top .dChoose li').click(function () {
  var n = Number($(this).attr('name'))
  var d = $(this).parent().parent();
  for (let a = 0; a < n; a++) {
    d = d.next()
  }
  $(this).addClass('this-choose').siblings().removeClass('this-choose');
  d.css('display', 'block')
  d.siblings('.dForm-cont').css('display', 'none')
})