/*
  But :       compteCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class InfoPersoCtrl {
  constructor() {
    $("#infoArtiste").click(() => {
      indexCtrl.loadinfoArtiste();
    });
    $("#chargerInfo").click(() => {
      this.chargerTop5Tracks();
    });
  }

  chargerTop5Tracks() {
    $.ajax({
      url: "https://api.spotify.com/v1/me/top/tracks",
      type: "GET",
      headers: {
        Authorization: "Bearer " + "BQCTb-1_iHyOT4lrDvMgA6DTId9C1wX5blwT0qB_LMTBvcD3xQgEhL-IqD-PtIR8dfFIk8R2iupWjzu8jCT-s-Wc1vZ4wpnh6a0OZjFd-Qnxd5TQSWA",
      },
   /*   data: {
        time_range: "short_term", // Les 30 derniers jours
        limit: 5, // Limite de 5 chansons
      },*/
      success: function (response) {
        // Traitement des données de réponse
        console.log(response);
        var topSongs = response.items;
        console.log(topSongs);
        // Affichage des 5 premières chansons
        for (var i = 0; i < topSongs.length; i++) {
          var song = topSongs[i];
          console.log(i + 1 + ". " + song.name + " - " + song.artists[0].name);
        }
      },
      error: function (error) {
        // Gérer la réponse d'erreur ici
        console.log(error);
      },
    });
  }
}
