# Blackjack 21!

**Motivação**

Faça um programa que conte o valor de uma mão de blackjack.
No blackjack, o jogador vai pedindo cartas com o objetivo de atingir o maior valor sem ultrapassar 21.
O programa deve receber um conjunto de cartas e calcular o valor das cartas usando as seguintes regras:
   -K, Q e J valem 10 pontos.
	-Ás vale 11 pontos.
      -Se a soma de pontos for maior que 21, o Ás passa a valer 1 ponto.
     	(tentando evitar que a mão ultrapasse os 21 e o jogador perca)
	-As outras cartas valem seu próprio valor.
Ás, J, Q e K são representados respectivamente por 1, 11, 12 e 13.

- I/O - Entradas:
   - O 1º número corresponde à quantidade de cartas e é seguida pelo conjunto de cartas.
- I/O - Saídas:
   - Valor total da mão do blackjack.

# Calça Zezé de Camargo

**Motivação**

Valdemiro começou a malhar e contaminado pela febre da exposição
agora só quer andar de blusa apertada e calça jeans Zezé de Camargo.
E quem diz que ele esquece o pau de self?
Faça um programa que ajude Valdemiro a achar sua camisa mais apertada.

- I/O - Entradas:
   - 5 valores inteiros (entre 1 e 30), um por linha.
- I/O - Saídas:
   - O menor valor inteiro.

# Conta D'agua

**Motivação**

A empresa local de abastecimento de água, a Saneamento Básico da Cidade (SBC), está promovendo uma campanha de conservação de água, distribuindo cartilhas e promovendo ações demonstrando a importância da água para a vida e para o meio ambiente.
Para incentivar mais ainda a economia de água, a SBC alterou os preços de seu fornecimento de forma que, proporcionalmente, aqueles clientes que consumirem menos água paguem menos pelo metro cúbico. Todo cliente paga mensalmente uma assinatura de R$ 7, que inclui uma franquia de 10 m³ de água. Isto é, para qualquer consumo entre 0 e 10 m³ , o consumidor paga a mesma quantia de R$ 7 reais (note que o valor da assinatura deve ser pago mesmo que o consumidor não tenha consumido água).
Acima de 10 m³ cada metro cúbico subsequente tem um valor diferente, dependendo da faixa de consumo. A SBC cobra apenas por quantidades inteiras de metros cúbicos consumidos. A tabela abaixo especifica o preço por metro cúbico para cada faixa de consumo:

Faixa de consumo (m³) | Preço (m³)
----------------------|----------------------
até 10                | incluído na franquia
11 a 30               | R$ 1
31 a 100              | R$ 2
101 em diante         | R$ 5

Assim, por exemplo, se o consumo foi de 120 m³ , o valor da conta é:
7 reais da assinatura básica;
20 reais pelo consumo no intervalo 11 - 30 m³;
140 reais pelo consumo no intervalo 31 - 100 m³;
100 reais pelo consumo no intervalo 101 - 120 m³.
 
Logo o valor total da conta de água é R$ 267.

- I/O - Entradas (exemplo):
   - 120
- I/O - Saídas (exemplo):
   - R$ 267

# Conta Dígitos

**Motivação**

Joãozinho passou o dia visualizando os seus contatos no celular.
Logo ele decidiu fazer um programa que calcula a quantidade de vezes que um determinado dígito aparece em um número de contato.
Após passar uma semana tentando ele repassou esse problema para você.
 
Receba dois inteiros do usuário, o primeiro sendo o dígito que se quer saber quantas vezes aparece e o segundo sendo o número do contato.

- I/O - Entradas:
   - 1
   - 99176810
- I/O - Saídas:
   - 2

OBS: Não use string, use laço e operações de divisão e resto (%) para completar essa questão.

# Introdução a estruturas de repetição

**Motivação**

Mostre o seguinte texto:
 
"
1) Vou estudar FUP todos os dias!
2) Vou estudar FUP todos os dias!
3) Vou estudar FUP todos os dias!
4) Vou estudar FUP todos os dias!
5) Vou estudar FUP todos os dias!
"
 
Leia um valor inteiro do usuário para saber quantas vezes a frase será repetida!

# Joelison Fernandes - Soma do maior e menor!

**Motivação**

A estória curiosa do brasileiro Joelison Fernandes da Silva está circulando o mundo todo. O fato é que ele é simplesmente o homem mais alto do país, com 2,23 m de altura! E depois de uma vida cheia de bullying e dificuldades, agora está feliz por ter encontrado sua alma gêmea, uma mulher de apenas 1,52 m.
Que estória, hein?

Escreva um programa que receba 5 valores e que mostre como saída a soma do maior e do menor valor lido.

- I/O - Entradas (exemplo):
   - 3
   - 2
   - 1
   - 4 
   - 2

- I/O - Saídas (exemplo):
   - 5

# Mais que 5 - Somatório V1!

**Motivação**

Some todos os números inteiros positivos de A até B.

- I/O - Entradas:
   - Dois números inteiros A e B, com B sendo maior que A.

- I/O - Saídas:
   - A soma de todos os números de A até B, inclusive.

# Média condicionada (lendo até negativo)

**Motivação**

Faça um programa que leia valores inteiros do usuário até que seja inserido um valor negativo (critério de parada).
Imprima a média apenas dos valores positivos e ímpares lidos.

- I/O - Entradas (exemplo):
   - 13
   - 8
   - 7
   - 6
   - -3

- I/O - Saídas (exemplo):
   - 10
 
# Média Simples! (uma entrada por linha)

**Motivação**

O seu professor de FUP está curioso para saber a média das suas notas.
A média é a soma de todos os valores dividida pela quantidade de valores.
Para calcular a soma você precisa usar uma variável para acumular cada valor lido.

