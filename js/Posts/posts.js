document.getElementById('goto-new').addEventListener('click', async ()=> {
    window.location.assign('./newpost.html')
})

const posts = [
    {
        id: 1,
        title: 'American vow song',
        body: "This is the body of this pot. Help me find out the main content of this post.",
        author: 'John Doe',
        date: '12 January 2021',
        image: '../assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',

    },
    {
        id: 2,
        title: "Meddy's new song hits 2 millions",
        body: "Meddy's song my vow hits 2 millions views in just 3 days, making the record in Rwanda.",
        author: 'Achille',
        date: '12 January 2021',
        image: '../assets/images/technology-background-digital-hand.jpeg',

    },
]

const postRendering = (data) => {
    const postsCollection = document.querySelector('.posts-published')
    const postDiv = document.createElement('div')
    postDiv.className = 'post'
    const postData = document.createElement('div')
    const postTitle = document.createElement('h1')
    const line = document.createElement('hr')
    const body = document.createElement('p')
    const image = document.createElement('img')
    const authorHold = document.createElement('a')
    const dateHolder = document.createElement('span')
    const authorDate = document.createElement('p')

    postTitle.textContent = data.title
    body.textContent = data.body
    image.src = data.image
    authorDate.textContent = 'Post by '
    authorHold.textContent = `${data.author}`
    authorHold.href = './postsByUser.html'
    dateHolder.textContent = ` | Posted on ${data.date}`


    //Actions
    const actions = document.createElement('div')
    actions.className = 'actions'
    const view = document.createElement('button')
    view.textContent = 'View'
    const edit = document.createElement('button')
    edit.textContent = 'Update'
    const deleteBtn  = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('class', 'deleteBtn')
    
    // actions in action
    view.addEventListener('click',()=>{
        window.location.assign(`/posts/single.html#${data.id}`)
    })

    edit.addEventListener('click',()=>{
        window.location.assign(`/posts/update.html#${data.id}`)
    })

    deleteBtn.addEventListener('click',()=>{
        confirm(`Are you sure you want to delete ${data.title}`)
    })

    //Appending children to parents
    authorDate.appendChild(authorHold)
    authorDate.appendChild(dateHolder)

    actions.appendChild(view)
    actions.appendChild(edit)
    actions.appendChild(deleteBtn)
    actions.appendChild(authorDate)



    postData.appendChild(postTitle)
    postData.appendChild(line)
    postData.appendChild(body)
    postData.appendChild(actions)
   
    postDiv.appendChild(postData)
    postDiv.appendChild(image)
    postsCollection.appendChild(postDiv)
}


posts.forEach(post => {
    postRendering(post)
})

function whenZero(){
    const postsCollection = document.querySelector('.posts-published')
    const message = document.createElement('p')
    message.setAttribute('class', 'feedback')
    message.textContent = `There are no posts! Publish one`
    postsCollection.appendChild(message)
}

if(posts.length === 0) {
    whenZero()
}