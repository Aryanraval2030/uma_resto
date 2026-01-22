
const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()


    let firstName = document.getElementById("firstname").value.trim()
    let LastName = document.getElementById("lastname").value.trim()
    let email = document.getElementById("email").value.trim()
    let pswd = document.getElementById("pswd").value.trim()
    let confimpaswd = document.getElementById("confimpaswd").value.trim()

    if (pswd.value !== confimpaswd.value) {
        alert("your password is not match, plz try again...")
        return
    }

    if (!firstName || !LastName || !email || !email || !pswd || !confimpaswd) {
        alert("plz fild this page after enter this restaurant")
        return

    }


    const userData = {
        firstName,
        LastName,
        email,
        pswd,
        confimpaswd
    }

    localStorage.setItem("signupuser", JSON.stringify(userData))
    localStorage.setItem("isLoggedIn", "true");


    window.location.href = "../index.html";

    form.reset();
})





