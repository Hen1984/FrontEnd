const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditPlayer);

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click",fetchDeletePlayer);

async function fetchDeletePlayer() {
	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const surnameField = document.getElementById("txtSurnam").value;
	const ageField = document.getElementById("txtAge").value;
    const positionField = document.getElementById("txtPosition").value;
    const teamField = document.getElementById("txtTeam").value;
	
	
	const newPlayer = {name: nameField, surname: surnameField, age: ageField, position: positionField, team: teamField};
	
    const response = await fetch(
        "https://full-jeol.herokuapp.com/players/" + idField + "?_method=DELETE",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Player Deleted");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }



async function fetchEditPlayer() {

	const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const surnameField = document.getElementById("txtSurnam").value;
	const ageField = document.getElementById("txtAge").value;
    const positionField = document.getElementById("txtPosition").value;
    const teamField = document.getElementById("txtTeam").value;
	
	
	const newPlayer = {name: nameField, surname: surnameField, age: ageField, position: positionField, team: teamField};
	
    const response = await fetch(
      "https://full-jeol.herokuapp.com/players" + idField + "?_method=PUT",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Player Edited");
        
      })
      .catch((error) => console.log(error));
  }


async function fetchPlayer(id) {
    const response = await fetch(
      "https://full-jeol.herokuapp.com/players" + id,
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
	let player = data;
	
	 try {
		 
		 document.getElementById("txtId").value = id;
		 
		 if (player != null){
			document.getElementById("txtName").value = player.name;      
			document.getElementById("txtSurname").value = player.surname;      
			document.getElementById("txtAge").value = player.age;
      document.getElementById("txtPosition").value = player.position;
      document.getElementById("txtTeam").value = player.team;
		 }
	  
	}
	catch (e) {
	   console.log(e);
	}
    
	      
	
        
      })
      .catch((error) => console.log(error));
  }



function getParameterByName(name, url = window.location.href) {
  console.log(url);
  
    name = name.replace(/[\[\]]/g, '\\$&');
  
  console.log(name);
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log(getParameterByName('id'));
  fetchPlayer(getParameterByName('id'));

  


  //For Select Postions

  function Select (){
    var pos = "";
  var selectPosition = document.getElementById("txtPosition");
  let positions = [
    "GK",
    "DF",
    "MF",
    "FW"
    ];
    

  for (let i = 0; i<=3; i++) {
      pos += "<option value='"+positions[i]+"'>" + positions[i] +"</option>";
  }
  selectPosition.innerHTML = pos;


//For Select Teams
  
  var tm="";
  var selectTeam = document.getElementById("txtTeam");

  let teams = ["NEWPI", "SAN FRANCISCO", "NAUGHTY BOYS", "NEW TEAM"];

  for (let i = 0; i<=4; i++) {
      tm += "<option value='"+teams[i]+"'>" + teams[i] + "</option>";
  }
  selectTeam.innerHTML = tm;
}
