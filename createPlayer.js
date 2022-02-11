

const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreatePlayer);


async function fetchCreatePlayer() {
  debugger;

	const nameField = document.getElementById("txtName").value;

	const surnameField = document.getElementById("txtSurname").value;

	const ageField = document.getElementById("txtAge").value;

  const imgField = document.getElementById("txtImg").value;

  const positionField = document.getElementById("txtPosition").value;

  const teamField = document.getElementById("txtTeam").value;
	
	
	const newPlayer = {name: nameField, surname: surnameField, age:ageField, img:imgField, position: positionField, team: teamField};
	
    const response = await fetch(


      "https://full-jeol.herokuapp.com/players",
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
        const span = document.getElementById('playerSpan');
        let player = data;
	span.innerHTML = `${player._id} ${player.name} ${player.surname} ${player.age} ${player.img} ${player.position} ${player.team}`;             
        
      })
      .catch((error) => console.log(error));
  }