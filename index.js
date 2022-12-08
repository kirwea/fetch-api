// endpoint function
// will fetch promises, and jsonify them
function getPosts() {
    let baseURL = "https://jsonplaceholder.typicode.com";
    let postsEndpoint = "/posts";

    // post url [baseurl + endpoint]
    let url = `${baseURL}${postsEndpoint}`;
    
    fetch(url)
    .then(resp => resp.json())
    .then(renderPosts)
}
getPosts()

function renderPosts(users) {
    users.forEach(addTitles);
}

const titleList = document.getElementById('parentList'); 

function addTitles (posts) {
    let listElement = document.createElement("li")
    listElement.innerText = posts.title
    titleList.appendChild(listElement)
    
    
}
addTitles(posts)