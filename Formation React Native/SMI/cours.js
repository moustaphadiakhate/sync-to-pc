console.log("Hello, World!");

let prenom = "Moustapha";

console.log(`welcome ${prenom}! to SMI`);

// objet

let EtudiantSMI = {
  prenom: "Mouhamadou Moustapha",
  nom: "Diakhate",
  age: 22,
  codeEtudiant: "SMI-2021-001",
  email: "toto@gmail.com",
  telephone: "175456596655",

}

console.log(`Bienvenue ${EtudiantSMI.prenom} votre code etudiant est ${EtudiantSMI.codeEtudiant}`);

// les tabeaux

let fruits = ["Pomme", "Banane", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("Raisin");

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.unshift("papaya")

console.log(fruits);

// on va voir .filter et map de tableau

let listDesNombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let listDesNombresPairs = listDesNombres.filter((nombre) => nombre % 2 === 0);

console.log(listDesNombresPairs);

let listDesNombresDoubles = listDesNombres.map((nombre) => nombre * 2);

console.log(listDesNombresDoubles);


const Pays = {
  president: "Diomaye",
  capitale: "Dakar"
}

const mot = `Bienvenue au Senegal, la capitale est ${Pays.capitale} et son president est ${Pays.president}`
console.log(mot)
console.log("Bienvenue au Senegal, la capitale est " + Pays.capitale + "et son president est " + Pays.president)



const user = {
  name: "Charlie",
  age: 35
};
const { name, age } = user;

console.log(user.name)

console.log(age)