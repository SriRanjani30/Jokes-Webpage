const jokes = [
   "Why don't scientists trust atoms? Because they make up everything!",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"Why don't some couples go to the gym? Because some relationships don't work out.",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why don't skeletons fight each other? They don't have the guts.",
"What do you call fake spaghetti? An impasta!",
"Why was the math book sad? Because it had too many problems.",
"I would tell you a construction pun, but I'm still working on it.",
"Why can't you give Elsa a balloon? Because she will let it go!",
"What do you get if you cross a snowman and a vampire? Frostbite.",
"What do you call cheese that isn't yours? Nacho cheese.",
"Why don't eggs tell jokes? They might crack up!",
"Why was the computer cold? It left its Windows open!",
"Why did the tomato turn red? Because it saw the salad dressing!",
"How does a penguin build its house? Igloos it together.",
"Why don't oysters donate to charity? Because they are shellfish.",
"Why did the golfer bring two pairs of pants? In case he got a hole in one.",
"Why don't seagulls fly over the bay? Because then they'd be bagels.",
"Why don't you ever see elephants hiding in trees? Because they're so good at it.",
"What’s orange and sounds like a parrot? A carrot.",
"Why do cows have hooves instead of feet? Because they lactose.",
"What did the grape do when it got stepped on? Nothing but let out a little wine!",
"Why did the bicycle fall over? Because it was two-tired!",
"Why don’t you ever hear a pterodactyl go to the bathroom? Because the P is silent.",
"Why was the broom late? It swept in.",
"What do you call an alligator in a vest? An investigator.",
"Why don't ants get sick? Because they have tiny ant-bodies!",
"Why did the coffee file a police report? It got mugged.",
"Why did the stadium get hot after the game? All of the fans left.",
"What do you call a bear with no teeth? A gummy bear.",
"Why can't your nose be 12 inches long? Because then it would be a foot.",
"Why did the physics book look so sad? Because it had too many problems.",
"What’s brown and sticky? A stick.",
"Why do bees have sticky hair? Because they use honeycombs.",
"Why don’t crabs give to charity? Because they’re shellfish.",
"Why don't some fish play piano? Because you can't tuna fish.",
"What do you get when you cross a snowman with a vampire? Frostbite.",
"Why are ghosts bad at lying? Because they are too transparent.",
"What do you get when you cross a vampire with a snowman? Frostbite.",
"Why was the math book sad? It had too many problems."
];

document.getElementById('jokeButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById('joke');
    jokeElement.classList.add('fade');
    setTimeout(() => {
        jokeElement.innerText = jokes[randomIndex];
        jokeElement.classList.remove('fade');
    }, 500);
});
