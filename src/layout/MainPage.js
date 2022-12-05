import { useState, useEffect } from "react";
import { getLastPosts } from "../api/requests";
import Loader from "../components/Loader";
import NewPost from "../components/NewPost";
import Post from "../components/Post";

const MainPage = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);
    const maxPostLength = 256;

    const updatePostsHandler = (newPost) => {
        console.log(newPost);
        console.log(posts);
        setPosts([newPost, ...posts]);
    }

    useEffect(_ => {
        getLastPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <NewPost updatePosts={updatePostsHandler} />
            {loaderVisible && <Loader />}
            {!loaderVisible && posts.map(post => {
                console.log(post);
                const trimmedContent = post.content.substring(0, maxPostLength) + (post.content.length > 256 ? "..." : "")

                return <Post key={post.id} author={post.author} content={trimmedContent}
                    date={post.postDate} views={post.viewCount} />
            })}
        </div>
    );
}

export default MainPage;