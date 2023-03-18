

//card animated
$(document).ready(function() {
  // Memilih elemen dengan kelas .why-privat-wrapper
  $(".why-privat-wrapper").hide().fadeIn(1000);
});

//matapelajaran
// ambil semua elemen daftar mata pelajaran
$(document).ready(function(){
  $('.sbj-cont').click(function(){
    $(this).find('.sbj-list').slideToggle();
  });
});

//review


