
# Concentration Creation

-  User clicks Start Game (initialized the Game), creating the following: 

1. Create an array of 24 cards e.g. (1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12)

2. Create a Function using the Random.Math method (shuffle the cards).

3. render the cards(array items) face down. 

4. Add an event listener to track the players clicks(selections of cards).

5. Once user selects card , render the card value(array item).

6. store in memory the value of the selected card. (store in variable)

7. User selects second card which will be used to compare the value to the first value selected. 

8. Compare if the values are equal. 

9. if the values are equal, the matching cards(value) will be FADED out (hide).

10. if the user selection values are not equal then both cards will flip back over  

11. check if all stored values (winning pairs in array) are fadedOut , then winningMessage is displayed.

12. If winningMessage is not displayed then loop back to number 5

13.  If player is able to complete all pairs ( they have successfull matched all pairs in the initial array) , then create new elements which displys "Winner"
"want to play again? click play"




