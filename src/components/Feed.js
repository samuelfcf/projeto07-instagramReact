import { Stories } from "./Stories/Stories";
import { Posts } from "./Posts/Posts";


const Feed = () => {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}

export { Feed };