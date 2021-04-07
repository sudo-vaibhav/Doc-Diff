import hoc from './txts/HOC.txt';
import home from './txts/Home.txt';
import musicplayerjsx from './txts/Musicplayerjsx.txt';
import musicplayerscss from './txts/musicplayerscss.txt';
import search from './txts/Search.txt';
import app from './txts/App.txt';
import appscss from './txts/AppScss.txt';
import colors from './txts/colors.txt';
import api from './txts/api.txt';
import indexbe from './txts/indexBE.txt';
import song from './txts/song.txt';
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
fetch(app)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(appscss)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(colors)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(song)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(api)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });
fetch(indexbe)
  .then(r => r.text())
  .then(text => {
    arr.push(text)
  });

export default arr;