const loginForm = document.getElementById('login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.getElementById('greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings()
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`    
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (!savedUsername) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {    
    paintGreetings()
}