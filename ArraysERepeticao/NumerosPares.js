const numeros = [242, 523, 12, 534, 4, 5, 17, 94];
let numerosPares = [];

for (let i=0; i<numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        numerosPares.push(numeros[i]);
    }
}

console.log(numerosPares);