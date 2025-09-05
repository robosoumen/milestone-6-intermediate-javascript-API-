const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        // console.log(data)
        displayPost(data)
    })
};

const displayPost = (posts) => {
    //1. get the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    // console.log(postContainer)
    // console.log(posts)
    // for(let i =0;i < posts.length;i++){
    //     console.log(posts[i]);
    // }
    // for(let post of posts){
    //     console.log(post);
    // }
    posts.forEach((post) => {
        console.log(post.title);
        // create html element
        const li = document.createElement('li');
        li.innerText = post.title;
        console.log(li)

        //3. add li into container
        postContainer.appendChild(li)
    })
}
   













// // console.log('hello from outside')
// const person = {
//     name: 'soumen',
//     id:42,
//     dish:'chicken',
//     friends:['ganesh','nilesh','mihir'],
//     fruits:'dalim',
//     isRich:false
// }
// console.log(person,typeof person);
// //1. json.stringify --> converts in json
// //2. json.parse --> converts in object

// const personJSON =JSON.stringify(person);
// console.log(personJSON, typeof personJSON)
// const pasreJSON = JSON.parse(personJSON);
// console.log(pasreJSON, typeof pasreJSON)