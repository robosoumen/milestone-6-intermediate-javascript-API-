// console.log("hello from outside")

const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        // console.log(data)
        displayPost(data)
    })
};


// {
//     "userId": 10,
//     "id": 100,
//     "title": "at nam consequatur ea labore ea harum",
//     "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
// }
const displayPost = (posts) => {
    //1. get the container and empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach((post) => {
        //2. create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `

        // 3. add to the container
        postContainer.append(postCard)
    })
}

loadPost();