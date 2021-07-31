const subscribers = [
    {
        email: "example@email.com",
        date: "10 July 2021"
    },
    {
        email: "example@gmail.com",
        date: "12 July 2021"
    },
];
let check;
const subMapping = (data) => {
    const subMapper = document.querySelector('.subscribers')
    const oneSubscriber = document.createElement('div')
    oneSubscriber.setAttribute('class', 'subscriber')
    check = document.createElement('input')
    check.type = 'checkbox'
    const email = document.createElement('p')
    const date = document.createElement('p')
    const actions = document.createElement('div')
    actions.setAttribute('class', 'actionsSub')
    const sendMsg = document.createElement('button')
    const deleteSub  = document.createElement('button')
    deleteSub.setAttribute('class', 'deleteBtn')

   

    email.textContent = data.email
    date.textContent = data.date

    sendMsg.innerHTML = 'Send Message'
    deleteSub.innerHTML = 'Delete'

    actions.appendChild(sendMsg)
    actions.appendChild(deleteSub)

    oneSubscriber.appendChild(check)
    oneSubscriber.appendChild(email)
    oneSubscriber.appendChild(date)
    oneSubscriber.appendChild(actions)

    subMapper.appendChild(oneSubscriber)
    
}

subscribers.forEach(subscriber => {
    subMapping(subscriber)
})