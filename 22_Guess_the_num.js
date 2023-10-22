let num = Math.floor(Math.random() * 101);

let guess = -1;
let score = 100;
while(guess !== num)
{
    guess = prompt("Enter your Guess");

    guess = Number.parseInt(guess);

    if(guess === num)
    {
        alert(`Congratulations you won .Your Score is ${score}`);
        break;
    }
    else if(guess > num)
    {
        alert("You Guessed a Little Higher");
    }
    else
    {
        alert("You guessed a little lower");
    }

    score--;
}