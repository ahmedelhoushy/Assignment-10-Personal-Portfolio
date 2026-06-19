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

        var sectionTop = section.offsetTop - 100;
        var sectionHeight = section.offsetHeight;

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
// projects.forEach(project => {

//     if (
//         category === 'all' ||
//         project.classList.contains(category)
//     ) {

//         project.classList.remove('d-none');

//     } else {

//         project.classList.add('d-none');

//     }

// });


var cards = document.querySelectorAll('.testimonial-card');
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');

var currentIndex = 0;
var cardsPerView = 3;

function showTestimonials() {

    cards.forEach(card => {
        card.classList.add('d-none');
    });

    for (let i = currentIndex; i < currentIndex + cardsPerView; i++) {

        if (cards[i]) {
            cards[i].classList.remove('d-none');
        }

    }

}

showTestimonials();
nextBtn.addEventListener('click', () => {

    currentIndex++;

    if (currentIndex > cards.length - cardsPerView) {
        currentIndex = 0;
    }

    showTestimonials();

});

prevBtn.addEventListener('click', () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - cardsPerView;
    }

    showTestimonials();

});

var scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function(){

    if(window.scrollY > 300){
        scrollTopBtn.classList.add('show');
    }else{
        scrollTopBtn.classList.remove('show');
    }

});

scrollTopBtn.addEventListener('click', function(){

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

var gearBtn = document.getElementById('gearBtn');
var settingsPanel = document.getElementById('settingsPanel');

gearBtn.addEventListener('click', function(){

    settingsPanel.classList.toggle('open');

});

var colors = document.querySelectorAll('.color');

colors.forEach(color => {

    color.addEventListener('click', function(){
        document.documentElement.style.setProperty(
            '--main-color',
            this.dataset.color
        );
    });
});

var fontBtns = document.querySelectorAll('.font-btn');
fontBtns.forEach(btn => {

    btn.addEventListener('click', function(){

        fontBtns.forEach(item => {
            item.classList.remove('active-font');
        });

        this.classList.add('active-font');

        document.body.style.fontFamily = this.dataset.font;

    });

});