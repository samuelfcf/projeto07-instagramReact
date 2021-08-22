import { Post } from "./Post";

const Posts = () => {

    const posts = [
        {
            username: "meowed",
            imgUser: "./assets/img/meowed.svg",
            imgContent: "./assets/img/gato-telefone.svg",
            usernameWhoLikes: "respondeai",
            imgLikes: "./assets/img/respondeai.svg",
        },
        {
            username: "barked",
            imgUser: "./assets/img/barked.svg",
            imgContent: "./assets/img/dog.svg",
            usernameWhoLikes: "adorable_animals",
            imgLikes: "./assets/img/adorable_animals.svg",
        }
    ];

    return (

        <div class="posts">
            {posts.map((post) => (
                <Post username={post.username} imgUser={post.imgUser} imgContent={post.imgContent} imgLikes={post.imgLikes} usernameWhoLikes={post.usernameWhoLikes} />
            ))}
        </div>
    );
}

export { Posts };