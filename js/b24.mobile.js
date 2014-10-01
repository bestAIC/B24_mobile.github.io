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

    //$('#header').css({top: wTop});

    if (wTop-80>tTop){ 
      $('#drag_cover .fixed').css({top: wTop-231});
    } else {
      $('#drag_cover .fixed').css({top: 'auto'});
    }


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
  }); 

 
}

// Main menu
function MMenu() {
  $('#header .menu_link').on('click', function(){ 
    var l66 = $('#menu .menu_cover').width();
    if ($(this).hasClass('closed')) {     
      $(this).addClass('opened').removeClass('closed');  
      $('#header, #cover, #footer').animate({left:'66%'});
      $('#header .header_cover, #toggle_cover').animate({'margin-left':'0.1'});
      $('.menu_cover').animate({left:0});
      $('#menu').css({'z-index':'2'});
    } else { 
      $(this).addClass('closed').removeClass('opened');
      $('#header, #cover, #footer').animate({left:0});
      $('#header .header_cover, #toggle_cover').animate({'margin-left':'0'});
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
          widthE = ($('#toggle').width())/4,
          center = $('#drag_cover table').position().left;

      if (posL>widthE) { 
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
/*
  $('#drag_cover table').draggable({
    stop: function(){

      var posL = $(this).position().left,
          widthE = ($('#drag_cover').width())/6,
          center = $('#drag_cover table').position().left;
      if (posL>widthE) { 
        $('#toggle span').removeClass('active');
        $('#toggle .box').addClass('active');   
        $('#toggle div').animate({left: 'none', right:'5px'}, 200); 
        $(this).animate({left:'0'}, 200); 
        $('#drag_cover .centred DIV').animate({left:center},200); 
      } else {
        $('#toggle span').removeClass('active');
        $('#toggle .cloud').addClass('active');   
        $('#toggle div').animate({right:'none', left:'5px'}, 200); 
        $(this).animate({left: '33.33333%'}, 200);
        $('#drag_cover .centred DIV').animate({left:center},200);         
      }
    },
    drag: function(){
      var center = $('#drag_cover table').position().left;
      $('#drag_cover .centred DIV').css({left:posL});
    }, 

    containment:'#drag_cover', 
    axis: 'x'
  });  
*/
  $('#toggle span').on('click', function(){
    $('#toggle span').removeClass('active');
    $(this).addClass('active');

    if ($('#toggle .box').hasClass('active')) {     
      $('#toggle .toggle_limiter div').animate({left: '50%'});
      $('#drag_cover table').animate({left:'0'});
    } else { 
      $('#toggle .toggle_limiter div').animate({left:'0'});
      $('#drag_cover table').animate({left: '33.33333%'});           
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
  var that = $('input[placeholder]');
  
  that.each(function(){
    var val = $(this);
      $(this).focus(function() {
        if ( this.placeholder == "Что ищем?" ) {
          this.placeholder = "";
        }
      }).blur(function() {
         if ( this.placeholder == "" ) {
           this.placeholder = "Что ищем?";
         } 
      });
  })
}
