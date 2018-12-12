$(document).ready(() => {

$('.image1').on('mouseenter', () => {
$('.image1').addClass('photo-active');
}).on('mouseleave', () => {
$('.image1').removeClass('photo-active');

});



$('.image0').on('mouseenter', event => {
  $(event.currentTarget).addClass('photo-active')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('photo-active')
})

});
