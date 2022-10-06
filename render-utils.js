export function renderPost(post) {
    const li = document.createElement('li');

    // const a = document.createElement('a');
    // a.href = `/pet/?id=${pet.id}`;

    const img = document.createElement('img');
    img.src = post.image_url;

    const p = document.createElement('p');
    p.textContent = post.content;

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    li.append(img, h2, p);

    return li;
}
