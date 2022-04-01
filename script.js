let fields=[];
const winning_combination= [
    [0 ,1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let currentShape ='cat';

function fillShape(id){
    if(currentShape=='cat'){
        currentShape='dog';
    } else{
        currentShape='cat';
    }
    fields[id] =currentShape;
    console.log(fields);
    draw(currentShape);
    if (checkForWin(currentShape)){
        console.log(`Herzlichen Glückwunsch ${currentShape}, du hast gewonnen!!!`)
    };
}

function draw(shape){
    for (let i=0; i< fields.length; i++)
    if(fields[i] ==shape){
    document.getElementById(shape+i).classList.remove('d-none');
}
}


function checkForWin(shape){
    return winning_combination.some(combination => {                //some checks if any array elements pass a test //
        return combination.every(index => {                         //executes a function for each array element//
            return fields[index] == (shape)
        })
    })
    }