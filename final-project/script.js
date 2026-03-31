// DATA (ARRAY + OBJECTS)
const players = [
  { name: "John Smith", position: "QB" },
  { name: "Mike Johnson", position: "WR" },
  { name: "Alex Brown", position: "CB" }
];

// DISPLAY FUNCTION (DOM)
function displayPlayers(list) {
  const container = document.getElementById("playerList");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player.name + " - " + player.position;
    container.appendChild(li);
  });
}

// FILTER FUNCTION (ARRAY METHOD)
function filterPlayers(input) {
  const filtered = players.filter(player =>
    player.name.toLowerCase().includes(input.toLowerCase())
  );

  displayPlayers(filtered);
}

// CONDITIONAL FUNCTION
function handleSearch(input) {
  if (input === "") {
    displayPlayers(players);
  } else {
    filterPlayers(input);
  }
}

// EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  displayPlayers(players);

  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("keyup", (e) => {
      handleSearch(e.target.value);
    });
  }
});

// MAP EXAMPLE
const names = players.map(p => p.name);
console.log(names);