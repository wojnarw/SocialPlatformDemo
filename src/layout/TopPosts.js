import { useState } from "react";
import Post from "../components/Post";

const TopPosts = () => {
    let [posts, setPosts] = useState([]);

    return (
        <div>
            TOP POSTS
            {posts.map(post => <Post key={post.id} author={post.author} content={post.content} date={post.date} views={post.views} />)}
        </div>
    );
}

export default TopPosts;