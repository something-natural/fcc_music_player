/*
1. make vars for all buttons
2. create song arrays
3. make html5 audio objects
4. using array functions and map(), make a function that create html tag backtic object
*/

//buttons : need functions for these
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const previous = document.getElementById('previous');
const next= document.getElementById('next');
const shuffle= document.getElementById('shuffle');

//player display
const songTitle = document.getElementById('player-song-title')
const songArtist = document.getElementById('player-song-artist')

//playlist : need functions that create li element from array and add to list
const playList = document.getElementById('playlist-songs')


//