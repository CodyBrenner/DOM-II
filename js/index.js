// START JS
// #1
let buttonChange = document.querySelector(".btn");

buttonChange.addEventListener("mouseover", function (event){
        event.target.style.color = "red";
});
// #2
let buttonChangeTwo = document.querySelector("#btn2");

buttonChangeTwo.addEventListener("mouseover", function (event){
        event.target.style.color = "yellow";
});
// #3
let buttonChangeThree = document.querySelector("#btn3");

buttonChangeThree.addEventListener("mouseover", function (event){
        event.target.style.color = "purple";
});
// #4
window.addEventListener('keypress', () => {
    alert("The Keyboard is Not active on this web page")
})
// #5
const card = document.querySelector('.image-mainOne');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
// #6
function zoom(event) {
      event.preventDefault();

      scale += event.deltaY * -0.01;
      scale = Math.min(Math.max(.125, scale), 4);

      el.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const el = document.querySelector('footer');
    el.onwheel = zoom;

    // #7
    const imageMove = document.querySelector('.article-mainOne');

    imageMove.addEventListener('dblclick', function (e) {
      imageMove.classList.toggle('large');
    });
    // #8
    const imageMoveTwo = document.querySelector('.article-mainTwo');

    imageMoveTwo.addEventListener('dblclick', function (e) {
      imageMoveTwo.classList.toggle('large');
    });
    // 9
    const navLinks = document.querySelectorAll('.nav-link');

    for(let i = 0; i <= 3; i++){
       navLinks[i].addEventListener('click', (event)=>{
           event.preventDefault()
       })
   }
//    10