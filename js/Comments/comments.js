const comments = [
    {
        name: "Name",
        email: "email.am@email.com",
        date: Date.now(),
        comment: "This is a comment. This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment."
    },
    {
        name: "Name",
        email: "email.am@email.com",
        date: Date.now(),
        comment: "This is a comment. This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.This is a comment."
    },
];


const commentsWrapping = (data)=> {
    const messageWrapper = document.querySelector('.messages')
    const oneMessageDiv = document.createElement('div')
    oneMessageDiv.setAttribute('class','message')
    const metaData = document.createElement('div')
    metaData.setAttribute('class', 'metadata')
    const nameEmailHolder = document.createElement('p')
    nameEmailHolder.setAttribute('class', 'nameEmail')
    const emailOnly = document.createElement('span')
    const dateHolder = document.createElement('p')
    dateHolder.setAttribute('class', 'dateHolder')
    const line = document.createElement('hr')
    const message = document.createElement('p')

    nameEmailHolder.textContent = data.name
    emailOnly.textContent =" > " +data.email
    dateHolder.textContent = data.date
    message.textContent = data.comment

    // Data about only comments
    const actions = document.createElement('div')
    const reply = document.createElement('button')
    reply.innerHTML = "Reply"
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'deleteBtn')
    deleteBtn.innerHTML = "Delete"
    actions.appendChild(reply)
    actions.appendChild(deleteBtn)
    actions.style.padding = '10px'
    reply.addEventListener('click',()=>{
        replyForm.style.display = 'flex'
    })

    //Reply form
    const replyForm = document.createElement('div')
    replyForm.style.display = 'none'
    replyForm.setAttribute('class', 'reply-space')
    const select = document.createElement('select')
    const options = document.createElement('option')
    select.appendChild(options)
    options.innerHTML = 'Achille'
    const textarea = document.createElement('textarea')
    textarea.rows = 4;

    const actionsTwo = document.createElement('div')
    actionsTwo.style.marginLeft = 'auto'

    const replyTwo = document.createElement('button')
    replyTwo.innerHTML = "Reply"

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('class', 'deleteBtn')
    cancelBtn.addEventListener('click',()=>{
        replyForm.style.display = 'none'
    })

    cancelBtn.innerHTML = "Cancel"
    actionsTwo.appendChild(cancelBtn)
    actionsTwo.appendChild(replyTwo)
    replyForm.appendChild(select)
    replyForm.appendChild(textarea)
    replyForm.appendChild(actionsTwo)

    //Appending children to parents
    nameEmailHolder.appendChild(emailOnly)
    metaData.appendChild(nameEmailHolder)
    metaData.appendChild(dateHolder)
    oneMessageDiv.appendChild(metaData)
    oneMessageDiv.appendChild(line)
    oneMessageDiv.appendChild(message)
    oneMessageDiv.appendChild(actions)
    oneMessageDiv.appendChild(replyForm)
    messageWrapper.appendChild(oneMessageDiv)
}

comments.forEach(comment => {
    commentsWrapping(comment)
})
