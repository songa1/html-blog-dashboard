const menuBtn = document.getElementById('menu-icon')
const items = document.querySelector('.sidebar-items')
const closeButton = document.getElementById('close-icon')
const brandName = document.getElementById('brand-name')
brandName.addEventListener('click', () => {
    alert('This is dashboard for your blog')
})

brandName.innerHTML = "Blog Dashboard"

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

