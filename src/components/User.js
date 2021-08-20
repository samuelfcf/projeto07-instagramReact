import CatanaComics from "../assets/img/catanacomics.svg"


const User = () => {
    return (
        <div class="usuario">
            <img src={CatanaComics} alt=""/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
        </div>
    )
}

export { User }