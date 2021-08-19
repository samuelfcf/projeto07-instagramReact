import Logo9gag from "../assets/img/9gag.svg"


const Story = () => {
    return (
        <div class="story">
            <div class="imagem">
                <img src={Logo9gag} alt="Logo9gag"/>
            </div>
            <div class="usuario">
                9gag
            </div>
        </div>
    );
}

export { Story };