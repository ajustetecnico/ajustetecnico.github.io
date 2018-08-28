---
layout: post
title: Detecção de assinaturas em listas de presenças - Parte 1
date: 2018-08-21 08:44:21
author: Bruno Teonácio
summary: Parte 1 do algoritmo de detecção de assinaturas em listas de presenças
categories: jekyll pdi visao_computacional opencv zbar qrcode assinaturas
tags:
 - jekyll
 - pdi
 - visao_computacional
 - opencv
 - zbar
 - qrcode
 - assinaturas
---
Olá,

Nesse post iremos iniciar uma discussão acerca de um trabalho
desenvolvido durante nosso curso de graduação na UFRN.

Trata-se de um algoritmo de detecção de assinaturas em listas de
presenças, muito utilizadas pelos professores para registrar para a
presença dos alunos em sala de aula.

<!--more-->

## Motivações

Existem diversas maneiras de obter as presenças dos alunos em uma sala
de aula. O registro pode ser feito pelas assinatura dos alunos em uma
lista de presença, preenchendo um formulário impresso, também
conhecida como "chamada" (que também pode ser feita via web), por
reconhecimento facial, detecção via ponto eletrônico. As
possibilidades são muitas...

Focando no método pelas assinaturas dos alunos, é um método bastante
utilizado em diversas instituições de ensino superior pelo Brasil
(como na UFRN), onde é passado uma lista de assinaturas para os alunos
preencherem.

O problema de processar as listas surge quando é necessário salvar
essas assinaturas em algum outro lugar (como na Web), pois demanda um
tempo considerável para o docente ter que conferir folha a folha,
assinatura a assinatura, para salvá-las no sistema acadêmico. A
existência de um mecanismo que torne facilite esse processo para o
docente foi o motivador para o trabalho. E desenvolvê-lo usando
técnicas de visão artificial foi o grande desafio.

A foto abaixo ilustra um exemplo de lista de presença. Provavelmente,
a maioria dos leitores já se deparou com uma.

[Lista de presença](/images/detecao-assinaturas/listapresenca.jpg)

Processar uma lista como essa esbarra em uma série de dificuldades
técnicas que algoritmos simples não resolvem o problema com
facilidade. 

Esse post visa apresentar as motivações para um algoritmo de
reconhecimento automático dessas assinaturas utilizando de ferramentas
como [OpenCV](http://www.opencv.org), uma biblioteca multi-linguagem
para algoritmos em Visão Computacional) e QR codes, código de barras
bidimensional bastante popular.

== Um modelo adaptado para a lista de assinaturas

Abaixo segue um link para o modelo de lista de assinaturas sobre o
qual o algoritmo foi construido: [Link para o
modelo](https://github.com/teonacio/GIT_lista_de_presenca/blob/master/_pdf/qrnovo.pdf)

Porque adaptar os modelos tradicionais? Para facilitar a tarefa do próprio algoritmo usando QR codes. Os códigos estão lá para ajudar no processo de 

<h1>QR Codes e ZBar</h1>
Acredito que vocês já devem estar familiarizados com QR codes, certo? De qualquer forma, segue abaixo um modelo de QR code:
![Exemplo de QR code]({{ "/assets/images/qrcode-example.png" / absolute_url}})

Apesar dos círculos vermelhos estarem exagerados - :) - o intuito é explicar que, utilizando a biblioteca ZBar (biblioteca para detecção de QR codes e barcodes em geral), conseguimos recuperar não apenas o conteúdo do QR code scaneado, mas também as posições dos pixels extremos de cada QR code.
<br><br>
Essa informação é muito útil, pois ao scanear o modelo, recuperamos as posições dos extremos do sub-retângulo com as assinaturas, utilizando apenas as posições dos extremos dos quatro QR codes do modelo. Ou seja: Todo o resto do modelo (espaços em branco) não interferem no algoritmo, e podem ser utilizados para inserir informações acerca da instuição (logotipo, nome) e da turma (disciplina, turno, professor).
<br><br>
No próximo post, irei explicar como, a partir do subretângulo de assinaturas, separamos apenas as assinaturas (excluimos os nomes dos alunos, que para a detecção não interferem no resultado).

Até lá!