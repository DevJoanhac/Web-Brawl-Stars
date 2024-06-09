document.write(`
<nav class="main-nav">
    <div class="logo-nav-container">
        <div><a href="https://supercell.com/en/games/brawlstars/"><img class="logo-nav" src="/images/logo.png" alt="Logo de Brawl Stars"></a></div>
        <div class="toogle-main-menu"><i class="fi fi-rr-apps toogle-menu" id="toogle-menu"></i></div>
    </div>
    <div id="main-menu" class="main-menu">
        <div>
            <a class="main-menu-a" href="/index.html">Inicio</a>
        </div>
        <div>
            <a class="main-menu-a" href="/htmls/brawlers.html">Brawlers</a>
        </div>
        <div >
            <a class="main-menu-a" href="/htmls/modos_de_juego.html">Modos de Juego</a>
        </div>
        <div>
            <a class="main-menu-a" href="/htmls/competitivo.html">Competitivo</a>
        </div>
    </div>
</nav>
`)

const iconMenu = document.querySelector("#toogle-menu");
const mainMenu = document.querySelector("#main-menu");

iconMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
})