const players = [
  { name: "Cam Akers", position: "RB", number: "30" },
  { name: "Elijah Arroyo", position: "TE", number: "18" },
  { name: "AJ Barner", position: "TE", number: "88" },
  { name: "D'Anthony Bell", position: "S", number: "23" },
  { name: "Jake Bobo", position: "WR", number: "19" },
  { name: "Anthony Bradford", position: "G", number: "75" },
  { name: "Tyrone Broden", position: "WR", number: "85" },
  { name: "Logan Brown", position: "T", number: "73" },
  { name: "Bryce Cabeldue", position: "G", number: "77" },
  { name: "Zach Charbonnet", position: "RB", number: "26" },
  { name: "Charles Cross", position: "T", number: "67" },
  { name: "Sam Darnold", position: "QB", number: "14" },
  { name: "Michael Dickson", position: "P", number: "4" },
  { name: "Nick Emmanwori", position: "S,LB,CB", number: "3" },
  { name: "AJ Finley", position: "S", number: "30" },
  { name: "Montorie Foster Jr", position: "WR", number: "87" },
  { name: "Derrick Hall", position: "LB,DE", number: "58" },
  { name: "Christian Haynes", position: "G", number: "64" },
  { name: "George Holani", position: "RB", number: "36" },
  { name: "Maxen Hook", position: "S", number: "43" },
  { name: "Tory Horton", position: "WR,PR,KR", number: "15" },
  { name: "Noah Igninoghene", position: "CB", number: "TBD" },
  { name: "Jared Ivey", position: "DE", number: "51" },
  { name: "Shemar Jean-Charles", position: "CB", number: "34" },
  { name: "Josh Jobe", position: "CB", number: "29" },
  { name: "Ernest Jones IV", position: "LB", number: "13" },
  { name: "Josh Jones", position: "G,T", number: "74" },
  { name: "Velus Jones Jr", position: "WR,RB,KR,PR", number: "32" },
  { name: "Nick Kallerup", position: "TE", number: "89" },
  { name: "Amari Kight", position: "T", number: "79" },
  { name: "Tyrice Knight", position: "LB", number: "48" },
  { name: "Cooper Kupp", position: "WR", number: "10" },
  { name: "DeMarcus Lawrence", position: "DE", number: "0" },
  { name: "Drew Lock", position: "QB", number: "2" },
  { name: "Julian Love", position: "S", number: "20" },
  { name: "Abraham Lucas", position: "T", number: "72" },
  { name: "Federico Maranges", position: "C", number: "62" },
  { name: "Kenny McIntosh", position: "RB", number: "25" },
  { name: "Rylie Mills", position: "DT", number: "98" },
  { name: "Jalen Milroe", position: "QB", number: "6" },
  { name: "Mike Morris", position: "DT", number: "94" },
  { name: "Byron Murphy II", position: "DT", number: "91" },
  { name: "Jason Meyers", position: "K", number: "5" },
  { name: "Uchenna Nwosu", position: "LB,DE", number: "7" },
  { name: "Patrick O'Connell", position: "LB", number: "52" },
  { name: "Ty Okada", position: "S", number: "39" },
  { name: "Olu Oluwatimi", position: "C,G", number: "55" },
  { name: "Conner O'Toole", position: "LB,DE", number: "57" },
  { name: "Robbie Ouzts", position: "FB", number: "40" },
  { name: "Chris Paul Jr", position: "LB", number: "49" },
  { name: "Brandon Pili", position: "DT", number: "95" },
  { name: "Nehemiah Pritchett", position: "CB", number: "28" },
  { name: "Jarran Reed", position: "DT", number: "90" },
  { name: "Mason Richman", position: "G,T", number: "78" },
  { name: "Brady Russell", position: "FB,TE,LB", number: "38" },
  { name: "Eric Saubert", position: "TE", number: "81" },
  { name: "Rashid Shaheed", position: "WR,PR,KR", number: "22" },
  { name: "Jamie Sheriff", position: "LB", number: "50" },
  { name: "J.R. Singleton", position: "DT", number: "70" },
  { name: "Jaxon Smith-Njigba", position: "WR", number: "11" },
  { name: "Chris Stoll", position: "LS", number: "41" },
  { name: "Jalen Sundell", position: "C", number: "61" },
  { name: "Chazz Surratt", position: "LB", number: "44" },
  { name: "Drake Thomas", position: "LB", number: "42" },
  { name: "Rodney Thomas II", position: "S", number: "TBD" },
  { name: "Bubba Thomas", position: "DT", number: "69" },
  { name: "Ja'Markis Weston", position: "LB", number: "46" },
  { name: "Cody White", position: "WR", number: "WR" },
  { name: "Ricky White III", position: "WR,PR,KR", number: "86" },
  { name: "Leonard Williams", position: "DT,DE", number: "99" },
  { name: "Emanuel Wilson", position: "RB", number: "TBD" },
  { name: "Devon Witherspoon", position: "CB", number: "21" },
  { name: "Jacardia Wright", position: "RB", number: "31" },
  { name: "Grey Zabel", position: "G", number: "76" },
];

function displayPlayers(list) {
  const container = document.getElementById("playerList");
  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No players found.</p>";
    return;
  }

  list.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>Position: ${player.position}</p>
      <p>Number: ${player.number}</p>
    `;

    container.appendChild(card);
  });
}

function filterPlayers(input) {
  const search = input.toLowerCase();

  const filtered = players.filter(player =>
    player.name.toLowerCase().includes(search) ||
    player.position.toLowerCase().includes(search) ||
    player.number.toLowerCase().includes(search)
  );

  displayPlayers(filtered);
}

function handleSearch(input) {
  const container = document.getElementById("playerList");
  if (!container) return;

  if (input.trim() === "") {
    container.innerHTML = "<p>Start typing to search players...</p>";
  } else {
    filterPlayers(input);
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const filterBtn = document.getElementById("filterBtn");
  const container = document.getElementById("playerList");

  if (container) {
    container.innerHTML = "<p>Start typing to search players...</p>";
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      handleSearch(e.target.value);
    });
  }

  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      const input = searchInput.value;
      handleSearch(input);
    });
  }

});

const playerNames = players.map(player => player.name);
console.log("Player Names:", playerNames);