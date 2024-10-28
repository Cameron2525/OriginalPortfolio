$(document).ready(function(){
  $(window).scroll(function(){
    
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
  });
  
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      
      $('html').css("scrollBehavior", "auto");
  });
  $('.navbar .menu li a').click(function(){
    
      $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  var typed = new Typed(".typing", {
      strings: ["Creative Thinker", "Web Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-2", {
      strings:  ["Creative Thinker", "Web Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

document.getElementById("downloadCvButton").onclick = function() {
    document.getElementById("cvModal").style.display = "block";
};

document.querySelector(".close-btn").onclick = function() {
    document.getElementById("cvModal").style.display = "none";
};

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("cvModal")) {
        document.getElementById("cvModal").style.display = "none";
    }
};

window.onload = function() {
    document.querySelector('.html-bar').classList.add('loaded');
    document.querySelector('.css-bar').classList.add('loaded');
    document.querySelector('.js-bar').classList.add('loaded');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_6vgalnq', 'template_pj2ove1', this)
        .then(function(response) {
            alert('Message sent successfully!'); // Message sent
        }, function(error) {
            alert('Failed to send message. Please try again.'); // Message failed
            console.error('Error:', error);
        });
});