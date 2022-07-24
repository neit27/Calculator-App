$(document).ready(function () {
    function getData() {
        var shopee = $('#app-shopee-input').val();
        var grab = $('#app-grab-input').val();
        var baemin = $('#app-baemin-input').val();
        var vnPay = $('#vn-pay-input').val();
        var ice = $('#ice-input').val();
        var other = $('#other-input').val();
        var buyToping = $('#buy-toping-input').val();
        var sellToping = $('#sell-toping-input').val();
        var totalCups = $('#total-cup-input').val();
        var remainingCups = $('#remaining-input').val();
        var redundancyCups = $('#redundancy-input').val();
        var missCups = $('#miss-input').val();
        var money = $('#money-input').val();
        return [shopee,grab,baemin,vnPay,ice,other,buyToping,sellToping,totalCups,remainingCups,redundancyCups,missCups,money];
    }

    $("#cal-submit-button").on('click', function () {
        $('#notify').text(appCal());
        $('#statistical-submit-button').removeClass('d-none');
    });
    $("#statistical-submit-button").on('click', function () {
        statistical();
        $('#statistical').removeClass('d-none');
    });
    function statistical() {
        var [shopee,grab,baemin,vnPay,ice,other,buyToping,sellToping,totalCups,remainingCups,redundancyCups,missCups,money] = getData();
        var s_shopee = Number(shopee) * 25;
        var s_grab = Number(grab) * 25;
        var s_baemin = Number(baemin) * 25;
        var s_money = (Number(totalCups) - Number(remainingCups)) * 25;
        var s_sellCups = Number(totalCups) - Number(remainingCups);

        console.log(shopee);
        $('#id-s-shopee').text(s_shopee);
        $('#id-s-grab').text(s_grab);
        $('#id-s-baemin').text(s_baemin);
        $('#id-s-total-money').text(s_money);

        $('#id-s-vnpay').text(vnPay);
        $('#id-s-ice').text(ice);
        $('#id-s-other').text(other);
        $('#id-s-buy-toping').text(buyToping);
        $('#id-s-sell-toping').text(sellToping);

        $('#id-s-total-cups').text(totalCups);
        $('#id-s-remaining-cups').text(remainingCups);
        $('#id-s-sell-cups').text(s_sellCups);
        $('#id-s-redundancy-cups').text(redundancyCups);
        $('#id-s-miss-cups').text(missCups);

        $('#id-s-total-money').text(s_money);
        $('#id-s-box-money').text(money);
    }
    function appCal() {
        var [shopee,grab,baemin,vnPay,ice,other,buyToping,sellToping,totalCups,remainingCups,redundancyCups,missCups,money] = getData();
        var appOrder = (Number(shopee) + Number(grab) + Number(baemin)) * 25;
        var bank = Number(vnPay);
        var spend = Number(ice) + Number(other);
        var cupsSold = (Number(totalCups) - Number(remainingCups) + Number(redundancyCups) - Number(missCups)) * 25;
        var cash = cupsSold - (appOrder + bank + spend);
        var total = Number(money) - Number(cash) - Number(sellToping) + Number(buyToping);

        if (total > 0) {
            $('#notify').removeClass('text-danger');
            $('#notify').addClass('text-success');
            return 'Dư ' + total + 'k';
        } else if (total < 0) {
            total = Math.abs(total);
            return 'Thiếu ' + total + 'k rồi. Ét ô ét';
        } else {
            $('#notify').removeClass('text-danger');
            return 'Đã đủ tiền!';
        }
    }
});
