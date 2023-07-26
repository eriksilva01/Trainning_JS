

//HIGH ORDER FUNCTION EMBUTIDA NA LINGUAGEM ---------> FILTER
// Recebe uma função por argumento e executa essa função para cada item do array


//OBJETIVO:
//Baseado em uma condição você quer obter um novo array com ALGUNS itens do array
//original

//-------------------------------------------------------------------------------
//Selecione números maiores que 40 do array
const randomNumbers = [13, 22, 38, 45, 52, 99]

const filtro = randomNumbers.filter(item => item > 40)
console.table(filtro);
//-------------------------------------------------------------------------------

const movies = [
    { nome: 'desenho', release: 1998 },
    { nome: 'terror', release: 1999 },
    { nome: 'suspense', release: 2000 },
    { nome: 'anime', release: 2002 },
    { nome: 'comedia', release: 2006 },
    { nome: 'documentario', release: 2010 }

];
const res = movies.filter(item => item.release < 2005); // nessa condição seleciona
//todas as propriedades do array com o release abaixo de 2005
console.log(res);

const sol = movies.filter(({release}) => release < 2005); // usando o destructor para a propriedade
console.table(sol); // impressão em tabela
//--------------------------------------------------------------------------------------

//Selecionar cidades em comum entre os dois arrays 
const firstTravelerCities = [
    'Gramado',
    'Porto',
    'Espinho',
    'Guimarães',
    'Natal'
]

const secondTravelerCities = [
    'Barcelona',
    'Porto',
    'Rio de Janeiro',
    'Gramado',
    'Espinho'
    
]

const cities = firstTravelerCities.filter(city => secondTravelerCities.includes(city)); // Uso o método INCLUDES
// para saber se algum item do array contem no outro array em questão

console.log(cities);






