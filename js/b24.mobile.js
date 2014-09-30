// Inits
$(document).ready(function() {
  SCarousel();
  THeader();
  SForm();
  MMenu();
  STable();
});


// Header top
function THeader() {

  $(window).on('scroll', function(){ 

    var wTop = ($(document).scrollTop())-1,
        tTop = ($('#b24_price #row_2').offset().top)-115;

    $('#header').css({top: wTop});

    $('#drag_cover .fixed').css({top: wTop});


    if (wTop>tTop){ 
      $('#toggle_cover').css({top: wTop});
    } else {
      $('#toggle_cover').css({top: 'auto'});
    }
  }); 

 
}

// Main menu
function MMenu() {
  $('#header .menu_link').on('click', function(){ 
    if ($(this).hasClass('closed')) {     
      $(this).addClass('opened').removeClass('closed');  
      $('#header, #cover, #footer').animate({left:'66%'});
      $('.menu_cover').animate({left:0});       
    } else { 
      $(this).addClass('closed').removeClass('opened');
      $('#header, #cover, #footer').animate({left:0});
      $('.menu_cover').animate({left:'-66%'});       
    } 
  });                                                           
}


// Carousel
function SCarousel() {
  $('.slider').slick({
    dots:true
  });
}


// Slide Table
function STable() {
  $('#toggle div').draggable({
    stop: function(){
      var posL = $(this).position().left,
          widthE = ($('#toggle').width())/4,
          center = $('#drag_cover table').position().left;

      if (posL>widthE) { 
        $('#toggle span').removeClass('active');
        $('#toggle .box').addClass('active');   
        $('#toggle div').animate({left: 'none', right:'5px'}, 200); 
        $('#drag_cover table').animate({left:'0'}, 200); 
        $('#drag_cover .centred DIV').animate({left:center},200);
      } else {
        $('#toggle span').removeClass('active');
        $('#toggle .cloud').addClass('active');   
        $('#toggle div').animate({right:'none', left:'5px'}, 200); 
        $('#drag_cover table').animate({left: '33.33333%'}, 200); 
        $('#drag_cover .centred DIV').animate({left:center},200);              
      } 
    },    
    containment:'#toggle',
    axis: 'x',
    scroll:false
  });

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
    containment:'#drag_cover', 
    axis: 'x'
  });  

  $('#toggle span').on('click', function(){
    $('#toggle span').removeClass('active');
    $(this).addClass('active');

    if ($('#toggle .box').hasClass('active')) {     
      $('#toggle div').animate({left: 'none', right:'5px'});
      $('#drag_cover table').animate({left:'0'});
    } else { 
      $('#toggle div').animate({right:'none', left:'5px'});
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
