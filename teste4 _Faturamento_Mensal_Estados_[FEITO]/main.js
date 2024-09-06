/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
•	SP - R$67.836,43 
•	RJ - R$36.678,66 
•	MG - R$29.229,88 
•	ES - R$27.165,48 
•	Outros - R$19.849,53 

Escreva um programa na linguagem que desejar onde calcule o percentual de representação
que cada estado teve dentro do valor total mensal da distribuidora.  

*/


const data = [
    {
        'estado': 'SP',
        'faturamento': 'R$67.836,43'
    },
    {
        'estado': 'RJ',
        'faturamento': 'R$36.678,66'
    },
    {
        'estado': 'MG',
        'faturamento': 'R$29.229,88'
    },
    {
        'estado': 'ES',
        'faturamento': 'R$27.165'
    },
    {
        'estado': 'Outros',
        'faturamento': 'R$19.849,53'
    }
]

const valores = data.map(v => v
    .faturamento
    .replace('R$', '')
    .replace('.', '')
    .replace(',', '.')
)


let faturamentoMensalTotal = 0
valores.forEach(v => faturamentoMensalTotal += parseInt(v))


// REGRA DE 3 SIMPLES
// faturamentoMensal - 100%
// faturamentoEstado - x%
// x% = (100% * faturamentoEstado) / faturamentoMensal
valores.forEach((valor, index) => {
    console.log({
        'estado': data[index].estado,
        'valor': valor,
        'porcentagemSobreTotal': ((valor / faturamentoMensalTotal) * 100).toFixed() + '%'
    })
})


