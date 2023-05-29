const Web = document.getElementById("web")
const intresting = document.getElementById("intresting")
const twisted = document.getElementById("twisted")
const wicked = document.getElementById("wicked")
const button = document.getElementById("button")
const joke = document.getElementById("jokepage")

const cardButton1 = document.getElementById("cardbuttonone")
const cardButton2 = document.getElementById("cardbuttontwo")
const cardButton3 = document.getElementById("cardbuttonthree")
const cardButton4 = document.getElementById("cardbuttonfour")
const cardButton5 = document.getElementById("cardbuttonfive")
const cardButton6 = document.getElementById("cardbuttonsix")
const cardButton7 = document.getElementById("cardbuttonseven")
const cardButton8 = document.getElementById("cardbuttoneight")

const card = document.querySelector(".thecard")
const cardOne = document.getElementById("one")
const cardtwo = document.getElementById("two")
const cardthree = document.getElementById("three")
const cardfour = document.getElementById("four")
const cardfive = document.getElementById("five")
const cardsix = document.getElementById("six")
const cardseven = document.getElementById("seven")
const cardeight = document.getElementById("eight")

setTimeout(() => {
    twisted.classList.add("animate__fadeInUpBig")
    intresting.classList.add("animate__fadeInTopLeft")
    Web.classList.add("animate__fadeInLeftBig")
    Web.classList.remove("animate__fadeOutLeftBig")
    wicked.classList.add("animate__fadeInDownBig")
    button.classList.add("animate__fadeInDownBig")
    setTimeout(animate1, 2000)
}, 1000)

function animate1() {
    setTimeout(animate2, 3000)
    twisted.style.opacity = 1
    intresting.style.opacity = 1
    twisted.classList.add("animate__slideOutDown")
    twisted.classList.remove("animate__slideOutUp")
    Web.classList.remove("animate__fadeInLeftBig")
    Web.classList.add("animate__fadeOutLeftBig")
    intresting.classList.remove("animate__slideOutDown")
    intresting.classList.add("animate__slideOutUp")
    button.classList.remove("animate__fadeInDownBig")
    button.classList.add("animate__fadeOutUpBig")
}

function animate2() {
    setTimeout(animate1, 3000)
    twisted.style.opacity = 1
    intresting.style.opacity = 1
    twisted.classList.add("animate__slideOutUp")
    twisted.classList.remove("animate__slideOutDown")
    Web.classList.remove("animate__fadeOutLeftBig")
    Web.classList.add("animate__fadeInLeftBig")
    twisted.classList.remove("animate__slideOutDown")
    intresting.classList.remove("animate__slideInUp")
    intresting.classList.add("animate__slideOutDown")
    button.classList.remove("animate__fadeOutUpBig")
    button.classList.add("animate__fadeInDownBig")
}


// button.addEventListener("click", function () {
//     fetch("https://official-joke-api.appspot.com/jokes/random")
//         .then(response => response.json())
//         .then(data => {
//             const setup = data.setup;
//             const punchline = data.punchline;

//             typeSentence(setup, joke)
//                 .then(() => typeSentence("\n\n" + punchline, joke));
//         })
//     // joke.innerText = data.setup + "\n\n" + data.punchline

// })

// function typeSentence(sentence, element) {
//     return new Promise(resolve => {
//         let i = 0

//         const timer = setInterval(() => {
//             element.textContent += sentence[i]
//             i++

//             if (i >= sentence.length) {
//                 clearInterval(timer)
//                 resolve()
//             }
//         }, 50)
//     })
// }


button.addEventListener("click", function () {
    fetch("https://official-joke-api.appspot.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            const setup = data.setup
            const punchline = data.punchline

            typeSentence(setup, joke)
                .then(() => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                        }, 1000)
                    });
                })
                .then(() => {
                    return typeSentence("\n\n", joke)
                })
                .then(() => {
                    joke.appendChild(document.createElement("br"))
                    return typeSentence(punchline, joke)
                })
        })
})

function typeSentence(sentence, element) {
    return new Promise(resolve => {
        let i = 0

        const timer = setInterval(() => {
            element.textContent += sentence[i]
            i++

            if (i >= sentence.length) {
                clearInterval(timer)
                resolve()
            }
        }, 50)
    })
}




cardOne.addEventListener("click", function () {
    console.log(cardOne)
    cardOne.classList.toggle("is-flipped")
})
cardtwo.addEventListener("click", function () {
    console.log(cardtwo)
    cardtwo.classList.toggle("is-flipped")
})
cardthree.addEventListener("click", function () {
    console.log(cardthree)
    cardthree.classList.toggle("is-flipped")
})
cardfour.addEventListener("click", function () {
    console.log(cardfour)
    cardfour.classList.toggle("is-flipped")
})
cardfive.addEventListener("click", function () {
    console.log(cardfive)
    cardfive.classList.toggle("is-flipped")
})
cardsix.addEventListener("click", function () {
    console.log(cardsix)
    cardsix.classList.toggle("is-flipped")
})
cardseven.addEventListener("click", function () {
    console.log(cardseven)
    cardseven.classList.toggle("is-flipped")
})
cardeight.addEventListener("click", function () {
    console.log(cardeight)
    cardeight.classList.toggle("is-flipped")
})
cardButton1.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})

cardButton2.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "2.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton3.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton4.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton5.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton6.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton7.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})
cardButton8.addEventListener("click", function () {
    localStorage.setItem("favorite",
        JSON.stringify({
            img: "1.jpg",
            name: "Nightshade",
            desc: "NightShade is a fierce warrior, known for her agility and stealth. She is a skilled fighter who prefers to strike from the shadows, using her knowledge of the terrain to outmaneuver her enemies. Her reputation precedes her, and many fear the mere mention of her name. Despite her formidable skills, NightShade is a solitary figure, keeping her own counsel and never revealing her true motives."
        }))
})

//-----------------------------------------------------------------------------
