var btn = document.getElementsByTagName("input");
var heading = document.getElementsByTagName("h1");
var flag = true;

btn[0].addEventListener("click", function () {
    if (flag) {
        document.body.style.backgroundColor = "black";
        heading[0].style.color = "white";
        flag = false;
       
      } else {
        document.body.style.backgroundColor = "white";
        heading[0].style.color = "black";
        flag = true;
      }
});

function change() {
    
}
