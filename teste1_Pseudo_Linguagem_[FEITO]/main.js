/**
 *      1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
        Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
        Imprimir(SOMA); 
        Ao final do processamento, qual será o valor da variável SOMA? 
 */


// Soma = 91

// A reprodução do algoritmo dado é imediata:
const INDICE = 13
let SOMA = 0
let k = 0

while (k < INDICE) {
    k += 1
    SOMA += k
    console.log(SOMA)
}

console.log(`O valor final da variavel soma sera = ${SOMA}`)

