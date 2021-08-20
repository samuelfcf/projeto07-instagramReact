import { User } from "./User";
import { Suggestions } from "./Suggestions";

const Sidebar = () => {
    return (
        <>
            <div class="sidebar">
                <User />
                <Suggestions />
            </div>
        </>
    )
}

export { Sidebar };