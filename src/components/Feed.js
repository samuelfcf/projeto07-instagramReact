import { Stories } from "./Stories";
import { Posts } from "./Posts";


const Feed = () => {
    return (
        <>
            <div class="esquerda">
                <Stories />
                <Posts />  
            </div>
        </>
    );
}

export { Feed };