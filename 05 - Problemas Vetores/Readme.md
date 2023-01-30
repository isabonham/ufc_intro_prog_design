# Anfíbios e Batráquios - Está contido

**Motivação**

Todo batráquio é anfíbio, mas nem todo anfíbio é batráquio. Todo sapo, rã e perereca são tanto anfíbios como batráquios. 
Assim, o conjunto dos sapos está contido no de batráquios que está contido no de anfíbio.
Não entendeu? Quem mandou gazear a aula de biologia. :(

Dados dois vetores, verifique se o primeiro está contido no segundo.

- I/O - Entradas:
   - 1º linha: Número de elementos do primeiro vetor(1 a 50) seguido dos elementos.
   - 2º linha: Número de elementos do segundo vetor(1 a 50) seguido dos elementos.
- I/O - Saída:
   - "sim" se o primeiro está contido no segundo e "não" caso contrário.

# Baruel Ruel trocando figurinhas!

**Motivação**

Baruel Ruel tem muitas figurinhas do álbum de futebol. Ele estava indo para uma feira de troca de figurinhas quando tropeçou e misturou as figurinhas todas. Ele não sabe mais quais figurinhas estão repetidas e tem pra trocar, nem quais estão faltando pra completar a coleção. Ajude Baruel Ruel com essa tarefa.

A entrada é composta da quantidade de figurinhas no álbum e da lista de figurinhas de Baruel de forma ORDENADA. A saída deve ser uma linha contendo as figurinhas repetidas e os números das figurinhas que faltam. Se não houver figurinhas repetidas ou não faltar nenhuma escreva 'N'.

- I/O - Entradas:
   - 1º linha: quantidade de figurinha total do álbum (1 a 50).
   - 2º linha: quantidade de figurinhas que Baruel possui (no minimo 1) (0 a 100).
   - 3º linha: números das figurinhas de forma ORDENADA.
- I/O - Saída:
   - 1º linha: as figuras que ele tem pra trocar ou 'N' se nenhuma.
   - 2º linha: os números das figuras que faltam ou 'N' se nenhuma.

# Batida Policial - Ordenando vetores

**Motivação**

"Bora bando me marginal, tudo pra parede, em fila, bora bora bora. Zero um essa fila tá horrível.
Coloca esses caras ordenados por idade. Os pequenos a gente dá só uns cocorotes, e os maiores 
a gente leva pro xadrez. Vamos vamo vamo!"

Implemente uma função que reordena o vetor de inteiros dado como entrada e retorne o vetor ordenado.

- I/O - Entrada:
   - 1º linha: O tamanho do vetor.
   - 2º linha: Os elementos.
- I/O - Saída:
   - Os elementos do vetor ordenados em ordem crescente.

# Cabo de Guerra Jedi

**Motivação**

"Hoje é Dia de gincana galeraaaaaaa!"

"EEEEEEEE"

"A primeira competição do dia é cabo de guerra"

"A equipe mais forte vence. Prepara, 1, 2, 3, vai!!!"

Você recebe um conjunto de números positivos como entrada (pode assumir que a quantidade é sempre par).
O valor do número representa a força do participante.
A primeira metade dos números representa os participantes do lado Jedi.
A segunda metade dos números representa os participantes do lado Sith.
Analise o conjunto de números somando as forças dos participantes e escreva o nome
do lado que ganhou ou empate ("Jedi", "Sith", "Empate").

- I/O - Entrada:
   - 1º linha: quantidade de números (participantes).
   - 2º linha: conjunto de números.
- I/O - Saída:
   - "Jedi", "Sith", ou "Empate".

# Capoeira invertendo vetor!

**Motivação**

Um aluno capoeirista estava sentado quietinho no cantinho da UFC quando um amigo perguntou pra ele:

"Que foi Alfredo. Que cara de sofrimento é essa?"

"Tô pensando nas ironias da vida. Consigo passar 5 minutos de ponta cabeça, mas não consigo inverter esse vetor."

Faça uma função que ajude o capoeirista a inverter um vetor passado na entrada. A primeira linha contém a quantidade de elementos e a segunda linha um vetor de inteiros. Imprima o vetor invertido na saída.

- I/O - Entrada (exemplo):
   - 1º linha: 4
   - 2º linha: 1 2 3 4
- I/O - Saída (exemplo):
   - 4 3 2 1

# Coleção de Tazos - Quantos se repetem mais

**Motivação**

Elvis Presley Da Silva tem uma coleção de tazos numerados. Ele colocou todos em ordem numérica, mas está na dúvida de qual tazo elem tem mais vezes repetido. Faça um código que ajude Elvis a saber o número do tazo que se repete mais. Se mais de um tazo tiver no topo da quantidade, imprima todos eles.

- I/O - Entrada:
   - 1º linha: um número positivo com a quantidade de elementos do vetor (1 a 50).
   - 2º linha: o vetor de inteiros, já ordenado.
- I/O - Saída:
   - Os elementos que se repetem mais.

# Loucura de Marquinhos - Decompor um inteiro

**Motivação**

Marquinhos está para ficar louco. Hermeneutico o desafiou a fazer um código que quebra inteiros em um vetor. Mas essa tarefa aparentemente simples está
acabando com os miolos de Marquinhos. Por favor, ajude Marquinhos a recuperar
sua paz de espírito fazendo esse código pra ele. Lembrando que a entrada deve
ser vários valores inteiros, e a saída um vetor com todos os inteiros da entrada. 

- I/O - Entrada (exemplo):
   - 12364
- I/O - Saída (exemplo):
   - 1 2 3 6 4

# Exército - Homens desconcentrados

**Motivação**

Os soldados formaram uma fila no quartel. Essa fila está representada por um vetor de inteiros. O 1 representa a mulher e o 0 o homem. Todo homem que está perto de uma mulher, está desconcentrado e não presta atenção nas ordens do capitão. A pergunta é: quantos homens estão concentrados?
Tente transformar em funções.

- I/O - Entradas:
   - 1º linha: um número com a quantidade de elementos do vetor (máx 30).
   - 2º linha: o vetor de inteiros.
- I/O - Saída:
   - A quantidade de homens concentrados.
 
# Jogo do Avesso V2

**Motivação**

Tem um chefe e os operários. Os operarios ficam em fila. O chefe diz o nome de um operario e os dois operários que estavam perto dele tem que trocar de posição. Se estavam em pé, ficam agachados. Suponha a seguinte configuração onde cada número representa uma pessoa.

[3 4 8 9 1 5 6]

O chefe grita "4", então o "3" e o "8" se agacham. O vetor fica assim:

[-3 4 -8 9 1 5 6]

Usando o sinal negativo para representar o agachado. Depois o chefe grita "9". O -8 e o 1 se alteram ficando assim:

[-3 4 8 9 -1 5 6]

O 8 volta ao normal e o 1 se agacha. Considere que nunca existem duas pessoas com o mesmo número no vetor. Se o chefe disser um número errado, ninguém deve se mexer.

- I/O - Entrada:
   - 1º linha: o tamanho N do vetor de operários (0 < N < 100) e a quantidade X de gritos do chefe (0 < X < 100).
   - 2º linha: o vetor de operários, cada elemento entre 0 e 100.
   - 3º linha: o vetor de gritos, cada elemento entre 0 e 100.
- I/O - Saída:
   - o novo vetor.

# Jogo do Avesso

**Motivação**

Tem um chefe e os operários. Os operarios ficam em fila. O chefe diz o nome de um operario e os dois operários que estavam perto dele tem que trocar de posição. Se estavam em pé, ficam agachados. Suponha a seguinte configuração onde cada número representa uma pessoa.

[3 4 8 9 1 5 6]

O chefe grita "4", então o "3" e o "8" se agacham. O vetor fica assim:

[-3 4 -8 9 1 5 6]

Usando o sinal negativo para representar o agachado. Depois o chefe grita "9". O -8 e o 1 se alteram ficando assim:

[-3 4 8 9 -1 5 6]

O 8 volta ao normal e o 1 se agacha. Considere que nunca existem duas pessoas com o mesmo número no vetor. Se o chefe disser um número errado, ninguém deve se mexer.

- I/O - Entrada:
   - 1º linha: a quantidade de casos de teste (cada caso de teste contém duas linhas).
   - 2º linha: linha 1: o tamanho do vetor de operários (n < 100) e o grito do chefe (0 < x < 100).
               linha 2: o vetor de operários, cada elemento entre 0 e 100.
- I/O - Saída:
   - o novo vetor.

# Maiores do que a média

**Motivação**

Leia 6 valores e calcule a média deles. Mostre a média e quantos valores lidos são maiores do que a média calculada.

- I/O - Entrada:
   - 6 valores.
- I/O - Saída:
   - média e contagem.

# Se fosse a mediana eu tinha passado!

**Motivação**

O filho tirou 5 notas durante o semestre: 6, 6, 7, 7.1, 7.2

"Meu filho, sua média em português foi 6.7. Você tá de recuperação."

"Mas, mamãe, a culpa é do colégio."

"Como assim, do colégio?"

"Se eles usassem a mediana ao invés da média eu tinha passado direto!"

OBS: NÃO use o método pronto de ordenar do PYTHON.
O cálculo da mediana consiste em descobrir qual o valor intermediário do vetor ORDENADO. No vetor v = {1, 2, 3}, por exemplo, a mediana é 2, pois este é o elemento de valor intermediário. Se a quantidade de elementos for par então a médiana é a media entre os dois elementos centrais. Assim, você deve ordenar o vetor antes de calcular a mediana.

- I/O - Entrada:
   - 1º linha: a quantidade de elementos do vetor.
   - 2º linha: os elementos em ponto flutuante de forma não ordenada.
- I/O - Saída:
   - o valor da mediana com até duas casas decimais.

# Mega Jokenpo!

**Motivação**

Rufus em sua evolução tartarugistica não se contenta com pouco. Descobriu um super jokenpo e deseja que você implemente em seu chip. Faça isso por Rufus.

NÃO faça na força BRUTA. Observe que cada elemento ganha dos 4 elementos a sua frente.

Ficou confuso?
- pedra martela fogo, esmaga tesoura, humano e esponja.
- fogo derrete tesoura , queima papel, humano e esponja.
- tesoura corta através do ar, papel , humano e esponja.
- humano limpa com esponja , escreve papel, respira ar , bebe água .
- esponja absorve papel, usa bolsas de ar, absorve a água, limpa arma.
- papel sopra ar, cobre pedra, flutua sobre a água, tem mais poder que arma.
- ar sopra fogo, corrói pedra, evapora a água , mancha a arma.
- água corrói pedra, apaga o fogo, enferruja a tesoura e arma.
- arma acerta pedra, fogo, tesoura e humano.

- I/O - Entrada:
   - texto em minúsculo e sem acentos contendo as opções dos dois jogadores.
- I/O - Saída:
   - empate, jog1 ou jog2.

# Mercantil V3

**Motivação**

Essa é a terceira versão do jogo do Mercantil. Pedro e João foram no Silvio Santos. O programa era aquele que o Silvio mostrava um produto do mercantil e a pessoa que chegasse mais próximo do preço real ganhava.

João e Pedro são concorrentes. O objetivo do seu programa é informar quem ganhou a disputa. Nessa versão, o primeiro jogador informa o preço e o segundo jogador informa maior ou menor. Quem vencer mais disputas ganha o jogo.

Se o valor do produto for igual ao chute, ganha o primeiro concorrente. Se ambos vencerem a mesma quantidade então acontece o empate. Se ambos tiverem igualmente próximos do preço então nenhum dos dois ganha a disputa.

- I/O - Entrada:
   - 1º linha: a quantidade de produtos (1 a 50).
   - 2º linha: o valor dos produtos (0.01 a 1000.0).
   - 3º linha: os chutes do primeiro jogador (em float).
   - 4º linha: as escolhas do segundo jogador (m para menor, M para maior).
- I/O - Saída:
   - empate, jog1 ou jog2.

# Organizando a fila do RU - Separar Pares e Ímpares

**Motivação**

Você ganhou uma bolsa de auxílio para organizar a fila do RU. Então teve uma brilhante ideia para organizar as filas. Ao invés de uma única fila você vai fazer uma para os professores e STAs (seu professor David Sena agradece) e uma pros alunos.

- I/O - Entrada:
   - 1º linha: a quantidade de pessoas na fila.
   - 2º linha: um vetor de inteiros, onde um número ímpar representa um aluno e um número par representa um servidor.
- I/O - Saída:
   - 1º linha: os números ímpares na ordem que aparecem na entrada.
   - 2º linha: os números pares na ordem que aparecem na entrada.

# Mário e o Assassins Creed - Parkour

**Motivação**

Thaiquovisqui da Silva está fazendo um joguinho com uma mistura de Super Mário e Assassins Creed.

Nele, o Mário anda em um cenário 2D, mas ao invés de pular na cabeça dos inimigos ele mata com uma chave de fenda no coração ou esmigalhando o crânio com uma chave inglesa.

Lembre-se que o Mário é encanador! Então isso faz todo sentido jogabilistico.

O problema é que o cenário não ficou legal e tem alguns locais ruins. Seja lugares altos demais que onde o Mário tem dificuldade de subir ou baixos demais que ele morre ao cair.

Mário só consegue pular até um bloco acima do nível atual, ou descer um bloco. Se a diferença entre os
níveis for maior que um bloco ele precisará fazer um movimento de parkour.

Dado um cenário, calcule quantos movimentos de parkour o Mário vai precisar para percorrer o cenário.

Um cenário é um vetor de números positivos onde o vetor representa a altura dos blocos.

O vetor 1, 1, 3, 3, 4, 6, 4, 2, 2, 1 seria como o seguinte cenário:

```
_____#____
_____#____
____###___
__#####___
__#######_
##########
1133464221
```

Nele, o Mário precisa de 4 movimentos de parkour.  
Do 1 para o 3, do 4 para o 6, do 6 para o 4, e do 4 para o 2.


Receba um vetor de inteiros e conte quantas vezes dois números consecutivos possuem diferença absoluta maior que 1.

- I/O - Entrada:
   - 1º linha: Quantidade de elementos do vetor (1 a 50).
   - 2º linha: Elementos do vetor.
- I/O - Saída:
   - Quantidade de movimentos de parkour.

# Soldados Pequenos e Grandes

**Motivação**

Major General Brigadeiro Pretinho quer separar os pequenos soldados dos grandes soldados. Depois de discutir com o Cabo Tigre qual o conceito de pequeno e grande eles chegaram em uma conclusão favorável. Primeiro precisão calcular a média de altura dos soldados.
Pequenos são todos menores que a média e grandes todos os que eram maiores que a média.

- I/O - Entrada:
   - O primeiro valor é um inteiro N (1 a 50) e define quantos soldados existem. Depois segue-se N valores floats correspondentes às alturas dos soldados.
- I/O - Saída:
   - A média da altura dos soldados com duas casas decimais. Para cada soldado, imprima 'P' se o mesmo tiver altura menor que a média, 'M' se for exatamente igual à média e 'G' se for maior que a média.

# As unhas de Luiza - Vetor para inteiro

**Motivação**

Luiza estava apaixonada. Mandou pintar em cada unha dos dedos das mãos o cpf do seu amor.
Pensava ela: "sozinhos esses números, não são nada, mas juntos são o número do meu xuxuzinho.

Faça um programa que deve transformar um vetor em um número inteiro e retornar esse valor inteiro.

Todos os elementos do vetor devem conter apenas um dígito.

- I/O - Entrada:
   - Um número que representa o tamanho do vetor e seus elementos, um por linha.
- I/O - Saída:
   - O valor inteiro resultado do programa.

# Zoo - Quantas espécies

**Motivação**

O dono do zoológico quer a lista de todas as espécies de animais que existem no zoológico. Para isso ele te deu uma lista de todos os animais. Ele quer que você faça um programa que retorne a quantidade de espécies diferentes. Considere que um número representa uma espécie.

Não use uma função de ordenar pronta.

- I/O - Entrada:
   - 1º linha: um número com a quantidade de elementos do vetor (1 a 50).
   - 2º linha: o vetor de inteiros.
- I/O - Saída:
   - a quantidade de espécies.

# Zoo - Entrando na Arca de Noé

**Motivação**

O dono do zoológico quer fazer uma grande arca e colocar os animais dentro. Acontece que os animais só podem entrar na arca aos pares. Um número representa uma espécie. Se esse número for positivo é um animal macho e se for um número negativo é um animal fêmea. Um casal precisa ter um macho e uma fêmea da mesma espécie.

- I/O - Entrada:
   - 1º linha: um número com a quantidade de elementos do vetor (até 50).
   - 2º linha: o vetor de inteiros.
- I/O - Saída:
   - a quantidade casais formados.

# Zoo - Um animal de cada tipo

**Motivação**

O dono do zoológico quer a lista de todas as espécies de animais que existem no zoológico. Para isso ele te deu uma lista de todos os animais. Ele quer que você faça um programa que retorne uma nova lista contendo apenas um animal de cada espécie.

Considere que um número representa uma espécie. Devolva um novo vetor, sem números repetidos e ordenado.

Não use uma função de ordenar pronta.

- I/O - Entrada:
   - 1º linha: um número com a quantidade de elementos do vetor (até 50).
   - 2º linha: o vetor de inteiros.
- I/O - Saída:
   - o novo vetor ordenado contendo um exemplar de cada elemento.

# End