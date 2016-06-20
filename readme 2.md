#Gotta Catch Em All

![](https://media.giphy.com/media/6vEi7p81nYYcU/giphy.gif)

Great job on Matthieu's poetry website! His bud, Satoshi, is trying to build a web-based "Pocket Monster" battle game (patent pending). Even though you're skeptical about Satoshi's idea, he assures you that you won't need to worry about any upcoming litigation. Plus, he's a paying customer!

If you're reading this line, stand up out of your seat. Offer zero explanation if your colleagues or the instructors ask why you're standing. Last person sitting loses.

This homework will combine everything we've learned so far:  
* AJAX to access "pocket monster" data from an API
* DOM manipulation to make "pocket monsters" appear on the screen
* event listeners to make the "pocket monsters" battle
* CSS to make it look nice
* Game logic to determine end conditions
* And more!

For shorthand, I'm going to say "pokemon" from now on instead of "pocket monster".

Below is the "pokemon" API Satoshi would like you to use:  
`http://pokeapi.co`

## Setup

Before diving into code, plan out your approach! We've done a lot of planning already, but this is likely the first time that researching the API should be part of your plan:  
* What is the API capable of? 
* What kind of data can the API return? 
* How do we access that data? 
* What kind of search queries are needed?

The "pokemon" API will return A LOT of data for a "pokemon" search. Be sure to use Postman first to see what data is returned and try to parse through it as best you can. Use the search functionality in Postman as needed (it can definitely help!) - it's the little magnifying glass icon on the right side.

If you're not familiar with "pokemon", here are some you can use for testing purposes:
* bulbasaur
* squirtle
* charmander
* pikachu
* snorlax
* growlithe
* eevee

No starter code has been provided for this exercise! Create and link files and libraries as necessary.

## Completion

Complete the MVP! There are 7 functions in the MVP.

![](https://media.giphy.com/media/eXUlPn1gmZavu/giphy.gif)

Don't let the MVP frustrate you! Work in teams, work on slack, work with each other to break this down as much as possible. If you catch yourself getting stuck or running around in circles, stop, take a break to refresh yourself, and ask for help!

![](https://media.giphy.com/media/yhfTY8JL1wIAE/giphy.gif)

However, there's so much more to do with the game! The bonus has some suggestions, but feel free to make the game your own! Satoshi might have to take the game down anyways due to pending litigation, so the more unique it is, the better chance there is that Satoshi wins the lawsuit!

As you may have noticed earlier, I threw in a random interaction in this readme.md. In an effort to check to see how thoroughly the class is reading the prompt (especially before asking questions to the instructors and the TA), write "I read the readme!" in your homework submission pull request. There is no penalty for not writing the line, so please don't give your friends a heads up!

## Assignment

Satoshi decided these are the features of the MVP he wants built

#### Features

* There should be a text input for a pokemon name, a dropdown of Player 1 and Player 2, and a search button that on click, will make a "pokemon" appear for either Player 1 or Player 2
* When a "pokemon" appears, it should have an image, its name, some stats, and a button with the name of the "pokemon's" first move/attack
* The stats shown should be: HP/Health, Attack, Defense, and Speed
* There should be a "status" element that will say whether or not a battle is in session - as long as there are two "pokemon" with positive health/HP, the "status" should say BATTLE 
* The "pokemon" with a greater speed should be able to attack first - find a way to disable the attack button for the defending "pokemon"
* There should be a turns counter showing how many times a  in the battle
* An attack should remove (attacking "pokemon" attack stat / defending "pokemon" defense stat) * 10 from the defending pokemon's health
* When a "pokemon" reaches 0 or less health, a modal pops up saying "PLAYER X won"

#### Functions

* **getData()** does AJAX stuff! But the AJAX URL should be different for every query, so make sure that the url is dynamic to your search!
* **handleResponse(data)** will parse through the data that the API returns! What are we supposed to do with that data according to the MVP?
* **appendPokemon(player, data1, data2,etc.)** should take the parsed response data and create elements and values based on that data! It will append a "pokemon" to the correct player section!
* **toggleModal()** should toggle modal!
* **attack()** should find the attacking "pokemon's" attack stat, the defending "pokemon's" defense stat, and use the formula to subtract damage from the defending "pokemon's" health
* **switchAttacker()** should switch which attack button is **enabled** and **disabled** based on the turns counter (hint - is there something in jQuery that will disable/enable buttons instead of removing and adding event listeners?)
* **checkHealth()** should check to see if the defending "pokemon's" health has dropped below 0 after every attack, and toggle the modal accordingly!

## Bonus

![](https://media.giphy.com/media/3oEduV4SOS9mmmIOkw/giphy.gif)

High five! You've made it to the bonus! Here are some suggestions for improvements to the MVP!

* Throw in conditionals to prevent poor responses 
* Add a reset battle button! It will reset the health of both "pokemon" and the number of turns
* Add a log of attacks and "pokemon" healths in an "HTML chatbox". Look up the CSS overflow property!
* Give each "pokemon" four attacks (and buttons) instead of just one! Assign a random attack value to each one that's within 10 of the "pokemon's" attack
* Represent a "pokemon's" health in a non-integer way
* Play with the CSS!
* Make a new repo outside of WDI Purple Rain, copy all files into it, and deploy onto gh-pages!