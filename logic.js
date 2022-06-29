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
    if((items[0].children[0].innerText===items[0].children[1].innerText) && (items[0].children[0].innerText===items[0].children[2].innerText) && (items[0].children[0].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[0].style.backgroundColor='green';
        items[0].children[1].style.backgroundColor='green';
        items[0].children[2].style.backgroundColor='green';
    }
    else if((items[1].children[0].innerText===items[1].children[1].innerText) && (items[1].children[0].innerText===items[1].children[2].innerText) && (items[1].children[0].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[1].children[0].style.backgroundColor='green';
        items[1].children[1].style.backgroundColor='green';
        items[1].children[2].style.backgroundColor='green';
    }
    else if((items[2].children[0].innerText===items[2].children[1].innerText) && (items[2].children[0].innerText===items[2].children[2].innerText) && (items[2].children[0].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[2].children[0].style.backgroundColor='green';
        items[2].children[1].style.backgroundColor='green';
        items[2].children[2].style.backgroundColor='green';
    }
    else if((items[0].children[0].innerText===items[1].children[0].innerText) && (items[0].children[0].innerText===items[2].children[0].innerText) && (items[0].children[0].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[0].style.backgroundColor='green';
        items[1].children[0].style.backgroundColor='green';
        items[2].children[0].style.backgroundColor='green';
    }
    else if((items[0].children[2].innerText===items[1].children[2].innerText) && (items[0].children[2].innerText===items[2].children[2].innerText) && (items[0].children[2].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[2].style.backgroundColor='green';
        items[1].children[2].style.backgroundColor='green';
        items[2].children[2].style.backgroundColor='green';
    }
    else if((items[0].children[1].innerText===items[1].children[1].innerText) && (items[1].children[1].innerText===items[2].children[1].innerText) && (items[0].children[1].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[1].style.backgroundColor='green';
        items[1].children[1].style.backgroundColor='green';
        items[2].children[1].style.backgroundColor='green';
    }
    else if((items[0].children[2].innerText===items[1].children[1].innerText) && (items[2].children[0].innerText===items[0].children[2].innerText) && (items[0].children[1].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[2].style.backgroundColor='green';
        items[1].children[1].style.backgroundColor='green';
        items[0].children[1].style.backgroundColor='green';
    }
    else if((items[0].children[0].innerText===items[1].children[1].innerText) && (items[0].children[0].innerText===items[2].children[2].innerText) && (items[0].children[0].innerText!='')){
        gif.style.width='150px';
        congo.innerText=`Congrajulations ! ${initial==='O'?'X':'O'} won`;
        success.play();
        items[0].children[0].style.backgroundColor='green';
        items[1].children[1].style.backgroundColor='green';
        items[2].children[2].style.backgroundColor='green';
    }

}
Array.from(blocks).forEach((element)=>{
element.addEventListener('click',()=>{
let renderText=initial;    
document.getElementById('turn').innerText=`${renderText} Turn`;
element.innerText=renderText;
renderText=turnFunc();  
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
