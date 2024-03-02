class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentSong = null;
    this.isPlaying = false;
  }

  addSong(song) {
    this.playlist.push(song);
  }

  removeSong(song) {
    const index = this.playlist.indexOf(song);
    if (index !== -1) {
      this.playlist.splice(index, 1);
    }
  }

  play() {
    if (this.playlist.length > 0 && !this.isPlaying) {
      this.currentSong = this.playlist[0];
      this.isPlaying = true;
      console.log(`Now playing: ${this.currentSong}`);
    } else {
      console.log("No songs in the playlist or already playing.");
    }
  }

  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log(`Paused: ${this.currentSong}`);
    } else {
      console.log("No song is currently playing.");
    }
  }

  next() {
    if (this.playlist.length > 0) {
      const currentIndex = this.playlist.indexOf(this.currentSong);
      let nextIndex = currentIndex + 1;
      if (nextIndex >= this.playlist.length) {
        nextIndex = 0;
      }
      this.currentSong = this.playlist[nextIndex];
      console.log(`Now playing: ${this.currentSong}`);
    } else {
      console.log("No songs in the playlist.");
    }
  }

  previous() {
    if (this.playlist.length > 0) {
      const currentIndex = this.playlist.indexOf(this.currentSong);
      let previousIndex = currentIndex - 1;
      if (previousIndex < 0) {
        previousIndex = this.playlist.length - 1;
      }
      this.currentSong = this.playlist[previousIndex];
      console.log(`Now playing: ${this.currentSong}`);
    } else {
      console.log("No songs in the playlist.");
    }
  }
}

// Example usage:
const player = new MusicPlayer();
player.addSong("Song 1");
player.addSong("Song 2");
player.addSong("Song 3");

player.play(); // Now playing: Song 1
player.next(); // Now playing: Song 2
player.pause(); // Paused: Song 2
player.previous(); // Now playing: Song 1
