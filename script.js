const audio = document.getElementById("audio");

const songName = document.getElementById("songName");

const playBtn = document.getElementById("playBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const albumArt =
    document.getElementById("albumArt");


/* ==================================================
   SONG LIST
================================================== */

const songs = [

    "Aankhein Khuli.mp3",
    "Aankhon Mein Base Ho Tum.mp3",
    "Aaye Ho Meri Zindagi Mein.mp3",
    "Aisi Deewangi Dekhi Nahi Kahi .mp3",
    "Bahut Jatate Ho Chah Humse.mp3",
    "Bahut Pyar Karte Hai.mp3",
    "Barsaat Ke Mausam Mein.mp3",
    "Bholi Si Surat.mp3",
    "Chalte Chalte.mp3",
    "Chand Se Parda.mp3",
    "Chhupana Bhi Nahi aata .mp3",
    "Chhupana Bhi Nahi Aata.mp3",
    "Chunnari Chunnari.mp3",
    "Chura Ke Dil Mera.mp3",
    "College Ki Ladkiyon.mp3",
    "Dil Deewana.mp3",
    "Dil Ne Ye Kaha Hai Dil Se.mp3",
    "Dil Ne Ye Kaha Hai Dil see .mp3",
    "Dulhe Ka Sehra.mp3",
    "Ek Garam Chai Ki Pyali.mp3",
    "Humko Humise Chura Lo.mp3",
    "Humko Sirf Tumse Pyar Hai.mp3",
    "Jeeta tha jiske liye.mp3",
    "Jeeye To Jeeye Kaise.mp3",
    "Kitaben Bahut Si.mp3",
    "Kitna Pyaara Tujhe Rabne Banaya.mp3",
    "Lal Dupatta.mp3",
    "Main Agar Saamne.mp3",
    "Main Yahaan Hoon.mp3",
    "Mehndi Laga Ke Rakhna.mp3",
    "Mehndi Laga Ke Rakhnaa.mp3",
    "Mujhse Mohabbat Ka Izhaar.mp3",
    "Pairon Mein Bandhan hai.mp3",
    "Pardesi Pardesi.mp3",
    "Pehli Pehli Baar Mohabbat Ki Hai.mp3",
    "Saajanji Ghar Aaye.mp3",
    "Saaton Janam Main Tere.mp3",
    "Sochenge Tumhe Pyar.mp3",
    "Sona Kitna Sona Hai.mp3",
    "Soni Soni.mp3",
    "Taaron Ka Chamakta.mp3",
    "Tu Cheez Badi Hai Mast Mast.mp3",
    "Tu Jo Hans Hans Ke Sanam.mp3",
    "Tu Pyar Hai Kisi Aur Ka.mp3",
    "Tum Dil Ki Dhadkan Main.mp3",
    "Tumsa Koi Pyaara.mp3"

];


/* ==================================================
   START TIMES
   These are in SECONDS
================================================== */

const startTimes = {

    "Aankhein Khuli.mp3": 44,

    "Aankhon Mein Base Ho Tum.mp3": 0,

    "Aaye Ho Meri Zindagi Mein.mp3": 0,

    "Aisi Deewangi Dekhi Nahi Kahi .mp3": 2,

    "Bahut Jatate Ho Chah Humse.mp3": 0,

    "Bahut Pyar Karte Hai.mp3": 0,

    "Barsaat Ke Mausam Mein.mp3": 0,

    "Bholi Si Surat.mp3": 4,

    "Chalte Chalte.mp3": 0,

    "Chand Se Parda.mp3": 6,

    "Chhupana Bhi Nahi aata .mp3": 0,

    "Chhupana Bhi Nahi Aata.mp3": 0,

    "Chunnari Chunnari.mp3": 0,

    "Chura Ke Dil Mera.mp3": 0,

    "College Ki Ladkiyon.mp3": 0,

    "Dil Deewana.mp3": 0,

    "Dil Ne Ye Kaha Hai Dil Se.mp3": 5,

    "Dil Ne Ye Kaha Hai Dil see .mp3": 5,

    "Dulhe Ka Sehra.mp3": 9,

    "Ek Garam Chai Ki Pyali.mp3": 18,

    "Humko Humise Chura Lo.mp3": 6,

    "Humko Sirf Tumse Pyar Hai.mp3": 0,

    "Jeeta tha jiske liye.mp3": 0,

    "Jeeye To Jeeye Kaise.mp3": 0,

    "Kitaben Bahut Si.mp3": 0,

    "Kitna Pyaara Tujhe Rabne Banaya.mp3": 0,

    "Lal Dupatta.mp3": 6,

    "Main Agar Saamne.mp3": 0,

    "Main Yahaan Hoon.mp3": 0,

    "Mehndi Laga Ke Rakhna.mp3": 0,

    "Mehndi Laga Ke Rakhnaa.mp3": 0,

    "Mujhse Mohabbat Ka Izhaar.mp3": 0,

    "Pairon Mein Bandhan hai.mp3": 5,

    "Pardesi Pardesi.mp3": 0,

    "Pehli Pehli Baar Mohabbat Ki Hai.mp3": 0,

    "Saajanji Ghar Aaye.mp3": 0,

    "Saaton Janam Main Tere.mp3": 10,

    "Sochenge Tumhe Pyar.mp3": 8,

    "Sona Kitna Sona Hai.mp3": 0,

    "Soni Soni.mp3": 0,

    "Taaron Ka Chamakta.mp3": 0,

    "Tu Cheez Badi Hai Mast Mast.mp3": 21,

    "Tu Jo Hans Hans Ke Sanam.mp3": 0,

    "Tu Pyar Hai Kisi Aur Ka.mp3": 0,

    "Tum Dil Ki Dhadkan Main.mp3": 7,

    "Tumsa Koi Pyaara.mp3": 0

};


/* ==================================================
   CURRENT SONG
================================================== */

let currentSong = 0;


/* ==================================================
   LOAD SONG
================================================== */

function loadSong(index) {

    currentSong = index;

    const fileName = songs[currentSong];

    audio.src = "music/" + fileName;

    const displayName =
        fileName
            .replace(".mp3", "")
            .trim();

    songName.textContent = displayName;

    albumArt.src = "image/raju mistri.jpg";

    progress.value = 0;

    currentTime.textContent = "0:00";

    duration.textContent = "0:00";

    audio.load();
}


/* ==================================================
   PLAY
================================================== */

function playSong() {

    audio.play()
        .then(() => {

            playBtn.textContent = "❚❚";

        })
        .catch((error) => {

            console.log("Playback waiting for user interaction.");

        });
}


/* ==================================================
   PAUSE
================================================== */

function pauseSong() {

    audio.pause();

    playBtn.textContent = "▶";
}


/* ==================================================
   PLAY / PAUSE BUTTON
================================================== */

playBtn.addEventListener("click", () => {

    if (audio.paused) {

        playSong();

    } else {

        pauseSong();

    }

});


/* ==================================================
   NEXT SONG
================================================== */

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    loadSong(currentSong);

    playSong();
}


