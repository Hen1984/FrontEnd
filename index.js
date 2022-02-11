function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const btnNew = document.getElementById("btnNew2");
btnNew.addEventListener("click",fetchCreatePlayer);


async function fetchCreatePlayer() {
	const newPlayer = { "name": "Oliver", "surname": "atom", "age": 22, "position": "FW", "team": "SAN FRANCIS"};
    const response = await fetch(
      "https://full-jeol.herokuapp.com/players",
	  //"http://192.168.1.115:3000/players_api",
      {				
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': "application/json"
        },
		body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        
      })
      .catch((error) => console.log(error));
  }

async function fetchPlayers() {
    const response = await fetch(
      "https://full-jeol.herokuapp.com/players",
      {		
        method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"		  
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const ul = document.getElementById('players');
        let players = data;
        
        for(let player of players){
            let li = createNode('li');
            let span = createNode('span');
            let a = createNode('a');
            a.setAttribute('href', "editPlayer.html?id=" + player._id);
            a.innerText = player._id;	
            span.innerHTML = `${player.name} ${player.surname} ${player.age} ${player.img} ${player.position} ${player.team}`;            
            append(li, span);
	          append(li, a);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }
  fetchPlayers();