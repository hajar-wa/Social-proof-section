
import { info, names } from "./data.js"

const ratings = document.getElementById("ratings")
const feedbacks = document.getElementById("feedbacks")



const stars = []

for (let i = 0 ; i < 5 ; i++){
    let star = `<img src="./images/icon-star.svg" alt=" star" class = "star">` 
    stars.push(star)
}

let number = ["one","two","three"]

for (let i = 0; i < names.length; i++){
    ratings.innerHTML += `
                <div class = "rating-div div-${number[i]}">
                    ${stars.join("")}
                    <p class = comment>Rated 5 Stars in ${names[i]}</p>
                </div>
    `
}


for (let i = 0; i < info.length ; i++){

    feedbacks.innerHTML += 
    `
                        <div class = "review review-${number[i]}">
                            <div class = "personal-info">
                                ${info[i].img}
                                <ul>
                                    <li class = "name">${info[i].name}</li>
                                    <li class = "status">Verified Buyer</li>
                                </ul>
                            </div>
                            <p class = "feedback">
                                ${info[i].feedback}
                            </p>
                        </div>
    `
}

console.log(feedbacks)
