var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var chooser=Math.floor(Math.random()*3+1)
    if(chooser==1){
        return "rock"
    }
    else if(chooser==2){
        return "paper"
    }
    else{
        return "scissors"
    }
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if(userValue==aiValue){
        return "draw"
    }
    else if(userValue=="rock" && aiValue=="paper"){
        return "lost"
        userPoint++
    }
    else if(userValue=="rock" && aiValue=="scissors"){
        return "user"
        aiPoint++
    }
    else if(userValue=="paper" && aiValue=="scissors"){
        return "lost"
        userPoint++
    }
    else if(userValue=="paper" && aiValue=="rock"){
        return "user"
        aiPoint++
    }
    else if(userValue=="scissors" && aiValue=="rock"){
        return "lost"
        userPoint++
    }
    else if(userValue=="scissors" && aiValue=="paper"){
        return "user"
        aiPoint++
    }
}

// This function sets the scoreboard with the correct points
function setScore() {
    $("#aiPoint").val(aiPoint);
    $("#userPoint").append(userPoint)
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(function(evt){
        evaluate(evt);
        
    });
});
