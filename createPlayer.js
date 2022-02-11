

const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreatePlayer);


async function fetchCreatePlayer() {
	const nameField = document.getElementById("txtName").value;

	const surnameField = document.getElementById("txtSurname").value;

	const ageField = document.getElementById("txtAge").value;

  const positionField = document.getElementById("txtPosition").value;

  const teamField = document.getElementById("txtTeam").value;
	
	
	const newPlayer = {"name": nameField, "surname": surnameField, "age":ageField, "position": positionField, "team": teamField};
  
  const response = await fetch(
    
    "https://full-jeol.herokuapp.com/players",
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
      alert("Player Created");
        window.location.href = "index.html";
      
      
    })
    .catch((error) => console.log(error));
  }
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

  for (let i = 0; i<=3; i++) {
      tm += "<option value='"+teams[i]+"'>" + teams[i] + "</option>";
  }
  selectTeam.innerHTML = tm;
}

Select();