const container = document.getElementById("container")
// const post = document.createElement("div")
// post.setAttribute("class", "post")
// console.log(post)


function printPosts() {
    for (i = 0; i < posts.length; i++) {
        container.innerHTML += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i].author.name}</div>
                    <div class="post-meta__time">4 mesi fa</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i].content}</div>
        <div class="post__image">
            <img src="${posts[i].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
        `
    }

}
printPosts()

const like = document.querySelectorAll('.like-button');
const idArray = []
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', () => {

        if (like[i].classList.contains('like-button--liked')) {
            like[i].classList.remove('like-button--liked')
            posts[i].likes += -1
            const likesCounter = document.getElementById(`like-counter-${posts[i].id}`)
            likesCounter.innerHTML = `${posts[i].likes}`;

        } else {
            like[i].classList.add('like-button--liked')
            posts[i].likes += +1
            const likesCounter = document.getElementById(`like-counter-${posts[i].id}`)
            likesCounter.innerHTML = `${posts[i].likes}`;
            if (!idArray.includes(posts[i].id)) {
                idArray.push(posts[i].id)
            }
        }
    })
}




