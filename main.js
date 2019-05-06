// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo

//creo un oggetto studente
var studente ={
  nome:'Ferdinando',
  cognome: 'Martino',
  età: 31
}
document.writeln('---------------PRIMO ESERCIZIO---------------</br>');
//stampo le proprietà di studente
for (var field in studente) {

  document.writeln(studente[field]);
}


// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//creo un array di oggetti
var studenti =[
  {
    nome:'Armando',
    cognome: 'vallante',
    età: 19
  },
  {
    nome:'Lucia',
    cognome: 'Martino',
    età: 20
  },
  {
    nome:'Pasquale',
    cognome: 'Sasso',
    età: 25
  }
]

document.writeln('<br><br>---------------SECONDO ESERCIZIO---------------</br>');
//stampo l'array con gli studenti
for( var i = 0; i<studenti.length; i++){

  document.writeln('</br> Nome : ' + studenti[i].nome + ' Cognome : ' + studenti[i].cognome + '</br>');
}

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//creo dei prompt per inserire un nuovo oggetto PARTE DA RIVEDERE

var nome_utente= prompt('Inserisci un nome ');

var cognome_utente= prompt('Inserisci un cognome ');

var età_utente= parseInt(prompt('inserisci la sua età'));


studenti.push(nome_utente, cognome_utente, età_utente);

console.log(studenti);

