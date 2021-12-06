const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score")
// console.log(scoreBoard);
let lastHole ;

function randomTime(min,max){
    return Math.round(Math.random() * (max -min) + min   );
}

function randomHole(holes){
    const index = Math.floor (Math.random()  * holes.length );
    const hole = holes[index];                             //but sometimes same hole will come 
    console.log(hole);
}
// randomHole()