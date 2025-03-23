//!function(a){"use strict";function t(e){1==a("#light-mode-switch").prop("checked")&&"light-mode-switch"===e?(a("#dark-mode-switch").prop("checked",!1),a("#rtl-mode-switch").prop("checked",!1),a("#bootstrap-style").attr("href","static/dashboard/css/bootstrap.min.css"),a("#app-style").attr("href","static/dashboard/css/app.min.css"),sessionStorage.setItem("is_visited","light-mode-switch")):1==a("#dark-mode-switch").prop("checked")&&"dark-mode-switch"===e?(a("#light-mode-switch").prop("checked",!1),a("#rtl-mode-switch").prop("checked",!1),a("#bootstrap-style").attr("href","static/dashboard/css/bootstrap-dark.min.css"),a("#app-style").attr("href","static/dashboard/css/app-dark.min.css"),sessionStorage.setItem("is_visited","dark-mode-switch")):1==a("#rtl-mode-switch").prop("checked")&&"rtl-mode-switch"===e&&(a("#light-mode-switch").prop("checked",!1),a("#dark-mode-switch").prop("checked",!1),a("#bootstrap-style").attr("href","static/dashboard/css/bootstrap.min.css"),a("#app-style").attr("href","static/dashboard/css/app-rtl.min.css"),sessionStorage.setItem("is_visited","rtl-mode-switch"))}function e(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||(console.log("pressed"),a("body").removeClass("fullscreen-enable"))}var s;a("#side-menu").metisMenu(),a(".vertical-menu-btn").on("click",function(e){e.preventDefault(),a("body").toggleClass("sidebar-enable"),992<=a(window).width()?a("body").toggleClass("vertical-collpsed"):a("body").removeClass("vertical-collpsed")}),a("#sidebar-menu a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(a(this).addClass("active"),a(this).parent().addClass("mm-active"),a(this).parent().parent().addClass("mm-show"),a(this).parent().parent().prev().addClass("mm-active"),a(this).parent().parent().parent().addClass("mm-active"),a(this).parent().parent().parent().parent().addClass("mm-show"),a(this).parent().parent().parent().parent().parent().addClass("mm-active"))}),a(document).ready(function(){var e;0<a("#sidebar-menu").length&&(300<(e=a("#sidebar-menu .mm-active .active").offset().top)&&(e-=300,a(".simplebar-content-wrapper").animate({scrollTop:e},"slow")))}),a('[data-toggle="fullscreen"]').on("click",function(e){e.preventDefault(),a("body").toggleClass("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),a(".navbar-nav a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(a(this).addClass("active"),a(this).parent().addClass("active"),a(this).parent().parent().addClass("active"),a(this).parent().parent().parent().addClass("active"),a(this).parent().parent().parent().parent().addClass("active"),a(this).parent().parent().parent().parent().parent().addClass("active"))}),a(".right-bar-toggle").on("click",function(e){a("body").toggleClass("right-bar-enabled")}),a(document).on("click","body",function(e){0<a(e.target).closest(".right-bar-toggle, .right-bar").length||a("body").removeClass("right-bar-enabled")}),a(".dropdown-menu a.dropdown-toggle").on("click",function(e){return a(this).next().hasClass("show")||a(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),a(this).next(".dropdown-menu").toggleClass("show"),!1}),function(){a(function(){a('[data-toggle="tooltip"]').tooltip()}),a(function(){a('[data-toggle="popover"]').popover()});var s=a(this).attr("data-delay")?a(this).attr("data-delay"):100,n=a(this).attr("data-time")?a(this).attr("data-time"):1200;a('[data-plugin="counterup"]').each(function(e,t){a(this).counterUp({delay:s,time:n})})}(),window.sessionStorage&&((s=sessionStorage.getItem("is_visited"))?(a(".right-bar input:checkbox").prop("checked",!1),a("#"+s).prop("checked",!0),t(s)):sessionStorage.setItem("is_visited","light-mode-switch")),a("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on("change",function(e){t(e.target.id)}),a(window).on("load",function(){a("#status").fadeOut(),a("#preloader").delay(350).fadeOut("slow")}),Waves.init()}(jQuery);


