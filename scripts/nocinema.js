var API_KEY = '6f9fd6238bbd8831585843f7dc17ad25';
var genero;


function defineGenero() {
    genero = JSON.parse(this.responseText);
}

function buscaGenero() {
    var xhr = new XMLHttpRequest();
    xhr.onload = defineGenero;
    xhr.open('GET', `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

function montaCards() {
    var divCards = document.getElementById('cinema');
    var dados = JSON.parse(this.responseText);
    var texto = '';
    var gen;
    dados.results.forEach(film => {


        genero.genres.forEach(generos => {
            var id = generos.id
            if (id == film.genre_ids[0]) {
                gen = generos.name
            }
        })


        texto = texto + `

        <div class="col-sm-3 col-lg-3 12">
        <div class="chart col-sm-12 col-lg-12 12 id="graph" data-percent="${Math.round( (film.vote_average * 100) / 10)}"></div>
        <div class="destqs">
            <img src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="${film.title}" class="image">
            <div class="overlay">
                <div class="text">
                    <h2>${film.title}</h2>
                    <p class="card-text avaliacaoSeries avaliacaoBusca"><i class="fas fa-star"></i>: ${film.vote_average}/10</p>
                    <p class="card-text">Genero: ${gen}</p>
                    <a href="filmes.html?${film.id}" class="btn btn-outline-dark">Mais Informações...</a>
                </div>
            </div>
        </div>
    </div>
        `
    });
    divCards.innerHTML = texto;


    for (i = 0; i < dados.results.length; i++) {
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


function pesquisaCards() {
    var xhr = new XMLHttpRequest();
    xhr.onload = montaCards;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR`);
    xhr.send();
}

function goBack() {
    window.history.back()
}



window.addEventListener('load', buscaGenero);
window.addEventListener('load', pesquisaCards);
document.getElementById('voltar').addEventListener('click', goBack);
document.getElementById('voltar1').addEventListener('click', goBack);