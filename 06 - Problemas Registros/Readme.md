# Aluno aprovado ou reprovado

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Matricula": 1, "Disciplina": FUP, "Nota": 8.5}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores do dicionário (registro) de um aluno, lidos do usuário, e outra função que receba um dicionário (registro) de um aluno e imprima

"[Nome_Aluno] aprovado(a) em [Nome_Disciplina]" se o aluno passou por média (nota maior ou igual a 7) e

"[Nome_Aluno] reprovado(a) em [Nome_Disciplina]" caso contrário.

Seu programa deve então ler os dados de um aluno usando dicionário e fazer uso da função que determina se o aluno foi aprovado ou não, gerando o resultado correto.

- I/O - Entradas (exemplo):
   - 1º linha: Joao
   - 2º linha: 1
   - 3º linha: FUP
   - 4º linha: 8.5
- I/O - Saída (exemplo):
   - Joao aprovado(a) em FUP

# Aluno com a maior nota

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Matricula": 1, "Disciplina": FUP, "Nota": 8.5}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores de registro de aluno, lidos do usuário, e outra função que receba dois registros de aluno e imprima o nome do aluno com a maior nota e sua nota.

Seu programa deve então ler os valores dos registros dos dois alunos e fazer uso da função que imprime o nome do aluno e a maior nota. Caso os dois alunos possuam a mesma nota, deve-se imprimir o nome dos dois alunos separados pela conjunção "e".

- I/O - Entradas (exemplo):
   - 1º linha: Joao
   - 2º linha: 1
   - 3º linha: FUP
   - 4º linha: 10
   - 5º linha: Maria
   - 6º linha: 2
   - 7º linha: FUP
   - 8º linha: 8.5
- I/O - Saída (exemplo):
   - Joao , 10

# Aprovados

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Notas": [8.5,7,6]}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores do dicionário (registro) de um aluno e outra função que receba uma lista de dicionários (registros de aluno) e imprima apenas os dados (nome do aluno e média) dos alunos aprovados por média (média maior ou igual a 7). O programa deve ler a quantidade de alunos e preencher uma lista de alunos (dados informados pelo usuário). A média deve ser impressa com até duas casas decimais.

- I/O - Entrada (exemplo):
   - 1º linha: 3
   - 2º linha: Joao
   - 3º linha: 8.5
   - 4º linha: 7
   - 5º linha: 6
   - 6º linha: Carlos
   - 7º linha: 8
   - 8º linha: 5
   - 9º linha: 5
   - 10º linha: Fabio
   - 11º linha: 8
   - 12º linha: 8
   - 13º linha: 8
- I/O - Saída (exemplo):
   - 1º linha: Joao 7.17
   - 2º linha: Fabio 8.00

# Comparação de datas

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`data = {"Dia": \*\*, "Mes": \*\*, "Ano": \*\*\*\*}`

Usando a definição acima, crie um programa que leia duas datas (dicionários do tipo mostrado acima) e imprima "Iguais" se as duas datas são iguais, "Mais antiga" se a primeira data for mais antiga que a segunda e "Mais recente" se a primeira data for mais recente que a segunda. As datas serão passadas na ordem: dia, mês, ano.

- I/O - Entrada (exemplo):
   - 1º linha: 2
   - 2º linha: 8
   - 3º linha: 1990
   - 4º linha: 4
   - 5º linha: 5
   - 6º linha: 2000
- I/O - Saída (exemplo):
   - Mais antiga

# Datas iguais

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`data = {"Dia:" \*\*, "Mes:" \*\*, "Ano:" \*\*\*\*}`

Usando a definição acima, crie um programa que leia duas datas (dicionários do tipo mostrado acima) e imprima "Iguais" se as duas datas são iguais e "Diferentes" caso contrário. As datas serão passadas na ordem: dia, mês, ano.

- I/O - Entrada (exemplo):
   - 1º linha: 2
   - 2º linha: 8
   - 3º linha: 1990
   - 4º linha: 4
   - 5º linha: 5
   - 6º linha: 2000
- I/O - Saída (exemplo):
   - Diferentes

# Duelo

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`personagem = {"Vida:" \*\*\*, "Ataque:" \*\*\*}`

Usando a definição acima, crie um programa que leia os dados (vida e ataque) de dois personagens, representados por um dicionário do tipo mostrado acima, e implemente a função duelo:


A função duelo recebe como entrada dois dicionários, onde cada um deles representa um personagem. Ela deve retornar "Personagem 1" se o primeiro personagem venceu o duelo, "Personagem 2" se o segundo personagem venceu o duelo e "Empate" caso nenhum deles tenha vencido o duelo. O duelo consiste em uma sequência de rodadas onde em cada rodada o primeiro personagem ataca o segundo (tira-se da vida do 2o personagem o valor do ataque do 1o personagem) e o segundo ataca o primeiro (tira-se da vida do 1o personagem o valor do ataque do 2o personagem) ao mesmo tempo. O duelo acaba quando pelo menos um dos personagens fica com vida menor ou igual a 0.

- I/O - Entrada:
   - 1º linha: um número positivo com a quantidade de elementos do vetor (1 a 50).
   - 2º linha: o vetor de inteiros, já ordenado.
- I/O - Saída:
   - Os elementos que se repetem mais.

# Expressão

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`expressao = {"Num1": \*\*\*, "Num2": \*\*\*, "Operador": \*\*\*}`

