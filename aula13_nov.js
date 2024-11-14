let palavra = 'Hoje foi um bom dia'
let controle = 0

while(controle<palavra.length){
  
  console.log(palavra[controle])
  controle++
}

/*Crie um programa que leia 10 números e calcule a média deles e utilizando um laço for*/

let numero = [10, 20, 51, 92, 75, 33, 61, 48, 89, 100]
let soma = 0
let media = 0

for(let i=0;i<10;i++){
  soma = numero[i]+soma
  console.log(soma)
}
media = soma/10
console.log('Média: '+media)


/*Faça um programa que leia números até que
o usuário digite -1 e mostre  média dos números digitados*/

let numeros = [54, 12, 54, 61, 78, 43, 56 ,2, -1, 68,66]
let soma = 0
let media = 0
let indice = 0
while(numeros[indice] != -1){
 
  soma = soma + numeros[indice]
  console.log(soma)
  indice++
  console.log(indice)
}
media = soma/indice
console.log('Media: '+media)

/*Crie um programa que armazene 5 números em um vetor e imprima a some de todos os elementos*/

let armazem=[1,9,5,3,8]
let somando = 0
for(let s = 0; s<=4;s++){
  somando = armazem[s]+somando
  console.log(somando)
}