# Notas dos Atletas

Este código JavaScript organiza e calcula a média das notas dos atletas com base nos critérios pré-estabelecidos de cálculo , organizando e excluindo a maior e a menor nota a partir de uma entrada de dados em um array de objetos.

# Descrição

- Organiza as notas dos atletas em ordem crescente.
- Separa as notas válidas para cálculo, eliminando a maior e a menor nota.
- Calcula média com base nos critérios do processamento das notas obtidas.
- Exibe as notas originais e a média válida para cada atleta.

# Estrutura básica do código

- Array de objetos: Contem os objetos e suas propriedades onde estão as entradas dos dados.

- Laço de repetição: Foi utilizado um "for" para percorrer o vetor de atletas e acessar a propriedade necessária, e é onde todo o processamento dos dados são executados em cada propriedade dos ojetos do array.

- Organizar: As notas de cada objeto são organizadas de forma crescente utilizando o método sort().

- Separar: Em seguida, são eliminadas a maior e a menor nota de cada atleta para fins de calculos utilizando o método slice().

- Somar: Foi utilizado o método reduce() para somar e reduzir a um único valor as notas organizadas e separadas 

- Calcular a média:  Calculo da média realizado dividindo a soma das notas pelo comprimento atual do vetor notas já processado.

- Saída: Uma saída de dados para o console com as informaçòes determinadas pelo enunciado, com os dados já processados.

> Array de objetos
    > Laço de repetição
        > Organizar
        > Separar
        > Somar
        > Calcular a média
> Saída de dados para o console


