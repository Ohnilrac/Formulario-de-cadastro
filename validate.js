const username = document.getElementById('username')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const email = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value
  const emailValue = email.value

  if (usernameValue === '') {
    setError(username, 'O nome é obrigatório.')
  } else {
    setSuccess(username)
  }

  if (emailValue === '') {
    setError(email, 'O Email é obrigatório.')
  } else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    setError(password, 'É necessário uma senha.')
  } else if (passwordValue.length < 8) {
    setError(password, 'A senha precisa ter no mínimo 8 caracteres.')
  } else {
    setSuccess(password)
  }

  if (passwordConfirmationValue === '') {
    setError(passwordConfirmation, 'É necessário confirmar a senha.')
  } else if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, 'As senhas não conferem.')
  } else {
    setSuccess(passwordConfirmation)
  }

  const formControls = form.querySelectorAll('.form-control')
  const formIsValid = [...formControls].every(formControl => {
    return formControl.className === 'form-control success'
  })

  if (formIsValid) {
    confirmation()
  }
}

function setError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.className = 'form-control error'
}

function setSuccess(input) {
  const formControl = input.parentElement

  formControl.className = 'form-control success'
}

function confirmation() {
  const container = document.getElementById('modal')

  container.style.visibility = 'visible'
}

function closeModal() {
  const closeModal = document.getElementById('modal')

  closeModal.style.visibility = 'hidden'

  if (username.value !== '') {
    username.value = '';
    password.value = '';
    email.value = '';
    passwordConfirmation.value = '';
  }
}