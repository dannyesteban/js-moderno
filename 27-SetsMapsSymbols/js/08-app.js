// Iteradores 
const ciudades =['paris','bogota','madrid']
const ordenes = new Set([111,222,3666,544,77,'otro valor'])
const datos = new Map()

datos.set('nombre','Danny')
datos.set('profesion','desarrollador')

//Entries Iterator
/*for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}*/

//Values Iterator
/*
for (let i of ciudades.values()) {
    console.log(i);
}

for (let i of ordenes.values()) {
    console.log(i);
}

for (let i of datos.values()) {
    console.log(i);
}
*/

//keys Iterator
/*for (let i of ciudades.keys()) {
    console.log(i);
}

for (let i of ordenes.keys()) {
    console.log(i);
}

for (let i of datos.keys()) {
    console.log(i);
}*/


//defaul Iterator
for (let i of ciudades) {
    console.log(i);
}

for (let i of ordenes) {
    console.log(i);
}

for (let i of datos) {
    console.log(i);
}