- I/O - Entradas:
   - Quantidade de valores a serem lidos.
   - Os valores (reais/float) a serem lidos (uma entrada por linha).

- I/O - Saídas (exemplo):
   - O valor da média (duas casas decimais).

# Quantos Ultrons você vê - Contar Elemento (uma entrada por linha)

**Motivação**

Na saga dos Vingadores, o Ultron é um inimigo capaz de fazer cópias de si mesmo.
A pergunta aqui é quantos Ultrons você está vendo.

- I/O - Entradas:
   - X, número (apenas um dígito) representando o Ultron procurado.
   - N, quantidade de inimigos a serem lidos.
   - Os inimigos a serem lidos e comparados com o Ultron procurado (uma entrada por linha).

- I/O - Saídas:
   - A quantidade de vezes que o Ultron aparece dentre os valores lidos.

# Revolta em Portugal (uma entrada por linha)

**Motivação**

Um grupo de portugueses planejava fazer uma revolução armada.
"Pois, pois, Manoel, como pretendes tomar de assalto a praça?"
"Ora bolas, Joaquim, estamos nós a chegar por lá. Vamos estar a retirar nossas espadas de nossas bainhas e espada-lo-emos todos!"
"Ótima ideia. Vamos pois, ora bolas!"

Verifique se o grupo de Manoel e Joaquim conseguirá vencer essa batalha.
Dados um conjunto de números, os números ímpares representam os soldados
e os números pares representam os rebeldes infiltrados.
Some as forças e descubra qual dos dois grupos é mais forte.

- I/O - Entradas:
   - 1º linha: quantidade de números (forças das pessoas) a serem lidos.
   - 2º linha: conjunto de números.

- I/O - Saídas:
   - "soldados" se as forças dos soldados (ímpares) somadas são mais fortes.
   - "rebeldes" se as forças dos rebeldes (pares) somadas são mais fortes.
   - "empate" se ambas forças são iguais e todos morrerão.

# Short Rosa do Hulk - Contar Condicional (uma entrada por linha)

**Motivação**

Bruce Banner está descontente com suas calças jeans que ficam muito apertadas e rasgam quando ele vira o gigante Hulk.
Então, como cientista, ele está testando novos tecidos de laicra rosa ultra macias para que não rasguem (e nem firam sua pele verde delicada :).

- I/O - Entradas:
   - 1º linha: X, número representando o cóis do Hulk, e
               N, quantidade de calças a serem lidas.
   - 2º linha: Calças a serem lidas, onde cada valor representa o limite de esticamento em que o tecido começa a rasgar.

- I/O - Saídas:
   - A quantidade de calças lidas que não rasgariam no Hulk (Conte quantas calças são MAIORES do que o cóis do Hulk).

# Somatório % 3

**Motivação**

Marilurdes tem muitos muitos pares de sapatos. Só que vários deles ela compartilha com as irmãs Arilúcia e Barisilene. Quantos pares de sapato são divisíveis pelas 3 (Marilurdes, Arilúcia e Barisilene)?
Some todos os números inteiros pares que são divisíveis por 3 que estão entre A e B, inclusive.

- I/O - Entradas:
   - Dois números inteiros A e B, sendo B maior que A.

- I/O - Saídas:
   - A soma de todos os números pares divisíveis por 3.

# Somatório % X

**Motivação**

Some todos os números inteiros pares que são divisíveis por 3 e por X que estão entre A e B, inclusive.

- I/O - Entradas:
   - Três números inteiros A, B e X, sendo B maior que A.

- I/O - Saídas:
   - A soma de todos os números pares divisíveis por 3 e por X.

# Spok Palíndromo

**Motivação**

A bordo da Enterprise, Spok recebeu a missão de explorar novos planetas. Cada planeta tem um identificador (ID) único. Como o combustível da nave está acabando, Spok decidiu explorar apenas planetas que possuem ID palíndromo. Então ele pediu para você fazer um programa que recebe um inteiro referente ao ID de um planeta e que retorna true (1) se o ID é palíndromo e false (0) caso contrário.

Faça essa questão sem usar vetores ou strings.
 
Obs.: Um número é palíndromo quando o seu inverso é igual a ele mesmo.
Ex1.: o inverso de 1243212 é 2123421.
Ex2.: 51215 é palíndromo, pois seu inverso é 51215.

- I/O - Entradas (exemplo):
   - 121

- I/O - Saídas (exemplo):
   - 1

# Tazo mais repetido (uma entrada por linha)

**Motivação**

Elvis Presley Da Silva tem uma coleção de tazos numerados. Ele colocou todos em ordem numérica, mas está na dúvida de qual tazo ele tem mais vezes repetido. Faça um código que ajude Elvis a saber o número do tazo que se repete mais. Se dois números de tazo tiverem as mesmas quantidades, imprima o menor número.

- I/O - Entradas:
   - 1º linha: quantidade de tazos.
   - 2º linha: o conjunto de tazos (ordenado).

- I/O - Saídas:
   - O elemento que se repete mais

# Zero é par - Somatório de Pares!

**Motivação**

"Pai, a tia falou que na arca de noé os animais entravam aos pares. O que é pares papai?"
"Pares são números que formam um casalzinho. Tipo 2 passarinhos. Mas também vale pra vários pares tipo 4, 6, 8, 10, etc."
"Papai, e se não tiver nenhum passarinho pra botar na arca, 0 é par?"
Descubra em [http://www.profcardy.com/cardicas/tirateima.php?id=1]

Some todos os números inteiros pares que estão entre A e B, inclusive.

- I/O - Entradas (exemplo):
   - Dois números inteiros A e B, sendo B maior que A.

- I/O - Saídas:
   - A soma de todos os números pares.

# End