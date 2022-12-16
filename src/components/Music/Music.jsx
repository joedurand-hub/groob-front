import React, { useState, useEffect } from "react";
import YouTubeAPI from "youtube-api-v3-search";
import SpotifyAPI from "spotify-web-api-node";

const MusicPlayer = () => {
  // Inicializamos las APIs de YouTube y Spotify
  const youtubeAPI = new YouTubeAPI(process.env.YOUTUBE_API_KEY);
  const spotifyAPI = new SpotifyAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  // Inicializamos el estado para la información sobre la canción que se está reproduciendo
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songAlbum, setSongAlbum] = useState("");
  const [songArtwork, setSongArtwork] = useState("");

  useEffect(() => {
    // Cuando el componente se monte, iniciamos la escucha de los cambios
    // en la canción que se está reproduciendo en el reproductor de música
    // del dispositivo móvil
    document.addEventListener("play", handlePlay);
    document.addEventListener("pause", handlePause);
    document.addEventListener("stop", handleStop);
    document.addEventListener("nextTrack", handleNextTrack);
    document.addEventListener("prevTrack", handlePrevTrack);

    // Cuando el componente se desmonte, detenemos la escucha de los cambios
    // en la canción que se está reproduciendo en el reproductor de música
    // del dispositivo móvil
    return () => {
      document.removeEventListener("play", handlePlay);
      document.removeEventListener("pause", handlePause);
      document.removeEventListener("stop", handleStop);
      document.removeEventListener("nextTrack", handleNextTrack);
      document.removeEventListener("prevTrack", handlePrevTrack);
    };
  }, []);

  // Funciones que manejan los cambios en la reproducción de música
  const handlePlay = async () => {
    // Cuando se inicie la reproducción de una canción, obtenemos la información
    // sobre la canción que se está reproduciendo en YouTube
    const youtubeResponse = await youtubeAPI.search({
      part: "snippet",
      type: "video",
      q: `${songTitle} ${songArtist}`,
      maxResults: 1,
    });

    // Validamos si la respuesta de la API de YouTube contiene resultados
    if (youtubeResponse.items.length > 0) {
      // Obtenemos el primer resultado de la búsqueda
      const youtubeSong = youtubeResponse.items[0];

      // Actualizamos el estado con la información sobre la canción
      setSongTitle(youtubeSong.snippet.title);
      setSongArtist(youtubeSong.snippet.channelTitle);
      setSongAlbum(youtubeSong.snippet.channelTitle);
      setSongArtwork(youtubeSong.snippet.thumbnails.high.url);
    }
    // Luego, obtenemos la información sobre la canción que se está reproduciendo en Spotify
    const spotifyResponse = await spotifyAPI.searchTracks(
      `${songTitle} ${songArtist}`,
      { limit: 1 }
    );

    // Validamos si la respuesta de la API de Spotify contiene resultados
    if (spotifyResponse.body.tracks.items.length > 0) {
      // Obtenemos el primer resultado de la búsqueda
      const spotifySong = spotifyResponse.body.tracks.items[0];

      // Actualizamos el estado con la información sobre la canción
      setSongTitle(spotifySong.name);
      setSongArtist(spotifySong.artists[0].name);
      setSongAlbum(spotifySong.album.name);
      setSongArtwork(spotifySong.album.images[0].url);
    } else {
      // En caso de que no se haya encontrado ningún resultado, manejamos el error
      // de manera adecuada para evitar errores en la ejecución del código
      handleError(
        "No se han encontrado resultados en Spotify para la canción que se está reproduciendo."
      );
    }
  };
  return (
    <div>
      <img src={songArtwork} alt={songTitle} />
      <p>Título: {songTitle}</p>
      <p>Artista: {songArtist}</p>
    </div>
  );
};
