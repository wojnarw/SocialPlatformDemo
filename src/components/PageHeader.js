import { Link } from "react-router-dom";
import classes from '../styles/MainNavigation.module.css';
import Logo from "./Logo";

const PageHeader = () => {
    return (
        <div className={classes.header}>
            <Logo />
            <ul>
                <li><Link to="/">Main page</Link></li>
                <li><Link to="/top">Most popular</Link></li>
            </ul>
        </div>
    )
}

export default PageHeader;