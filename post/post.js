/* import */

import '../auth/user.js';
import { getPosts } from '../fetch-utils.js';
import { createComment } from '../fetch-utils.js';
import { renderComment } from '../render-utils.js';

const errorDisplay = document.getElementById('error-display');
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const commentList = document.getElementbyId('comment-list');
const addCommentForm = document.getElementById('add-comment-form');

let error = null;
let post = null;

window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    if (!id) {
        location.replace('/');
        return;
    }

    const response = await getPosts(id);
    error = response.error;
    post = response.data;

    if (error) {
        location.replace('/');
    } else {
        displayPost();
    }
});

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new formData(addCommentForm);
    const insertComment = {
        text: formData.get('text'),
        post_id: post.id,
    };
    const response = await createComment(inserComment);
    error = response.error;
    if (error) {
        displayError();
    } else {
        const comment = response.data;
        post.comments.unshift(comment);
        displayComments();
        addCommentForm.reset();
    }
});
