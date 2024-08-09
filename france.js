

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scror section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            
            navLinks.forEach(navLinks => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            //active sesion for animation on scroll
            sec.classList.add('show-animate');
        }

        //if you want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    //style header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle bar when clicked

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}