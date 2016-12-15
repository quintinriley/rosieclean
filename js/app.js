$(document).ready(function(){
   

    var ckbox = $('#inlineCheckbox1');
    var ckbox1 = $('#inlineCheckbox2');
    var ckbox2 = $('#inlineCheckbox3');
    var finalPrice = $('#final-price');
    var genPrice = 137;
    var makeBeds = 15;
    var vacCouche = 9;
    var dishes = 9;
    var week = $('#weekly');
    var biWk = $('#biWeekly');
    var month = $('#monthly');
    var total = genPrice;
    var discount;
    finalPrice.text(genPrice);
    
    

    $(ckbox).on('click',function () {
        if (ckbox.is(':checked')) {
            $('#price-add').append("<p id='other'>Make beds</p>");
            total += makeBeds;
            finalPrice.text(total) ;
            //alert('You have Checked it');
        } else {
            $("#other").remove();
            total -= makeBeds;
            finalPrice.text(total);
            //alert('You Un-Checked it');
        }
    });
   
     $(ckbox1).on('click',function () {
        if (ckbox1.is(':checked')) {
            $('#price-add').append("<p id='other'>Vacuum Couches</p>");
            total += vacCouche;
            finalPrice.text(total);
            //alert('You have Checked it');
        } else {
            $("#other").remove();
            total -= vacCouche;
            $('#final-price').text(total);
            //alert('You Un-Checked it');
        }
    });
    
   $(ckbox2).on('click',function () {
        if (ckbox2.is(':checked')) {
            $('#price-add').append('<i class="ion-ios-infinite-outline"></i>');
            $('#price-add').append("<p id='other'><span></span>Dishes</p>");
            total += dishes;
            finalPrice.text(total);
            //alert('You have Checked it');
        } else {
            $("#other").remove();
            total -= dishes;
            $('#final-price').text(total);
            //alert('You Un-Checked it');
        }
    });
    
    $(week).on('click',function () {
        discount = .80;
        if (week.is(':checked')) {
            total = Math.floor( total * discount);
             finalPrice.text(total);
            //alert('You have Checked it');
        } else {
            //total -= total;
            total = 6;
            $('#final-price').text(total + 20);
        }
    });
    
    $(biWk).on('click',function () {
       discount = .85;
        if (biWk.is(':checked')) {
            total = Math.floor( total * discount);
            finalPrice.text(total);
            //alert('You have Checked it');
        } else {
            //total -= total;
            $('#final-price').text(total + 15);
            //alert('You Un-Checked it');
        }
    });
});



/*===== Navigation scroll =====*/
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    
    /*===== Animation on scroll =====*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });