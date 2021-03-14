$(function () {
    const headerBottom = $(window);
    const headTopmenu = $(".main-header");

    headerBottom.on("scroll", function () {
        if (headerBottom.scrollTop() > 0) {
            headTopmenu.addClass("menu-down");
        } else {
            headTopmenu.removeClass("menu-down");
        }
    });


    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });


    new Vue({
        el: '#app',
        data: {
            test: 'Hello',
            portfolios: [
                {
                    name: 'Dental Care',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/860517115164345.Y3JvcCwxNTM0MSwxMjAwMCwxODYwLDA.png',
                    link: 'https://www.behance.net/gallery/115164345/Dental-Care-for-Doctor'
                },
                {
                    name: 'Landing Page Pham Ngoc Thach School',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/945d78115160639.Y3JvcCw0Mzk3LDM0NDAsNjQyLDA.png',
                    link: 'https://www.behance.net/gallery/115160639/Landing-page-School'
                },
                {
                    name: 'Dental Care Version For Patient',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/711944115160287.Y3JvcCwxMzQyLDEwNTAsMjksMA.png',
                    link: 'https://www.behance.net/gallery/115160287/Dental-Care-for-Patient'
                },
                {
                    name: 'Landing Page Green Garden',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/e3e968115159971.Y3JvcCw2Njc4LDUyMjQsNTc4LDA.png',
                    link: 'https://www.behance.net/gallery/115160287/Dental-Care-for-Patient'
                },
                {
                    name: 'Landing Page For Vietin Bank',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ef8cd1106100317.Y3JvcCwxNDQwLDExMjYsMCwzMDM2.png',
                    link: 'https://www.behance.net/gallery/106100317/LandingPage'
                },
                {
                    name: 'Landing Page For Dental Care',
                    tags: ['UI/UX'],
                    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/f2bcce106100257.Y3JvcCwxNDQ4LDExMzIsMCwxMjM2.png',
                    link: 'https://www.behance.net/gallery/106100257/Landing-Page-For-DentalCare'
                },
            ]
        },
    })
});

jQuery(window).on("load", function () {
    $(".preloader").fadeOut(200);
});
