var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.nav-link');
var tabs = document.querySelectorAll('.tab-btn');
var projects = document.querySelectorAll('.project');
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


tabs.forEach(tab => {

    tab.addEventListener('click', function () {

        tabs.forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        const category = this.dataset.category;

        projects.forEach(project => {

            if (
                category === 'all' ||
                project.classList.contains(category)
            ) {

                project.style.display = 'block';

            } else {

                project.style.display = 'none';

            }

        });

    });

});
projects.forEach(project => {

    if (
        category === 'all' ||
        project.classList.contains(category)
    ) {

        project.classList.remove('d-none');

    } else {

        project.classList.add('d-none');

    }

});