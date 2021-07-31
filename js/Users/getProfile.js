const profile = {
    id: 1,
    name: "Cishahayo Songa",
    about: "This is about section ofd this user an d it xonyabohis basic inforamayion, his bacxkgrounf, his hobbiwa and everuthing eelared to it. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eos excepturi fugit numquam architecto magnam sapiente recusandae consequuntur maxime dignissimos.",
    dob: "17 January 2001",
    role: "Author",
    social: {
        instagram: "http://www.instagram.com/achille_songa",
        Facebook: "http://www.facebook.com/songa.achille.9",
        Twitter: "http://twitter.com/achille_songa"
    }
}

const profileMap = ()=> {
    const name = document.getElementById('userName')
    const nameAgain = document.getElementById('nameOfUser')
    const aboutUser = document.getElementById('about')
    const dob = document.getElementById('dob')
    const role = document.getElementById('role')
    const fb = document.getElementById('facebook')
    const ig = document.getElementById('instagram')
    const tw = document.getElementById('twitter')
    name.innerHTML = profile.name
    nameAgain.innerHTML = profile.name
    aboutUser.innerHTML = profile.about
    dob.innerHTML = profile.dob
    role.innerHTML = profile.role
    fb.href = profile.social.Facebook
    ig.href = profile.social.instagram
    tw.href = profile.social.Twitter

    const viewUserPosts = document.getElementById('viewUserPosts')
    viewUserPosts.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.assign(`../posts/postsByUser.html#${profile.id}`)
    })
}

profileMap()