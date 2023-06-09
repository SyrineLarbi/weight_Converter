let input=document.getElementById("number");
let result=document.getElementById("result");
let error=document.getElementById("error");
let errorTime;
function updateResult(){
    let number=input.value;
    if(number <=0 || isNaN(number)){
        error.innerText="Invalid number";
        clearTimeout(errorTime);
        errorTime=setTimeout(()=>{
            error.innerText="";
            number="";
        },2000);
    } else {
        result.innerText=(+number/2.2).toFixed(2);
    }
}
input.addEventListener("input", updateResult);
