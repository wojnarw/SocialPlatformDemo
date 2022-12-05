import { useEffect, useState } from "react";
import Post from "../components/Post";
import { getTopPosts } from "../api/requests";

const TopPosts = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(_ => {
        getTopPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false));
    }, []);

    return (
        <div>
            TOP POSTS
            {loaderVisible && "LOADER"}
            {!loaderVisible && posts.map(post => <Post key={post.id} author={post.author} content={post.content} date={post.postDate} views={post.viewCount} />)}
        </div>
    );
}

export default TopPosts;