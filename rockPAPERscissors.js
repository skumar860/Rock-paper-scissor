let mouseactionROCK = document.querySelector('#rockbtn')
let mouseactionPAPER = document.querySelector('#paperbtn')
let mouseactionSCISSOR = document.querySelector('#scissorsbtn')
let displaymyscore=document.querySelector('#displayScore')
let displaymyselection=document.querySelector('#displaygametrace')
let displayGAmeresult=document.querySelector('#gameresult')
let Resetgame=document.querySelector("#resetbtn")
let ModalBox=document.querySelector("#exampleModalLongTitle")

let playermove
let counter=0
let playermoveimage
let compchoice
let gamechances=0
let JSONvalue
let audio1=new Audio()
let audio2=new Audio()
let audio3=new Audio()
let audio4=new Audio()
let audio5=new Audio()
audio1.src="rockPaperAUDIO.mp3"
audio2.src="slash.mp3"
audio3.src="stone.mp3"
audio4.src="win.mp3"
audio5.src="Loose.mp3"
let computerMovearray = ['rock', 'paper', 'scissor']
let scoreobj= JSON.parse(localStorage.getItem('scoreitem')) ?? { win:0,loss:0,tie:0}

displayGAmeresult.classList.add('scorecard')
mouseactionROCK.classList.add('mousecursor')
mouseactionPAPER.classList.add('mousecursor')
mouseactionSCISSOR.classList.add('mousecursor')
Resetgame.classList.add('mousecursor')
let computermove = () => {
      let compvalue = Math.floor(Math.random() * 3)
      let result
      if (compvalue == 0)
      result = computerMovearray[0]
      else if (compvalue == 1)
      result = computerMovearray[1]
      else if (compvalue == 2)
      result = computerMovearray[2]
   return result
}
let game=(pmove,cmove)=>{
     if(pmove=='rock' && cmove=='rock')
    {scoreobj.tie++;displayGAmeresult.innerHTML=`It's a Tie <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#e3d91b'}
    else if(pmove=='rock' && cmove=='scissor')
    {scoreobj.win++;displayGAmeresult.innerHTML=`You Won <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#87eda6'}
    else if(pmove=='rock' && cmove=='paper')
    {scoreobj.loss++;displayGAmeresult.innerHTML=`You Loose <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#f02005'}
    else if(pmove=='paper' && cmove=='paper')
    {scoreobj.tie++;displayGAmeresult.innerHTML=`It's a Tie <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#e3d91b'}
    else if(pmove=='paper' && cmove=='rock')
    {scoreobj.win++;displayGAmeresult.innerHTML=`You Won <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#87eda6'}
    else if(pmove=='paper' && cmove=='scissor')
    {scoreobj.loss++;displayGAmeresult.innerHTML=`You Loose <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#f02005'}
    else if(pmove=='scissor' && cmove=='scissor')
    {scoreobj.tie++;displayGAmeresult.innerHTML=`It's a Tie <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#e3d91b'}
    else if(pmove=='scissor' && cmove=='paper')
    {scoreobj.win++;displayGAmeresult.innerHTML=`You Won <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#87eda6'}
    else if(pmove=='scissor' && cmove=='rock')
    {scoreobj.loss++;displayGAmeresult.innerHTML=`You Loose <span class="chances">Chances left<span class="chancescount">${counter}</span></span>`;
    displayGAmeresult.style.color='#f02005'}
    updateresult()
    localStorage.setItem('scoreitem', JSON.stringify(scoreobj))
}
let updateresult=()=>{
    displaymyscore.innerHTML=`Wins ${scoreobj.win} loss ${scoreobj.loss} Tie ${scoreobj.tie} `
    displaymyscore.classList.add('scorecard')
    displaymyselection.innerHTML=`Youchoose=<img src="${playermove}.256x255.png" alt="...error" id="smallimg">, Computerchooose=<img src="${compchoice}.256x255.png" alt="...error" id="smallimg">`
    displaymyselection.classList.add('scorecard')
}
let finalupdatedresult=()=>{
    if(scoreobj.win>scoreobj.loss)
    ModalBox.innerHTML=`Congrats You Won`
    else
    ModalBox.innerHTML=`Sorry to say You Lost`
    displaymyscore.innerHTML=``
    displaymyscore.classList.add('scorecard')
    displaymyselection.innerHTML=``
    displaymyselection.classList.add('scorecard')
}
let resetfunction=()=>{
    if(scoreobj.win>scoreobj.loss)
    {ModalBox.innerHTML=`Congrats You Won`}
    else if(scoreobj.win<scoreobj.loss)
    { ModalBox.innerHTML=`Sorry to say You Lost`  }
    else
    {ModalBox.innerHTML=`It's a Tie`  }
    if(scoreobj.win>scoreobj.loss){audio4.play()}
    else if(scoreobj.win<scoreobj.loss){audio5.play()}
   else{audio5.play()}
    displaymyscore.innerHTML=``
    displaymyscore.classList.add('scorecard')
    displaymyselection.innerHTML=``
    displaymyselection.classList.add('scorecard')
    scoreobj.win=0
    scoreobj.loss=0
    scoreobj.tie=0
    Resetgame.classList.add('resetbutton')
    localStorage.removeItem('scoreitem')
    displayGAmeresult.innerHTML=``
    mouseactionROCK.style.backgroundColor = 'white'
    mouseactionPAPER.style.backgroundColor = 'white'
    mouseactionSCISSOR.style.backgroundColor = 'white'
    counter=0
    $('#exampleModalCenter').modal('show') 

}

     mouseactionROCK.onclick = () => {
         mouseactionROCK.style.backgroundColor = '#cf2115'
         playermove = 'rock'
         playermoveimage='image.png'
          compchoice = computermove()
          if(counter==5){ 
            resetfunction()
            return 0 }
         game(playermove,compchoice)
         audio3.play()
         counter++
         
     }
     mouseactionPAPER.onclick = () => {
         mouseactionPAPER.style.backgroundColor = '#96890c'
         playermove = 'paper'
         playermoveimage='image.png'
         compchoice = computermove()
         if(counter==5){ 
            resetfunction()
            return 0 }
         game(playermove,compchoice) 
         audio1.play()
         counter++
        
     }
     mouseactionSCISSOR.onclick = () => {
         mouseactionSCISSOR.style.backgroundColor = '#18b855'
         playermove = 'scissor'
          compchoice = computermove()
          if(counter==5){ 
            resetfunction()
            return 0}
         game(playermove,compchoice)
         audio2.play()
         counter++  
     }

    mouseup = () => {
        mouseactionROCK.style.backgroundColor = 'white'
        mouseactionPAPER.style.backgroundColor = 'white'
        mouseactionSCISSOR.style.backgroundColor = 'white'
        Resetgame.style.backgroundColor='grey'
        Resetgame.classList.remove('resetbutton')
    }
   

Resetgame.onclick=()=>{
    scoreobj.win=0,
    scoreobj.loss=0
    scoreobj.tie=0
    updateresult()
    Resetgame.classList.add('resetbutton')
    displaymyselection.innerHTML=''
    localStorage.removeItem('scoreitem')
    displayGAmeresult.innerHTML=``
    mouseactionROCK.style.backgroundColor = 'white'
    mouseactionPAPER.style.backgroundColor = 'white'
    mouseactionSCISSOR.style.backgroundColor = 'white'
    counter=0
    
}
