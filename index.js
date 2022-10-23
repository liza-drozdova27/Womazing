const menu = document.querySelector('menu')
const menuItem=document.querySelector('nav__list')
console.log(menu)
console.log(menuItem)

menu.addEventListener('chick',()=>{
  menuItem.classList.toggle('nav__active')
})