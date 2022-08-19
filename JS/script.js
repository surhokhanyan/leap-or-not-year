const inp = document.querySelector("#inp");
const btn = document.querySelector("#main button");
const text = document.querySelector("#main p");
function daysInFebruary (year){
    return new Date(year, 2, 0).getDate();
};
btn.addEventListener("click", ()=>{
    if (daysInFebruary(inp.value) === 29){
        text.innerHTML = inp.value + " is leap year"
    }else{
        text.innerHTML = inp.value + " isn't leap year"
    }
});