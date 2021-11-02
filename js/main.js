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


// scelta utente
level1.addEventListener('click',
    function() {
        generateGrid(100, 'ten')
    }
);

level2.addEventListener('click',
    //funzione crea 81 celle
    function() {
        generateGrid(81, 'nine')
    }
);

level3.addEventListener('click',
    //funzione crea 49 celle
    function() {
        generateGrid(49, 'seven')
    }
);

// creazione griglia celle con numerazione interna
function generateGrid(numCell, helperClass){
    for (i=0; i<numCell; i++) {
        let square = createElementWith2Class('div','square',helperClass)//richiama funz per creare div con 2 classi da passare

        let squareSpan = document.createElement('span');//crea span con numero cella
        squareSpan.append(i+1);
        
        square.appendChild(squareSpan);//appendi span nella cella

        // evento click sulla cella singola che aggiunge classe checked
        square.addEventListener('click',
            function(){
                this.classList.add('checked');
            }
        );
        
        grid.appendChild(square);//appendi cella nella griglia
    
    }
}

// crea elemento div con 2 classi da passare 
function createElementWith2Class(elType,class1,class2){
    let newSquare = document.createElement(elType);
    newSquare.classList.add(class1,class2);
    return newSquare
}

/*
function somma(a, b) {
    return a + b;
}

const somma = (a, b) => a+b;
*/