import { Feed } from "./Feed";
import { Sidebar } from "./Sidebar";
import { BackgroundMobile } from "./BackgroundMobile";


const Body = () => {
    return (
        <div class="corpo">
            <Feed />
            <Sidebar />
            <BackgroundMobile />
        </div>
    );
}

export { Body }