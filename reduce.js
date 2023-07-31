

// REDUCE É UMA HIGH ORDER FUNCTION
//Ele tem poder de gerar um output que seja diferente
// do elemento original 

//OBJETVO
//Quando precisar reduzir o array a algum tipo de dado

//reduce(accumulator, item), ele tambem pode receber como parâmetro mais dois, o (index, array)
//------------------------------------------------------------------------------------
//Somar todos os dados de um array

const dados = [1, 2, 5]
const soma = dados.reduce((accumulator, item) => accumulator + item, 0)// o zero serve
// apenas como numero inicial para o accumulator
console.table(soma);

//-------------------------------------------------------------------------------------

//Obter uma lista com todos os produtos em formato de string
const prod = [
    { nome: 'feijao', value: 10.00 },
    { nome: 'arroz', value: 8.00 },
    { nome: 'cuscuz', value: 2.00 },
    { nome: 'leite', value: 5.00 },
    { nome: 'queijo', value: 30.00 },

]

const productList = prod.reduce((accumulator, { nome }) => `${accumulator}-${nome},\n`, '') // \n é caracter especial de quebra de linha
console.log(productList);
//----------------------------------------------------------------------------------------

//Descobrir quantas pessoas no array tem determinada idade

const people = [
    { nome: 'Erik', age: 35 },
    { nome: 'Larissa', age: 32 },
    { nome: 'Derick', age: 10 },
    { nome: 'Bella', age: 32 },
    { nome: 'José', age: 32 },
    { nome: 'Maria', age: 35 }
]

const agesFrequency = people.reduce((accumulator, {age}) => {
    accumulator[age] = accumulator[age] + 1 || 1
    return accumulator;
}, {} ); 

console.log(agesFrequency);


/*Resultado desejado 
{
    35: 2,
    32:3,
    10: 1
}
*/
//-------------------------------------------------------------------------------
// Selecionar apenas os filmes de studio Marvel
// Somar os valor dos anos do release de todos os itens
const movies = [

    {nome: 'Batman', release:1994, studio: 'Dc'},
    {nome: 'Superman', release:1998, studio: 'Marvel'},
    {nome: 'Vingadores', release:2000, studio: 'Marvel'},
    {nome: 'Homem Formiga', release:2023, studio: 'Marvel'},
    {nome: 'Mickey', release:1996, studio: 'Disney'},
    {nome: 'Enrolados', release:2018, studio: 'Disney'},
    {nome: 'Shrek', release:2015, studio: 'Disney'},
    {nome: 'Capitã Marvel', release:2020, studio: 'Marvel'}
]

const dado = movies.filter(({studio}) => studio === 'Marvel');
console.log(dado);

const sum = movies.reduce((accumulator,item) => accumulator + item.release, 0);
console.log(sum);
//-----------------------------------------------------------------------------------