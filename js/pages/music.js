import { setupNavigation } from '../components/navigation.js';
import { MusicPlayer } from '../components/musicPlayer.js';

export async function initMusicPage() {
    setupNavigation();
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
    if (audioEl.src === '') {
        player.load(0);
    }
    else {
        player.refreshUI();
        player.togglePlay();
        player.togglePlay();
    }
    if (audioEl.volume) {
        ui.volumeRange.value = audioEl.volume;
    }
    else {
        audioEl.volume = parseFloat(ui.volumeRange.value);
    }
    player.bindUI();
}