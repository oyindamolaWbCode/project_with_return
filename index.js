const postsList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

let output = '';

const renderPosts = (posts) =>{
    // graps the data in the api
    posts.forEach(post =>{
        output += `
        <div class="card mt-4 col-md-6 bg-ligt">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
          <p class="card-text">${post.body}</p>
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Delete</a>
        </div>
      </div>
        `;
       
     });
      postsList.innerHTML = output

}

const url = 'https://jsonplaceholder.typicode.com/posts'
// Get - Read the posts
//method GET


    fetch(url)
    .then((response) => response.json())
    .then((data) => renderPosts((data))
       
    )

// Create - insert new post
// Method :POST

addPostForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log(titleValue.value);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title:titleValue.value,
            body:bodyValue.value
        })
    })

    .then(response => response.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderPosts(dataArr);
    })
})