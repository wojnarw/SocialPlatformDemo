import { useState } from "react";
import NewPost from "../components/NewPost";
import Post from "../components/Post";

const MainPage = () => {
    let [posts, setPosts] = useState([]);

    posts = [
        {
            id: "sad",
            author: "autor",
            content: "jakis tam sobie post",
            date: "2022-12-23",
            views: 0
        },
        {
            id: "sas",
            author: "user",
            content: "post numero diuo alalal",
            date: "2022-12-22",
            views: 0
        },
        {
            id: "asd",
            author: "troll",
            content: "raz dwa trzy baba jaga patrzy",
            date: "2022-12-20",
            views: 0
        },
    ];

    return (
        <div>
            <NewPost />
            {posts.map(post => <Post key={post.id} author={post.author} content={post.content} date={post.date} views={post.views} />)}
        </div>
    );
}

export default MainPage;