# Contar Dígitos

**Motivação**

Faça uma função que dado como entrada um numero natural N retorne a quantidade de dígitos de N.

- I/O - Entradas:
   - Um natural N.
- I/O - Saídas:
   - Quantidade de dígitos de N.

# Função para determinar se o número é primo

**Motivação**

Faça uma função chamada primo que recebe um inteiro positivo n e retorna 1 (verdadeiro) se n é primo, ou 0 (falso) caso contrário. Um número inteiro é primo quando possui exatamente 2 divisores diferentes (1 não é primo).
Uma estratégia simples para testar se um número n é primo consiste em procurar um divisor de n do número 2 até o número n-1. Se algum valor nesta faixa é divisor do n, então n não é primo. Caso contrário, n é primo ou n é o número 1. Nesse caso, o 1 deve ser tratado como uma exceção.
Note que a função pode retornar 0 assim que encontrar um divisor de n entre 2 e n-1. Ou seja, não é necessário retornar apenas no final da função.
Na função main, leia dois inteiros positivos A e B, com A <= B, e imprima todos os primos de A até B. Portanto, use a função primo dentro da função main.

- I/O - Entradas:
   - 1º linha: valor do inteiro positivo A.
   - 2º linha: valor do inteiro positivo B (com A <= B).
- I/O - Saídas:
   - Todos os primos de A até B (um por linha).

# Calcule o número de Euler

**Motivação**

O número de Euler (2,71828182846...) pode ser aproximado por um cálculo muito simples.

Faça uma função que retorna o fatorial de um número inteiro positivo n passado como parâmetro, ou seja, retorna 1 * 2 * 3 * ... * (n-1) * n. Chame esta função de fatorial.

Em seguida, crie uma função chamada euler que recebe um inteiro N e retorna o valor da série.
E=1 + 11! + 12! + 13! + ⋯ + 1N!
A função euler deve chamar a função fatorial.
A função main lê o inteiro N e imprime o valor de euler(N).

- I/O - Entrada:
   - Valor do inteiro positivo N.
- I/O - Saída:
   - Aproximação do número de Euler somando até 1/N!.

# Expressão 5! - 4!

**Motivação**

Resolver a seguinte expressão: E = 5! - 4!
-sem subrotina
-usando subrotinas sem parâmetros (sem entradas)
-usando subrotinas com parãmetros (com entradas)
-usando biblioteca em arquivo separado (include/import) - spyder
Implemente uma função que receba um número inteiro positivo n, passado como entrada, e retorne o fatorial de n, ou seja, retorne 1 * 2 * 3 * ... * (n-1) * n. Chame esta função de fatorial.

- I/O - Entrada:
   - Sem entradas.
- I/O - Saídas:
   - Resultado da expressão 5! - 4!

# Expressões

**Motivação**

Resolver as seguintes expressões:
E1 = 5! - 4!
E2 = 1/(3!) + 4!
E3 = (4! - 21)!
E4 = 8^3 + 5^4/3^5
E5 = (3!)^(2!+1) + (2^2)!
Implemente uma função que receba um número inteiro positivo n, passado como entrada, e retorne o fatorial de n, ou seja, retorne 1 * 2 * 3 * ... * (n-1) * n. Chame esta função de fatorial.
Implemente uma funcao de potencia simplificada, que tem como entradas uma base qualquer, base, e um expoente inteiro não negativo, exp. Chame esta função de potencia.

- I/O - Entrada:
   - Sem entradas.
- I/O - Saídas:
   - Resultados das expressões.

# Função para conversão de Fahrenheit para Celsius

**Motivação**

Dada uma temperatura em graus Fahrenheit, podemos convertê-la para graus Celsius usando a fórmula abaixo:

Celsius = (Fahrenheit - 32) * 5 / 9

Faça uma função chamada converte_para_celsius que recebe uma temperatura em Fahrenheit e retorna esta temperatura em graus Celsius.

Na função main, leia uma temperatura em graus Fahrenheit (ponto flutuante) e imprima o valor desta temperatura em Celsius. Para isso chame a função converte_para_celsius.

Escreva um programa que receba 5 valores e que mostre como saída a soma do maior e do menor valor lido.

- I/O - Entrada:
   - Temperatura em graus Fahrenheit (ponto flutuante).
- I/O - Saída:
   - Temperatura em graus Celsius.

# Mete bala

**Motivação**

Um atirador de elite estava atirando a 400 metros de distância em em um papel milimetrado. Para calcular a imprecisão da arma, ele dava dois tiros e media a distância entre eles. Como ele não tinha régua, ele pegou os pontos no plano cartesiano e a fórmula da distância entre os pontos para poder calcular a distância.

Faça uma função que receba X e Y como parâmetro, e dada a formula, calcule e imprima distancia entre os pontos com precisão de duas casas decimais.

- I/O - Entradas:
   - Coordenada X e coordenada Y do primeiro ponto.
   - Coordenada X e coordenada Y do segundo ponto.
- I/O - Saídas:
   - A distância entre os pontos com duas casas decimais.

# Quebrador de Copos

**Motivação**

A brincadeira preferida de Maurício é pegar os copos da sua mãe e fazer uma torre no formato de um triângulo isósceles, isso deixa sua mãe muito zangada por que ele quebra todos os copos da mãe dele já que ele tem preferência pelos copos de vidro. A mãe de Maurício, já com raiva por ter perdido tantos copos, teve a brilhante ideia de contratar você para fazer um programa de computador que faça a torre para Maurício.

Faça um programa que dado um número N inteiro, sendo 0 < N < 10. Mostre na tela um triângulo isósceles formado por apenas N e com altura igual a N.

- I/O - Entrada:
   - Inteiro N, com 0 < N < 10
- I/O - Saída:
   - Um triângulo isósceles formado apenas pelo numero N e com altura igual a N.


- I/O - Entrada (exemplo):
   - 3
- I/O - Saída (exemplo):
   -   3

      3 3

     3 3 3
 
# Raiz Quadrada

**Motivação**

Faça uma função que dado um número natural de raiz também natural, calcule e mostre a raiz quadrada desse número.

- I/O - Entrada:
   - Natural N.
- I/O - Saída:
   - Raiz quadrada de N.

# Triângulo Retângulo e Somatório dos seus Valores

**Motivação**

Faça uma função que dado um número natural N mostre na tela um triângulo retângulo formado por n sequências tal que a primeira sequência vai de 1 a 1, a segunda vai de 1 a 2, a terceira vai de 1 a 3, e assim por diante, até a última sequência que vai de 1 a N. No final, mostre o somatório de todos os valores do triângulo.

- I/O - Entrada:
   - Inteiro N, com 0 < N < 10
- I/O - Saída:
   - Um triângulo de altura N formado por N sequências.

- I/O - Entrada (exemplo):
   - 3
- I/O - Saída (exemplo):
   - 3

     1 2
     
     1 2 3

# End