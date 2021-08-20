import Barked from "../assets/img/barked.svg";
import Dog from "../assets/img/dog.svg"
import AdorableAnimals from "../assets/img/adorable_animals.svg";



const Post = () => {
    return (
        <>
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={Barked} alt=""/>
                    barked
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={Dog} alt=""/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={AdorableAnimals} alt=""/>
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export { Post };