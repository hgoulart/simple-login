const registerForm = document.querySelector('.register-form')
const loginForm = document.querySelector('.login-form')
const bgImage = document.querySelector('.bg-image')

login = () =>{
    bgImage.classList.toggle('anim')
    registerForm.style.width = '0px'
    loginForm.style.width = '490px'
}

cadastro = () =>{
    bgImage.classList.toggle('anim')
    registerForm.style.width = '490px'
    loginForm.style.width = '0px'
}

confirm = (value) =>{
    let valid = true
    let inputs = [];
    if(value == 'register-form'){
        inputs = document.querySelectorAll('.input-register')
        for(let i=0;i < inputs.length;i++){
            if(!inputs[i].value){
                registerForm.classList.add('shake')
                inputs[i].classList.add('danger')
                valid = false
            }
        }
    }
    if(value == 'login-form'){
        inputs = document.querySelectorAll('.input-login')
        for(let i=0;i < inputs.length;i++){
            if(!inputs[i].value){
                loginForm.classList.add('shake')
                inputs[i].classList.add('danger')
                valid = false
            }
        }
    }

    setTimeout( ()=>{
        registerForm.classList.remove('shake')
        loginForm.classList.remove('shake')
        for(let i=0;i < inputs.length;i++){
            inputs[i].classList.remove('danger')
        }
        
    }, 2000)
    
}