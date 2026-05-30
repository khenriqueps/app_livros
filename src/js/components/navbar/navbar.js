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

    export default navbar;