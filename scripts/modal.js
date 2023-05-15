const forget = document.querySelector('#forget')
const modalForget = document.querySelector('#modal')
forget.addEventListener('click', (e)=>{
    e.preventDefault()
    const addModal = document.querySelector('.div__primary')
    let divPrimary = document.createElement('div')
    divPrimary.id = 'modal'

    let divSecundary = document.createElement('div')
    divPrimary.appendChild(divSecundary)

    let buttonClose = document.createElement('button')
    buttonClose.id = 'close'
    buttonClose.classList = 'close'
    buttonClose.innerText = 'X'

    let h1 = document.createElement('h1')
    h1.innerText = 'Recuperação de senha'

    let p = document.createElement('p')
    p.innerText = 'Esqueceu sua senha de acesso?'

    let form = document.createElement('form')
    divSecundary.append(buttonClose,h1,p,form)

    let label = document.createElement('label')
    label.for = 'email'
    label.innerText = 'Informe o E-mail cadastrado'

    let input = document.createElement('input')
    input.type = 'email'    
    input.name = 'email'    
    input.placeholder = 'E-mail'    
    input.className = 'input-default'

    let buttonSubmit = document.createElement('button')
    buttonSubmit.type = 'submit'
    buttonSubmit.className = 'button-default'
    buttonSubmit.innerText = 'Enviar'
    form.append(label, input, buttonSubmit)
    addModal.insertAdjacentElement('afterbegin',divPrimary)

    const buttonCloseModal = document.querySelector('#close')
    buttonCloseModal.addEventListener('click', (e)=>{
        divPrimary.remove()
    })

})
