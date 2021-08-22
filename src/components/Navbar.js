import { Header } from "./Header";
import { HeaderMobile } from "./HeaderMobile";


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