(function ($) {
  "use strict";

  function switchTheme(mode) {
    if ($("#light-mode-switch").prop("checked") && mode === "light-mode-switch") {
      $("#dark-mode-switch, #rtl-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "static/dashboard/css/bootstrap.min.css");
      $("#app-style").attr("href", "static/dashboard/css/app.min.css");
      sessionStorage.setItem("is_visited", "light-mode-switch");
    } else if ($("#dark-mode-switch").prop("checked") && mode === "dark-mode-switch") {
      $("#light-mode-switch, #rtl-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "static/dashboard/css/bootstrap-dark.min.css");
      $("#app-style").attr("href", "static/dashboard/css/app-dark.min.css");
      sessionStorage.setItem("is_visited", "dark-mode-switch");
    } else if ($("#rtl-mode-switch").prop("checked") && mode === "rtl-mode-switch") {
      $("#light-mode-switch, #dark-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "static/dashboard/css/bootstrap.min.css");
      $("#app-style").attr("href", "static/dashboard/css/app-rtl.min.css");
      sessionStorage.setItem("is_visited", "rtl-mode-switch");
    }
  }

  function exitFullscreenHandler() {
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      console.log("Exited fullscreen");
      $("body").removeClass("fullscreen-enable");
    }
  }
  function showSpinner() {
    $("#status, #preloader").fadeIn();
  }

  function hideSpinner() {
    $("#status, #preloader").fadeOut();
  }
   function showSnackbar(message) {
       let toastElement = document.getElementById("snackbar");
       document.getElementById("snackbar-text").innerText = message;
       $(toastElement).toast("show");  // Bootstrap 4 toast function
       setTimeout(function () {
            $(toastElement).toast("hide");
        }, 3000);
   }
   function showAlert() {
        console.log('alert_called')
        let alertBox = document.getElementById("myAlert");
        if (!alertBox) {
        console.error("Alert element not found!");
        return;
    }
        alertBox.classList.remove("d-none");
        console.log('ed')
        new bootstrap.Alert(alertBox);// Show alert
   }
  // ✅ Load Data via AJAX with Spinner
  function load_data() {
    console.log("Fetching data...");

    showSpinner(); // Start spinner

    $.ajax({
      url: "/fetch_holdings", // Django view URL
      type: "GET",
      success: function (response) {
        let tableBody = $("#holdings-data");
        tableBody.empty(); // Clear previous data

        response.holdings.forEach(function (item) {
          let row = `<tr>
                      <td class="text-center">${item.CompanyName}</td>
                      <td class="text-center">${item.NumberShares}</td>
                      <td class="text-center">₹ ${parseFloat(item.AverageCost).toFixed(2)}</td>
                      <td class="text-center">LTP</td>
                      <td class="text-center">₹ ${parseFloat(item.InvestmentAmount).toFixed(2)}</td>
                      <td class="text-center">PNL</td>
                      <td class="text-center">Net Change</td>
                      <td></td>
                    </tr>`;
          tableBody.append(row);
        });

        hideSpinner();
        showSnackbar('Investment Data Loaded!')// Stop spinner after loading data
      },
      error: function () {
        showSnackbar("Error fetching data.");
        hideSpinner(); // Stop spinner even if error occurs
      }
    });
  }

  // ✅ Attach function to window so it can be accessed globally
  window.load_data = load_data;
  window.showAlert = showAlert;
  window.showSnackbar = showSnackbar;

  // Sidebar Menu Initialization
  $("#side-menu").metisMenu();

  // Sidebar Toggle Button
  $(".vertical-menu-btn").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-enable");

    if ($(window).width() >= 992) {
      $("body").toggleClass("vertical-collapsed");
    } else {
      $("body").removeClass("vertical-collapsed");
    }
  });

  // Activate Sidebar Links based on URL
  $("#sidebar-menu a").each(function () {
    var currentUrl = window.location.href.split(/[?#]/)[0];
    if (this.href === currentUrl) {
      $(this).addClass("active");
      $(this).parent().addClass("mm-active");
      $(this).parent().parent().addClass("mm-show");
      $(this).parent().parent().prev().addClass("mm-active");
      $(this).parent().parent().parent().addClass("mm-active");
      $(this).parent().parent().parent().parent().addClass("mm-show");
      $(this).parent().parent().parent().parent().parent().addClass("mm-active");
    }
  });

  // Auto-scroll sidebar to active menu item
  $(document).ready(function () {
    if ($("#sidebar-menu").length) {
      var activeItemOffset = $("#sidebar-menu .mm-active .active").offset()?.top || 0;
      if (activeItemOffset > 300) {
        activeItemOffset -= 300;
        $(".simplebar-content-wrapper").animate({ scrollTop: activeItemOffset }, "slow");
      }
    }
  });

  // Fullscreen Toggle
  $('[data-toggle="fullscreen"]').on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("fullscreen-enable");

    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement
    ) {
      if (document.cancelFullScreen) document.cancelFullScreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    } else {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
      else if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();
      else if (document.documentElement.webkitRequestFullscreen)
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  });

  // Event Listeners for exiting fullscreen
  document.addEventListener("fullscreenchange", exitFullscreenHandler);
  document.addEventListener("webkitfullscreenchange", exitFullscreenHandler);
  document.addEventListener("mozfullscreenchange", exitFullscreenHandler);

  // Navbar active class update
  $(".navbar-nav a").each(function () {
    var currentUrl = window.location.href.split(/[?#]/)[0];
    if (this.href === currentUrl) {
      $(this).addClass("active");
      $(this).parent().addClass("active");
      $(this).parent().parent().addClass("active");
      $(this).parent().parent().parent().addClass("active");
      $(this).parent().parent().parent().parent().addClass("active");
      $(this).parent().parent().parent().parent().parent().addClass("active");
    }
  });

  // Right Sidebar Toggle
  $(".right-bar-toggle").on("click", function () {
    $("body").toggleClass("right-bar-enabled");
  });

  $(document).on("click", "body", function (e) {
    if ($(e.target).closest(".right-bar-toggle, .right-bar").length === 0) {
      $("body").removeClass("right-bar-enabled");
    }
  });

  // Nested Dropdown Menu Toggle
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
    }
    $(this).next(".dropdown-menu").toggleClass("show");
    return false;
  });

  // Initialize Tooltips & Popovers
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  });

  // Counter Animation Plugin
  $('[data-plugin="counterup"]').each(function () {
    var delay = $(this).attr("data-delay") || 100;
    var time = $(this).attr("data-time") || 1200;
    $(this).counterUp({ delay: delay, time: time });
  });

  // Theme Mode Persistence
  if (window.sessionStorage) {
    var storedTheme = sessionStorage.getItem("is_visited");
    if (storedTheme) {
      $(".right-bar input:checkbox").prop("checked", false);
      $("#" + storedTheme).prop("checked", true);
      switchTheme(storedTheme);
    } else {
      sessionStorage.setItem("is_visited", "light-mode-switch");
    }
  }

  $("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on("change", function (e) {
    switchTheme(e.target.id);
  });

  // Preloader Animation
  $(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
  });

  // Initialize Waves Effect
  Waves.init();
})(jQuery);
