(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// Script untuk ambil data.json untuk agenda di index.html

fetch('agenda.json')
    .then(response => response.json())
    .then(data => {
      const serviceContainer = document.getElementById('agendaCard');

      // Loop melalui setiap data dalam file JSON
      data.forEach((item) => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'col-lg-4 col-md-6 wow fadeInUp';
        serviceItem.setAttribute('data-wow-delay', '0.1s');

        const serviceContent = `
          <div class="service-item rounded h-100 p-5">
            <div class="align-items-center mb-4">
              <div>
                <img class="img-fluid" src="${item.imgSrc}" alt="" />
              </div>
              <h4 class="mb-0">${item.title}</h4>
            </div>
            <p class="mb-4">${item.description}</p>
            <a class="btn btn-light px-3" href="${item.link}">${item.linkText}</a>
          </div>
        `;

        serviceItem.innerHTML = serviceContent;
        serviceContainer.appendChild(serviceItem);
      });
    })
    .catch(error => console.error(error));