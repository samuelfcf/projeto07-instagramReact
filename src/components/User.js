


const User = (props) => {
    return (
        <div class="usuario">
            <img src={props.userImg} alt="" />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    )
}

export { User }