import BadVibesMemes from "../assets/img/bad.vibes.memes.svg";


const Suggestion = () => {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={BadVibesMemes} alt=""/>
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );
}

export { Suggestion }