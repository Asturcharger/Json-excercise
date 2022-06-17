//Recuperar títulos e imprimir en consola
fetch("/data.json")
.then(response => response.json())
.then(data =>console.log(data.results[0].title))

function printTitles()