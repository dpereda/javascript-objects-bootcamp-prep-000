var playlist ={names:'song'};

function updatePlaylist(playlist,artistName, songTitle){
  //delete playlist.artistNames
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlists,artistName){
 delete playlist['artistNames']
  return playlist
}