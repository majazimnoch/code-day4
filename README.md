# Sound and Image effect on Click

## Intro
This is the fourth and the fifth project of my 30-day coding challenge. The project includes following tech stuff: html, css, JavaScript.
As the day 4 I made JS code to enable sound after clicking the button. On the day 5 I added a function so the background changes on click. These are simple implementations, perfect quick challenges for the weekend. 

## Idea
The goal was to make functions so when the user clicks the button we have two effects: first, sound effect, second: background is changing.

## Breaking down the code
I started with adding const audio to create a new Audio object.
The let variable keeps track of whether the image is currently visible.
Button got an EventListener attached to the id. When the button is clicked, the function is executed.
The if-else statement is used to toggle the background between an image and an empty screen.
imageVisible = !imageVisible; -> This line toggles the value of imageVisible on each click, ensuring that the background alternates between the image and an empty screen.
I used const and let. The use of let is appropriate here because imageVisible needs to be reassigned (toggled) based on the button click, while 'Audio' object does not need to be reassigned.

## Demo
Click <a href="https://playful-semifreddo-9ec36e.netlify.app/" target="a_blank">here</a>.