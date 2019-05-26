//****************** List of People ***************************

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

//****************** Create Blue Button ***************************

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

//****************** Player Class ***************************

//requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
class player {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
  //method (i.e. function) to join the Red Team
  joinRedTeam(redTeam) {
    this.redTeam = redTeam;
    player.redTeam.push(this);
  }
  //method (i.e. function) to join the Blue Team
  joinBlueTeam(blueTeam) {
    this.blueTeam = blueTeam;
    player.blueTeam.push(this);
  }
}

//****************** Blue Teammate Class ***************************

//requires mascot and teamColor
class blueTeammate {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

//****************** Red Teammate Class ***************************

//requires mascot and teamColor
class redTeammate {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

//Function that creates a the list of people from the array of objects at the top
let boolean = false;
const listPeopleChoices = () => {
  if (boolean == true) {
    return;
  }
  boolean = true;
  document.getElementById("listOfPeopleBtn").style.display = "none";
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    li.id = "listItem" + person.id;
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

//Turn someone from list of people into player
const makePlayer = id => {
  console.log(`li ${id} was clicked!`);

  const players = document.getElementById("players");
  const findPlayer = arrOfPeople.find(function(entry) {
    return entry.id == id;
  });
  const playerIndex = arrOfPeople.indexOf(findPlayer);
  
  //variabe for player class
  const newPlayer = new player(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    true,
    true,
    true,
    true,
    3
  );
  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(playerIndex, 1);
  //this adds people to list of players
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newPlayer.name + " - "));

  //****************** Create Blue Button ***************************

  const button_blue = document.createElement("button");
  //blue button styling
  button_blue.style.backgroundColor = "Blue";
  button_blue.style.color = "white";
  button_blue.style.border = "solid 1px white";
  button_blue.innerHTML = "Blue Team";
  //when blue button clicked joinBlueTeam function runs & player id is passed to function
  button_blue.addEventListener("click", function() {
    joinBlueTeam(newPlayer.id);
    players.removeChild(li);
  });
  li.appendChild(button_blue);

  //****************** Create Red Button ***************************

  const button_red = document.createElement("button");
  // red button styling
  button_red.style.backgroundColor = "Red";
  button_red.style.color = "white";
  button_red.style.border = "solid 1px white";
  button_red.innerHTML = "Red Team";

  //when red button clicked joinRedTeam function runs & player id is passed to function
  button_red.addEventListener("click", function() {
    joinRedTeam(newPlayer.id);
    //remove player from list once added to team
    players.removeChild(li);
  });
  li.appendChild(button_red);
  players.append(li);
};

//****************** Join Red Team Function ***************************

//function that assigns player to Red Team
const joinRedTeam = id => {
  const playersRed = document.getElementById("red");
  //style
  playersRed.style.border = "solid 3px white";
  playersRed.style.color = "red";
  playersRed.style.borderRadius = "25px";
  //find players by id
  const selectRed = listOfPlayers.find(function(pick) {
    return pick.id == id;
  });

  //add to RedTeammate class
  const redIndex = listOfPlayers.indexOf(selectRed);

  //assigned value to properties not already listed (canDodgeball & hasPaid = true etc., years experience=3, mascot = Rock Lobster)
  const newRedPlayer = new redTeammate(
    selectRed.id,
    selectRed.name,
    selectRed.age,
    selectRed.skillSet,
    selectRed.placeBorn,
    true,
    true,
    true,
    true,
    3,
    "Rock Lobster",
    "Red"
  );
  redTeam.push(newRedPlayer);
  //no longer in player list
  listOfPlayers.splice(redIndex, 1);
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      newRedPlayer.name +
        " - " +
        "Mascot = " +
        newRedPlayer.mascot +
        " and Team Color is " +
        newRedPlayer.teamColor
    )
  );
  playersRed.append(li);
};

//****************** Join Blue Team Function ***************************

//same function for blue team
const joinBlueTeam = id => {
  const playersBlue = document.getElementById("blue");
  playersBlue.style.color = "blue";
  playersBlue.style.border = "solid white 2px";
  const selectBlue = listOfPlayers.find(function(pick) {
    return pick.id == id;
  });
  const blueIndex = listOfPlayers.indexOf(selectBlue);

  const newBluePlayer = new blueTeammate(
    selectBlue.id,
    selectBlue.name,
    selectBlue.age,
    selectBlue.skillSet,
    selectBlue.placeBorn,
    true,
    true,
    true,
    true,
    3,
    "Chupacabra",
    "Blue"
  );
  blueTeam.push(newBluePlayer);
  listOfPlayers.splice(blueIndex, 1);

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      newBluePlayer.name +
        " - " +
        "Mascot = " +
        newBluePlayer.mascot +
        " and Team Color is " +
        newBluePlayer.teamColor
    )
  );
  playersBlue.append(li);
};