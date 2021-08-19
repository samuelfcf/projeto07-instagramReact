import Logo from "../assets/img/logo.png";

const Header = () => {
    return (
        <>
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src={Logo} alt="logo"/>
            </div>

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
    );
}

export { Header };