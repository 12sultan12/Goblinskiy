const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')


menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const st = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
st.reveal('.hero-text', {delay: 200, origin: 'top'})
st.reveal('.hero-img', {delay: 450, origin: 'top'})
st.reveal('.icons', {delay: 500, origin: 'left'})
st.reveal('.scroll-down', {delay: 500, origin: 'right'})