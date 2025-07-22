export class MusicPlayer {
    constructor(audioEl, opts = {}) {
        this.audio = audioEl;
        this.playlistName = opts.playlistName;
        this.playlistNum = opts.playlistNum || 1;
        this.trackCount = opts.trackCount;
        this.currentIndex = 0;
        this.isShuffling = false;
        this.isLooping = false;
        this._lastRewindClick = 0;
        this.u = opts.ui;
        this._bindAudioEvents();
    }

    _coverUrl() {
        return `https://cdn.jsdelivr.net/gh/nerdifier/nerdifier-playlist-` +
            `${this.playlistNum}/${this.playlistName}/cover.png`;
    }

    _formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = String(Math.floor(sec % 60)).padStart(2, '0');
        return `${m}:${s}`;
    }

    _bindAudioEvents() {
        const { audio, u } = this;
        audio.addEventListener('loadedmetadata', () => {
            u.range.max = audio.duration;
        });
        audio.addEventListener('timeupdate', () => {
            u.range.value = audio.currentTime;
        });
        audio.addEventListener('ended', () => {
            if (this.isLooping) return audio.play();
            this.next();
        });
    }

    _trackUrl(idx) {
        const file = String(idx).padStart(4, '0') + '.mp3';
        return `https://cdn.jsdelivr.net/gh/nerdifier/nerdifier-playlist-${this.playlistNum}/${this.playlistName}/${file}`;
    }

    load(index = 0) {
        this.currentIndex = index;
        this.audio.src = this._trackUrl(index);
        this.audio.load();
        this.refreshUI();
    }

    _trackTitle() {
        return `Track ${String(this.currentIndex).padStart(4, '0')}`;
    }

    play() { this.audio.play(); }
    pause() { this.audio.pause(); }

    togglePlay() {
        this.audio.paused ? this.play() : this.pause();
        this.u.btnPlay.querySelector('img').src =
            this.audio.paused
                ? './res/svg/music-player/play.svg'
                : './res/svg/music-player/pause.svg';
    }

    prev() {
        const now = Date.now();
        if (now - this._lastRewindClick < 3000) {
            this.currentIndex = (this.currentIndex - 1 + this.trackCount) % this.trackCount;
        }
        this.load(this.currentIndex);
        this.play();
        this._lastRewindClick = now;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.trackCount;
        this.load(this.currentIndex);
        this.play();
    }

    shuffle() {
        if (!this.isShuffling) {
            this.isShuffling = true;
            const rand = Math.floor(Math.random() * this.trackCount);
            this.load(rand);
            this.play();
        } else {
            this.isShuffling = false;
        }
    }

    toggleLoop() {
        this.isLooping = !this.isLooping;
        this.u.btnLoop.classList.toggle('active', this.isLooping);
    }

    seek(time) {
        this.audio.currentTime = time;
    }

    setVolume(vol) {
        this.audio.volume = vol;
        this._updateVolumeIcon(vol);
    }

    _updateVolumeIcon(vol) {
        let icon = 'vol-full.svg';
        if (vol === 0) icon = 'vol-mute.svg';
        else if (vol < 0.5) icon = 'vol-low.svg';
        else if (vol < 0.8) icon = 'vol-mid.svg';
        this.u.volumeIcon.src = `./res/svg/music-player/${icon}`;
    }

    bindUI() {
        const { u } = this;
        u.btnPlay.addEventListener('click', () => this.togglePlay());
        u.btnPrev.addEventListener('click', () => this.prev());
        u.btnNext.addEventListener('click', () => this.next());
        u.btnShuffle.addEventListener('click', () => this.shuffle());
        u.btnLoop.addEventListener('click', () => this.toggleLoop());
        u.range.addEventListener('input', e => this.seek(e.target.value));
        u.volumeRange.addEventListener('input', e => this.setVolume(e.target.value));
    }

    refreshUI() {
        if (this.u.cover) {
            this.u.cover.src = this._coverUrl();
        }
        if (this.u.title) {
            this.u.title.textContent = this._trackTitle();
        }
    }
}