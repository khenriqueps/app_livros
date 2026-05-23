const navbar = document.getElementById ('navbar');
        
navbar.innerHTML = `    <nav class="bem-navbar">
        <a href="#" class="bem-navbar__brand">Kaioba</a>
        <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
        <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
        <ul class="bem-navbar__menu">
            <li class="bem-navbar__item">
                <a href="#inicio" class="bem-navbar__link bem-navbar__link--active">iniciar</a>
            </li>
            <li class="bem-navbar__item">
                <a href="#sobre" class="bem-navbar__link">sobre</a>
            </li>
            <li class="bem-navbar__item">
                <a href="#servico" class="bem-navbar__link">Serviços</a>
            </li>
            <li class="bem-navbar__item">
                <a href="#contato" class="bem-navbar__link">Contato</a>
            </li>
        </ul>
    </nav>`


const app = document.getElementById('app');
// app.textContent = '<h1> Olá mundo </h1>'

const home = `<h1> Esta é a pagina inicial </h1>
<P>Bem vindo ao meu site</p>
`

const sobre = `<h1> Esta é pagina sobre</h1> 
<p> Este site é um exemplo de SPA usando JavaScript puro</p>`

const contato = `<h1> Esta é a pagina de contato </h1>
<p> Entre em contato conosco pelo email:</p>`

const servico = `<h1> Esta é a pagina de serviço </h1>
<p> conheça nossos serviços</p>:`

window.addEventListener ("hashchange" , () =>{
const rota = window.location.hash;
switch (rota){
    case '#inicio':
        app.innerHTML = home;
    break;
    case '#sobre':
        app.innerHTML = sobre;
    break;
    case '#contato':
        app.innerHTML = contato;
    break;
    case '#servico':
        app.innerHTML = servico;
    break;
    default:
        app.innerHTML = `<h1> Página não encontrada </h1>`;
}

})


app.innerHTML = '<h1> Bem vindos! </h1>';
