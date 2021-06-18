const API_KEY = '6f9fd6238bbd8831585843f7dc17ad25';

function montaCard() {
    var divCards = document.getElementById('cats')
    var texto = '';
    moment.locale("pt-br")

    var dados = JSON.parse(this.responseText);

    dados.results.slice(-8).forEach(film => {

        texto = texto + `
  
    
                <div class="col-sm-3 col-lg-3 12">
                <div class="chart col-sm-12 col-lg-12 12 id="graph" data-percent="${Math.round( (film.vote_average * 100) / 10)}"></div>
                <div class="destqs">
                    <img src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="${film.title}" class="image">
                    <div class="overlay">
                        <div class="text">
                            <h2>${film.title}</h2>
                            <p class="card-text avaliacaoSeries avaliacaoBusca"><i class="far fa-calendar-alt"></i>: ${moment(film.release_date).format('LL') }</p>
                            <p class="card-text"></p>
                            <a href="filmes.html?${film.id}" class="btn btn-outline-dark">Mais Informações...</a>
                            
                    </div>
                    </div>
                </div>
            </div>

            `;
    })
    divCards.innerHTML = texto;

    for (i = 0; i < 8; i++) {
        var el = document.getElementsByClassName('chart')[i] // get canvas

        var options = {
            percent: el.getAttribute('data-percent') || 25,
            size: el.getAttribute('data-size') || 220,
            lineWidth: el.getAttribute('data-line') || 15,
            rotate: el.getAttribute('data-rotate') || 0
        }
        var canvas = document.createElement('canvas');
        var span = document.createElement('span');
        span.textContent = options.percent + '%';

        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2);
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round';
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };
        drawCircle('#4FE2DE', options.lineWidth, 100 / 100);
        drawCircle('#4FE2DE', options.lineWidth, options.percent / 100);
    }



}

function cardInicial() {
    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021`);
    xhr.send();
}

function pesquisaAcao() {

    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021&with_genres=28`);
    xhr.send();
}

function pesquisaComedia() {

    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021&with_genres=35`);
    xhr.send();
}

function pesquisaTerror() {
    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021&with_genres=27`);
    xhr.send();
}

function pesquisaFic() {

    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021&with_genres=878`);
    xhr.send();
}

function pesquisaDrama() {

    var xhr = new XMLHttpRequest();
    xhr.onload = montaCard;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&sort_by=popularity.desc&year=2021&with_genres=18`);
    xhr.send();
}

window.addEventListener('load', cardInicial);
document.getElementById('acao').addEventListener('click', pesquisaAcao);
document.getElementById('comedia').addEventListener('click', pesquisaComedia);
document.getElementById('terror').addEventListener('click', pesquisaTerror);
document.getElementById('fic').addEventListener('click', pesquisaFic);
document.getElementById('drama').addEventListener('click', pesquisaDrama);