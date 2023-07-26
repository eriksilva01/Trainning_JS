//HIGH ORDER FUNCTION EMBUTIDA NA LINGUAGEM ---------> MAP
// O map recebe uma função como argumento, fazendo dele uma high-order function

//OBJETIVO:
// PARA OBTER UM NOVO ARRAY COM A MESMA QUANTIDADE DE ITENS DO ARRAY ORIGINAL 
//MAS, COM CADA ITEM TRANSFORMADO USA-SE O MAP

//-------------------------------------------------------------------------------------
// Alterando cada item do array pelo seu valor ao quadrado

const num = [1,2,3,4,5];

const res = num.map(item => item ** 2);
console.log(res);

//-------------------------------------------------------------------------------------

// Pegar todos os nomes dos filmes que estão no array

const tvShows = [
    {nome: 'Alice in Bordeland', releaseYear:2022},
    {nome: 'Breaking Bad', releaseYear:2008},
    {nome: 'Mr. Robot', releaseYear:2015},
    {nome: 'Hannibal', releaseYear: 2013},
    {nome: 'House', releaseYear:2004}
]
// o MAP seleciona apenas a propriedade no retorno
const film = tvShows.map(show => show.nome);
console.table(film);

// -------------------------------------------------------------------------------------






