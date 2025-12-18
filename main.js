const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const btn = document.querySelector("button");

function getJoke() {
    fetch("jokes.json")
        .then(res => res.json())
        .then(data => {
            const index = Math.floor(Math.random() * data.jokes.length);
            setupEl.innerText = data.jokes[index].setup;
            punchlineEl.innerText = data.jokes[index].punchline;

            
            btn.classList.remove("clicked");
            void btn.offsetWidth; 
            btn.classList.add("clicked");
        });
}
