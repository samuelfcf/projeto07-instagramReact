import Logo9gag from "../assets/img/9gag.svg"


const Story = () => {

    const img = Logo9gag
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} alt="logo"/>
            </div>
            <div class="usuario">
                9gag
            </div>
        </div>
    );
}

export { Story };