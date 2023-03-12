# React SPA for Rick and Morty data

React application showing data from Rick and Morty API at: https://rickandmortyapi.com/

API documentation: https://rickandmortyapi.com/documentation

## Demo

Link >> [Rick and Morty Demo API](https://deluxe-torte-f99f65.netlify.app/)

## Components description

[App](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/App.js) - main component of the app, contains all other components

[Character](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/Character/Character.js) - component which is used to render character data and picture

[Episodes](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/Episodes/Episodes.js) - Used to show a list of episodes

[Episode](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/Episodes/Episode/Episode.js) - Used to render single episode data

[Location](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/Location/Location.js) - Renders data about character's location

[Origin](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/Origin/Origin.js) - Renders data about character's origin

[PageBar](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/components/PageBar/PageBar.js) - Component for page bar at the bottom and top of the page

### Context folder

[LocationProvider](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/context/LocationProvider.js) - Context used to hold location data about a character, so it can be accessed everywhere

[PageProvider](https://github.com/balsa-asanovic/rebrandly-rick-and-morty/blob/master/src/context/PageProvider.js) - Context used to hold information about page number and total pages

## Options

Each character box has three buttons for additional data about its Location, Episodes and Origin.

Their locations are showed on the following image:



![1.png](https://raw.githubusercontent.com/balsa-asanovic/rebrandly-rick-and-morty/master/src/assets/RickAndMorty.jpg)
