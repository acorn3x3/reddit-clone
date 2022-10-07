export function renderPost(post) {
    const li = document.createElement('li');

    // const a = document.createElement('a');
    // a.href = `/post/?id=${post.id}`;

    const img = document.createElement('img');
    img.src = post.image_url;

    const p = document.createElement('p');
    p.textContent = post.content;

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    li.append(img, h2, p);

    return li;
}

/* export function renderComment(comment) {
    const li = document.createElement('li");
    li.textContent = comment.text
    return li */
