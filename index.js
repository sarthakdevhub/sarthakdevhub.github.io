var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-paginatio",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:1,
        },
        950:{
            slidesPerView:2,
        },
    },
  });

  var sidemenu = document.getElementById("side-menu");
  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }

  window.addEventListener("load", function () {
    // When the page is fully loaded, remove the loading screen.
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector("#home").style.display = "block";
    document.querySelector("#about").style.display = "block";
    document.querySelector("#skills").style.display = "block";
    document.querySelector("#stats").style.display = "block";
    document.querySelector("#projects").style.display = "block";
    document.querySelector("#contact").style.display = "block";
  });









