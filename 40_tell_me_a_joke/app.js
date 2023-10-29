let jokes = ["I ordered a chicken and an egg from Amazon. I'll let you know."

,"What month is the shortest of the year? May, it only has three letters."
,"What did the snail who was riding on the turtle's back say? Wheeeee!"
,"I was going to tell a time traveling joke, but you guys didn't like it."
,"What do you call a lazy kangaroo? A pouch potato."
,"I used to run a dating service for chickens, but I was struggling to make hens meet."
,`Why do we tell actors to "break a leg?" Because every play has a cast.`
,"What does a pig put on dry skin? Oinkment."
,"What do you call it when a snowman throws a tantrum? A meltdown."
,"My uncle named his dogs Timex and Rolex. They're his watch dogs."
,"Did you hear about the guy whose left side was cut off? He's all right now."
,"How do you open a banana? With a mon-key."
,"Which is faster, hot or cold? Hot, because you can catch cold."
,"What did one plate say to the other plate? Dinner's on me."
,"Why do oranges wear sunscreen? So they don't peel."
,"My wife told me to stop acting like a flamingo, so I had to put my foot down."
,"What do you call a pig that does karate? A pork chop."
,"Where does Batman go to the bathroom? The batroom."
,"What do you call a pony with a sore throat? A little horse."
,"What did the left eye say to the right eye? Between you and me, something smells."
,"What did the mama tomato say to the baby tomato? Catch up!"
,"Why didn't the melons get married? Because they cantaloupe."
,"What do you call a fake noodle? An impasta."
,"How did the pig get to the hogspital? In a hambulance."
,"I'm so good at sleeping I can do it with my eyes closed!"
,"Why does Humpty Dumpty love autumn? Because he had a great fall."
,"What happens when a strawberry gets run over crossing the street? Traffic jam."
,"Why did the cow jump over the moon? The farmer had cold hands."
,"A termite walks into a bar and says, So, is the bar tender here?"
,"How does an octopus go into battle? Well-armed."
,"What do you call a pudgy psychic? A four-chin teller."
]

console.log(jokes.length);



let choice = Math.floor(Math.random() * 20);

let ele = document.getElementById("id1");

ele.innerHTML = `${jokes[choice]}`;

if(choice >= 30 || choice == 0)
{
    choice = 20;
}

document.getElementById("id1").style.color = "green";


document.getElementById("id2").innerHTML = `${jokes[choice + 1]}`;
document.getElementById("id2").style.color = "red";

document.getElementById("id3").innerHTML = `${jokes[choice - 1]}`;
document.getElementById("id3").style.color = "purple";
