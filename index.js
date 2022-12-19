
    $('.validate').hide();
    $('body').on('blur', '#phone', function() {
        $('.validate').hide();
        isphone($(this).val());
    });

    function isphone(phone) {
        if (phone === "1234" || phone === "23456"){
            $(".validate").hide();
        } else {
            $(".validate").show();
        }
    }


