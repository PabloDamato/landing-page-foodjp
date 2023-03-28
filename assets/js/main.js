/*======MENU MOBILE======*/
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.navbar');
const btnEnter = document.querySelector('.btn.btn-enter');

menuIcon.addEventListener('click', ()=>{
    ativarMenuMobile()
})

function ativarMenuMobile(){
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
    btnEnter.classList.toggle('active')
}