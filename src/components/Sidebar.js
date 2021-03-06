import { User } from "./User";
import { Suggestions } from "./Suggestions/Suggestions";

const user = {
    username: "catanacomics",
    name: "catana",
    userImg: "./assets/img/catanacomics.svg"
}

const Sidebar = () => {

    return (

        <div class="sidebar">
            <User username={user.username} name={user.name} userImg={user.userImg} />
            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export { Sidebar };