const Story = (props) => {

    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt="logo" />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>

    );
}

export { Story };