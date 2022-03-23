const pages =[
    {
        page:'Home',
        navigate: home
    },
    {
        page:'About',
        navigate: about
    },
    {
        page:'View',
        navigate: view
    }
]

let creds = ['coolStudent123', 'coolStudent123']

function navbar(){
    document.body.innerHTML = ''
    let nav = document.createElement('nav')
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    nav.style.backgroundColor = 'blue'
    nav.style.height = '60px'
    document.body.appendChild(nav)
    document.body.appendChild(wrapper)
    for (obj of pages){
        navbutton(obj.page, nav, obj.navigate)
    }
}

function navbutton(text, parent, page){
    let button = document.createElement('button')
    button.innerHTML = text
    button.style.position='relative'
    button.style.top='25%'
    button.style.left="45%"
    button.addEventListener('click', function(){
    document.querySelector('.wrapper').innerHTML = ''
    page()
    })
    parent.appendChild(button)
}

function home(){
    let home = document.createElement('h1')
    home.innerHTML="Home Page"
    document.querySelector(".wrapper").appendChild(home)
}

function about(){
    let about = document.createElement('h1')
    about.innerHTML = 'About Page'
    document.querySelector('.wrapper').appendChild(about)
}

function view(){
    let view = document.createElement('h1')
    view.innerHTML = 'View Notes'
    let noteinput = document.createElement('input')
    noteinput.innerHTML = 'Text'
    let importanceinput = document.createElement('input')
    importanceinput.innerHTML = 'Importance'
    document.querySelector('.wrapper').appendChild(view)
    document.querySelector('.wrapper').appendChild(noteinput)
    document.querySelector('.wrapper').appendChild(importanceinput)

    let msg = document.createElement('h4')
    document.querySelector('.wrapper').appendChild(msg)
    let notes = document.createElement('p')
    document.body.appendChild(notes)

    let submitnote = document.createElement('button')
    submitnote.innerHTML = 'Submit Note'
    submitnote.style.display = 'block'
    submitnote.style.position = 'relative'
    submitnote.style.top = '2px'

    submitnote.addEventListener('click', function(){
        if(noteinput.value.length <= 1){
            msg.innerHTML = 'Note is too short'

        }else if(isNaN(importanceinput.value)){
            msg.innerHTML = 'Importance must be a number'
        }else{
            notes.innerHTML = importanceinput.value + ') ' + noteinput.value
        }


    })

    
    document.querySelector('.wrapper').appendChild(submitnote)
}

let userinput = document.createElement('input')
userinput.placeholder = 'Username'
let passinput = document.createElement('input')
passinput.placeholder = 'Password'
passinput.setAttribute('type', 'password')
document.body.appendChild(userinput)
document.body.appendChild(passinput)

let message = document.createElement('h4')
document.body.appendChild(message)

let submitbutton = document.createElement('button')
submitbutton.innerHTML = 'Login'
submitbutton.style.display = 'block'
submitbutton.style.position = 'relative'
submitbutton.style.top = '2px'
document.body.appendChild(submitbutton)
submitbutton.addEventListener('click', function(){
    if(userinput.value !== creds[0]){
        message.innerHTML = 'Wrong username'

    }else if(passinput.value !== creds[1]){
        message.innerHTML = 'Wrong password'
    }else{
        navbar()
    }

})