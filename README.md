# Single Object - Versão Beta

Uma maneira simples de criar elementos Html , através de Objetos Javascript.

##Pra quem foi feito.

Este plugin foi criado para trabalhar em conjunto com futuros estudos e plugins que irão ser criados.
Se você tabalha com objetos e quer criar elementos html apartir de objetos este pode ser um ponto de partida.

**OBS**:É necessário ter conhecimento basico quanto as tags do Html,não foi implementado validação quanto aos tipos de elementos.

##Como implementar

Para implementar basta baixar o arquivo js, copiar para seu projeto e referênciar na pagina de uso.

##Exemplos

Para utilizar é bem simples basta chamar a função  create do objeto sTag.

**Importante lembrar que a propriedade tag deve existir em seu objeto, pois é responsável pela criação do tipo do elemento.**
```
var seuObjeto ={id:"input",name:"input",tag:"input"}

var input = sTag.create(seuObjeto);

// <input id="input" name="input"/>
```

Caso queria criar um document fragmento .
```
var fragmento = sTag.createFrag();

// document.fragment
```
>Propriedades suportadas. 

1.id
2.name
3. class
4. value
5. text
6. type
7. href

**A propriedade tag é necessária é ela quem determina o tipo do elemento html.**


