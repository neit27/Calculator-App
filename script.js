$("#cal-submit-button").on('click', function() {
    var shopee = $('#app-shopee-input').val();
    var grab = $('#app-grab-input').val();
    var baemin = $('#app-baemin-input').val();
    var vnPay = $('#vn-pay-input').val();
    var ice = $('#ice-input').val();
    var other = $('#other-input').val();
    var buyToping = $('#buy-toping').val();
    var sellToping = $('#sell-toping').val();
    var totalCups = $('#total-cup-input').val();
    var remainingCups = $('#remaining-input').val();
    var redundancyCups = $('#redundancy-input').val();
    var missCups = $('#miss-input').val();
    var money = $('#money-input').val();
    $('#notify').text(appCal());
    function appCal(){
      var appOrder = (Number(shopee)+Number(grab)+Number(baemin))*25;
      var bank = Number(vnPay);
      var spend = Number(ice) + Number(other);
      var cupsSold = (Number(totalCups) - Number(remainingCups) + Number(redundancyCups) - Number(missCups)) * 25;
      var cash = cupsSold - (appOrder + bank + spend);

      if((Number(money) - Number(cash)) > 0){
        var total =  Number(money)-Number(cash);
        return 'Dư ' + total + 'k mà không biết vì sao';
      } else if((Number(money) - Number(cash)) < 0) {
        var total =  Number(cash)-Number(money);
        return 'Thiếu ' +total + 'k rồi. Ét ô ét';
      } else {
        return 'Đủ tiền rồi, về thôi!';
      }
    }
    
    
    var shopee = $('#app-shopee-input').val();
    var shopee = $('#app-shopee-input').val();
    var shopee = $('#app-shopee-input').val();
    var shopee = $('#app-shopee-input').val();
    var shopee = $('#app-shopee-input').val();
  });