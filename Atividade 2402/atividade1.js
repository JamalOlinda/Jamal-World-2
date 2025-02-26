let cpf = [0, 9, 0, 8, 5, 1, 0, 1, 9, 5, 6];
let digitoum;
let digitodois;

function verificaCPF(cpf) {
    if (cpf.length !== 11) {
        return 'CPF inválido';
    }
    
    verificarprimeironumero(cpf);
    verificarsegundonumero(cpf);

    if (cpf[9] === digitoum && cpf[10] === digitodois) {
        return 'CPF válido'; 
    } else {
        return 'CPF inválido'; 
    }
}

function verificarprimeironumero(cpf) {
    let multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicadores1[i];
    }

    let resto = soma % 11;
    if (resto < 2) {
        digitoum = 0;
    } else {
        digitoum = 11 - resto;
    }
}

function verificarsegundonumero(cpf) {
    let multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicadores2[i];
    }

    let resto = soma % 11;
    if (resto < 2) {
        digitodois = 0;
    } else {
        digitodois = 11 - resto;
    }
}

console.log(verificaCPF(cpf));  
