window.player = {
    name: "Nick Emmanwori",
    team: "Seattle Seahawks",
    teamImage: "smallhawkslogo.png",
    position: "Hybrid Safety",
    whiff: 0,
    rep: 100,
    playerImage: "nickE.jpg",

    missedTackle() {
        if (this.rep > 0) {
            this.whiff++;
            this.rep -= 20;

            if (this.rep <= 0) {
                this.rep = 0;
                document.getElementById("statusMessage").textContent =
                    this.name + " you've been benched!";
            }

            updateCard();
        }
    },

    tackle() {
        this.rep += 10;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("playerName").textContent = player.name;
    document.getElementById("playerTeam").textContent = player.team;
    document.getElementById("playerPosition").textContent = player.position;
    document.getElementById("playerWhiff").textContent = player.whiff;
    document.getElementById("playerRep").textContent = player.rep;
    document.getElementById("playerImage").src = player.playerImage;
    document.getElementById("teamImage").src = player.teamImage;
}

updateCard();