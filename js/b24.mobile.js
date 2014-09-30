// Inits
$(document).ready(function() {
  SCarousel();
  PopUp();
  SForm();
  MMenu();
});


// Popup
function PopUp() {
  $('.info').on('click', function(){
    $('#popup').show();
  }); 

  $('#popup .close').on('click', function(){
    $('#popup').hide();
  });
  
  $(document).keyup(function(d) {
    if (d.keyCode == 27) {
      $('#popup').hide();
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

// Styler
function SForm() {
    $('select').styler({
      selectSearchLimit: 1000
    });     
}
