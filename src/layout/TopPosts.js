import { useEffect, useState } from "react";
import Post from "../components/Post";
import { getTopPosts } from "../api/requests";
import Panel from "../components/Panel";
import Loader from "../components/Loader";

const TopPosts = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(_ => {
        getTopPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Panel title="TOP POSTS">Top 10 most viewed posts</Panel>
            {loaderVisible && <Loader />}
            {posts && posts.map(post => <Post key={post.id} author={post.author} content={post.content} date={post.postDate} views={post.viewCount} linkId={post.id} />)}
        </div>
    );
}

export default TopPosts;