var exerciceUn = require('./exercice1.js');
var exerciceDeux = require('./exercice2.js');
var exerciceTrois = require('./exercice3.js');
var exerciceQuatre = require('./exercice4.js');
var exerciceCinq = require('./exercice5.js');
var nombre = [1,15,16,20,4,17,9];

console.log('  ');
console.log('Exercice1');
console.log('Synchrone');
console.log('  ');

console.log(exerciceUn.nombreRadiateurs(6, 4, 2.4));

console.log('  ');
console.log('Exercice1');
console.log('Asynchrone');
console.log('  ');

exerciceUn.nombreRadiateursAsync(100, 40, 30, function(resultat) {
    console.log(resultat);

});

console.log('  ');
console.log('Exercice2');
console.log('Synchrone');
console.log('  ');

console.log(exerciceDeux.listingConversion());

console.log('  ');
console.log('Exercice2');
console.log('Asynchrone');
console.log('  ');

//console.log(exerciceDeux.listingConversionAsync());

exerciceDeux.listingConversionAsync(function(resultat) {
    console.log(resultat);
});

console.log('  ');
console.log('Exercice3');
console.log('Synchrone');
console.log('  ');

console.log(exerciceTrois.getResultatMultiplication(7));

console.log('  ');
console.log('Exercice3');
console.log('ASynchrone');
console.log('  ');

console.log(exerciceTrois.getResultatMultiplicationAsync(7));


console.log('  ');
console.log('Exercice4');
console.log('Synchrone');
console.log('  ');

console.log(exerciceQuatre.getNbNotes(nombre))

console.log('  ');
console.log('Exercice4');
console.log('Asynchrone');
console.log('  ');

/*exerciceQuatre.getNbNotes(function(resultat) {
    console.log(resultat);
});*/

console.log('  ');
console.log('Exercice5');
console.log('Synchrone');
console.log('  ');

console.log(exerciceCinq.Classement(1, 3, 10, 3, 4, 9, 6));

console.log('  ');
console.log('Exercice5');
console.log('Aynchrone');
console.log('  ');
