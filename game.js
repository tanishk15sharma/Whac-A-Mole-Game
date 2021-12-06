const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score")
// console.log(scoreBoard);
let lastHole ;
let timeUp = false ;
let score =0 ;

function randomTime(min,max){                             //this will give a random time 
    return Math.round(Math.random() * (max -min) + min   );
}

function randomHole(holes){
    const index = Math.floor (Math.random()  * holes.length );
    const hole = holes[index];                             //but sometimes same hole will come 
    
    if( hole === lastHole){                              //if last hole (remembered at end of function) and hole  are same it will return and restart the function
        // console.log("same same");
        return randomHole(holes);
    }
    
    // console.log(hole);

    lastHole = hole;                                     //this will remember the last hole
    return hole
}

function peepUp(){                                      //mouse will peep up after every 2 sec
    const time = randomTime(300,1000 );
    const selectHole = randomHole(holes);
    selectHole.classList.add("up");

    setTimeout(() =>{
        selectHole.classList.remove("up");
        if(!timeUp)  peepUp();                              
    },time    ) 
    
}


function startGame(){                                //it will start the game by setting all values to initial 
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peepUp();
    setTimeout(()=> timeUp = true ,10000 )         //time to play is 10 sec (10000)
} 

// peepUp()
 
function clickMark(e){                                  //this will show the increase the scoreBoard
    console.log(e);
    if( e.isTrusted === true){
        score++;
    }
    scoreBoard.textContent = score

}

moles.forEach(m=> m.addEventListener("click",clickMark  )  )












