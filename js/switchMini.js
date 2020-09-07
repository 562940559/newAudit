// 根据浏览器大小或手动开关切换侧边栏显示的js代码
var nowMini = null;
const isMini = function () {
  if ($(window).width() <= 450) {
    $('body').addClass('mini');
    nowMini = true;
  } else {
    $('body').removeClass('mini');
    nowMini = false;
  }
}

// 点击链接 有data-href即修改iframe链接地址
$(".layui-side-scroll .layui-nav-item a").click(function () {
  let href = $(this).attr("data-href");
  $("iframe[name='audit']").attr('src', href);
});
// 初次刷新默认点击跳转第一个选项（首页）
$(document).ready(function () {
  $('.layui-side-scroll .layui-nav-item a')[0].click();
  isMini();
});

$('#changeMini').click(function () {
  if (nowMini) {
    $('body').removeClass('mini');
  } else {
    $('body').addClass('mini');
  }
  nowMini = !nowMini
})