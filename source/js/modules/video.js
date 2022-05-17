import {isEnterKey} from '../modules/utils.js';

function loadVideo() {
  (function loadYoutubeIFrameApiScript() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = setupPlayer;
  })();

  let player = null;

  function setupPlayer() {
    window.YT.ready(function () {
      player = new window.YT.Player('player', {
        videoId: '9TZXsZItgdw',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    });
  }

  function onPlayerReady() {
    player.mute();
  }

  function onPlayerStateChange() {}

  const playerButtonContainer = document.querySelector('.gym__video-button-container'
  );
  const playerButtonPlay = document.querySelector('.gym__video-button');
  playerButtonPlay.addEventListener('click', () => {
    playerButtonContainer.classList.add('gym__video-button-container--hidden');
    player.playVideo();
  });

  playerButtonPlay.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      playerButtonContainer.classList.add('gym__video-button-container--hidden'
      );
      player.playVideo();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadVideo();
});
