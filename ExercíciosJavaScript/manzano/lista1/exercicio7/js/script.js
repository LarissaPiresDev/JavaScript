alert('Soma e multiplicação de forma desc=tributiva dos números inteiros apresentados')
//coleta dos valores
var valorA=parseInt(prompt('Insira um número inteiro'))
var valorB=parseInt(prompt('Insira um número inteiro'))
var valorC=parseInt(prompt('Insira um número inteiro'))
var valorD=parseInt(prompt('Insira um número inteiro'))

//somas
somaAb=valorA+valorB
somaAc=valorA+valorC
somaAd=valorA+valorD
somaBc=valorB+valorC
somaBd=valorB+valorD
somaCd=valorC+valorD

//multiplicação
multiplicacaoAb=valorA*valorB
multiplicacaoAc=valorA*valorC
multiplicacaoAd=valorA*valorD
multiplicacaoBc=valorB*valorC
multiplicacaoBd=valorB*valorD
multiplicacaoCd=valorC*valorD

alert('Seus resultados de forma distributiva serão:\n'+somaAb+'\n'+somaAc+'\n'+somaAd+'\n'+somaBc+'\n'+somaBd+'\n'+somaCd+'\n para soma'+'E para multiplicação\n'+multiplicacaoAb+'\n'+multiplicacaoAc+'\n'+multiplicacaoAd+'\n'+multiplicacaoBc+'\n'+multiplicacaoBd+'\n'+multiplicacaoCd)