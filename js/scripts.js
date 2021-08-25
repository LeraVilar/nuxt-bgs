
$('.choice-device__item').hover(function(){

    var $this = $('.choice-device__item:hover').addClass('focus'); 
    $(".choice-device__item").not($this).addClass('opacity');
},function() {
   $('.choice-device__item').removeClass('focus');
   $(".choice-device__item").removeClass('opacity');

});