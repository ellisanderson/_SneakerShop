//Adding +1 to ".cart"
var counter = 0;

$('.button').click(function(){
  counter++;
  $('.cart').text(counter);

});

//--------------------------------------------------
//Temporary Button Text Change

$('.button').click(function(){
  $('.button').text('Added to cart!');

  setTimeout(originalText, 1000);
  function originalText() {
    $('.button').text('Buy Now!');
  }
});

//---------------------------------------------------
//Details Menu: Border-Bottom + Show/Hide

$('li.details').addClass('selected');
$('div.sizeText').addClass('hidden');
$('div.reviewsText').addClass('hidden');

$('li.details').click(function(){
  $('li.details').addClass('selected');
  $('li.size').removeClass('selected');
  $('li.reviews').removeClass('selected');
  $('div.detailsText').removeClass('hidden');
  $('div.sizeText').addClass('hidden');
  $('div.reviewsText').addClass('hidden');
});

$('li.size').click(function(){
  $('li.size').addClass('selected');
  $('li.details').removeClass('selected');
  $('li.reviews').removeClass('selected');
  $('div.sizeText').removeClass('hidden');
  $('div.reviewsText').addClass('hidden');
  $('div.detailsText').addClass('hidden');
});

$('li.reviews').click(function(){
  $('li.reviews').addClass('selected');
  $('li.size').removeClass('selected');
  $('li.details').removeClass('selected');
  $('div.reviewsText').removeClass('hidden');
  $('div.sizeText').addClass('hidden');
  $('div.detailsText').addClass('hidden');
});

//---------------------------------------------------
//
