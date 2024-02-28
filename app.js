let gamesq=[];
let usersq=[];
let btnarr=['a','b','c','d'];
let start= false;
let level=0;
let flag=1;
let h3=document.querySelector("h3");
document.addEventListener("keypress" ,function(){
    if(start== false){
        console.log("game started");
        start=true;
        levelUp();
    }
    
   
})
function levelUp(){
    usersq=[];
    level++;
    h3.innerText=`level ${level}`;
    // for(let i=0;i<=level;i++){
    let num=Math.floor(Math.random()*3);
    let arEl=btnarr[num];
    let rBtn=document.querySelector(`#${arEl}`);
    let rbId=rBtn.getAttribute("id");
    gamesq.push(rbId);
    console.log(gamesq);
    btnFlash(rBtn);
    // }
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function btnPress(){
   let btn= this;
    btnFlash(btn);
    let bpId=btn.getAttribute("id");
    usersq.push(bpId);
    console.log(usersq);
    ansCheck(usersq.length-1);
}
let allBtns=document.querySelectorAll(".child");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function ansCheck(idx){
    
        if(gamesq[idx]===usersq[idx]){
            if(gamesq.length==usersq.length){
                setTimeout(levelUp,1000);
            }
        }
        else{
            h3.innerHTML=`Game over!<b>Your score is ${level}</b> <br> Press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout( function (){document.querySelector("body").style.backgroundColor="white";},150);
            setTimeout(reset,2000);
        }
    
   
}
function reset(){
    level=0;
  
   gamesq=[];
   usersq=[];
   start=false;
}