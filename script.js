// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


// scroll reveal 


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal(' .contentBx, .home-text, .post-filter, .post ', { origin: 'top' });
ScrollReveal().reveal('.imgBx, .footer-container',{ origin: 'bottom' });
// ScrollReveal().reveal('.post', { origin: 'left' });
// ScrollReveal().reveal('.post', { origin: 'right' });