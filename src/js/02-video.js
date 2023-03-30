import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
