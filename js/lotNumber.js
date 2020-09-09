var list = ['1', '2', '3', '4', '5'];
var random = '';
var isInternalization = false; // 是否内定
var internalizationNum = 'vip'; // 后台传过来内定的值

$('.startLot').click(function () {
  startLot();
})

$('.endLot').click(function () {
  endLot();
})



// 开始摇号
var startLot = function () {
  $('.endLot').siblings().css('display', 'none');
  $('.endLot').css('display', 'block');
  random = window.setInterval(() => {
    let index = Math.floor((Math.random() * list.length)); // 随机获取下标
    $('.lotResult').html(list[index])
  }, 20)
}

var endLot = function () {
  $('.btnLotResult').siblings().css('display', 'none');
  $('.btnLotResult').css('display', 'block');
  $('.sureBtn').css('display', 'block');
  clearInterval(random)
  // 如果不是内定就传当前随机到的值给后台
  if (isInternalization == false) {
    console.log($('.lotResult').html())
  } else {
    // 如果是内定就接收后台传过来的值
    $('.lotResult').html(internalizationNum)
  }
}