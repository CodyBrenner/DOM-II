// MOUSE OVER

let buttonChange = document.querySelector(".btn");

buttonChange.addEventListener("mouseover", function (event){
        event.target.style.color = "red";
});
let buttonChangeTwo = document.querySelector("#btn2");

buttonChangeTwo.addEventListener("mouseover", function (event){
        event.target.style.color = "yellow";
});
let buttonChangeThree = document.querySelector("#btn3");

buttonChangeThree.addEventListener("mouseover", function (event){
        event.target.style.color = "purple";
});

window.addEventListener('keypress', () => {
    alert("The Keyboard is Not active on this web page")
})

const card = document.querySelector('.image-mainOne');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});

