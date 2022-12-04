import { useState } from "react";
import classes from "../styles/NewPostForm.module.css";

const NewPost = () => {
    let [isExpanded, setIsExpanded] = useState(false);

    const expandHandler = (visible) => {
        setIsExpanded(visible);
    }

    return (
            <form onFocus={_ => expandHandler(true)} onBlur={_ => expandHandler(false)} className={classes.form}>
                <textarea className={isExpanded ? classes.formPreview :  undefined} name="content" required placeholder="Enter new post..." rows={isExpanded ? 5 : 1} />
                {isExpanded && <input type="text" name="author" required placeholder="Your name..." />}
            </form>
    );
}

export default NewPost;