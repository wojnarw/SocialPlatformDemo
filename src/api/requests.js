import API from "./constants";

const getPost = async(id) => {
    return await fetch(API.POST + id)
    .then(data => data.json());
}

const addNewPost = async(post) => {
    return await fetch(API.NEW, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json());
}

const updatePost = (id) => {
    return true;
}

const getTopPosts = async() => {
    return await fetch(API.TOP)
    .then(data => data.json())
}

const getAllPosts = async() => {
    return await fetch(API.POSTS)
    .then(data => data.json());
}

const getPostsByAuthor = async(author) => {
    return await fetch(API.AUTHOR + author)
    .then(data => data.json());
}

const getLastPosts = async() => {
    return await fetch(API.LAST)
    .then(data => data.json());
}

export { getPost, getAllPosts, getTopPosts, addNewPost, updatePost, getLastPosts, getPostsByAuthor };