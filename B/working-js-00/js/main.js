// console.log per indicar que el fitxer s'ha carregat correctament a la consola
console.log('working-js-00 carregat');

// tipologies de variables (text, números, booleans)
let color = "red"; // text (string)
let number = 42; // número (number)
let esCert = true; // booleà (boolean)

const PI = 3.1416; // constant

let colors = ["red", "green", "blue"]; // array (llista)

let persona = { // objecte
    nom: "Joan",
    edat: 30,
    ciutat: "Barcelona",
};

color = "rgba(225, 255, 128, 1)"; // canviant el valor de la variable color

console.log("Color inicial", color);

// crear una variable de la etiqueta body
let body = document.querySelector("body");
let button = document.querySelector(".canviColor");
let stopButton = document.querySelector(".stop-btn");

// canviar l'estil del cos de la pagina
body.style.backgroundColor = color;

// canvia l'estil del cos de la pagina
// boddy.backgroundColor = "color"; // utilitzem la variable color per definir el color de fons

// creem un esdeveniment de click al body
//body.addEventListener("click", function(){
  //let numAleatori = Math.floor(Math.random()*3)
    //body.style.backgroundColor = colors[numAleatori]; // utilitzem la variable color per definir el color de fons
//});

button.addEventListener("click", function(){
  canviaColorFons();
})

let nom = "Joan";
console.log("El meu nom és " + nom + ", benvingut/da al curs de JavaScript.");

// setTimeout per cridar una funció després d'un temps
//setTimeout(canviaColorFons, 5000); // cridem la funció després de 2 segons
 
let intervalColor = setInterval(canviaColorFons, 300); // cridem la funció cada 3 segons

stopButton.addEventListener("click", function(){
  clearInterval(intervalColor);
});

function canviaColorFons() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  let colorRandom = "rgb(" + red + ", " + green + ", " + blue + ")";
  body.style.backgroundColor = colorRandom; // utilitzem la variable color per definir el color de fons
}