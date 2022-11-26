const meses = ['enero','febrero','marzo','abril','mayo'];

console.log(meses[3]);
console.table(meses);

console.table(meses.length);

for (let index = 0; index < meses.length; index++) {
    const element = meses[index];
    console.table(element);
    
}

meses.forEach(element => {
    console.log(element);
});
