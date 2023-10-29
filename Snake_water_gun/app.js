let game = true;

let option = ['s','w','g'];
let score = 0;
let total_attempt = 0;
while(game)
{
    let choice = Math.floor(Math.random() * 3);

    choice = option[choice];

    alert("The Game is about to Begin. Hold Tight!!");

    let user = prompt("Enter your choice Snake(s),Water(w) or Gun(g)");

    user = user.toLowerCase();

    if(choice === 'w' && user === 'w' ||choice === 's' && user === 's' ||
    choice === 'g' && user === 'g' )
    {
        alert("It's a tie");
        total_attempt--;
    }
    else if(choice === 's' && user === 'g' || choice === 'g' && user === 'w' ||choice === 'w' && user === 's'  )
    {
        alert("Congratulations You win");
        score++;
    }
    else
    {
        alert("OOPS!! You lost.")
    }

    game = confirm("Do you want to Play more ?")

    total_attempt++;
}

document.write("ScoreCard");
document.write(`Your Score is ${score} out of ${total_attempt} attempts.`);
document.write("Thank you for playing");


