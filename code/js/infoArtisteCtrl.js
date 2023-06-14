/*
  But :       compteCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/
$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  //accueilCtrl = new AccueilCtrl();
});

class InfoArtisteCtrl {
  constructor() {
    $("#searchArtist").click(() => {
      this.chargerImgArtiste();
      this.chargerNomArtiste();
      this.chargerFollower();
      this.chargerGenre();
      this.chargerTracks();
    });
    $("#recommendation").click(() => {
      indexCtrl.loadRecommendation();
    });
  }

  chargerImgArtiste() {
    http.getURI((data) => {
      let artistURI = data.artists.items[0].id;
      http.getImgArtiste(artistURI, (data2) => {
        let imgArtistes = document.getElementById("imgArtiste");
        let srcImg = data2.images[2].url;
        imgArtistes.src = srcImg;
      });
    });
  }

  chargerNomArtiste() {
    http.getURI((data) => {
      let artistURI = data.artists.items[0].id;
      http.getNomArtiste(artistURI, (data2) => {
        document.getElementById("nomArtiste").innerText = data2.name;
      });
    });
  }

  chargerFollower() {
    http.getURI((data) => {
      let artistURI = data.artists.items[0].id;
      http.getFollowerArtiste(artistURI, (data2) => {
        document.getElementById("follower").innerText = data2.followers.total;
      });
    });
  }

  chargerTracks() {
    http.getURI((data) => {
      let artistURI = data.artists.items[0].id;
      http.getTracksArtiste(artistURI, (data2) => {
        let nbrSons = 0;

        if (data2.items.length > 0) {
          for (let i = 0; i < data2.items.length; i++) {
            nbrSons += data2.items[i].total_tracks;
          }
          document.getElementById("nbrSongs").innerText = nbrSons;
        }
      });
    });
  }

  chargerGenre() {
    document.getElementById("genre").innerHTML = "";
    http.getURI((data) => {
      let artistURI = data.artists.items[0].id;
      http.getGenresArtiste(artistURI, (data2) => {
        if (data2.genres.length > 0) {
          for (let i = 0; i < data2.genres.length; i++) {
            console.log(data2.genres[i]);
            document.getElementById("genre").innerHTML +=
              data2.genres[i] + "<br>";
          }
        } else {
          document.getElementById("genre").innerText = "-";
        }
      });
    });
  }
}
