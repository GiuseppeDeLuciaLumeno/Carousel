//slider

//FUNZIONE COMMENTATE PERCHE NON SERVE (ERA PER SETTARE UN VALORE DI WIDTH INIZIALE)

const initialWidthSetter = () => {
    const slider = document.querySelector(".slider")
    slider.style.setProperty("--custom-width", "1000px")
  }


const slider = () => {
const slider = document.querySelector(".slider")             //grab Main Container
const sliderWidth = slider.offsetWidth                      //calc width of the container
const sliderLi = document.querySelector(".slide-wrap")     //grab list Container
const items = document.querySelectorAll(".slide-wrap li") //Create array containing all li
const arrowSx = document.querySelector(".bi-chevron-left") //grab arrow SX
const arrowDx = document.querySelector(".bi-chevron-right") //grab arrow DX
const showCounter = document.querySelector("#counter")
const dot = document.querySelectorAll(".dot")
let counter = 1
const timing = 7000


window.addEventListener("resize", () => {
    sliderWidth = slider.offsetWidth

    //CODICE COMMENTATO: CONSENTE L'ADATTARSI DEL CONTAINER AL RESIZING DELLA FINESTRA

    // const sliderWidth = slider.offsetWidth
    // const resizing = e.target.innerWidth
    // slider.style.setProperty("--custom-width", resizing + "px");
    // if (resizing > 1000) {
    //     slider.style.setProperty("--custom-width", "1000px");
    // }
})

//GO BACK
const prevSlide = () => {
    if (counter > 1) {
        counter = counter -2
        console.log(sliderLi.style.left = "-" + counter * sliderWidth + "px", counter)
        counter++
        showCounter.innerHTML = `${counter}/3`
    }
    else if (counter = 1){
        counter = items.length -1
        console.log(sliderLi.style.left = "-" + counter * sliderWidth + "px", counter)
        counter++
        showCounter.innerHTML = `${counter}/3`
}
    if (counter === 1) {
        dot[0].classList.add("dot-active")
        dot[1].classList.remove("dot-active")
    }

    else if (counter === 2) {
        dot[1].classList.add("dot-active")
        dot[2].classList.remove("dot-active")
    }
    else {
        dot[2].classList.add("dot-active")
        dot[0].classList.remove("dot-active")
    }
}

//GO FORDWARD
const nextSlide = () => {
    if (counter < items.length) {
       sliderLi.style.left = "-" + counter * sliderWidth + "px"
       counter++
       showCounter.innerHTML = `${counter}/3`

    }
    else if (counter = items.length){
    console.log(sliderLi.style.left = "0px", counter);
    counter = 1;
    showCounter.innerHTML = `${counter}/3`
}
    if (counter === 1) {
        dot[0].classList.add("dot-active")
        dot[2].classList.remove("dot-active")
    }
    else if (counter === 2) {
        dot[0].classList.remove("dot-active")
        dot[1].classList.add("dot-active")
    }
    else {
        dot[0].classList.remove("dot-active")
        dot[1].classList.remove("dot-active")
        dot[2].classList.add("dot-active")
    }
}

arrowDx.addEventListener("click", () => {
    nextSlide()
})

arrowSx.addEventListener("click", () => {
    prevSlide()
})


setInterval(() => {
nextSlide()
},timing)
}


document.addEventListener("DOMContentLoaded", ()=> {
    const showCounter = document.querySelector("#counter")
    showCounter.innerHTML = `1/3`
    const dot = document.querySelectorAll(".dot")
    initialWidthSetter()
    slider()
})



