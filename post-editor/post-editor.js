import '../auth/user.js';
import { createPost } from '../fetch-utils.js';
//import

const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');
//const imageInput = document.getElementById
//const preview

/* State*/
let error = null;

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(postForm);

    const post = {
        title: formData.get('title'),
        content: formData.get('content'),
        //image_url: url,
    };

    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

function displayError() {
    if (error) {
        //eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
