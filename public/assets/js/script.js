// var moveDiv = document.getElementById('cursor_custom');

//  window.onmousemove = function (e) {
//      var x = e.pageX,
//          y = e.pageY;
//      moveDiv.style.top = (y + 0) + 'px';
//      moveDiv.style.left = (x + 0) + 'px';
//  };

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
}) 


$(window).scroll(function () {
  $('.navbar_floating').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('#btn_nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('.btn_home').toggleClass('scrolledMore', $(this).scrollTop() > 500);
});
$(window).scroll(function () {
  $('.btn_about').toggleClass('scrolledMore', $(this).scrollTop() > 500);
});
$(window).scroll(function () {
  $('.btn_devlog').toggleClass('scrolledMore', $(this).scrollTop() > 500);
});
$(window).scroll(function () {
  $('.vertical_line').toggleClass('scrolledMore', $(this).scrollTop() > 500);
});
$(window).scroll(function () {
  $('.navbar_floating_mobile').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('#btn_nav_mobile').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('.arrow_down').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('.arrow_down').toggleClass('scrolledMore', $(this).scrollTop() > 500);
});
$(window).scroll(function () {
  $('.fa-arrow-down').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('.tooltip').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function () {
  $('.btn_up').toggleClass('scrolled', $(this).scrollTop() > 500);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
AOS.init({
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Homepage

// .paragrafo di presentazione del progetto X
// .paragrafo di rimando a "Chi siamo" X
// .paragrafo di rimando al Devlog X
// Chi siamo
// .paragrafo generale
// .schede personali con foto e link
// Devlog
// .gestione articoli

// Aggiunte

// .tooltips nel menu X
// .versione mobile
// .rimozione manina cursore X
// .rimozione cursore su versione mobile X
// .rimozione rotazione icone menù (nel caso sia una merda al massimo si rimette) X
// .footer bozza
// .versione inglese (?)
// Articoli dicevo con testo, data e carosello di foto