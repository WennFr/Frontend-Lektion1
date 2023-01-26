var secretMessage = document.getElementById('secretMessage')
var knappen = document.getElementById('knappen')
knappen.addEventListener("click", ()=>{
    secretMessage.style.display="block";   
});

if(knappen.textContent == 'Click Me!')
{
knappen.addEventListener("click", ()=>{
    knappen.innerHTML = "Get real Biatch";});
}

else
knappen.addEventListener("click", ()=>{
    knappen.innerHTML = "Clicke!";});
