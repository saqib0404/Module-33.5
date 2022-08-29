const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data.slice(0, 20)))
}
const displayComments = comments => {
    const commentsContainer = document.getElementById('comments-container')
    console.log(comments)
    comments.forEach(comment => {
        // console.log(comment)
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('each-comment')
        commentDiv.innerHTML = `
        <h3>Title: ${comment.name}</h3>
        <p>${comment.body}</p>
        <button class="btn btn-danger ms-2" onclick="loadPost(${comment.id})">ADD ME</button>
        `
        commentsContainer.appendChild(commentDiv)
    });
}


const loadPost = (postId) => {
    console.log(postId)
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
        .then(res => res.json())
        .then(data =>displayPost(data))
}
const displayPost = (post) => {
    console.log(post)
    const mainContainer = document.getElementById('container');
    const h4 = document.createElement('h4')
    h4.innerText =`Post-Title: ${post.title}`
    mainContainer.appendChild(h4)
}

loadComments()