# merry-christmas -  A christmas card for 2013

This is a personal project of mine to create a webapp companion for the Christmas cards
I am sending out in 2013. Recipeients will be mailed a christmas card with a unique 4
color combination on the front. Inside of each card will be a link to this webapp hosted
on a remote heroku repository - "merry-christmas.herokuapp.com". On that website,
recipients may enter their unique 4 color combination and a custom christmas card will
be pulled up for them on the webpage. This is my first AngularJS webapp.


##Design

In designing this app, I had originally planned to have a distinct design for many
individuals, which is why I decided against a templating design. The implementation
that I have has a partial view for every individual. If I had to go back and design this
again, I would have a template for the cards that would pull information from a database
for each individual.

Most of the webapp was written with Javascript. This allows for the website to be
extremely quick and responsive, although admittedly speed is not a big concern for a
for a project of this scale.


## Security

In designing this webapp, there were some considerations I made in regards to security.
There are in total 8 different colors and 4 squares. This gives only 4096 distinct color
combinations and therefore it would be very easy for someone to figure out all the valid
color combinations by brute force. The reason I chose to only have 8 different colors
and 4 squares was purely a stylistic choice. I thought that any more colors may make it
difficult to distinguish between certain colors and any more squares would subtract from
the simplistic style of the card. I figured since I was only sending out cards to my
close friends, this level of security would be sufficient.

Something I was worried about was people accidentally sending out URLs to their unique
card. To prevent this, the webapp will check to see if the color combination matches up
with the current user referenced in the URL before it displays the card. If there is a
mismatch, the user will be redirected to the home page. The URLs use a SHA-1 hash so
that it isn't possible to figure out the color combintion just from looking at the URL.

Because each person's card is stored in a separate partial view, I made sure to put the
partials in the gitignore file, that way they won't be able to be viewed on GitHub.
These files were pushed directly to the heroku server.

Had this been designed for a larger audience or the general public I would of definitely
implemented greater security measures. Here is a list of some of the security measures I
have taken into consideration.
* having more colors and squares
* implement a delay between submitting a code and pulling up the card
* only allowing X amount of guesses before locking the user out
* only allow the user to view the card during Chritmas Eve and Christmas
* security questions after entering code


## Example Card

This is a working example card. Feel free to test out the webapp with the color
arrangement below.
<img src="app/img/example-card.jpg"/>
<img src="app/img/example-card-inside.jpg"/>


## Music

This webapp features me playing an arrangement of Winter Wonderland I found on Youtube.
Credit for the arrangement goes to Adam Cantor and his tutorial can be viewed here
<a href="http://youtu.be/gDrJSWOnAZ0">http://youtu.be/gDrJSWOnAZ0</a> 


## Resources

* <a href="https://github.com/angular/angular-seed">angular-seed</a>
* <a href="http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect">snow effect</a>
* <a href="https://code.google.com/p/crypto-js/">Crypto-JS</a>
* <a href="http://youtu.be/gDrJSWOnAZ0">Winter Wonderland Tutorial by Adam Cantor</a>

