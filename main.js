// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// navbar hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse')
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})


// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                console.log(current);
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);


    }
    counter("count1", 500, 1287, 3000);
    counter("count2", 1500, 2786, 3000);
    counter("count3", 500, 1440, 3000);
    counter("count4", 2000, 2110, 3000);
})