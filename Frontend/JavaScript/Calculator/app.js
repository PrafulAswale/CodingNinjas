var num = document.querySelectorAll("button");
var result = document.querySelector(".result");
var expression="";


num.forEach(function(e){
    e.addEventListener("click", function(){
        result.innerText = expression;
        if(e.innerText == '='){
          console.log(result.innerText = Evaluate(expression));
        }
         expression += e.innerText;
         console.log(expression);
    })
    
})

function Evaluate(exp) {
    return eval(exp);
}