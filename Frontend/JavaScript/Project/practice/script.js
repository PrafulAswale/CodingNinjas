var current = document.querySelector(".current");
var next = document.querySelector(".next");
var input = document.querySelector("input");
var n;

function startCounter(){
    var interval = setInterval(animate, 1000);
    n = input.value;
    console.log(n);
}
function animate(){
    next.classList.add("animate");
    var timeOut = setTimeout(function(){
        next.classList.remove("animate");
        current.innerText = next.innerText;
        next.innerText++;
    }, 500)
    if(next.innerText == n){
        clearTimeout(timeOut);
    }
}

