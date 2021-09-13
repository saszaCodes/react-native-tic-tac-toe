# React Native Tic Tac Toe

### Description
A 1-day (24-hour) build: simple tic tac toe game. The app keeps track of how many games each player won, but scorekeeping is temporary - when the app is closed, scores are reset to 0. Players can reset each game and reset scores using in-game controls.

### How to play
The game board is a 3x3 grid. Goal of the game is to place 3 of your signs in a straight line - be it vertical, horizontal, diagonal or reverse diagonal. To place a sign, tap the field you want to place it in. Players take turns in placing their signs one by one.

If you play more than one game in a row, player who lost the previous game starts the next one. If last game was tied, player who didn't start last time makes the first move in a new game.

Player's score is highlihted when it's their turn. Under player's name is their sign. Players' names can be edited by tapping them.

### Screenshots
<p>
  <img src="https://user-images.githubusercontent.com/54599709/133090541-aa88430e-f303-44d7-b33a-29075b2ef1ad.jpg" alt="tic-tac-toe-screenshot-0" width="150"/>
  <img src="https://user-images.githubusercontent.com/54599709/133088740-1bc90a78-21bb-4c4a-b02f-849e33e07bb1.jpg" alt="tic-tac-toe-screenshot-1" width="150"/>
  <img src="https://user-images.githubusercontent.com/54599709/133088755-d7f6562e-dc27-464e-ac8b-45ba481a38ca.jpg" alt="tic-tac-toe-screenshot-2" width="150"/>
  <img src="https://user-images.githubusercontent.com/54599709/133088762-a09bff4c-6195-424b-825c-37132a7c782d.jpg" alt="tic-tac-toe-screenshot-3" width="150"/>
  <img src="https://user-images.githubusercontent.com/54599709/133088773-85176112-a7ed-4bd6-9615-b613976ec245.jpg" alt="tic-tac-toe-screenshot-4" width="150"/>
</p>


### Installation
To run the app, pull the repository and run `npm install` script. After it finishes, run `npm run start` - this script will start an expo dev server for you. You can connect to it, if you have [Expo mobile app](https://play.google.com/store/apps/details?id=host.exp.exponent). For info on creating production build, refer to [Expo docs](https://docs.expo.dev/distribution/introduction/).
