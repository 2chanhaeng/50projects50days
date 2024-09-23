export function stopAllAndPlay(sound: string, sounds: string[]) {
  stopAll(sounds);
  play(sound);
}

function stopAll(sounds: string[]) {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound) as HTMLAudioElement;

    song.pause();
    song.currentTime = 0;
  });
}

const play = (sound: string) =>
  (document.getElementById(sound) as HTMLAudioElement)?.play();
