const logout = document.getElementById('logout')
logout.style.backgroundColor = 'rgb(16, 78, 68)'
logout.style.borderRadius = "10px"

logout.addEventListener('click', ()=>{
    localStorage.removeItem('login')
    window.location.assign('../login.html')
})