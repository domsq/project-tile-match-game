// Create array to hold tile values, which will represent the tile face sides

const tiles = [
    {
        name: 'blue flower',
        path: 'assets/images/blue-flower-gabriel-manlake.jpg'
    },
    {
        name: 'blue flower',
        path: 'assets/images/blue-flower-gabriel-manlake.jpg'
    },
    {
        name: 'daisy',
        path: 'assets/images/daisy-flower-marissa-daeger.jpg'
    },
    {
        name: 'daisy',
        path: 'assets/images/daisy-flower-marissa-daeger.jpg'
    },
    {
        name: 'dark pink flower',
        path: 'assets/images/dark-pink-flower-tra-tran.jpg'
    },
    {
        name: 'dark pink flower',
        path: 'assets/images/dark-pink-flower-tra-tran.jpg'
    },
    {
        name: 'light purple flower',
        path: 'assets/images/light-purple-flower-karl-heinz-muller.jpg'
    },
    {
        name: 'light purple flower',
        path: 'assets/images/light-purple-flower-karl-heinz-muller.jpg'
    },
    {
        name: 'pink flower',
        path: 'assets/images/pink-flower-achim-ruhnau.jpg'
    },
    {
        name: 'pink flower',
        path: 'assets/images/pink-flower-achim-ruhnau.jpg'
    },
    {
        name: 'purple flower',
        path: 'assets/images/purple-flower-frank-busch.jpg'
    },
    {
        name: 'purple flower',
        path: 'assets/images/purple-flower-frank-busch.jpg'
    },
    {
        name: 'red flower',
        path: 'assets/images/red-flower-mana5280.jpg'
    },
    {
        name: 'red flower',
        path: 'assets/images/red-flower-mana5280.jpg'
    },
    {
        name: 'white flower',
        path: 'assets/images/white-pink-flower-angelika-paduch.jpg'
    },
    {
        name: 'white flower',
        path: 'assets/images/white-pink-flower-angelika-paduch.jpg'
    }
];

// Setup the grid of tiles, which will start face down

function createGrid() {
    for (let i = 0; i < tiles.length; i++) {
        let tile = document.createElement('img');
        tile.setAttribute('src', 'assets/images/tile-back.jpg');
        tile.setAttribute('data-id', i);
        document.getElementById('tile-grid').appendChild(tile);
        tile.addEventListener('click', revealTile);
    }
}

// Arrays to store chosen tiles and their respective ID values

let tileChoice = [];
let tileChoiceId = [];

// Function to reveal tiles

function revealTile() {
    let tileId = this.getAttribute('data-id');
    tileChoice.push(tiles[tileId].name);
    tileChoiceId.push(tileId);
    this.setAttribute('src', tiles[tileId].path);
}

createGrid();