nextBtn.addEventListener("click", nextSong);


/* ==================================================
   PREVIOUS SONG
================================================== */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    loadSong(currentSong);

    playSong();
}


previousBtn.addEventListener(
    "click",
    previousSong
);


/* ==================================================
   AUTOMATICALLY PLAY NEXT SONG
================================================== */

audio.addEventListener("ended", () => {

    nextSong();

});


/* ==================================================
   WHEN SONG INFORMATION LOADS
================================================== */

audio.addEventListener("loadedmetadata", () => {

    const fileName = songs[currentSong];

    const startTime = startTimes[fileName] || 0;

    const savedPosition =
        localStorage.getItem("savedPosition");


    if (savedPosition !== null) {

        // Return to exactly where the song was paused
        audio.currentTime =
            Number(savedPosition);

        currentTime.textContent =
            formatTime(Number(savedPosition));

        // We have used the saved position
        localStorage.removeItem("savedPosition");

    } else {

        // Normal song loading
        audio.currentTime = startTime;

        currentTime.textContent =
            formatTime(startTime);
    }


    duration.textContent =
        formatTime(audio.duration);

});


/* ==================================================
   UPDATE PROGRESS
================================================== */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) return;


        const percentage =
            (audio.currentTime /
                audio.duration) * 100;


        progress.value =
            percentage;


        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


/* ==================================================
   PROGRESS BAR
================================================== */

progress.addEventListener(
    "input",
    () => {

        if (!audio.duration) return;


        audio.currentTime =
            (progress.value / 100) *
            audio.duration;

    }
);


/* ==================================================
   FORMAT TIME
================================================== */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const secondsPart =
        Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");


    return `${minutes}:${secondsPart}`;
}


/* ==================================================
   CLOCK
================================================== */

function updateClock() {

    const now = new Date();

    let hours =
        now.getHours();

    const minutes =
        now.getMinutes()
            .toString()
            .padStart(2, "0");


    const ampm =
        hours >= 12
            ? "pm"
            : "am";


    hours =
        hours % 12;


    if (hours === 0) {

        hours = 12;

    }


    document.getElementById("clock")
        .textContent =
        `${hours}:${minutes} ${ampm}`;
}


updateClock();

setInterval(
    updateClock,
    1000
);


/* ==================================================
   RANDOM FIRST SONG
================================================== */

const savedSong =
    localStorage.getItem("selectedSong");


if (
    savedSong !== null &&
    !isNaN(savedSong) &&
    Number(savedSong) < songs.length
) {

    currentSong =
        Number(savedSong);

    localStorage.removeItem(
        "selectedSong"
    );

} else {

    currentSong =
        Math.floor(
            Math.random() *
            songs.length
        );

}


loadSong(currentSong);


/* ==================================================
   PLAYLIST PAGE
================================================== */
function openPlaylist() {

    // Pause the song
    audio.pause();

    // Save the current song
    localStorage.setItem(
        "selectedSong",
        currentSong
    );

    // Save the exact position
    localStorage.setItem(
        "savedPosition",
        audio.currentTime
    );

    // Open playlist
    window.location.href = "playlist.html";
}