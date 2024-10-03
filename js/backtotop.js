document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset>=300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnRotate = document.getElementById("btn_rotate");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset>=300) {
            btnRotate.style.display = "block";
        } else {
            btnRotate.style.display = "none";
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const btnRotate = document.getElementById("openbtn");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset>=300) {
            btnRotate.style.display = "block";
        } else {
            btnRotate.style.display = "none";
        }
    });

});

