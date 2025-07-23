import { setupNavigation } from '../components/navigation.js';
import { MusicPlayer } from '../components/musicPlayer.js';

export async function initMusicPage() {
    setupNavigation();
    changePlaylist();
    const page = document.getElementById('music-page');
    const audioEl = document.getElementById('audio-player');
    const ui = {
        btnShuffle: document.getElementById('mixButton'),
        btnPrev: document.getElementById('backButton'),
        btnPlay: document.getElementById('playButton'),
        btnNext: document.getElementById('nextButton'),
        btnLoop: document.getElementById('loopButton'),
        range: document.getElementById('music-progress'),
        volumeIcon: document.getElementById('volume-icon'),
        volumeRange: document.getElementById('music-volume-bar'),
        title: document.getElementById('music-song-title'),
        cover: document.getElementById('music-cover'),
    };

    const player = new MusicPlayer(audioEl, {
        playlistName: 'lofi',
        playlistNum: 1,
        trackCount: 100,
        ui
    });
    const saved = JSON.parse(localStorage.getItem('musicState'));
    window.musicPlayer = player;

    if (saved && saved.playlistName) {
        player.playlistName = saved.playlistName;
        player.playlistNum = saved.playlistNum;
        player.load(saved.currentIndex ?? 0);
        player.audio.currentTime = saved.currentTime ?? 0;
        player.refreshUI();
    }
    if (audioEl.src === '') {
        player.load(0);
    }
    else {
        player.refreshUI();
        player.play();
    }
    if (audioEl.volume) {
        ui.volumeRange.value = audioEl.volume;
    }
    else {
        audioEl.volume = parseFloat(ui.volumeRange.value);
    }
    player.bindUI();
}

async function changePlaylist(name) {
    try {
        const res = await fetch('res/playlists.json');
        const playlists = await res.json();

        const playlistNum = playlists[name];
        if (!playlistNum) throw new Error('Playlist not found');

        musicPlayer.playlistName = name;
        musicPlayer.playlistNum = playlistNum;
        musicPlayer.currentIndex = 0;

        musicPlayer.load(0);
        musicPlayer.refreshUI();
        musicPlayer.play();

    } catch (err) {
        console.log('Failed to change playlist: ' + err);
    }
}
window.changePlaylist = changePlaylist;