//---------------------------------------------------variables-----------------------------
let board = document.querySelector('.tablero');
//console.log(board);

//---dibujo las fichas en el div 'board' del HTML q' van a depender de una matriz inicial (matriz=  array de array).
let matriz = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', ''],
]

//------------------------------------------------------------------funciones--------------------------------
//(por cada 'row' quiero hacer otro forEach)
function dibujarFichas(){
    matriz.forEach(row => row.forEach(elemento => {

        board.innerHTML += `<div class='token'>${elemento}</div>`

    }));
}

dibujarFichas();