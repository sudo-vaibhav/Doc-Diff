const express = require('express')
const Song = require('../models/Song')

const router = express.Router()

router.post('/songs', async (req, res) => {
  song = await Song.create({
    name: req.body.name,
    artist: req.body.artist,
    img_url: req.body.img_url,
    song_url: req.body.song_url,
  })
  return res.send(song)
})

router.delete('/songs/:id', async (req, res, next) => {
  const song = await Song.findByIdAndRemove({ _id: req.params.id })
  return res.send(song)
})

router.get('/songs/:id', async (req, res, next) => {
  const song = await Song.findById({ _id: req.params.id })
  return res.send(song)
})

router.get('/search', async (req, res) => {
  s = req.query.q
  let songs
  if (s === '') {
    songs = await Song.find({})
  } else {
    songs = await Song.find({ name: { $regex: s, $options: 'i' } })
  }
  return res.send(songs)
})

module.exports = router
