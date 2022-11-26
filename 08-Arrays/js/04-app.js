const meses = ['enero','febrero','marzo','abril','mayo'];

console.table(meses);
meses[2]='noviembre'
meses[7]='Diciembre'

console.table(meses.length);
meses.forEach(element => {
    console.log(element);
});
