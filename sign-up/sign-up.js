
// const form = document.querySelector("#form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()


//     let firstName = document.getElementById("firstname").value.trim()
//     let LastName = document.getElementById("lastname").value.trim()
//     let email = document.getElementById("email").value.trim()
//     let pswd = document.getElementById("pswd").value.trim()
//     let confimpaswd = document.getElementById("confimpaswd").value.trim()

//     if (pswd.value !== confimpaswd.value) {
//         alert("your password is not match, plz try again...")
//         return
//     }

//     const userData = {
//         firstName,
//         LastName,
//         email,
//         pswd,
//         confimpaswd
//     }

//     localStorage.setItem("signupuser", JSON.stringify(userData))


//     form.reset();
// })