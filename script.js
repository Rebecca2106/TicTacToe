let fields = [];
let currentShape;
let counter;
const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function chosePlayer(shape) {
    if (typeof currentShape == 'undefined'){
    document.getElementById(shape).classList.remove('player-inactive');
    document.getElementById('info').classList.add('d-none');
    return currentShape = shape;}
}

function fillShape(id) {
    if (!fields[id] ) {
        if (currentShape == 'cat') {
            document.getElementById(currentShape).classList.add('player-inactive');
            currentShape = 'dog';
            document.getElementById(currentShape).classList.remove('player-inactive');

        } else {
            document.getElementById(currentShape).classList.add('player-inactive');
            currentShape = 'cat';
            document.getElementById(currentShape).classList.remove('player-inactive');
        }
    }
    fields[id] = currentShape;
    console.log(fields);
    draw(currentShape);
    if (checkForWin(currentShape)) {
        console.log(`Herzlichen Glückwunsch ${currentShape}, du hast gewonnen!!!`)
        if (counter<=3){
            document.getElementById(counter).style.transform='scaleX(1)';
        }
        if(counter>3 && counter<7){
            document.getElementById(counter).style.transform='rotate(90deg) scaleX(1)';
        }
        if(counter==7){
            document.getElementById(counter).style.transform='rotate(45deg) scaleX(1)';
        }
        if(counter==8){
            document.getElementById(counter).style.transform='rotate(-45deg) scaleX(1)'; 
        }

        gameOver();
    };

}

function draw(shape) {
    for (let i = 0; i < fields.length; i++)
        if (fields[i] == shape) {
            document.getElementById(shape + i).classList.remove('d-none');
        }
}


function checkForWin(shape) {
    counter=0;
    return winning_combination.some(combination => {counter++              //some checks if any array elements pass a test //
        return  combination.every(index => {                         //executes a function for each array element//
            return fields[index] == (shape)
        })
    })
}

function gameOver(){
    setTimeout(function (){
    document.getElementById('endscreen').classList.remove('d-none');
    document.getElementById('restart').classList.remove('d-none');
    }, 1000);

}

function restart(){
    document.getElementById('endscreen').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');
        location.reload(true);
}
