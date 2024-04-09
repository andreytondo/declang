
# Guia de desenvolvimento declarativo em Angular utilizando RxJS

## 👋 Introdução

* ### Tópico 1: o que é programar declarativamente?

É uma forma de escrever a linguagem de maneira em que descrevemos os processos que queremos executar com os dados, de maneira que não precisamos nos preocupar com a lógica atrás destes processos.

O programador declara o que deseja alcançar, e as funções serão responsáveis por determinar a maneira de atingir esse objetivo. Isso permite que os programadores se concentrem mais nos problemas a serem resolvidos e menos na implementação detalhada de algoritmos.

* ### Tópico 2: vantagens e desvantagens

A programação declarativa é especialmente útil para lidar com problemas complexos, onde a abstração e a expressividade são fundamentais. Ela também pode ser mais concisa e legível em comparação com algoritmos mais imperativos.

## 🧐 Como faço para programar declarativamente?
Em Angular, podemos aproveitar os operadores do RxJS (Reactive Extensions for JavaScript) para programar de forma declarativa.
RxJS é uma biblioteca reativa que facilita a programação assíncrona usando Observables.
Para programar declarativamente em Angular com RxJS, podemos seguir estas etapas:

* ### Criar Observables
    Os Observables são a base da programação reativa em RxJS. Eles representam uma fonte de dados que pode ser observada.
    Podemos criar Observables a partir de eventos, promises, ou até mesmo de dados estáticos.
    ```ts
        const numbers$: Observable<number> = of(1, 2, 3, 4, 5);
    ```

* ### Encadear operadores
    Com os operadores do RxJS, podemos manipular os dados emitidos por um Observable de forma declarativa. Os operadores são
    funções de ordem superior que aceitam um Observable como entrada e retornam outro Observable. Podemos encadear vários operadores para criar pipelines de transformação de dados.
    ```ts
        return numbers$
        .pipe(
            filter(num => num % 2 === 0), // Filtra apenas os números pares
            map(num => num * num)          // Eleva ao quadrado cada número
        )
    ```

* ### Utilizar o gerenciamento de subscriptions do Angular
    Dentro dos templates do Angular, podemos utilizar os Observables para vincular diretamente os dados do componente à interface do usuário. Isso proporciona uma maneira poderosa e declarativa de lidar com a renderização e atualização dos dados na interface.O Angular gerencia automaticamente a assinatura e cancelamento dos Observables, garantindo que os dados sejam exibidos e atualizados de forma correta, mesmo em situações assíncronas.
    ```html
    <div *ngIf="numbers$ | async as numbers">
        <ul>
            <li *ngFor="let number of number">
            Número elevado ao quadrado: {{ number }}
            </li>
        </ul>
    </div>
    ```

## 🚀 Exemplos

* ### Múltiplos observeables simultâneos: [forkJoin](https://rxjs.dev/api/index/function/forkJoin)
    ```ts
    forkJoin(
        this.usuarioService.getUsuarioById(this.id),
        this.atendimentoService.getAtendimentosByUsuarioId(this.id)
    ).subscribe(([usuario, atendimentos]) => {
        this.usuario = usuario;
        this.atendimentos = atendimentos;
    });
    ```
Dessa forma é possível mapear as respostas de cada observable em forma de array.
<br> OBS: ele apenas emite os valores quando todos os observables finalizarem.

* ### Utilizando o valor da resposta de um observable em outro: [switchMap](https://rxjs.dev/api/operators/switchMap)
    ```ts
    this.usuarioService.getUsuarioById(this.id).pipe(
        switchMap(usuario => this.atendimentoService.getAtendimentosByPessoaId(usuario.pessoa.id))
    ).subscribe(atendimentos => this.atendimentos = atendimentos);
    ```
Com o switchMap é possível mapear o valor de um observable em outro.
Isso é útil quando precisamos do valor de um observable para fazer uma requisição em outro.

* ### Combinando observables diferentes no mesmo objeto: [zip](https://rxjs.dev/api/index/function/zip)
    ```ts
    const idade$ = of(10,11,27)
    const nome$ = of('João', 'Maria', 'José')
    const sobrenome$ = of('Silva', 'Santos', 'Oliveira')

    zip(idade$, nome$, sobrenome$)
    .pipe(
        map((([idade, nome, sobrenome])) => ({ idade, nome, sobrenome}))
    ).subscribe(x => console.log(x));

    // Saída: { idade: 10, nome: 'João', sobrenome: 'Silva' }
    //        { idade: 11, nome: 'Maria', sobrenome: 'Santos' }
    //        { idade: 27, nome: 'José', sobrenome: 'Oliveira' }
    ```
Com o zip é possível combinar observables diferentes em um mesmo objeto.
Ele emite os valores de cada observable na mesma ordem em que foram passados como argumento.

## 📝 Explore

* ### [RxJS Marbles](https://rxmarbles.com/)
    Uma ferramenta interativa para visualizar e entender os operadores do RxJS.

* ### [RxJS Playground](https://rxviz.com/)

* ### [Componente de exemplo](src/app/components/declarative/usuario/painel-detalhes-usuario.component.ts)
    Dentro deste projeto existe um componente de usuário utilizando RxJS para exemplificar o uso de observables e operadores.

## 📚 Recursos adicionais

* [Documentação oficial do RxJS](https://rxjs.dev/)

* [Guia de operadores oficial do RxJS](https://rxjs.dev/operator-decision-tree)