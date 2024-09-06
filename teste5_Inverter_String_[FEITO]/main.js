/**
 *      5) Escreva um programa que inverta os caracteres de um string. 

        IMPORTANTE: 
        a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
        b) Evite usar funções prontas, como, por exemplo, reverse; 
 */

// BRUTE FORCE
// De imediato, podemos pensar em iterar sobre todos os 
// caracteres e mevelos para o final de uma nova 'stringInvertida'.


// No estudo de estrutura de dados e algoritmos, é comum o uso
// da tecnica 'two pointers' para problemas de string como esse:
function reverseString_TwoPointers(string) {
    // Convertendo a string para um array de caracteres
    let arr = string.split('');

    let pointer1 = 0                            // Definindo o p1 no primeiro char
    let pointer2 = arr.length - 1               // Definindo o p2 no ultimo char

    // Usando dois ponteiros para trocar os caracteres
    while (pointer1 < pointer2) {
        let temp = arr[pointer1];               // Usando uma variável temporária para armazenar o valor de p1
        arr[pointer1] = arr[pointer2];          // Trocando o primeiro char pelo último char
        arr[pointer2] = temp;                   // Colocando o valor temporário no p2

        pointer1 += 1;                          // Movendo o 'ponteiro' para o próximo char
        pointer2 -= 1;                          // Movendo o 'ponteiro' para o char anterior
    }

    // Convertendo o array de volta para string e retornando
    return arr.join('');
}

const strings = ['javascrpt', 'python', 'elixir', 'c++', 'svelte', 'vue', 'react']

for (str of strings) {
    console.log(reverseString_TwoPointers(str))
}