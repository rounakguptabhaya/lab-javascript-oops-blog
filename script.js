/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title = title;
        this.detail = detail;
    }
    
    addTitle(){
        
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        // console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
        document.getElementById("title").value = "";    }

    addDescription(){
        var description_card = document.createElement('p');
        description_card.setAttribute("id","blog-description");
        // console.log(description_card);
        document.getElementById('card-text').appendChild(description_card);
        description_card.innerHTML += this.detail;
        document.getElementById("detail").value = "";
    }

}

// var blogTitle = document.getElementById("title").value;
// console.log(blogTitle);
// var blogBody = document.getElementById("detail").value;

// document.getElementById('addBlog').addEventListener("click",function(){
//     // console.log("Pressed");
//     obj.newPost();
// }
// );

document.getElementById('addBlog').addEventListener("click",function(){
    console.log("Pressed");
    document.getElementById('popupContact').style.display = "inherit";
    document.querySelector(".body-div2").style.visibility = "hidden";
   
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById('popupContact').style.display = "none";
});

document.getElementById("viewBlogs").addEventListener("click",function(){
    document.querySelector(".body-div2").style.visibility = "visible";
    document.getElementById('popupContact').style.display = "none";
})

document.getElementById("post").addEventListener("click",function(){
    document.querySelector(".body-div2").style.visibility = "visible";
    document.getElementById('popupContact').style.display = "none";
    
    
    var blogTitle = document.getElementById("title").value;
    var blogBody = document.getElementById("detail").value;

    console.log(blogTitle)
    console.log(blogBody)
    var obj = new Blog(blogTitle,blogBody);
    obj.addTitle();
    obj.addDescription();

})
// obj.submit;
// function submit(){
//     console.log("Pressed");
//     document.getElementById('popupContact').style.visibility = "visible";
// }