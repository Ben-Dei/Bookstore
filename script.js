let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",   //div class informations
      "likes": 1250,   //div class informations
      "liked": true,   //div class informations
      "price": 19.99,   //div class informations
      "publishedYear": 2018,   //div class informations
      "genre": "Fantasy",   //div class informations
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]


function init(){
  renderBooks();
  
}


function renderBooks() {
  let contentBookRef = document.getElementById('content');
  contentBookRef.innerHTML = "";
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    const singleBook = books[bookindex];
    contentBookRef.innerHTML += renderBooksTemplate(singleBook, bookindex);
    renderCommentSection(bookindex);
    checkUpLikedBook(bookindex);
  }
}


function renderCommentSection(bookindex){
  let commentContent = document.getElementById(`content_comment${bookindex}`);
  commentContent.innerHTML = ""
  for(let commentindex = 0; commentindex < books[bookindex].comments.length; commentindex++){
        const singleComment = books[bookindex].comments[commentindex];
        commentContent.innerHTML +=  /*html*/`
              <span>Name: ${singleComment.name}<br></span>
              <span>Comment: ${singleComment.comment}<br></span>
                `
  }
}

function checkUpLikedBook(bookindex){
    let likedImg = document.getElementById(`likesImg${bookindex}`);
    if (books[bookindex].liked == true){
      likedImg.src="./img/solid-heart.svg";
    }
}


function addLike(bookindex){
    let likedImg = document.getElementById(`likesImg${bookindex}`); 
    let likeSpan = document.getElementById(`likeSpan${bookindex}`);

      if (books[bookindex].liked) {
        likedImg.src="./img/regular-heart.svg";
        books[bookindex].liked = false
        likeSpan.innerText = `${(books[bookindex].likes -= 1)}`
      } else {
        likedImg.src="./img/solid-heart.svg";
        books[bookindex].liked = true
         likeSpan.innerText = `${(books[bookindex].likes += 1)}`
      }
}


function addToCommentSection(bookindex){
    let addNoteRef = document.getElementById(`inputfield${bookindex}`);
    let owmcomment = books[bookindex].comments;
    let myComment = addNoteRef.value;
        if(myComment != "") {
          
        owmcomment.push(myComment);
        addNoteRef.value = "";
        renderCommentSection(bookindex)
        } else{
          alert("Bitte Kommentarfeld ausfüllen");
        }

}       