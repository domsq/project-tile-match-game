// Check that required DOM elements have loaded before setting up the game

document.addEventListener('DOMContentLoaded', createGrid);

// Create array to hold tile values, which will represent the tile face sides

// Amended array structure following discussion with mentor
const tileConfig = [{
        name: 'blue flower',
        path: 'blue-flower-gabriel-manlake.jpg'
    },
    {
        name: 'daisy',
        path: 'daisy-flower-marissa-daeger.jpg'
    },
    {
        name: 'dark pink flower',
        path: 'dark-pink-flower-tra-tran.jpg'
    },
    {
        name: 'light purple flower',
        path: 'light-purple-flower-karl-heinz-muller.jpg'
    },
    {
        name: 'pink flower',
        path: 'pink-flower-achim-ruhnau.jpg'
    },
    {
        name: 'purple flower',
        path: 'purple-flower-frank-busch.jpg'
    },
    {
        name: 'red flower',
        path: 'red-flower-mana5280.jpg'
    },
    {
        name: 'white flower',
        path: 'white-pink-flower-angelika-paduch.jpg'
    }
];

// Allows array to be of required size

let tiles = [...tileConfig, ...tileConfig];

// Arrays to store chosen tiles and their respective ID values

let tileChoice = [];
let tileChoiceId = [];

// Array to store the tiles successfully matched

let tilesMatched = [];

// Array to store total number of matching attempts

let totalMatchAttempts = [];

// Setup the grid of tiles, which will start face down

function createGrid() {
    clearValues();
    shuffleTiles();
    for (let i = 0; i < tiles.length; i++) {
        let tile = document.createElement('img');
        tile.setAttribute('src', 'assets/images/tile-back.jpg');
        tile.setAttribute('data-id', i);
        document.getElementById('tile-grid').appendChild(tile);
        tile.addEventListener('click', revealTile);
    }
}

// Moved to separate function as discussed with mentor
function shuffleTiles () {
    tiles.sort(() => 0.5 - Math.random()); // Randomise the positions of the items in the main array to allow "shuffling"
}

// Function to ensure all required values cleared when resetting the game

function clearValues() {
    document.getElementById('tile-grid').innerHTML = '';
    tileChoice = [];
    tileChoiceId = [];
    totalMatchAttempts = [];
    tilesMatched = [];
    document.getElementById('tries').innerText = ' 0';
}

// Function to reveal tiles

function revealTile() {      
    // If tile is disabled, don't allow it to be clicked a second time to force a match, as discussed with mentor
    const isDisabled = this.getAttribute('data-disabled') === 'true';
    if (isDisabled || tileChoiceId.length === 2) { // Prevents user clicking more than 2 tiles before match can be verified
        return;
    }
    let tileId = this.getAttribute('data-id');
    tileChoice.push(tiles[tileId].name);
    tileChoiceId.push(tileId);
    this.setAttribute('src', `assets/images/${tiles[tileId].path}`); // Amended following discussion with mentor
    this.setAttribute('data-disabled', 'true'); // Disable tile once revealed, as discussed with mentor
    if (tileChoice.length === 2) { // Action to take when a match is attempted
        setTimeout(verifyMatch, 500);        
    }    
}

// Check whether the tiles have matched or not and then empty the tileChoice and tileChoiceId arrays, as they can never be larger than 2 items  

function verifyMatch() {
    totalMatchAttempts.push(tileChoice);
    let allTiles = document.querySelectorAll('img');
    const choiceOneId = tileChoiceId[0];
    const choiceTwoId = tileChoiceId[1];
    if (tileChoice[0] === tileChoice[1]) {
        tilesMatched.push(tileChoice);        
    } else {
        allTiles[choiceOneId].setAttribute('data-disabled', 'false'); // If tiles don't match, enable them again
        allTiles[choiceTwoId].setAttribute('data-disabled', 'false'); // If tiles don't match, enable them again
        allTiles[choiceOneId].setAttribute('src', 'assets/images/tile-back.jpg');
        allTiles[choiceTwoId].setAttribute('src', 'assets/images/tile-back.jpg');
    }
    tileChoice = [];
    tileChoiceId = [];
    updateTriesCounter();
    checkForGameCompletion();
}

// Moved to separate function as discussed with mentor
function checkForGameCompletion() {
    let finalResult = document.getElementById('tries').innerText;
    if (tilesMatched.length === tileConfig.length) { // Action to take when all tiles successfully matched
        document.getElementById('completion-innertext').innerHTML = `
        <h2>Well done! <i class="far fa-smile-beam"></i></h2>
        <p>You managed to find all the matches in ${finalResult} attempts, good job!</p>`;
        // Logic to open modal, guidance from https://www.w3schools.com/howto/howto_css_modals.asp
        document.getElementById('completion-page').style.display = 'block';
    } else if (totalMatchAttempts.length === 25) { // Action to take if attempts exceed set limit
        document.getElementById('completion-innertext').innerHTML = `
        <h2>Oh no! <i class="far fa-sad-tear"></i></h2>
        <p>You ran out of attempts, why not try again?</p>`;
        // Logic to open modal, guidance from https://www.w3schools.com/howto/howto_css_modals.asp
        document.getElementById('completion-page').style.display = 'block';
    }
}

// Function to control reset button

function resetGame() {
    alert('Resetting game, please wait...');
    createGrid();
}

// Moved to separate function as discussed with mentor
function updateTriesCounter() {
    document.getElementById('tries').innerText = ' ' + totalMatchAttempts.length;
}

// Assign functionality to reset button on grid

document.getElementById('game-reset').addEventListener('click', resetGame);

// Function to close the game completion modal, guidance from https://www.w3schools.com/howto/howto_css_modals.asp

function closeCompletionPage() {
    document.getElementById('completion-page').style.display = 'none';
    createGrid();
}

// Configure close button on game completion modal

document.getElementById('close-completion-page').addEventListener('click', closeCompletionPage);
