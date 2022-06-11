const loader = document.querySelector(".loader");
const button = document.querySelector("button");
let tab = new Array();

window.addEventListener('load',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => tab = data)
})
function creeLigne(user){
    return(
    `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
    </tr>`)
}
button.addEventListener('click',()=>{
    for(let tb of tab){
        document.querySelector('tbody').innerHTML += creeLigne(tb);
    }
})

/*let n = 2222; 
let tab = new Array()
let compteur=0

console.log(n.toString().split(''));

for(let tableau of n.toString().split('')){
tab.push(parseInt(tableau));
}
console.log(tab.length)

for(let i = 0; i<tab.length - 2 ; i++ ){
    if(tab[0]==tab[i+2] || tab[1]==tab[i+2]){
        compteur++
    }
}
if(compteur == tab.length - 2){
    console.log(n+' est duodigit');
}else{
    console.log(n+' tsy duodigit');
}*/