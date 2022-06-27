
//Código sem a api
//const Cep = require('../models/CepModel');

//const CEP_REGEX = /\d{5}-?\d{3}/;
// const findAddressByCep = async (searchedCep) => {
//   // Valida o CEP e em caso dele ser falso, retorna um erro
//   if (!CEP_REGEX.test(searchedCep)) {
//     return {
//       error: {
//         code: 'invalidData',
//         message: 'CEP inválido',
//         }
//         }
//     }
//   // Buscamos o CEP através do Model
//   const cep = await Cep.findAddressByCep(searchedCep);

//   // Caso não encontre nenhum CEP, o service retorna um objeto de erro.
//   if (!cep) {
//     return {
//       error: {
//         code: 'notFound',
//         message: 'CEP não encontrado'
//       },
//     };
//   }

//   // Por fim, retornamos o CEP correto
//   return cep;
// };

// const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
//     // Começamos buscando o cep que estamos tentando cadastrar
//     const existingCep = await Cep.findAddressByCep(cep);
  
//     // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
//     if (existingCep) {
//       return {
//         error: {
//           code: 'alreadyExists',
//           message: 'CEP já existente',
//         },
//       };
//     }
  
//     // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
//     return Cep.create({ cep, logradouro, bairro, localidade, uf });
//   };

//Código com API

// CepService.js
const Model = require('../models/CepModel');
// Nossa camada de service agora só precisa do CEP para cadastrar
const create = async (cep) => {
  // testamos o REGEX de nosso CEP
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  // Verificamos se o CEP já foi cadastrado. Aqui, podemos usar a mesma função que tínhamos antes.
  const existingCep = await Cep.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  const createdCep = await Model.create(cep);

  // Caso recebamos null, é porque o CEP não foi encontrado pela API
 if (!createdCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não existe',
      },
    };
  }
  
  return createdCep;
};

module.exports = create;
// module.exports = {
//   findAddressByCep,
//   //create
// };