var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.nav-link');



var themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {

    document.documentElement.classList.toggle('dark');

});
//  Active Link Highlighting on Scroll
window.addEventListener('scroll', function () {

    let currentSection = '';

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(function(link){

        link.classList.remove('active');

        if(
            link.getAttribute('href') === `#${currentSection}`
        ){
            link.classList.add('active');
        }

    });

});