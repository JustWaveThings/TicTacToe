# TicTacToe

A tic-tac-toe game for the application of factory functions, modules, code design patterns.

## Planning the project

I am doing minimal UI for this project. I want to apply what i've learned involving the new content.

### High-level overview of what project needs to do

Take 2 player names, then using a display, prompt each player to place their marker on the 9x9 board, then keep going until conditions either leave no path to win(tie) or a win, display and endgame message, then offer new game or rematch.

#### Visual Static Elements

- Have a game area to include
  - game board
  - player names displayed
  - reset button
  - place for gameplay messages (win / tie / who's turn)
  - a place to put the players names in
- board area
  - grid of 9 spaces
  - space cannot be overwritten in console or on page
- have a marker for each player
  - x for player 1
  - o for player 2 / or Computer Player if implemented

#### Visual inputs / outputs

- each grid square allows for 1 marker assignment per game.
- button to clear board to restart game
- prompt / area to input player(s) name

#### Manager / Container

- check for winning or tie conditions after 2.5 turns
- push game status to display ( input player names / whose turn / win / tie)  
- action / prompt reset at tie / win condition

### Tips / my thoughts from the assignment page

- No global variables this time.
- store gameboard array inside Gameboard object
- if you need one of something, use a module, if more than one, use a factory
- remove eventhandler from space once clicked (remember the once parameter for eventhandlers this time... easy peasy)

> Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

- Yes, that's why I'm doing this. I want to focus on producing logically constructed code / mvp

---

- Gameboard Object
  - gameMoves array of completed/possible moves

gameMoves logic:
  - Do I want an array of objects that match possibleWin, but with a placeholder in each unused position, that is updated to the player's marker (x / o) once it is placed on the board... 
    - How to find tie / winner in this case?
    - first, remove any polluted lines from gameMoves array...

- Player Object
  -co  
- Win / tie checker Object

> Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

My thoughts

- Keep same lines as object in array (3 row, 3 column, 2 diagonal)
- After turn 2.5 and every move after,  invoke function to remove any polluted line element (a line with both markers on it) from the gameMoves array, then check the gameboard array against the possible win array for 3 markers of either player (if found, break loop and declare winner)
- Put function loop --- while possible wins array length is not 0, game continues.  If game gets to 0 possible winning lines in gameMoves, tie is declared.

---

- __Bonus__ - Make a Computer Player that is _unbeatable_.  -- I'm not sure if I am going to tackle this or not. I would like to have that functionality, but I am not sure if it's worth the time / effort.
