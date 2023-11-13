document.addEventListener("DOMContentLoaded", loadDOM)
function loadDOM(){ 
    displaySearch()
}
function displaySearch(){
  document.getElementById('button').addEventListener ("click",()=> {
    fetch("superheroes.php")
    .then(response => response.text())
    .then( (data) =>alert(data))
});
}
    

