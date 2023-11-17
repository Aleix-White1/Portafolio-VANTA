const frases = ["Hello ;)", "Select lenguage"];

const frasesES = ["Bienvenido", "Este es mi portafolio", "Espero que te guste"];
const frasesEN = ["Welcome", "This is my briefcase", "I hope you enjoy"];

const containerPrincipal = document.querySelector(".container_principal")
const title = document.getElementById("titlePrincipal");
const container = document.querySelector(".idiomas");

async function changeText() {

    for (let i = 0; i < frases.length; i++) {
        title.textContent = frases[i];
        if (frases[i] === "Select lenguage") {
            // Create div elements and set their classes
            const divES = document.createElement("div");
            divES.setAttribute("class", "divES");

            const divEN = document.createElement("div");
            divEN.setAttribute("class", "divEN");

            // Create and set attributes for the first image
            const img1 = document.createElement("img");
            img1.style.width = "50%"; // Set the width of the image
            img1.setAttribute("src", "../img/ES.png"); // Set the source attribute to your image file path
            divES.appendChild(img1);

            // Create and set attributes for the second image
            const img2 = document.createElement("img");
            img2.style.width = "50%"; // Set the width of the image
            img2.setAttribute("src", "../img/EN.png"); // Set the source attribute to your image file path
            divEN.appendChild(img2);

            // Append the div elements to the container
            container.appendChild(divES);
            container.appendChild(divEN);

            img1.addEventListener("click", function () {
                webIdioma(frasesES)
            });
            img2.addEventListener("click", function () {
                webIdioma(frasesEN)
            });

        }

        // Wait for 2 seconds before moving to the next phrase
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    changeText(); // Initialize with the first phrase
    
});


function webIdioma(frases) {
    container.innerHTML = " ";
    title.innerHTML = "...";
    let i = 0;  // Variable para rastrear el índice actual del array
    let intervalID = setInterval(function () {
        if (i < frases.length) {
            title.textContent = frases[i];
            i++;
        } else {
            clearInterval(intervalID);

            containerPrincipal.classList.remove("bounce-in-top");
            containerPrincipal.classList.add("slide-in-blurred-top");
            setTimeout(function (){
                window.location.href = '../index.html'
            }, 1000)
        }
    }, 2000);
}

