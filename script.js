const btn = document.getElementById("jokes_btn");
let jokes = document.getElementById("jokes");


async function generateJokes(){

    jokes.innerHTML = "Updating....";
    btn.innerHTML = "LOADING..."
    let joke_content = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1" , {
        method:"GET",
        headers:{
            "X-Api-Key" : "Vn3IHHXO9/EsrUV2Deg9LA==88toxNZH9zYHUjg3"
        }
    });
      let parsedData = await joke_content.json();
      jokes.innerHTML  = parsedData[0].joke;
      btn.innerHTML = "TELL ME A JOKE";
      btn.classList = "button";
}








btn.addEventListener('click' , generateJokes);