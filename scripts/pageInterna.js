let queryString = window.location.search.replace('?', "");

function carregaConteudo() {
    let pagina = document.getElementById('pageTitle');
    let fundo = document.getElementById('fundo');
    let conteudo = document.getElementById('principal');
    let dados = JSON.parse(this.responseText);
    moment.locale("pt-br")
    let generos = '';


    dados.genres.forEach(genero => {
        generos = generos + `${genero.name}, `
    });
    pagina.innerHTML = `${dados.title} -  FD Movie`



    fundo.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${dados.backdrop_path}')`

    conteudo.innerHTML = `
    <button onClick="goBack()" id="voltar1" class="voltar" role="button" aria-pressed="true">
    voltar</button>
    <div class="col-12 col-lg-4" style="padding: 0px!important">
        <img src="https://image.tmdb.org/t/p/original${dados.poster_path}" alt="">
    </div>
    <div class="col-12 col-lg-8">
        <h1>${dados.title}</h1>
        <h3>Sinopse:</h3>
        <p class="sinopse">${dados.overview}</p>
        <p class="nota">
            Avaliação: <i class="fas fa-star"></i>${dados.vote_average}/10
        </p>
        <p class="gen" style="margin-bottom: 0;"><b>Gêneros</b>:  ${generos}</p>
        <p class="data"> <b>Lançamento</b>: ${moment(dados.release_date).format('LL') }  </p>
        <div class="col-12">

    
                <a href="${dados.homepage}" target="blank">Site Oficial</a>

                <a href="https://www.imdb.com/title/${dados.imdb_id}/" target="blank" >Pagina do IMDb</a>
        

        </div>

    </div>
    `

}

function pesquisaFilme() {
    let xhr = new XMLHttpRequest();
    xhr.onload = carregaConteudo;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${queryString}?api_key=eb55d91f7d5bec90c9886dbc1c9d7f1a&language=pt-BR`);
    xhr.send();
}

function goBack() {
    window.history.back()
}

window.addEventListener('load', pesquisaFilme)