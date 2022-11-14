// alert("Bonjour visiteur, ce site est toujours en construction !");

// $(document).ready(function(){

// $('.exp').hide();
// $('.formations').hide();
// $('.interets').hide();
// $('.pres').hide();
// })

// $('#presentation').click(function(){
// 	$('.pres').slideToggle();
// })

// $('#experience').click(function(){
// 	$('.exp').slideToggle();
// })

// $('#formations').click(function(){
// 	$('.formations').slideToggle();
// })

// $('#interets').click(function(){
// 	$('.interets').slideToggle();
// })


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1100) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 