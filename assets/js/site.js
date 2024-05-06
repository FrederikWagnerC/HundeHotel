menuButtonOpen = document.getElementById('menuOpen')
asideNav = document.getElementById('asideNav')
asideClose = document.getElementById('asideClose')
function menuFunction() {
    asideNav.classList.toggle('hidden')
    asideNav.classList.toggle('asideDiv')
}
menuButtonOpen.addEventListener('click', menuFunction);
asideClose.addEventListener('click', menuFunction);