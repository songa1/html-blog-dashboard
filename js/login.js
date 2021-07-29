const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('login')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(email.value !== '' && password.value !== ''){
        localStorage.setItem('login', email.value+password.value)
        window.location.assign('posts/posts.html')
    }else{
        alert("Credentials can't be empty")
    }
    
})
