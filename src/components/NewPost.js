import { useState } from "react";
import { addNewPost } from "../api/requests";
import classes from "../styles/NewPostForm.module.css";
import useInput from "../hooks/useInput";

const NewPost = (props) => {
    let [isExpanded, setIsExpanded] = useState(false);
    let author = useInput("");
    let text = useInput("");

    const expandHandler = (visible) => {
        setIsExpanded(visible);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        addNewPost({
            author: author.value,
            content: text.value
        })
            .then(returnedPost => props.updatePosts(returnedPost))
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={submitHandler} onFocus={_ => expandHandler(true)} className={classes.form}>
            <textarea className={isExpanded ? classes.formPreview : undefined}
                name="content" required placeholder="Enter new post..." rows={isExpanded ? 5 : 1} 
                {...text} />

            {isExpanded &&
                <div className={classes.flexRow}>
                    <input type="text" name="author" required placeholder="Your name..."
                        {...author} />
                    <button className={classes.sendBtn}>Add</button>
                </div>}
        </form>
    );
}

export default NewPost;