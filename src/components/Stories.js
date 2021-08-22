import { Story } from "./Story";

import img9gag from "../assets/img/9gag.svg";
import imgMeowed from "../assets/img/meowed.svg";
import imgBarked from "../assets/img/barked.svg";
import imgNathanwpylestrangeplanet from "../assets/img/nathanwpylestrangeplanet.svg";
import imgWawawicomics from "../assets/img/wawawicomics.svg";
import imgRespondeai from "../assets/img/respondeai.svg";
import imgFiloModerna from "../assets/img/filomoderna.svg";
import imgMemeriaGourmet from "../assets/img/memeriagourmet.svg";


const Stories = () => {

    const users = [
        {
            username: "9gag",
            img: img9gag
        },
        {
            username: "meowed",
            img: imgMeowed
        },
        {
            username: "barked",
            img: imgBarked
        },
        {
            username: "nathanwpylestrangeplanet",
            img: imgNathanwpylestrangeplanet
        },
        {
            username: "wawawicomics",
            img: imgWawawicomics
        },
        {
            username: "respondeai",
            img: imgRespondeai
        },
        {
            username: "filomoderna",
            img: imgFiloModerna
        },
        {
            username: "memeriagourmet",
            img: imgMemeriaGourmet
        },
    ];

    return (
        <div class="stories">
            {users.map((user) => (
                <Story username={user.username} img={user.img} />
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

export { Stories };