let menuicon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    })
}

menuicon.onclick = () => {
    navbar.classList.toggle('fa-x');
    menuicon.classList.toggle('active');
}

menuicon.style.cursor = 'pointer';

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('fa-x');
        menuicon.classList.remove('active');
    });
});
