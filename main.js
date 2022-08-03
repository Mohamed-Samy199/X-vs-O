let head =document.getElementById("head")
let gamer = "x"
let arrItems = []
function congratulation(n1,n2,n3){
    head.innerHTML= `${arrItems[n1]} winner`
    document.getElementById("box"+n1).style.background ="#000"
    document.getElementById("box"+n2).style.background ="#000"
    document.getElementById("box"+n3).style.background ="#000"
    setInterval(function(){head.innerHTML += "."}, 900)
    setInterval(() => {
        location.reload()
    }, 3000);
}
function winner(){
    for(let i = 1; i<10; i++){
        arrItems[i]= document.getElementById("box" + i).innerHTML
    }
    if(arrItems[1] === arrItems[2] && arrItems[2] === arrItems[3] && arrItems[1] !== ''){
        congratulation(1,2,3)
    }
    if(arrItems[4] === arrItems[5] && arrItems[5] === arrItems[6] && arrItems[4] !== ''){
        congratulation(4,5,6)
    }
    if(arrItems[7] === arrItems[8] && arrItems[8] === arrItems[9] && arrItems[7] !== ''){
        congratulation(7,8,9)
    }
    if(arrItems[1] === arrItems[4] && arrItems[4] === arrItems[7] && arrItems[1] !== ''){
        congratulation(1,4,7)
    }
    if(arrItems[2] === arrItems[5] && arrItems[5] === arrItems[8] && arrItems[2] !== ''){
        congratulation(2,5,8)
    }
    if(arrItems[3] === arrItems[6] && arrItems[6] === arrItems[9] && arrItems[3] !== ''){
        congratulation(3,6,9)
    }
    if(arrItems[1] === arrItems[5] && arrItems[5] === arrItems[9] && arrItems[1] !== ''){
        congratulation(1,5,9)
    }
    if(arrItems[3] === arrItems[5] && arrItems[5] === arrItems[7] && arrItems[3] !== ''){
        congratulation(3,5,7)
    }
}
function game(id){
    let input = document.getElementById(id)
    if(gamer === "x" && input.innerHTML ===''){
        input.innerHTML= "X"
        gamer = "o"
        head.innerHTML="O"
        
    } else if(gamer ==="o" && input.innerHTML ===''){
        input.innerHTML="O"
        gamer="x"
        head.innerHTML="X"
    }
    winner()
}