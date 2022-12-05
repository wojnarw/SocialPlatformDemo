import { useState, useEffect } from "react";
import { getAllPosts } from "../api/requests";
import Loader from "../components/Loader";
import NewPost from "../components/NewPost";
import Post from "../components/Post";

const MainPage = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(_ => {
        getAllPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false))
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <NewPost />
            {loaderVisible && <Loader />}
            {!loaderVisible && posts.map(post => <Post key={post.id} author={post.author} content={post.content} date={post.postDate} views={post.viewCount} />)}
        </div>
    );
}

export default MainPage;