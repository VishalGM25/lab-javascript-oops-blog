/* Fill your code*/
class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    console.log(title_card);
    document.querySelector(".card-text").appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDecription() {
    var blog_descripition = document.createElement("p");
    blog_descripition.setAttribute("id", "blog-description");
    console.log(blog_descripition);
    document.querySelector(".card-text").appendChild(blog_descripition);
    blog_descripition.innerHTML += this.detail;
  }
}

let button = document.querySelector("#addBlog");
console.log(button);
button.addEventListener("click", function () {
  let popup = (document.querySelector("#popupContact").style.display = "block");
});

let closeButton = document.querySelector("#close");
closeButton.addEventListener("click", function () {
  document.querySelector("#popupContact").style.display = "none";
});

//getting data from input and textarea
let postBtn = document.querySelector("#post");

postBtn.onclick = function () {
  let title = document.querySelector("#title").value;
  let descripition = document.querySelector("#detail").value;

  let blog = new Blog(title, descripition);
  blog.addTitle();
  blog.addDecription();

  document.querySelector("#popupContact").style.display = "none";
  document.querySelector("#post-img").style.display = "block";
};
