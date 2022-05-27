
let sticky = document.querySelector("#sticky");
let bdy = document.querySelector("body");
sticky.addEventListener("click", function(e){
let sticky = document.createElement("div");
sticky.setAttribute("class","sticky");
sticky.innerHTML= `<div class="sticky">
    
    <div class="navbar">
    <div class="close"></div>
    <div class="minimize"></div>
        </div>
    <textarea name="" class="textarea"></textarea>`;
bdy.appendChild(sticky);

let minimize = document.querySelector(".minimize");
let textarea = document.querySelector("textarea");
let close = document.querySelector(".close");
isclose = false;
minimize.addEventListener("click", function(e){
if(isclose==false){

textarea.style.display = "none";

}else {
textarea.style.display = "block";
}
isclose= !isclose;





})
close.addEventListener("click", function(e){

sticky.remove();
})



})