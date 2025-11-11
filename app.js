const formDOM = document.querySelector(".form")
const inputDOM = document.querySelector(".form-input")
const resultDOM = document.querySelector(".results")

formDOM.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = inputDOM.value

  if (!value) {
    resultDOM.innerHTML =
      '<div class="error">please enter valid search term</div>'
    return
  }
  fetchPages(value)
  inputDOM.value = ""
})

const fetchPages = async (searchValue) => {
  console.log(searchValue)
}
