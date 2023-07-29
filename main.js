let loadMore = document.getElementById("btn");
let stories = document.getElementById("card-holders");

loadMore.addEventListener("click", loadstories);

function loadstories() {
  for (let i = 0; i < 3; i++) {
    stories.innerHTML += `
    <div class="card">
    <div class="img-holder">
        <img src="img/5297890.jpg">
    </div>
    <div class="text-holder">
        <h2>hear from us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aspernatur.</p>
        <span>20-11-2022</span>
    </div>
</div>
    `
  }
}
