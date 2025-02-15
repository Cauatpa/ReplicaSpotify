import { artistArray } from "../../Front-End/src/assets/database/artists.js";
import { songsArray } from "../../Front-End/src/assets/database/songs.js";
import { db } from "./connect.js";

// Tratar os OBJ para exprt no DB

const newArtistsArray = artistArray.map((currentArtistsObj) => {
  const newArtistsObj = { ...currentArtistsObj };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongsObj = { ...currentSongObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseArtists);
console.log(responseSongs);
