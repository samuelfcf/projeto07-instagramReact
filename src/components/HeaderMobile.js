import Logo from "../assets/img/logo.png";

const HeaderMobile = () => {
    return (
        <>
            <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div class="instagram-mobile">
            <img src={Logo} />
            </div>

            <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </>
    );
}

export { HeaderMobile };