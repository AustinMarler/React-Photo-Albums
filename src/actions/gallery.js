import axios from 'axios'

export function getAlbums() {
  return new Promise(function(resolve, reject) {
    axios.get('http://localhost:3001/albums?_embed=pictures').then(resp => {
      var data = resp.data
      resolve(data)
    })
  })
}

export function getPictures(id) {
  return new Promise(function(resolve, reject) {
    axios.get(`http://localhost:3001/pictures/${id}`).then(resp => {
      var data = resp.data
      resolve(data)
    })
  })
}

export function getAlbumPictures(id) {
  return new Promise(function(resolve, reject) {
    axios.get(`http://localhost:3001/albums/1?_embed=pictures`).then(resp => {
      var data = resp.data.pictures
      resolve(data)
    })
  })
}