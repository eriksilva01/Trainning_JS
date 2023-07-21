
//EXPORTAÇÃO E IMPORTAÇÃO DE ARQUIVO


// Para que um arquivo possa ser utilizado colocamos a propriedade export

export class Numero {
    peso
    idade
    altura
}

// Precisamos ter um arquivo Package.json
//dentro dele precisamos informar que ele é do tipo 'module'
//"keywords": [],
//"author": "",
//"description": ""
 //"type" : "module" <---------dessa forma!


// O nome do arquivo precisa ter o nome IGUAL ao da class, começando por letra Maiuscula

// O arquivo que vai receber as informações da classe  precisa ter 
import { Numero } from './caminhoDoArquivo';


//No HTML  dentro do script no BODY precisamos indicar que é do type= 'module'
<script src="" type='module'></script> //<-------------dessa forma!

//ABRA UMA PASTA JS para colocar dentro todos seus arquivos javascript de classes