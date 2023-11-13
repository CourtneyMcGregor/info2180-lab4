document.addEventListener("DOMContentLoaded", loadDOM)

function loadDOM(){ 
  Showsrch()
}

function Showsrch(){
document.getElementById('btn').onclick = function() {

let urlink = "http://localhost/info2180-lab4/superheroes.php";

let head = new Headers();
head.append('Accept', 'application/php');

var texx = document.getElementById("txt").value;

let fData = new FormData();

fData.append('hname', clean(texx)); 

let rquest = new Request(urlink, {
method: 'POST',
headers: head,
mode: 'cors',
body: fData
});

fetch(rquest)

.then( (response)=>{
if(response.ok){
return response.text();
}else{
throw new Error('Error Detected!');
}
})
.then( (Data) =>{
console.log(Data)
document.getElementById('rslt').innerHTML= Data;
 })
.catch( (err) =>{
console.log('ERROR:', err.message);
});

};
}
function clean(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
    return str.trim();
}