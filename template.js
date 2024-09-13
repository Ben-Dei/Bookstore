

function renderBooksTemplate(singleBook, bookindex){
return  /*html*/`
<div class = "book-card"> 
  <div><h5 id = "bookTitle">${singleBook.name}</h5></div>
  <div class = "line"></div>
  <div class = "img-container"><img src="./img/book.png" class = "card-book-img"></div>
  <div class = "line"></div>
  <div class = "information">Author: ${singleBook.author}<br>Likes: <span id="likeSpan${bookindex}">${books[bookindex].likes}</span> <img id ="likesImg${bookindex}" src="./img/regular-heart.svg" class ="heart-img" onclick="addLike(${bookindex})"><br>
                Price: ${singleBook.price} €<br> erschienen in ${singleBook.publishedYear}<br>Genere:
                ${singleBook.genre}</div>
  <div class = "line"></div>              
  <div class = "comment-section">
    <div id = "content_comment${bookindex}">
      <div id="comment-msg${bookindex}">
      </div>    
    </div>
    <div class ="input-and-send">
      <div class ="inpf"><input id="inputfield${bookindex}"></div>
      <div><img class="pointer-img" src = "./img/solid-send.svg" onclick ="addToCommentSection(${bookindex})"></div>
    </div>
  </div>
</div>  
`
}
