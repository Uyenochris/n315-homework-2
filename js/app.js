var app = document.getElementById("app");

var pages = {
  home: ["Explore the World", "Find a simple trip and go somewhere new."],
  about: ["About Us", "We like easy trips that do not need a lot of planning."],
  places: ["Places", "Here are a few basic ideas for your next trip."],
  contact: ["Contact", "Send us a message about a place you liked."]
};

function showPage(name) {
  var page = pages[name];
  if (page == undefined) page = pages.home;

  app.innerHTML = `
    <section class="hero">
      <div>
        <p>GO SOMEWHERE TRAVEL</p>
        <h1>${page[0]}</h1>
        <p>${page[1]}</p>
        <button>LEARN MORE</button>
      </div>
    </section>

    <section class="welcome">
      <h2>${page[0]}</h2>
      <p>${page[1]} We made this page to share some travel ideas. Pick a place, pack light and have a good time.</p>
    </section>

    <section class="cards">
      <div class="card"><h3>Beach Trip</h3><p>Go somewhere warm and relax by the water.</p></div>
      <div class="card"><h3>City Trip</h3><p>Walk around, eat food and see something new.</p></div>
      <div class="card"><h3>Nature Trip</h3><p>Find a trail and spend some time outside.</p></div>
    </section>

    <section class="green">
      <h2>Travel Better</h2>
      <p>Respect the place, clean up after yourself and shop local when you can.</p>
    </section>`;
}

window.addEventListener("hashchange", function() {
  showPage(location.hash.replace("#", ""));
});

showPage(location.hash.replace("#", "") || "home");
