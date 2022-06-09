
// const contacts = [
//     {
//         id: 1,
//         nom: 'Razafiarison',
//         prenom: 'christian',
//         email: 'christian@gmail.com',
//         age: 12,
//     },
//     {
//         id: 2,
//         nom: 'Randriamanantena',
//         prenom: 'manitra',
//         email: 'manitra@gmail.com',
//         age: 23,
//     },
//     {
//         id: 3,
//         nom:'Todisoa',
//         prenom: 'mathamn',
//         email: 'mathamn@gmail.com',
//         age: 21,
//     },
//     {
//         id: 4,
//         nom: 'Ranaivoarison',
//         prenom: 'harena',
//         email: 'harena@gmail.com',
//         age: 22,
//     },
// ];
// const corpsDuTableau = document.querySelector('tbody');

// contacts.forEach( contact =>{
//     const ligneContact = "<tr><td>"+ contact.id +"</td><td>"+ contact.nom +"</td><td>"+ contact.prenom +"</td><td>"+contact.email +"</td><td>"+ contact.age +"</td></tr>"
//     corpsDuTableau.innerHTML += ligneContact;
// })

let n = 2222;
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
}