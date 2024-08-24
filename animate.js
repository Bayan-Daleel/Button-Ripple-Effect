const btnElm=document.querySelector(".btn");


btnElm.addEventListener("mouseover", (event) => {
   const x=event.pageX -btnElm.offsetLeft;
   const y=event.pageY -btnElm.offsetTop;
console.log(x,y);
   btnElm.style.setProperty("--xPos", x + "px");
   btnElm.style.setProperty("--yPos" , y + "px");
   
    // btnElm.style.transform="scale(1.2)";
    // setTimeout(() => {
    //     btnElm.style.transform="scale(1)";

    // },300);
});
