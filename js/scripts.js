/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

const DATE_TARGET = new Date("12/12/2020 06:00 PM");
const SPAN_DAYS = document.querySelector("h1#days");
const SPAN_HOURS = document.querySelector("h1#hours");
const SPAN_MINUTES = document.querySelector("h1#minutes");
const SPAN_SECONDS = document.querySelector("h1#seconds");
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

function updateCountdown() {
  // Calcs
  const NOW = new Date();
  const DURATION = DATE_TARGET - NOW;
  const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
  const REMAINING_HOURS =
    Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR) > 9
      ? Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR)
      : "0" +
        Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);

  const REMAINING_MINUTES =
    Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE) >
    9
      ? Math.floor(
          (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
        )
      : "0" +
        Math.floor(
          (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
        );

  const REMAINING_SECONDS =
    Math.floor(
      (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    ) > 9
      ? Math.floor(
          (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
        )
      : "0" +
        Math.floor(
          (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
        );

  // Render
  SPAN_DAYS.textContent = REMAINING_DAYS;
  SPAN_HOURS.textContent = REMAINING_HOURS;
  SPAN_MINUTES.textContent = REMAINING_MINUTES;
  SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

updateCountdown();
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

var imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var galeria = document.getElementById("gallery");

for (imagen of imagenes) {
  galeria.innerHTML += `<!-- Modal -->
  <div
    class="modal fade"
    id="imagesModal${imagen}"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-content">
        <img
          src="assets/img/weeding-photos/${imagen}.jpg"
          alt=""
          class="img-fluid rounded"
        />
      </div>
    </div>
  </div>`;
}
