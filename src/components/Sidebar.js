import { User } from "./User";
import { Suggestions } from "./Suggestions";

const Sidebar = () => {

    const user = {
        username: "catanacomics",
        name: "catana",
        userImg: "./assets/img/catanacomics.svg"
    }

    return (

        <div class="sidebar">
            <User username={user.username} name={user.name} userImg={user.userImg} />
            <Suggestions />
        </div>
    )
}

export { Sidebar };