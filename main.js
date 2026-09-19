//nav toogle
/*const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.setAttribute(
            'aria-expanded',
            navMenu.classList.contains('active')

        );
    })
}*/
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
// Update the year in the footer
const yearE1 = document.getElementById('year');
if (yearE1) yearE1.textContent = new Date().getFullYear();

// Fade-in effect for sections
const fadeElements = document.querySelectorAll(' .fade-in');
 if ('IntersectionObserver' in window && fadeElements.length) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }

    );
    fadeElements.forEach(el => observer.observe(el));
}else{ 
    fadeElements.forEach(el => el.classList.add('visible'));
 }
//scroll to top button
const toTop = document.getElementById('to-top');
if (toTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            toTop.classList.add('show');
        }else {
            toTop.classList.remove('show');

        }
    });
    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});

    });
}
