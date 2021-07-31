const menuBtn = document.getElementById('menu-icon')
const items = document.querySelector('.sidebar-items')
const closeButton = document.getElementById('close-icon')

closeButton.style.display = 'none'

menuBtn.addEventListener('click',()=>{
    items.setAttribute('class', 'menuSmallScreen')
    menuBtn.style.display = 'none'
    closeButton.style.display = 'block'
})


closeButton.addEventListener('click',()=>{
    items.setAttribute('class', 'sidebar-items')
    closeButton.style.display = 'none'
    menuBtn.style.display = 'block'
})

