import { useState } from "react";
import classes from "../styles/NewPostForm.module.css";

const NewPost = () => {
    let [isExpanded, setIsExpanded] = useState(false);

    const expandHandler = (visible) => {
        setIsExpanded(visible);
    }

    const submitHandler = (e, post) => {
        e.preventDefault();
        console.log(e);
        console.log(post);
    }

    return (
        <form onSubmit={submitHandler} onFocus={_ => expandHandler(true)} className={classes.form}>
            <textarea className={isExpanded ? classes.formPreview : undefined} name="content" required placeholder="Enter new post..." rows={isExpanded ? 5 : 1} />
            {isExpanded &&
                <div className={classes.flexRow}>
                    <input type="text" name="author" required placeholder="Your name..." />
                    <button className={classes.sendBtn}>Add</button>
                </div>}
        </form>
    );
}

export default NewPost;