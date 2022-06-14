// const fruits = ["pomme", "mangue", "bananeM","citron","orange"]

// const fruitAvecM = fruits.filter((fruit)=>{
//     if(fruit.toLocaleLowerCase().includes("m")){
//         return fruit;
//     }
// })

// console.log(fruitAvecM);

const anneActuelle = 2022;
const members = [{
    id:1,
    nom:"lisangola",
    prenom:"luc",
    anneDeNaissance: 1999
},
{
    id:2,
    nom:"manitra",
    prenom:"randrie",
    anneDeNaissance: 2000
},
{
    id:3,
    nom:"Miary",
    prenom:"Masinirina",
    anneDeNaissance: 2004
},
{
    id:4,
    nom:"manoa",
    prenom:"michaëlla",
    anneDeNaissance: 2017
}];

// const membresFormater = members.map((member)=>{
//     return{
//         id: member.id,
//         nomComplet: `${member.nom} ${member.prenom}`,
//         age: anneActuelle - member.anneDeNaissance
//     }
// })

function creatRow({id,nom,prenom,anneDeNaissance}){
    return(`<tr>
        <td>${id}</td>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${anneDeNaissance}</td>
    </tr>`
    )
}


const input = document.querySelector('input');
let filterTab;
input.addEventListener('input',(e)=>{
    filterTab = members.filter((member)=> {
        if(member.nom.toLocaleLowerCase().includes(e.target.value)){
            return member
        }
    })
    console.log(filterTab);
})

document.querySelector('button').addEventListener('click',(e)=>{
    filterTab.forEach((newSearch)=>{
        document.querySelector('tbody').insertAdjacentHTML('beforeend',creatRow(newSearch));
    })
})
