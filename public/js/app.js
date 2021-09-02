document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById("change-color-button");
    button.addEventListener("click",function(){
        const postlist = document.getElementsByClassName("box");
        for(var i = 0;i<postlist.length;i++)
        {
            const post = postlist[i];
            post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        }
    })
});

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById("change-color-button-user-post-page");
    button.addEventListener("click",function(){
        const postlist = document.getElementsByClassName("post");
        for(var i = 0;i<postlist.length;i++)
        {
            const post = postlist[i];
            post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        }
    })
});

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById("change-color-button-user-page");
    button.addEventListener("click",function(){
    const body = document.getElementsByTagName("body")[0];
    body.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    })
});