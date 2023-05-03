const menu = document.getElementById('menu_bar')
const nav = document.querySelector('.navigation')
const header = document.querySelector('.header')

menu.addEventListener('click' ,()=>{
   let res = header.classList.toggle('response')
    nav.classList.toggle('response')
    !res ? menu.style.border = 'none'  : menu.style.border = '1px solid black'
})




