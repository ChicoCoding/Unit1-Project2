//this sections intializes the variables
let valid= false;
let par =0;
let score =0;
let holes= 1;
let max_holes = 0;
let username 
username = prompt("What is your name?");
max_holes = prompt(`Hi, ${username}, Would you like to play 3 or 6 holes?`);
//this while loop makes sure the user only put in a 3 or a 6 since those are supposed to be the only options
while(valid === false){
    /*if they di put in a 3 or a 6 it confirms that it is valid and lets them play 
    otherwise it will try to confirm if they want to play 3 holes or 6 holes*/
    if (max_holes == 3 || max_holes == 6) 
    {
        valid = true
    }
    else {
        max_holes = prompt('We only handle 3 or 6 holes, please try again.');
    }

}
//this while loop is the main loop of the game getting the score for each hole and checking if they finished the game
while(holes <= max_holes)
{
    score += prompt(`How many putts for hole ${holes}? (par is 3)` )-3;
    console.debug(`The score is ${score}.`);
    par+=3;
    holes++;
}
//this section checks how well the play did and responds acordingly
if(score < par){
    //since it is a negative number it automatically has a negative sign so there is no reason for me to add one despite the instructions saying to
    console.log(`Good game,${username},your total par was: ${score}`);
} else if(score === par){
    console.log(`Good game,${username},your total par was: 0`);
} else if(score > par){
    console.log(`Nice Try,${username},your total par was: +${score}`);
}
