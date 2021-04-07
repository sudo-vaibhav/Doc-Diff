import hoc from './txts/HOC.txt';
import home from './txts/Home.txt';
import musicplayerjsx from './txts/Musciplayerjsx.txt';
import musicplayerscss from './txts/musicplayerscss.txt';
import search from './txts/Search.txt';
import app from './txts/App.txt';
import App from './App';
let arr = ["Choose a File"]
fetch(hoc)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(home)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(musicplayerjsx)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(musicplayerscss)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(search)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(App)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
export default arr;