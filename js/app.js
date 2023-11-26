// $(window).on('load',function(){
//   $('#preloader').hide();
// })

$(function(){
   $('#serc').on('click', ()=>{
 $('#search').addClass('show');
})

$('.search_close_btn').on('click', ()=>{
    $('#search').removeClass('show');
})
})