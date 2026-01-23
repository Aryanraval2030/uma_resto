
const form = document.querySelector("#form")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const userName = document.querySelector("#username").value.trim()
    const userPassword = document.querySelector("#userpassword").value.trim()


    const userData = {
        userName,
        userPassword
    }

    localStorage.setItem("signupuser", JSON.stringify(userData))

    localStorage.setItem("userloged", "true")

    window.location.href = "../index.html"

    
    form.reset()
})