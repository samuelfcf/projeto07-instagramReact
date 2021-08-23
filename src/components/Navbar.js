import { Header } from "./Headers/Header";
import { HeaderMobile } from "./Headers/HeaderMobile";


const Navbar = () => {
    return (
        <div class="navbar">
            <div class="container">
                <Header />
                <HeaderMobile />
            </div>
        </div>
    );
}

export { Navbar }