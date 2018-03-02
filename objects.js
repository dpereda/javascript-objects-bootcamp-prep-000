var playlist ={
  artistNames:'',
  songTitles:''
};

function updatePlaylist(playlists,artistName, songTitle){
  playlist.artistNames=artistName
  playlist['songTitles']=songTitle
  return playlist.artistNames
}
