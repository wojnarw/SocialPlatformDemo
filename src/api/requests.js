import { API_URL, API_KEY } from "./constants";

const getPost = (id) => {
    return true;
}

const addNewPost = (post) => {
    return true;
}

const updatePost = (id) => {
    return true;
}

const getTopPosts = async() => {
    return await fetch(API_URL + "top")
    .then(data => data.json())
    .catch(err => console.error(err));
}

const getAllPosts = async() => {
    return await fetch(API_URL)
    .then(data => data.json())
    .catch(err => console.error(err));
}

export { getPost, getAllPosts, getTopPosts, addNewPost, updatePost };