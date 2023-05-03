const menu = document.getElementById('menu_bar')
const nav = document.querySelector('.navigation')
const header = document.querySelector('.header')

menu.addEventListener('click' ,()=>{
   let res = header.classList.toggle('response')
   let res2 = header.classList.toggle('header_col')
    nav.classList.toggle('response')
    !res ? menu.style.border = 'none'  : menu.style.border = '1px solid #707070b5'
})




