// vars
const form = document.querySelector(".form")
const input = document.querySelector(".form input")
const errorLog = document.querySelector(".form p")

// email valid format var
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = input.value
  if (!value) {
    errorLog.textContent = "Please enter your email address"
  } else if (!value.match(mailformat)) {
    errorLog.textContent = "Please enter a valid email address"
  } else {
    errorLog.textContent = ""
  }
})
