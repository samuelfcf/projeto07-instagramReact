import { Suggestion } from "./Suggestion";

const suggestions = [
    {
        username: "bad.vibes.memes",
        imgUser: "./assets/img/bad.vibes.memes.svg"
    },
    {
        username: "chibirdart",
        imgUser: "./assets/img/chibirdart.svg"
    },
    {
        username: "razoesparaacreditar",
        imgUser: "./assets/img/razoesparaacreditar.svg"
    },
    {
        username: "adorable_animals",
        imgUser: "./assets/img/adorable_animals.svg"
    },
    {
        username: "smallcutecats",
        imgUser: "./assets/img/smallcutecats.svg"
    },
]

const Suggestions = () => {

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion, index) => (
                <Suggestion
                    key={index}
                    username={suggestion.username}
                    imgUser={suggestion.imgUser} />
            ))}
        </div>
    );
}

export { Suggestions };