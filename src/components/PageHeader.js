import { Link } from "react-router-dom";

const PageHeader = () => {
    return (
        <header className="App-header">
            Header
            <Link to="/">Main page</Link>
            <Link to="/new">New post</Link>
            <Link to="/top">Top posts</Link>
        </header>
    )
}

export default PageHeader;