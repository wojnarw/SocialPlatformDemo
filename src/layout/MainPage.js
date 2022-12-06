import { useState, useEffect } from "react";
import { getLastPosts } from "../api/requests";
import Loader from "../components/Loader";
import NewPost from "../components/NewPost";
import Panel from "../components/Panel";
import Post from "../components/Post";

const MainPage = () => {
    let [posts, setPosts] = useState([]);
    let [loaderVisible, setLoaderVisible] = useState(true);
    let [errorMsg, setErrorMsg] = useState();
    const maxPostLength = 256;

    const updatePostsHandler = (newPost) => {
        if(newPost) setPosts([newPost, ...posts]);
        else { //API didn't return updated object, meaning it was not added
            setErrorMsg("err");
        }
    }

    useEffect(_ => {
        getLastPosts()
            .then(data => setPosts(data))
            .then(_ => setLoaderVisible(false))
            .catch(err => {
                console.error(err);
                setErrorMsg(err);
            });
    }, []);

    return (
        <div>
            <NewPost updatePosts={updatePostsHandler} />
            {loaderVisible && <Loader />}
            {errorMsg && <Panel title="Error">{errorMsg}</Panel>}
            {!loaderVisible && posts.map(post => {
                const trimmedContent = post.content.substring(0, maxPostLength) + (post.content.length > 256 ? "..." : "")

                return <Post key={post.id} author={post.author} content={trimmedContent}
                    date={post.postDate} views={post.viewCount} linkId={post.id} />
            })}
        </div>
    );
}

export default MainPage;