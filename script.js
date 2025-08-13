let scrollRevealOption = {
    distance: "15px",
    duration: 400,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 400,
});

let btns = document.querySelectorAll(".btn"); 
let winnerMessage = document.querySelector(".winnerMessage");
btns.forEach((key)=>{
  key.addEventListener("click",()=>{
let arr = ["Rock","Paper","Scissors"];
let ComputerChoise = arr[Math.floor(Math.random() * arr.length)];
console.log(ComputerChoise);
let yourCHoise = key.dataset.store;
let winner = "";
if(ComputerChoise === yourCHoise){
  winner = "Draw";
}else if(
  (yourCHoise === "Rock" && ComputerChoise === "Scissors") || 
  (yourCHoise === "Scissors" && ComputerChoise === "Paper") || 
  (yourCHoise === "Paper" && ComputerChoise === "Rock") 
){
  winner = "You Win";
}else{
    winner = "Computer Win";
}
winnerMessage.innerHTML = `You Choose ${yourCHoise}. Computer Choose ${ComputerChoise}. Result : ${winner}`
  });

});
