// General functions

function sendMovies() {
    let movies = ['Vengadores: Infinity War', 'Pantera Negra', 'Jurassic World: El reino caído',
        'Los Increíbles 2', 'Aquaman Warner Bros', 'Bohemian Rhapsody','Venom', 'Mission: Impossible - Fallout',
        'Deadpool 2', 'Los crímenes de Grindelwald','Insidious: The Last Key',
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
const myStreamPlatform = [];
const PRICE_MOVIE = 45;
const NETFLIX_PRICE = 139;
const AMAZON_PRICE = 99;
const FOX_PRICE = 200;
const CLARO_PRICE = 99;
const DISNEY_PRICE = 130;
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
    location.reload();
}

function calculateMovies(){
    let result = myMovies.length * PRICE_MOVIE;
    let qtyMovies = myMovies.length;
    let totalMovies = document.getElementById('moviesCount');
    totalMovies.innerText = qtyMovies;
    let resultado = document.getElementById('totalCost');
    resultado.innerText = result;

    return result;
}

function calculateStream(){
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalCost = myStreamPlatform.reduce(reducer);
    let qtyStream = myStreamPlatform.length;
    let totalPlatform = document.getElementById('platformCount');
    totalPlatform.innerText = qtyStream;
    let result = document.getElementById('platformCost');
    result.innerText = totalCost;

    return totalCost;
}

function netflixCost(){
    if(document.getElementById('netflix').checked){
        myStreamPlatform.push(NETFLIX_PRICE);
    }else{
        let index = myStreamPlatform.indexOf(NETFLIX_PRICE)
        myStreamPlatform.splice(index, 1);
    }
}

function amazonCost(){
    if(document.getElementById('amazon').checked){
        myStreamPlatform.push(AMAZON_PRICE);
    }else{
        let index = myStreamPlatform.indexOf(AMAZON_PRICE)
        myStreamPlatform.splice(index, 1);
    }
}

function foxCost(){
    if(document.getElementById('fox').checked){
        myStreamPlatform.push(FOX_PRICE);
    }else{
        let index = myStreamPlatform.indexOf(FOX_PRICE)
        myStreamPlatform.splice(index, 1);
    }
}

function claroCost(){
    if(document.getElementById('claro').checked){
        myStreamPlatform.push(CLARO_PRICE);
    }else{
        let index = myStreamPlatform.indexOf(CLARO_PRICE)
        myStreamPlatform.splice(index, 1);
    }
}

function disneyCost(){
    if(document.getElementById('disney').checked){
        myStreamPlatform.push(DISNEY_PRICE);
    }else{
        let index = myStreamPlatform.indexOf(DISNEY_PRICE)
        myStreamPlatform.splice(index, 1);
    }
}

function calculateAll(){
    let qtyMovies = myMovies.length;
    let qtyStream = myStreamPlatform.length;

    let totalMovies = calculateMovies();
    let totalStreaming = calculateStream();

    let difOne = totalMovies - totalStreaming;
    let difTwo = totalStreaming - totalMovies;


    if (totalMovies > totalStreaming) {
        let text = document.getElementById('resultCompareText');
        text.innerText = 'El costo de '+ qtyMovies + ' peliculas que elegiste es MAYOR que el costo de los '+qtyStream+' servicios de streaming que elegiste por $'+difOne+'.';
    } else {
        let text = document.getElementById('resultCompareText');
        text.innerText = 'El costo de los '+ qtyStream + ' servicios de streaming que elegiste es MAYOR que el costo de las '+qtyMovies+' peliculas que elegiste por $'+difTwo+'.';
    }
}