window.addEventListener("keydown", function(event){
   const thekey = document.getElementById(event.key);
   
   if(thekey){
   thekey.classList.add("selected");
   setTimeout(()=>{
    thekey.classList.remove("selected");
   },300);
   playMusic(event.key);
}
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => card.addEventListener("click", () => {
    const letter = card.getAttribute("id");
    playMusic(letter);
}))

function playMusic(value){
    const music = document.getElementById(`${value}-sound`);
    music.currentTime = 0;
    music.play();
}

