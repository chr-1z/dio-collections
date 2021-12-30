/*

CRIE UMA FUNÇÃO QUE RETORNA O NOME DOS MEMBROS DE UM MAP QUE TEM O PAPEL ADMIN NO SISTEMA.

1. Crie uma função getAdmin que recebe um Map.
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema (Ex: 'Luiz' => 'Admin').
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.

*/

function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

function getUsers(map) {
    let users = [];
    for([key, value] of map) {
        if(value === 'User') {
            users.push(key);
        }
    }
    return users;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Júlia', 'Admin');

console.log(getAdmins(usuarios));
// console.log(getUsers(usuarios));

/*

DADO O ARRAY [30, 30, 40, 5, 223, 2049, 3034, 5]

Retorne outro array apenas com valores únicos.

*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

