const auth = localStorage.getItem('login')

if(!auth) {
    window.location.assign("../login.html")
}