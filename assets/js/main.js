/* Schreibe mithilfe des Befehls document.write() folgendes in dein HTML-Dokument:

h1 - Hello World!
p - Have a nice day!
Deklariere die Variable myText und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.
Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument. */

document.write('<h1>Hello World</h1>');
document.write('<p>Have a nice day!<p>');
let myText = "Hello again";
document.write(`<p>${myText}</p>`);
vorname = "Dominik";
nachname = "Gartz"
document.write(`<p>Vorname: ${vorname}</p`);
document.write('<br>')
document.write(`<p>Nachname: ${nachname}</p`);