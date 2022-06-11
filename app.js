const moi = {
    name:'manitra',
    prenom:'luc',
    email:'randiluc@gmail.com',
    pays:'Madagasikara',
    company:{
        nom:'misa',
        niveau:'L3',
        address:'Université d\'Antananrivo'
    }
}
const {name, prenom ,...other} =moi;
console.log(other.email);