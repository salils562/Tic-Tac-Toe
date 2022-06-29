let blocks=document.getElementsByClassName('blocks');
let items=document.getElementsByClassName('items');
let congo=document.getElementById('congrajulate');
let success=new Audio('utilities\\success.mp3');
// console.log(items[0].children[0])
let audio=new Audio('utilities\\click.mp3')
let reset=document.getElementById('reset');
let gif=document.getElementById('gif');
gif.style.width='0px';
let initial='X';
turnFunc=()=>{
    audio.play();
    return initial==='X'?initial='O':initial='X';
}
gameWon=()=>{
    let won=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,4,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [2,4,6]
    ];
    won.forEach((e)=>{
    if((blocks[e[0]].innerText===blocks[e[1]].innerText) && (blocks[e[0]].innerText===blocks[e[2]].innerText) && (blocks[e[0]].innerText !=='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        blocks[e[0]].style.backgroundColor='green';
        blocks[e[1]].style.backgroundColor='green';
        blocks[e[2]].style.backgroundColor='green';
    }
    });
    
}
Array.from(blocks).forEach((element)=>{
element.addEventListener('click',()=>{
    let renderText=initial;    
    element.innerText=renderText;
    renderText=turnFunc();  
    document.getElementById('turn').innerText=`${renderText} Turn`;
gameWon();  
});
});
reset.addEventListener('click',()=>{
Array.from(blocks).forEach((element)=>{
element.innerText="";
});
document.getElementById('turn').innerText=`X Turn`;
gif.style.width='0px';
congo.innerText="";
initial='X';
Array.from(blocks).forEach((element)=>{
element.style.backgroundColor='white';
});
});
