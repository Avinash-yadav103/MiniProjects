let api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    let content = document.getElementById("content");
    content.innerHTML = data.content;
    let author = document.getElementById("author");
    author.innerHTML ="-" +data.author;
}

let newQuote = document.getElementById("generate").addEventListener("click", function(){
    getQuote(api_url);
})
