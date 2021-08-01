
const  messages = [
    // {
    //     name: "My name",
    //     email: "myemail@gmail.com",
    //     date: "12 July 2021",
    //     message: "Messages are being displayed here and there."
    // },
    // {
    //     name: "My name",
    //     email: "myemail@gmail.com",
    //     date: "12 July 2021",
    //     message: "Messages are being displayed here and there."
    // },
    // {
    //     name: "My name",
    //     email: "myemail@gmail.com",
    //     date: "12 July 2021",
    //     message: "Messages are being displayed here and there."
    // },
];

const mesageWrapping = (data)=> {
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
    message.textContent = data.message

    //Appending children to parents
    nameEmailHolder.appendChild(emailOnly)
    metaData.appendChild(nameEmailHolder)
    metaData.appendChild(dateHolder)
    oneMessageDiv.appendChild(metaData)
    oneMessageDiv.appendChild(line)
    oneMessageDiv.appendChild(message)
    messageWrapper.appendChild(oneMessageDiv)
}


messages.forEach(message => {
    mesageWrapping(message)
})


function onZero(){
    const messageWrapper = document.querySelector('.messages')
    const message = document.createElement('p')
    message.setAttribute('class', 'feedback')
    message.textContent = `There are no messages yet! Check back later`
    messageWrapper.appendChild(message)
}

if(messages.length === 0) {
    onZero()
}