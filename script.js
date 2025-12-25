

// first loaded div

const loaded = document.querySelector("#first_loaded")

window.addEventListener("load", () => {
    loaded.style.display = "flex"

    setTimeout(() => {
        loaded.style.opacity = "0";

        setTimeout(() => {
            loaded.style.display = "none";
        }, 500)
    }, 2000)
})


// scrolling effect

let scroll = 0
let header = document.querySelector("#header")

window.addEventListener("scroll", () => {
    let nowScroll = window.scrollY

    if (nowScroll > scroll && nowScroll > 25) {
        header.classList.add("hide")
    }
    else {
        header.classList.remove("hide")
    }

    scroll = nowScroll
})

// header

let menuLines = document.querySelector(".line")
let nav = document.querySelector("#nav")
let closeBtn = document.querySelector("#close-btn")

menuLines.addEventListener("click", () => {
    nav.style.display = "flex"
    nav.style.backgroundColor = "black"
})

closeBtn.addEventListener("click", () => {
    nav.style.display = "none"
})


// section 2 scrolling effect of text

let sectionTwopera = document.querySelector("#firstpera")
let sectionTwoperasecond = document.querySelector("#firstpera1")

let scrollText = 0
let countScroll = window.screenY

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY


    if (currentScroll > countScroll && currentScroll > 50) {
        sectionTwopera.classList.add("secPera")
        sectionTwopera.classList.remove("secPeraremove")
        sectionTwoperasecond.classList.add("secPerascnd")
        sectionTwoperasecond.classList.remove("secPerascndremove")
    }
    else if (currentScroll < countScroll) {
        sectionTwopera.classList.remove("secPera");
        sectionTwopera.classList.add("secPeraremove");
        sectionTwoperasecond.classList.remove("secPerascnd");
        sectionTwoperasecond.classList.add("secPerascndremove");
    }
        countScroll = currentScroll;
})