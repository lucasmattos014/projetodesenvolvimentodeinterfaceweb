// Aqui é utilizado um Fetch API para fazer uma requisição na API Json do wordpess
const ListarExemes = () => {
    return fetch(`${urlExames}`)
        .then(resposta => {
            return resposta.json()
        })
        .then(json => {
            return json
        })
}
const verificaSttus = () => {
    ListarExemes.done((e, status, code) => {
        code.status
    })
}

// Aqui eu seleciono a div da qual eu vou renderizar os resultados
const divExames = document.querySelector("#exames");

// Aqui eu crio uma função para definir o que e como cada coisa será renderizada, passando os parametros que eu preciso.
const exibeExame = (title, link) => {

    //Aqui eu crui uma div para cada elemento renderizado
    const linha = document.createElement(`div`);

    //Aqui eu adiciono uma classe dp bootstrap
    linha.classList.add("col-sm-4");

    //Aqui eu altero o estilo da classe adicionada
    linha.style.padding = "0px";

    //Aqui é definido como o conteudo será mostrado no HTML
    const conteudo = `
     <div class="col-sm-12 center" data-div>
            <h3>${title}</h3>
            <a href="${link}" target="_blank"><button>Agendar</button></a>
         
    </div>`;
    //Aqui eu insiro o conteudo dentro do elemento(DIV) inicalmente criada
    linha.innerHTML = conteudo;

    // Aqui eu difino o que a função vai retorar, muito inportante fazer isso
    return linha;
};

const exibeNada = () => {


    const linha = document.createElement(`div`);
    linha.classList.add("col-sm-12");
    linha.style.padding = "0px";
    const conteudo = `
     <div class="col-sm-12 center" data-div>
            <h3>Opa, parece que você esqueceu de digitar o que iria buscar!</h3>
         
    </div>`;
    linha.innerHTML = conteudo;

    return linha;
};

const exibeNenhum = (corresponde) => {


    const linha = document.createElement(`div`);
    linha.classList.add("col-sm-12");
    linha.style.padding = "0px";
    const conteudo = `
      <div class="col-sm-12 center" data-div>
             <h3>Parece que não encontramos nenhum resultado para <b>${corresponde}</b>, por favor tente novamente!</h3>
          
     </div>`;
    linha.innerHTML = conteudo;

    return linha;
};

// Essa é a função responsavel por fazer todas as outras funcionarem
$('#Pesquisar').click(function() {

    // Aqui eu faço uma verificação, se algum elemento antes renderizado ainda existir na pagina, ele será removido quando ouver uma nova busca
    if ($('[data-div]').length > 0) {
        $('[data-div]').remove(0)
    }

    // Aqui eu capturo o que esta escrito no input de busca
    var nomeFiltro = $('#filtro-nome').val().toLowerCase();

    if (nomeFiltro.length < 1) {
        divExames.appendChild(

            //Aqui eu renderizo esse campo caso o usuario perquiso por nada
            exibeNada()
        )
    } else {

        // Aqui eu chamo a Fetch Api utilizando um then para resolver a promise

        ListarExemes().then(exibe => {

            // Aqui eu utilizo o parametro passado pelo than em um ForEach
            exibe.forEach(indice => {

                // Aqui eu verifico se o valor inserido no input condiz com algum exame
                var corresponde = indice.title.rendered.toLowerCase().indexOf(nomeFiltro) >= 0;
                var correspondeTexto = indice.content.rendered.toLowerCase().indexOf(nomeFiltro) >= 0;
                console.log(corresponde)
                console.log(correspondeTexto)
                if (corresponde || correspondeTexto) {

                    // Aqui eu insiro o valor no HTML atravez de um append
                    divExames.appendChild(

                        // Aqui eu passo os parematros para a função exibeExame
                        exibeExame(indice.title.rendered, indice.link)
                    )
                }

            })
        })
    }
})