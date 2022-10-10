/* import */

import '../auth/user.js';
import { getPost } from '../fetch-utils.js';
import { createComment } from '../fetch-utils.js';
import { renderComment } from '../render-utils.js';

/* dom elements */
const errorDisplay = document.getElementById('error-display');
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const commentList = document.getElementById('comment-list');
const addCommentForm = document.getElementById('add-comment-form');

/* state */
let error = null;
let post = null;

/* events */
window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    if (!id) {
        location.replace('/');
        return;
    }

    const response = await getPost(id);
    error = response.error;
    post = response.data;

    if (error) {
        location.replace('/');
    } else {
        displayPost();
        displayComments();
    }
    displayPost();
    displayComments();
});

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addCommentForm);
    const insertComment = {
        text: formData.get('text'),
        post_id: post.id,
    };
    const response = await createComment(insertComment);
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

/* display functions */

function displayError() {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPost() {
    postTitle.textContent = post.title;
    postContent.textContent = post.content;
}

function displayComments() {
    commentList.innerHTML = '';
    for (const comment of post.comments) {
        const commentEl = renderComment(comment);
        commentList.append(commentEl);
    }
}
