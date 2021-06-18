const API_KEY = '6f9fd6238bbd8831585843f7dc17ad25';


function montaResultado() {
    let divTela = document.getElementById('main')
    let titlePage = document.getElementById('tituloPagina')
    let titleBusca = document.getElementById('tituloBusca')
    let texto = '';
    moment.locale("pt-br")
    let dados = JSON.parse(this.responseText);
    dados.results.forEach(e => {


        let filme = e;
        let tipo = filme.media_type;
        if (tipo == 'tv') { tipo = 'Série' }
        if (tipo == 'movie') { tipo = 'Filme' }

        texto = texto + `
 
            <div class="col-sm-12 col-lg-12 12 flex resultados" style="padding:0px">
            <div class="col-sm-2 col-lg-2 12" style="padding:0px">
                    <img src="https://image.tmdb.org/t/p/original${filme.poster_path || filme.profile_path}" alt="">
                    </div>
                    <div class="col-sm-10 col-lg-10 12">
                        <h2 >
                            ${filme.title || filme.name}
                        </h2>
                        <p> ${tipo =! undefined ? tipo : 'Sem informação'}</p>
                        <p>
                            ${filme.overview != undefined ? filme.overview.substr(0,222) : 'Sem informação'}${ filme.overview != undefined ? filme.overview.length > 222 ? '...' : '' : ''}
                        </p>
                       
                        <p class="avaliacaoBusca">
                            <i class="fas fa-star"></i> ${filme.vote_average != undefined ? filme.vote_average : 'Sem Infomração'}/10
                        </p>
                
                        <p class="dataBusca">Lançamento: ${moment(filme.release_date || filme.first_air_date).format('LL')}</p>
                        <a href="https://www.themoviedb.org/${filme.media_type}/${filme.id}" 
                        target="blank">Mais informações...</a>

                </div>
            </div>

        `
    });
    let titulo = document.getElementById('txtBusca').value;
    divTela.innerHTML = texto;
    titlePage.innerHTML = `Resultado para "${titulo}" -  FD Movies `
    titleBusca.innerHTML = `<h2>Resultado para "${titulo}":<h2> `
}

function pesquisa() {
    //alert('Não fiz cagada');
    let query = document.getElementById('txtBusca').value;

    if (query != '') {
        let xhr = new XMLHttpRequest();
        xhr.onload = montaResultado;
        xhr.open('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1&include_adult=false&region=BR`);
        xhr.send();
    }
}

function goBack() {
    window.history.back()
}


document.getElementById('btnBusca').addEventListener('click', pesquisa)