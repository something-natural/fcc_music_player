/*
how to work
1. first sort song array and render it to playlist
2. display info of first song on the list in player-display div
3. play, pause, previous, next, shuffle with buttons
4. use map() sort() and ?

todos
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


//songs array
const allSongs = [
    {
      id: 0,
      title: "Scratching The Surface",
      artist: "Quincy Larson",
      duration: "4:25",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
      id: 1,
      title: "Can't Stay Down",
      artist: "Quincy Larson",
      duration: "4:15",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
    {
      id: 2,
      title: "Still Learning",
      artist: "Quincy Larson",
      duration: "3:51",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
    {
      id: 3,
      title: "Cruising for a Musing",
      artist: "Quincy Larson",
      duration: "3:34",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
      id: 4,
      title: "Never Not Favored",
      artist: "Quincy Larson",
      duration: "3:35",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
      id: 5,
      title: "From the Ground Up",
      artist: "Quincy Larson",
      duration: "3:12",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
      id: 6,
      title: "Walking on Air",
      artist: "Quincy Larson",
      duration: "3:25",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
      id: 7,
      title: "Can't Stop Me. Can't Even Slow Me Down.",
      artist: "Quincy Larson",
      duration: "3:52",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
      id: 8,
      title: "The Surest Way Out is Through",
      artist: "Quincy Larson",
      duration: "3:10",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
      id: 9,
      title: "Chasing That Feeling",
      artist: "Quincy Larson",
      duration: "2:43",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
  ];
  
  // audio
  const audio = new Audio();
  
  // userData to manipulate
  let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
  }


/* playList function
you should deal with
class = playlist-song
class = playlist-song-info
class = playlist-song-title
class = playlist-song-artist
class = playlist-song-duration
class = playlist-song-delete
aria-current = "true" or "false"
id = player-song-title
id = player-song-artist


*/
function getPlayList(){
    const html = `
    <button class = playlist-song-delete></button>
    `
    playList.innerHTML = html;
}


//function to sort songs
function sortSongs(array){
    array.sort( (a,b) => {
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }
        return 0;
    }
    ) 
}

sortSongs(userData.songs);