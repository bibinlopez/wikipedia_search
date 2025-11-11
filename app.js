const formDOM = document.querySelector(".form")
const inputDOM = document.querySelector(".form-input")
const resultDOM = document.querySelector(".results")

formDOM.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = inputDOM.value

  console.log(value)
})
