import { Stories } from "./Stories";
import { Posts } from "./Posts";


const Left = () => {
    return (
        <>
            <div class="esquerda">
                <Stories />
                <Posts />  
            </div>
        </>
    );
}

export { Left };