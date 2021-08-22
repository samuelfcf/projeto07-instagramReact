const Post = (props) => {
    return (
        <>
            <div class="post">
                <UserPost username={props.username} img={props.imgUser} />
                <ContentPost img={props.imgContent} />
                <LikesPost userLiked={props.usernameWhoLikes} img={props.imgLikes} />
            </div>
        </>
    )
}

const UserPost = (props) => {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.img} alt="" />
                {props.username}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

const ContentPost = (props) => {
    return (
        <div class="conteudo">
            <img src={props.img} alt="" />
        </div>
    )
}

const LikesPost = (props) => {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.img} alt="" />
                <div class="texto">
                    Curtido por <strong>{props.userLiked}</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
        </div>
    )
}

export { Post };