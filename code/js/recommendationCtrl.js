/*
  But :       compteCtrl
  Auteur :    Widmer Sascha
  Date :      05.06.2023
  Version :   V1.0
*/

class RecommendationCtrl {
    constructor() {
      $("#infoArtiste").click(() => {
        indexCtrl.loadinfoArtiste();
      });
    }
  
    searchRecommendation() {
      http.getURI((seed_artists) => {

        http.getRecommendation(seed_artists, seed_genres, seed_tracks, (data) => {

        });
      });
    } 

}
  

