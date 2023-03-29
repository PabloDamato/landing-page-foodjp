/*======MENU MOBILE======*/
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.navbar');
const btnEnter = document.querySelector('.btn.btn-enter');
const linkNavBar = document.querySelectorAll('header nav a')


menuIcon.addEventListener('click', ()=>{
    ativarMenuMobile()
})

function ativarMenuMobile(){
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
    btnEnter.classList.toggle('active')
}

function removeLinkNavBar(){
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
    btnEnter.classList.remove('active')
}

linkNavBar.forEach(link => {
    link.addEventListener('click', ()=>{
        ativarMenuMobile()
    })
});