Crie um programa que leia do usuário dois números reais e um operador do tipo char, preenchendo um dicionário do tipo expressão mostrado acima, e implemente uma função que receba um dicionário do tipo expressão e imprima o valor da expressão dada pelo número 1, operador e número 2.

- I/O - Entrada (exemplo):
   - 1º linha: 5
   - 2º linha: 5
   - 3º linha: +
- I/O - Saída (exemplo):
   - 10

# Impressão

**Motivação**

Considere o seguinte formato de dicionário (registro de aluno) que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Matricula": 1, "Disciplina": FUP, "Nota": 8.5}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores, lidos do usuário, para um registro de aluno e outra função que receba um registro de aluno e imprima todos os valores dos campos desse registro.

Seu programa deve então ler os valores do registro de um aluno e fazer uso da função de impressão para imprimir tais valores.


- I/O - Entradas (exemplo):
   - 1º linha: Joao
   - 2º linha: 1
   - 3º linha: FUP
   - 4º linha: 8.5
- I/O - Saída (exemplo):
   - Nome = Joao
   - Matricula = 1
   - Disciplina = FUP
   - Nota = 8.5
 
# Média das médias dos alunos

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Notas": [8.5, 7.6]}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores do dicionário (registro) de um aluno e outra função que receba uma lista de dicionários (registros de aluno) e imprima a média das médias desses alunos. O programa deve ler a quantidade de alunos e preencher uma lista de alunos (dados informados pelo usuário). O valor de saída deve ter até duas casas decimais.

- I/O - Entrada (exemplo):
   - 1º linha: 2
   - 2º linha: Joao
   - 3º linha: 8.5
   - 4º linha: 7
   - 5º linha: 6
   - 6º linha: Carlos
   - 7º linha: 8
   - 8º linha: 5
   - 9º linha: 5

- I/O - Saída (exemplo):
   - 6.58

# Média das notas de 2 alunos

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Matricula": 1, "Disciplina": FUP, "Nota": 8.5}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores do dicionário (registro) de um aluno e outra função que receba dois dicionários (registros) de aluno e retorne a média das notas dos dois alunos.

Seu programa deve então ler os valores dos registros dos dois alunos e fazer uso da função que retorna a média das notas.

- I/O - Entrada (exemplo):
   1º linha: Joao
   2º linha: 1
   3º linha: FUP
   4º linha: 10
   5º linha: Maria
   6º linha: 2
   7º linha: FUP
   8º linha: 8

- I/O - Saída (exemplo):
   - Média = 9

# Nova média

**Motivação**

Considere o seguinte formato de dicionário que deve ser usado em seu programa:

`registro_aluno = {"Nome": Joao, "Notas": [8.5, 7.6]}`

Usando a definição acima, crie um programa que possua uma função de leitura dos valores do dicionário (registro) de um aluno e outra função que receba um dicionário (registro de aluno) e imprima a média das notas desse aluno. O valor de saída deve ter até duas casas decimais.

- I/O - Entrada (exemplo):
   1º linha: Joao
   2º linha: 8.5
   3º linha: 7
   4º linha: 6

- I/O - Saída (exemplo):
   - 7.2

# Operações

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`expressao = {"Soma": \*\*\*, "Subtracao": \*\*\*, "Divisao": \*\*\*, "Multiplicacao": \*\*\*}`

Crie um programa que leia do usuário dois números reais e calcule o valor de cada uma das operações do dicionário, preenchendo-o. Por fim, imprima os resultados na ordem: soma, subtração, divisão e multiplicação.

- I/O - Entrada (exemplo):
   - 1º linha: 5
   - 2º linha: 2
- I/O - Saída (exemplo):
   - 7 3 2.5 10

# Provas ponderadas

**Motivação**

Considere o seguinte formato de dicionário que deve ser usada em seu programa:

`prova = {"Nota: \*\*\*, "Peso": \*\*\*}`

Usando a definição acima, crie um programa que leia uma lista de provas e seus respectivos pesos (deve-se usar uma lista de dicionários do tipo mostrado acima) e imprima a média ponderada dessas notas. O valor impresso deve ter até duas casas decimais.

- I/O - Entrada:
   - 1º linha: quantidade de provas
   - 2º linha: vetor de notas
   - 3º linha: vetor dos pesos das notas

- I/O - Saída:
   - média das notas

# Quantos estão dentro?

**Motivação**

Considere as seguintes structs que devem ser usadas em seu programa:

```struct Ponto{
	float x;
	float y;
};
struct Circulo{
	Ponto centro;
	float raio;
};```
Implemente uma função que receba um Ponto e um Circulo e diga se o Ponto está ou não dentro do Circulo.

*Considere um Ponto dentro de um Circulo se a distância entre o Ponto e o centro do Circulo for menor ou igual ao raio do Circulo.*

Implemente uma função que receba um vetor de Pontos e um Circulo e retorne a quantidade de pontos que estão dentro do Circulo.

Faça um programa que leia N Pontos e um Circulo e, usando a função acima, imprima a quantidade de pontos que estão dentro do Circulo lido.

- I/O - Entrada:
   - 1º linha: a quantidade N de pontos.
   - 2º linha: coordenada x e coordenada y do 1o ponto.
   ...
   (N+1)-ésima linha: coordenadas x e y do N-ésimo ponto.
   (N+2)-ésima linha: coordenadas x e y do centro do círculo e raio do círculo.

- I/O - Saída:
   - Quantidade de pontos que estão dentro do circulo.

# End