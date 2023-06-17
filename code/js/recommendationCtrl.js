/*
  But :       compteCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class RecommendationCtrl {
  constructor() {
    $("#searchSong").click(() => {
      this.searchRecommendation();
    });
  }

  searchRecommendation() {
    let seed_genres = document.getElementById("genreRecherche").value;
    let trackName = document.getElementById("sonRecherche").value;

    http.getURI((data) => {
      let seed_artists = data.artists.items[0].id;
      http.getTrackID(trackName, (track) => {
        let seed_tracks = track.tracks.items[0].id;
        console.log(seed_tracks);
        console.log(seed_artists);
        console.log(seed_genres);
        http.getRecommendation(
          seed_artists,
          seed_genres,
          seed_tracks,
          (data) => {
            let track1 = data.tracks[0].name;
            let track1Artist = data.tracks[0].artists[0].name;
            document.getElementById("track1").innerText = " - " + track1 + " by " + track1Artist;

            let track2 = data.tracks[1].name;
            let track2Artist = data.tracks[1].artists[0].name;
            document.getElementById("track2").innerText = " - " + track2 + " by " + track2Artist;

            let track3 = data.tracks[2].name;
            let track3Artist = data.tracks[2].artists[0].name;
            document.getElementById("track3").innerText = " - " + track3 + " by " + track3Artist;

            let track4 = data.tracks[3].name;
            let track4Artist = data.tracks[3].artists[0].name;
            document.getElementById("track4").innerText = " - " + track4 + " by " + track4Artist;

            let track5 = data.tracks[4].name;
            let track5Artist = data.tracks[4].artists[0].name;
            document.getElementById("track5").innerText = " - " + track5 + " by " + track5Artist;
          }
        );
      });
    });
  }
}
