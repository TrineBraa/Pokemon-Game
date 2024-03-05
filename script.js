//Modell
let player = {
    name: "Trine",
    image: "Img/Player.png",
    playerPokemon: []
};


let arcanine = {
    name: "Arcanine",
    health: 190,
    image: "Img/Arcanine.png",
    level: 35,
};

let gastly = {
    name: "Gastly",
    health: 60,
    image: "Img/Gastly.png",
    level: 20,
};

let jolteon = {
    name: "Jolteon",
    health: 80,
    image: "Img/Jolteon.png",
    level: 25,
};

let magikarp = {
    name: "Magikarp",
    health: 30,
    image: "Img/Magikarp.png",
    level: 10,
};

let pikachu = {
    name: "Pikachu",
    health: 60,
    image: "Img/Pikachu.png",
    level: 18,
};

let possiblePokemon = [arcanine, gastly, jolteon, magikarp, pikachu];
let randomPokemon;
let pokemonHTML = "";
let app = document.getElementById("app");

// view
updateView()
function updateView() {
    getARandomPokemon()
    app.innerHTML = /*HTML*/ `
    <div class="container">
        <div class="topContainer">
            <div class="Pokemon">
                <div>${randomPokemon.name}</div>
                <div>${randomPokemon.level}</div>
                <img src="${randomPokemon.image}">
            </div>
        </div>
    
        <div class="lowerContainer">
            <div class="player">
                <div>${player.name}</div>
                <img src="${player.image}">
            </div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchAPokemon()">Catch Pokemon</button>
            <button onclick="updateView()">Find another</button>
            <button onclick="showPokemon()">Look at your Pokemon</button>
        </div>
    </div>
    `;
}

function caughtPokemonView() {
    app.innerHTML = /*HTML*/`
    <div class="caughtContainer">
    <h1>You caught ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
        <div class="buttonContainer">
            <button onclick="updateView()">Find another</button>
            <button onclick="showPokemon()">Look at your Pokemon</button>
        </div>
    </div>
    `;
}

//Controll

function getARandomPokemon() {
    let randomNumber = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNumber];
}

function catchAPokemon() {
    player.playerPokemon.push(randomPokemon);
    caughtPokemonView();
}

function showPokemon() {
    showCaughtPokemon()
    app.innerHTML = `
    <div class="viewPokemonCaught">
        <div class="viewPokemonCaught"></div>
        <h2>Your Party:</h2>
        <div id="containerCaughtPokemon">${pokemonHTML}</div>
        <br />
        <button onclick="updateView()">Find another</button>
    </div>
        `;
}

function showCaughtPokemon() {
    pokemonHTML = "";
    for (let i = 0; i < player.playerPokemon.length; i++) {
        pokemonHTML +=  /*HTML*/`
        <div class="pokemonBox">
            <div>${player.playerPokemon[i].name} Lvl: ${player.playerPokemon[i].level} HP: ${player.playerPokemon[i].health}</div>
            <img class="partyImg" src="${player.playerPokemon[i].image}"/>
        </div>
        `;
    }
} 
