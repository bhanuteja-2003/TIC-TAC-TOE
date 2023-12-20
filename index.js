let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let turnO = true;
let count = 0;
let flag = 0;

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]
];

const emptyBoxes = ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    })
}

const enableBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}

const disableBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const checkWinner = () => {
    for(let i=0;i<8;i++){
        let b1 = boxes[winPatterns[i][0]].innerText;
        let b2 = boxes[winPatterns[i][1]].innerText;
        let b3 = boxes[winPatterns[i][2]].innerText;
        if(b1!="" && b2!="" && b3!=""){
            if(b1===b2 && b2===b3){
                // console.log(b2 + " is the winner");
                document.getElementById("msg").innerText = b2 + " is the winner of the !!!";
                disableBoxes();
                return true;
            }
        }
    }
    
}

const draw = ()=>{
    document.getElementById("msg").innerText = "GAME DRAW :(";
}

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        count++;
        box.disabled = true;
        let blCheck = checkWinner();
        if(count===9 && !blCheck){
            draw();
        }
        
    })
})



resetButton.addEventListener("click" ,()=>{
    turnO=true;
    enableBoxes();
    emptyBoxes();
    document.getElementById("msg").innerText = "who is the winner ??";
    count=0;
})