// const alunos = [
// {
//     nome: "Daniel",
//     nota: 7,
//     serie: "9º"
// },
// {
//     nome: "Juliana",
//     nota: 9,
//     serie: "8º"
// },
// {
//     nome: "Gabriel",
//     nota: 7,
//     serie: "5º"
// },
// {
//     nome: "Jamilton",
//     nota: 6,
//     serie: "5º"
// },
// ];


// function alunosAprovados(array, media){
//     let arrayAprovados = [];
//     if(!array || !media ) return console.log("Esqueceu de colocar o numero de alunos ou a média");
    
//     for(let i = 0; i < array.length; i++){

//         const {nota, nome} = array[i];

//        if(nota >= media){
            
//             arrayAprovados.push(nome);
//         }
//     }
//     return arrayAprovados
// }

// console.log(alunosAprovados(alunos, 7));


const pessoa = {
    nome: 'Kumagawa',
    idade: 18
}

const pessoa2 = {
    nome: 'Medaka',
    idade: 19
}

function calculaIdade(anos) {
return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

//call
// console.log(calculaIdade.call(pessoa,23));
// console.log(calculaIdade.call(pessoa2,26));

//aply
console.log(calculaIdade.apply(pessoa,[23]));
console.log(calculaIdade.apply(pessoa2,[26]));
