function login() {
    //get the name from the first text input
    p1=document.getElementById("player1_name").value;
    //get the name from the second text input
    p2=document.getElementById("player2_name").value;
    //set the values in local storage
    localStorage.setItem("player1" , p1)
    localStorage.setItem("player2" , p2)
    window.location="mathpage.html"
}