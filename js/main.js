/*
Consegna L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
*/

// user sceglie il livello del gioco cliccando sul bottone relativo
// quindi in base al livello la griglia avrà 100 81 o 49 celle.
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
const grid = document.getElementById('grid');

level1.addEventListener('click',
    level1Grid
);

// level2.addEventListener('click',
//     //funzione crea 81 celle
// );

// level3.addEventListener('click',
//     //funzione crea 49 celle
// );



// creazione for 100 celle con numerazione interna
function level1Grid(){
    for (i=0; i<100; i++) {
        let square = createSquareWith2Class('square','ten')

        let squareSpan = document.createElement('span');
        squareSpan.append(i+1);
        
        square.appendChild(squareSpan);
        
        grid.appendChild(square);
    
    }
}

function createSquareWith2Class(class1,class2){
    let newSquare = document.createElement('div');
    newSquare.classList.add(class1,class2);
    return newSquare
}

