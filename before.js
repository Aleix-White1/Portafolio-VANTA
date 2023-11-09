const frases = ["Hello ;)", "Select lenguage",];

const frasesES = ["Bienvenido", "Este es mi portafolio", "Espero que te guste"];
const frasesEN = ["Welcome", "This is my briefcase", "I hope you enjoy"];

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
            img1.setAttribute("src", "./img/ES.png"); // Set the source attribute to your image file path
            divES.appendChild(img1);

            // Create and set attributes for the second image
            const img2 = document.createElement("img");
            img2.style.width = "50%"; // Set the width of the image
            img2.setAttribute("src", "./img/EN.png"); // Set the source attribute to your image file path
            divEN.appendChild(img2);

            // Append the div elements to the container
            container.appendChild(divES);
            container.appendChild(divEN);

            img1.addEventListener("click", function(){
                webEspañol();
            });
            img2.addEventListener("click", function(){
                webEnglish();
            });
    
        }
        
        // Wait for 2 seconds before moving to the next phrase
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

document.addEventListener("DOMContentLoaded", function() {
    changeText(); // Initialize with the first phrase
});
