
const card = document.querySelector("#card")
const cardHolder = document.getElementById("cardholder")
const cardface = document.getElementById("card-face")
const title = document.querySelector("#title")
const desc = document.querySelector("#text")
const bg = document.querySelector("#bg")

function favorite() {
    const favoriteItem = localStorage.getItem("favorite")
    const favoriteObject = JSON.parse(favoriteItem)
    console.log(favoriteObject.img)
    console.log(favoriteObject.name)
    console.log(favoriteObject.desc)
    title.textContent = favoriteObject.name
    desc.textContent = favoriteObject.desc
    bg.style.backgroundImage = `url(${favoriteObject.img})`
    card.addEventListener("click", function () {
        card.classList.toggle("is-flipped")
    })
}
favorite()