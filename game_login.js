
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
    localStorage.setItem("player1_name", player1_name)
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem("player2_name", player2_name)

    window.location = "game_page.html";
}
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input

  player1_name_input=document.getElementById("player1_name_input").value;
  player2_name_input=document.getElementById("player2_name_input").value;
  // Store these values locally
    localStorage.setitem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
  //Assign "game_login.html" to window.location
  window.location="game_page.html"
}
