import { Suggestion } from "./Suggestion";


const Suggestions = () => {
    return (
        <>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
            </div>
        </>
    );
}
 
export { Suggestions };