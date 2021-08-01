document.getElementById('goto-all').addEventListener('click', async ()=> {
    window.location.assign('./posts.html')
})

const title = document.getElementById('postTitle')
const body = document.getElementById('content')
const author = document.getElementById('author')
const category = document.getElementById('category')
const featuredImage = document.getElementById('featuredImage')
const submit = document.getElementById('addPost')
const save = document.getElementById('save')


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log("Post",title.value, content.value, author.value, category.value)
})

save.addEventListener('click',(e)=> {
    e.preventDefault()
    console.log("Draft",title.value, content.value, author.value, category.value)
})