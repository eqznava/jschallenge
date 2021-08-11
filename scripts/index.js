// General functions

function sendMovies() {
    let movies = ['Vengadores: Infinity War', 'Pantera Negra', 'Jurassic World: El reino caído',
        'Los Increíbles 2', 'Aquaman Warner Bros', 'Bohemian Rhapsody','Venom', 'Mission: Impossible - Fallout',
        'Deadpool 2', 'Animales fantásticos: Los crímenes de Grindelwald','Insidious: The Last Key',
        'El pasajero', 'Proud Mary', 'Cincuenta sombras liberadas','Freak Show','12 Strong', 'Den of Thieves',
        'La leyenda del Charro Negro', 'Forever My Girl', 'Early Man','Maze Runner: The Death Cure',
        'Armed', 'Winchester', 'The Cloverfield Paradox', 'Peter Rabbit', '15:17 Tren a París','Kri', 'Black Panther',
        'Samson', 'Nostalgia', 'Noche de juegos', 'Aniquilación', 'Red Sparrow', 'Pickings', 'Death Wish',
        'Gnome Alone','Gringo'];
    for (i = 0; i < movies.length; i++) {
        let li = document.createElement('option');
        li.appendChild(document.createTextNode(movies[i]));
        document.querySelector("#listMovies").appendChild(li);
    }
}

sendMovies();

//--------------------------------------------------------------------------
const myMovies = [];

// Buttons operations

function movieSelected() {
    // Add button
    const movie = document.getElementById('movie').value;
    let opt = document.createElement('option');
    opt.appendChild(document.createTextNode(movie));
    document.querySelector("#myListMovies").appendChild(opt);
    myMovies.push(movie);
}

function removeElement() {
    // Remove button
    let ultimo = document.getElementById('myMovie');
    document.body.removeChild(ultimo);
    myMovies.push(movie);
}
