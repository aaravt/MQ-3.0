//get the value of key from the local storage and store it in variable
//localStorage.getitem("keyname")
p1name=localStorage.getItem("player1");
p2name=localStorage.getItem("player2");
document.getElementById("p1name").innerHTML=p1name+":";
document.getElementById("p2name").innerHTML=p2name+":";
p1score=0;
p2score=0;
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
qturn="p1";
aturn="p2";
document.getElementById("qturn").innerHTML=" question turn- "+p1name;
document.getElementById("aturn").innerHTML=" answer turn- "+p2name;
function send() {
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    
    question_number=`<h4>${number1} x ${number2}</h4>`;
    input_box=`<br>Answer : <input type="text" id="input_check">`;
    check_button=`<br><br><button class ="btn btn-info" onclick= "check()">Check</button>`;
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
//define 2 vars
function check() {
    //get value from answrer input box
    get_answer=document.getElementById("input_check").value;
    //compare this with actuaL name
    if (get_answer==actual_answer) {
        if (aturn=="p1") {
            update_p1score=p1score+1;
            document.getElementById("p1score").innerHTML=update_p1score;
        }
    } else {
        update_p2score=p2score+1;
        document.getElementById("p2score").innerHTML=update_p2score;
    }
//code for changing the question turn
if (qturn=="p1") {
    qturn="p2";
    document.getElementById("qturn").innerHTML = "question turn-" + p2name; 
} else {
    qturn="p1";
    document.getElementById("qturn").innerHTML=" question turn- "+p1name;
}
//code for changing the answer turn
if (aturn=="p1") {
    aturn="p2";
    document.getElementById("aturn").innerHTML=" answer turn- "+p2name;
} else {
    aturn="p1";
    document.getElementById("aturn").innerHTML=" answer turn- "+p1name;
}
document.getElementById("output").innerHTML="";
}
