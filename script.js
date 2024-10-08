/*
how to work
1. first sort song array and render it to playlist
2. display info of first song on the list in player-display div
3. play, pause, previous, next, shuffle with buttons
4. use map() sort() and ? and join()

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
    }
  ];
  
 //function to sort songs
function sortSongs(array){
    userData?.songs.sort( (a,b) => {
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }
        return 0;
    }) 
    return userData?.songs;
}

// audio
const audio = new Audio();

// userData to manipulate
let userData = {
songs: [...allSongs],
currentSong: null,
songCurrentTime: 0
}

//function to update display info or not
function displayInfo(song){
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
}

function highlight(id){
    const liList = document.querySelectorAll(".playlist-song")
    liList.forEach((li) => {
        li.removeAttribute("aria-current")
    })
    const test = document.getElementById(`song-${id}`);
    test.setAttribute("aria-current", "true")
    //console.log(liList);
    //console.log(test);

}

//function play : find() is the key
function playSong(id){        
    const song = userData?.songs.find((song) => song.id === id)    
    //update whole audio properties if currentSong is null of currentsong id is different from arg id
    if ( userData?.currentSong === null || userData?.currentSong.id !== id){
        userData.currentSong = song;
        audio.src = song.src;
        audio.title = song.title;        
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData.songCurrentTime;
    }      
    displayInfo(song);
    highlight(id);
    play.classList.add("playing");
    audio.play();
}

//function pause
function pauseSong(){
    userData.songCurrentTime = audio.currentTime;
    play.classList.remove("playing");
    audio.pause();
}

//function to play previous or next song
function backAndForth(direction){
    const index = userData?.songs.indexOf(userData.currentSong)
    const length = userData?.songs.length
    if ( direction === 'prev'){
        index === 0 ? playSong(userData?.songs[length - 1].id)
        :playSong(userData?.songs[index -1].id)
    } else if( direction === 'next') {
        index === length - 1 ? playSong(userData?.songs[0].id)
        :playSong(userData?.songs[index + 1].id)
    } else {
        if (index === length - 1) {
            userData.currentSong = null;
            userData.songCurrentTime = 0;
            songTitle.innerText = "";
            songArtist.innerText = "";
        } else {
            playSong(userData?.songs[index + 1].id)            
        }             
    }
}

//function to render
function renderPlayList(array){
    // renter song info to li and two buttons
    // you should use join("") to remove "," between tags
    const html = array.map((song) => {
        return `
        <li id="song-${song.id}" class="playlist-song">            
            <button class="playlist-song-info" onclick="playSong(${song.id})">
                <span class="playlist-song-title">${song.title}</span>
                <span class="playlist-song-artist">${song.artist}</span>
                <span class="playlist-song-duration">${song.duration}</span>
            </button>
            <button class="playlist-song-delete" onclick="delSong(${song.id})">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
                </svg>
            </button>
        </li>`;}).join("")    
    playList.innerHTML = html;
}


//function to deleteSongs : you need song id
// use filter() : return true
function delSong(id){
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderPlayList(userData?.songs);    
};

//function to shuffle
function shuffleList(array){    
    userData?.songs.sort(() => Math.random() - 0.5) 
    renderPlayList(userData?.songs);
}


//event listeners
play.addEventListener("click", () => {
    if (userData.currentSong === null ){
        playSong(userData?.songs[0].id)        
    } else {
        playSong(userData?.currentSong.id)
    }
});
pause.addEventListener("click", pauseSong);
previous.addEventListener("click", function(){backAndForth('prev')});
next.addEventListener("click", function(){backAndForth('next')});
shuffle.addEventListener("click", shuffleList);
audio.addEventListener("ended",function(){backAndForth('ended')})

//init
renderPlayList(sortSongs());

