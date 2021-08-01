const logout = document.getElementById('logout')

logout.addEventListener('click', ()=>{
    localStorage.removeItem('login')
    window.location.assign('../login.html')
})