import API from "./constants";

const getPost = (id) => {
    return true;
}

const addNewPost = async(post) => {
    return await fetch(API.NEW, {
        method: "POST",
        body: JSON.stringify(post)
    })
    .then(data => data.json());
    // .catch(err => console.error(err));
}

const updatePost = (id) => {
    return true;
}

const getTopPosts = async() => {
    return await fetch(API.TOP)
    .then(data => data.json())
    .catch(err => console.error(err));
}

const getAllPosts = async() => {
    return await fetch(API.POSTS)
    .then(data => data.json());
    // .catch(err => console.error(err));
}

export { getPost, getAllPosts, getTopPosts, addNewPost, updatePost };