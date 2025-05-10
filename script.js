/*
===================================
    Active navigation bar
===================================
*/

let nav = document.querySelector('.navigation-wrap');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 10) { // Changed scrollY to scrollTop
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};


/*
===============================================
    Hide navigation on click a link
================================================
*/

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})










/*
===================================
    Counter Design
===================================
*/


document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter('count1', 50, 165, 100)
    counter('count2', 200, 275, 100)
    counter('count3', 155, 345, 100)
    counter('count4', 165, 375, 100)
});