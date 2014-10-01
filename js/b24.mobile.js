// Inits
$(document).ready(function() {
  SCarousel();
  THeader();
  SForm();
  MMenu();
  STable();
  InpSearch();
});


// Header top
function THeader() {

  $(window).on('scroll', function(){ 

    var wTop = ($(document).scrollTop())-1,
        tTop = ($('#row_2').offset().top)-130;

    if (wTop>tTop){ 
      $('#toggle_cover').css({
        top: '48px',
        position: 'fixed'
      });
    } else {
      $('#toggle_cover').css({
        top: 'auto',
        position: 'absolute'  
      });
    }

    if (wTop>tTop+88){ 
      $('#drag_cover .fixed').css({
        top: '108px',
        position: 'fixed'
      });
    } else {
      $('#drag_cover .fixed').css({
        top: 'auto',
        position: 'absolute'  
      });
    }


  }); 

 
}

// Main menu
function MMenu() {
  $('#header .menu_link').on('click', function(){ 
    var l66 = $('#menu .menu_cover').width();
    if ($(this).hasClass('closed')) {     
      $(this).addClass('opened').removeClass('closed');  
      $('#header, #cover, #footer').animate({left:'66%'});
      $('#header .header_cover, #toggle_cover, #drag_cover .fixed').animate({'margin-left':'0.1'});
      $('.menu_cover').animate({left:0});
      $('#menu').css({'z-index':'2'});
    } else { 
      $(this).addClass('closed').removeClass('opened');
      $('#header, #cover, #footer').animate({left:0});
      $('#header .header_cover, #toggle_cover, #drag_cover .fixed').animate({'margin-left':'0'});
      $('.menu_cover').animate({left:'-66%'});
      $('#menu').css({'z-index':'auto'}); 
    } 
  });                                                           
}


// Carousel
function SCarousel() {
  $('.slider').slick({
    lazyLoad: 'ondemand',
    dots:true
  });
}


// Slide Table
function STable() {
  $('#toggle .toggle_limiter div').draggable({
    stop: function(){
      var posL = $(this).position().left,
          widthC = $('#toggle .toggle_limiter').width(),
          widthE = $('#toggle .toggle_limiter div').width(),
          center = $('#drag_cover table').position().left;

      if (posL>widthC/4) { 
        $('#toggle span').removeClass('active');
        $('#toggle .box').addClass('active');   
        $('#toggle .toggle_limiter div').animate({left: '50%'}, 200); 
        $('#drag_cover table').animate({left:'0'}, 200); 
        $('#drag_cover .centred DIV').animate({left:center},200);
      } else {
        $('#toggle span').removeClass('active');
        $('#toggle .cloud').addClass('active');   
        $('#toggle .toggle_limiter div').animate({left:'0'}, 200); 
        $('#drag_cover table').animate({left: '33.33333%'}, 200); 
        $('#drag_cover .centred DIV').animate({left:center},200);              
      } 

    },    
    containment:'#toggle',
    axis: 'x',
    scroll:false
  });


  $('#toggle span').on('click', function(){
    $('#toggle span').removeClass('active');
    $(this).addClass('active');

    if ($('#toggle .box').hasClass('active')) {     
      $('#toggle .toggle_limiter div').animate({left: '50%'});
      $('#drag_cover table').animate({left:'0'});
      $('#drag_cover .fixed').animate({'margin-left': '0.1'});

    } else { 
      $('#toggle .toggle_limiter div').animate({left:'0'});
      $('#drag_cover table').animate({left: '33.33333%'}); 
      $('#drag_cover .fixed').animate({'margin-left': '0'});

    } 

    var center = $('#drag_cover table').position().left;
    $('#drag_cover .centred DIV').animate({left:center});
  }); 
 
}


// Styler
function SForm() {
    $('select').styler({
      selectSearchLimit: 1000
    });     
}


// Input inpSearch
function InpSearch(){
  var that = $('input[value]');
  
  that.each(function(){
    var val = $(this);
      $(this).focus(function() {
        if ( this.value == "Что ищем?" ) {
          this.value = "";
        }
      }).blur(function() {
         if ( this.value == "" ) {
           this.value = "Что ищем?";
         } 
      });
  })
}
