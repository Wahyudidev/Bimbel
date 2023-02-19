$(document).ready(function() {
  // set slide index and get slide count
  var slideIndex = 0;
  var slideCount = $('.slide').length;

  // add event listeners to buttons
  $(document).ready(function() {
    // get slides and dots
    var slides = $('.slider .slide');
    var dots = $('<div class="slider-dots"></div>');
    $('.slider').append(dots);
    
    // create dots
    for (var i = 0; i < slides.length; i++) {
      var dot = $('<div class="slider-dot"></div>');
      dots.append(dot);
    }
    
    // set active class for first dot and slide
    dots.children().first().addClass('active');
    slides.first().addClass('active');
    
    // dot click event
    dots.children().each(function(index) {
      var dot = $(this);
      dot.click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        slides.eq(index).addClass('active').siblings().removeClass('active');
      });
    });
    
    // auto slide
    setInterval(function() {
      var currentSlide = $('.slider .slide.active');
      var currentDot = $('.slider-dots .slider-dot.active');
      var nextSlide = currentSlide.next('.slide').length ? currentSlide.next('.slide') : slides.first();
      var nextDot = currentDot.next('.slider-dot').length ? currentDot.next('.slider-dot') : dots.children().first();
      currentSlide.removeClass('active');
      currentDot.removeClass('active');
      nextSlide.addClass('active');
      nextDot.addClass('active');
    }, 5000);
  });


  // show the initial slide
  showSlide(slideIndex);

  // set an interval to change the slide automatically
  var intervalId = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slideCount) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 5000); // slide will change every 5 seconds

  // function to show slide
  function showSlide(index) {
    $('.slide').hide();
    $('.slide').eq(index).show();
  }
});

// slide content
$(document).ready(function() {
  $('.slide').hover(function() {
    $(this).find('.slide-content').css('opacity', '1');
  }, function() {
    $(this).find('.slide-content').css('opacity', '0');
  });
});
// end slide content

//end slide content

//card animated
$(document).ready(function() {
  // Memilih elemen dengan kelas .why-privat-wrapper
  $(".why-privat-wrapper").hide().fadeIn(1000);
});

//testimonial animated
